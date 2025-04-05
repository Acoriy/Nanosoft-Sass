
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  enableIndexedDbPersistence, 
  connectFirestoreEmulator,
  collection,
  getDocs,
  query,
  limit,
  getDoc,
  doc,
  setDoc,
  writeBatch,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { toast } from 'sonner';

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAp0nMhC4_AfBlzNLSQp1MhvKlvXmNaMT0",
  authDomain: "nano-soft-8d9cf.firebaseapp.com",
  projectId: "nano-soft-8d9cf",
  storageBucket: "nano-soft-8d9cf.appspot.com",
  messagingSenderId: "814809095667",
  appId: "1:814809095667:web:a44b0bb0b0d3d6c27c0686",
  measurementId: "G-D33F1YHDQE"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialiser Analytics en production seulement (évite les erreurs en développement)
let analytics = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error('Analytics initialization error:', error);
  }
}
export { analytics };

// Statut de la connexion
let isConnected = false;
let connectionPromise = null;

// Maximum number of connection retries
const MAX_RETRIES = 3;

// Vérifier la connexion à Firestore et création automatique des collections si elles n'existent pas
export const checkFirestoreConnection = async (retryCount = 0) => {
  if (isConnected) return true;
  
  if (connectionPromise) {
    return connectionPromise;
  }

  connectionPromise = new Promise(async (resolve) => {
    try {
      console.log(`Trying to connect to Firestore (attempt ${retryCount + 1}/${MAX_RETRIES + 1})...`);
      
      // Vérifier si les collections existent
      const blogsRef = collection(db, 'blogs');
      const blogsQuery = query(blogsRef, limit(1));
      const blogsSnapshot = await getDocs(blogsQuery);
      
      const pricesRef = collection(db, 'prices');
      const pricesQuery = query(pricesRef, limit(1));
      const pricesSnapshot = await getDocs(pricesQuery);
      
      console.log('Firestore connexion réussie ✅');
      
      // Si aucune donnée n'existe, on initialise les données par défaut
      if (blogsSnapshot.empty || pricesSnapshot.empty) {
        console.log('Collections vides, initialisation des données par défaut...');
        
        // Nous importons dynamiquement les services pour éviter les dépendances circulaires
        const { initializeDefaultBlogs } = await import('@/services/blogService');
        const { initializeDefaultPrices } = await import('@/services/priceService');
        
        try {
          await Promise.all([
            initializeDefaultBlogs(),
            initializeDefaultPrices()
          ]);
          console.log('Données par défaut initialisées avec succès ✅');
        } catch (error) {
          console.error('Erreur lors de l\'initialisation des données par défaut:', error);
          toast.error('Erreur lors de l\'initialisation des données par défaut');
        }
      }
      
      isConnected = true;
      resolve(true);
    } catch (error) {
      console.error('Firestore connexion erreur:', error);
      
      // Retry logic with exponential backoff
      if (retryCount < MAX_RETRIES) {
        const backoffTime = Math.pow(2, retryCount) * 1000; // Exponential backoff
        console.log(`Retrying in ${backoffTime/1000} seconds...`);
        
        setTimeout(async () => {
          connectionPromise = null; // Reset the promise for the next attempt
          const result = await checkFirestoreConnection(retryCount + 1);
          resolve(result);
        }, backoffTime);
      } else {
        toast.error('Erreur de connexion à la base de données après plusieurs tentatives');
        console.error('Maximum retries reached. Could not connect to Firestore.');
        resolve(false);
      }
    } finally {
      if (isConnected || retryCount >= MAX_RETRIES) {
        connectionPromise = null;
      }
    }
  });
  
  return connectionPromise;
};

// Activer la persistance hors ligne pour Firestore
const enablePersistence = async () => {
  try {
    await enableIndexedDbPersistence(db);
    console.log('Persistance hors ligne activée ✅');
  } catch (err: any) {
    if (err.code === 'failed-precondition') {
      console.warn('La persistance Firestore a échoué: Plusieurs onglets ouverts');
    } else if (err.code === 'unimplemented') {
      console.warn('La persistance Firestore n\'est pas prise en charge par ce navigateur');
    } else {
      console.error('Erreur de persistance Firestore:', err);
    }
  }
};

// Initialiser la persistance de façon asynchrone
enablePersistence().catch(error => {
  console.error('Erreur lors de l\'activation de la persistance:', error);
});

// Connecter aux émulateurs en mode développement
if (import.meta.env.DEV) {
  try {
    // Activer ces lignes si vous utilisez les émulateurs Firebase
    // connectFirestoreEmulator(db, 'localhost', 8080);
    // connectStorageEmulator(storage, 'localhost', 9199);
    console.log('Mode développement: les émulateurs Firebase peuvent être configurés si nécessaire.');
  } catch (error) {
    console.error('Erreur de connexion aux émulateurs Firebase:', error);
  }
}

// Exporter la fonction de vérification et d'initialisation
export const initializeFirebase = async (silent = false) => {
  try {
    console.log('Initialisation de Firebase...');
    const isConnected = await checkFirestoreConnection();
    console.log(`Statut de l'initialisation Firebase: ${isConnected ? 'Succès ✅' : 'Échec ❌'}`);
    return isConnected;
  } catch (error) {
    console.error('Erreur d\'initialisation Firebase:', error);
    if (!silent) {
      toast.error('Erreur d\'initialisation Firebase');
    }
    return false;
  }
};

// Fonction d'abonnement pour une synchronisation en temps réel
export const subscribeToCollection = (collectionName, callback) => {
  console.log(`Abonnement à la collection: ${collectionName}`);
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);
  
  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log(`Données reçues pour ${collectionName}:`, data.length, 'documents');
    callback(data);
  }, (error) => {
    console.error(`Erreur lors de l'écoute de ${collectionName}:`, error);
    toast.error(`Erreur de synchronisation des données`);
  });
};
