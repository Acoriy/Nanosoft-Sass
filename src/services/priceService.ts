import { db, subscribeToCollection } from '@/lib/firebase';
import { 
  collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where,
  serverTimestamp,
  orderBy,
  limit,
  writeBatch,
  setDoc
} from 'firebase/firestore';
import { toast } from 'sonner';
import { pricingPlans, serviceCategories } from '@/data/pricingData';

const COLLECTION_NAME = 'prices';

export interface Price {
  id?: string;
  title: string;
  price: string;
  currency: string;
  period: string;
  features: string;
  isPopular: boolean;
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createdAt?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updatedAt?: any;
}

// Données des prix par défaut basées sur pricingData.ts
const defaultPricesData = pricingPlans.map(plan => ({
  title: plan.name,
  price: plan.price.toString(),
  currency: "LYD", // Dinar libyen par défaut
  period: "monthly", // Mensuel par défaut
  features: plan.features.join(','),
  isPopular: plan.popular,
  category: plan.serviceId
}));

// Maximum number of retries
const MAX_RETRIES = 3;

// Helper function to retry operations with exponential backoff
const retryOperation = async (operation, retries = MAX_RETRIES, delay = 1000) => {
  try {
    return await operation();
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying operation in ${delay}ms... (${retries} attempts left)`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryOperation(operation, retries - 1, delay * 2);
    } else {
      throw error;
    }
  }
};

// Fonction pour initialiser les prix par défaut si aucun n'existe
export const initializeDefaultPrices = async (): Promise<void> => {
  try {
    console.log("Vérification des prix par défaut...");
    
    // Vérifier si des prix existent déjà
    const pricesRef = collection(db, COLLECTION_NAME);
    const q = query(pricesRef, limit(1));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log("Aucun prix trouvé, initialisation des prix par défaut...");
      
      // Utiliser un batch pour une meilleure performance et fiabilité
      const batch = writeBatch(db);
      
      // Créer des prix par défaut avec des IDs spécifiques pour faciliter les tests
      for (let i = 0; i < defaultPricesData.length; i++) {
        const priceData = defaultPricesData[i];
        const priceId = `default-price-${i+1}`;
        const priceRef = doc(db, COLLECTION_NAME, priceId);
        
        batch.set(priceRef, {
          ...priceData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }
      
      // Exécuter le batch
      await batch.commit();
      console.log("Prix par défaut ajoutés avec succès ✅");
      toast.success("Prix par défaut créés avec succès");
    } else {
      console.log("Des prix existent déjà, ignorer l'initialisation ✅");
    }
  } catch (error) {
    console.error("Erreur lors de l'initialisation des prix par défaut:", error);
    toast.error("Erreur lors de la création des prix par défaut");
    throw error; // Rethrow to allow retry logic to work
  }
};

// Obtenir tous les prix
export const getPrices = async (): Promise<Price[]> => {
  return retryOperation(async () => {
    try {
      console.log("Récupération de tous les prix...");
      const pricesRef = collection(db, COLLECTION_NAME);
      const q = query(pricesRef, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        console.log("Aucun prix trouvé, initialisation...");
        await initializeDefaultPrices();
        
        // Récupérer à nouveau après l'initialisation
        const newSnapshot = await getDocs(q);
        const prices = newSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() as Price
        }));
        
        console.log(`${prices.length} prix récupérés après initialisation ✅`);
        return prices;
      }
      
      const prices = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Price
      }));
      
      console.log(`${prices.length} prix récupérés ✅`);
      return prices;
    } catch (error) {
      console.error("Erreur lors de la récupération des prix:", error);
      toast.error("Erreur lors de la récupération des prix");
      throw error; // Rethrow to allow retry logic to work
    }
  });
};

// Obtenir les prix par catégorie
export const getPricesByCategory = async (category: string): Promise<Price[]> => {
  return retryOperation(async () => {
    try {
      console.log(`Récupération des prix pour la catégorie: ${category}...`);
      
      // Vérifier d'abord si des prix existent
      const pricesRef = collection(db, COLLECTION_NAME);
      const allPricesQuery = query(pricesRef, limit(1));
      const allPricesSnapshot = await getDocs(allPricesQuery);
      
      if (allPricesSnapshot.empty) {
        console.log("Aucun prix trouvé, initialisation des prix par défaut...");
        await initializeDefaultPrices();
      }
      
      // Requête pour obtenir les prix de la catégorie spécifique
      const categoryQuery = query(pricesRef, where('category', '==', category), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(categoryQuery);
      
      const prices = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Price
      }));
      
      console.log(`${prices.length} prix récupérés pour la catégorie ${category} ✅`);
      
      // Si aucun prix n'est trouvé pour cette catégorie, initialiser les prix par défaut spécifiques
      if (prices.length === 0) {
        console.log(`Aucun prix trouvé pour la catégorie ${category}, initialisation spécifique...`);
        const categoryPlans = defaultPricesData.filter(price => price.category === category);
        
        if (categoryPlans.length > 0) {
          const batch = writeBatch(db);
          
          for (let i = 0; i < categoryPlans.length; i++) {
            const priceData = categoryPlans[i];
            const priceId = `default-${category}-price-${i+1}`;
            const priceRef = doc(db, COLLECTION_NAME, priceId);
            
            batch.set(priceRef, {
              ...priceData,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            });
          }
          
          await batch.commit();
          console.log(`Prix par défaut pour la catégorie ${category} ajoutés avec succès ✅`);
          
          // Récupérer à nouveau après l'initialisation
          const newSnapshot = await getDocs(categoryQuery);
          return newSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data() as Price
          }));
        }
      }
      
      return prices;
    } catch (error) {
      console.error("Erreur lors de la récupération des prix par catégorie:", error);
      // toast.error("Erreur lors de la récupération des prix par catégorie");
      // throw error; // Rethrow to allow retry logic to work
      throw "";
    }
  });
};

// Obtenir un prix spécifique
export const getPrice = async (id: string): Promise<Price | null> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const snapshot = await getDoc(docRef);
    
    if (!snapshot.exists()) {
      return null;
    }
    
    return {
      id: snapshot.id,
      ...snapshot.data() as Price
    };
  } catch (error) {
    console.error("Erreur lors de la récupération du prix:", error);
    toast.error("Erreur lors de la récupération du prix");
    return null;
  }
};

// Ajouter un nouveau prix
export const addPrice = async (price: Price): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...price,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    toast.success("Prix ajouté avec succès");
    return docRef.id;
  } catch (error) {
    console.error("Erreur lors de l'ajout du prix:", error);
    toast.error("Erreur lors de l'ajout du prix");
    throw error;
  }
};

// Mettre à jour un prix
export const updatePrice = async (id: string, price: Partial<Price>): Promise<void> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    
    await updateDoc(docRef, {
      ...price,
      updatedAt: serverTimestamp()
    });
    
    toast.success("Prix mis à jour avec succès");
  } catch (error) {
    console.error("Erreur lors de la mise à jour du prix:", error);
    toast.error("Erreur lors de la mise à jour du prix");
    throw error;
  }
};

// Supprimer un prix
export const deletePrice = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    
    toast.success("Prix supprimé avec succès");
  } catch (error) {
    console.error("Erreur lors de la suppression du prix:", error);
    toast.error("Erreur lors de la suppression du prix");
    throw error;
  }
};

// Mettre à jour l'état "populaire" d'un prix
export const togglePopular = async (id: string, isPopular: boolean): Promise<void> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    
    await updateDoc(docRef, {
      isPopular,
      updatedAt: serverTimestamp()
    });
    
    toast.success(isPopular ? "Plan marqué comme populaire" : "Plan marqué comme standard");
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'état populaire:", error);
    toast.error("Erreur lors de la mise à jour de l'état du plan");
    throw error;
  }
};

// Fonction pour s'abonner aux mises à jour des prix en temps réel
export const subscribeToPricesUpdates = (callback) => {
  console.log("Abonnement aux mises à jour des prix en temps réel...");
  return subscribeToCollection('prices', callback);
};

// Exporter les catégories de services pour l'affichage dans le dashboard
export const getServiceCategories = () => {
  return serviceCategories;
};
