/* eslint-disable @typescript-eslint/no-explicit-any */
// import { db, subscribeToCollection } from '@/lib/firebase';
// import { 
//   collection, 
//   getDocs, 
//   getDoc, 
//   addDoc, 
//   updateDoc, 
//   deleteDoc, 
//   doc, 
//   query, 
//   where,
//   serverTimestamp,
//   orderBy,
//   writeBatch,
//   setDoc
// } from 'firebase/firestore';
// import { toast } from 'sonner';
// import { pricingPlans, serviceCategories } from '@/data/pricingData';

// const COLLECTION_NAME = 'prices';

// export interface Price {
//   id?: string;
//   title: string;
//   price: string;
//   currency: string;
//   period: string;
//   features: string;
//   isPopular: boolean;
//   category: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   createdAt?: any;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   updatedAt?: any;
// }

// const defaultPricesData = pricingPlans.map(plan => ({
//   title: plan.name,
//   price: plan.price.toString(),
//   currency: "LYD",
//   period: "monthly",
//   features: plan.features.join(','),
//   isPopular: plan.popular,
//   category: plan.serviceId
// }));

// const MAX_RETRIES = 3;

// const retryOperation = async (operation, retries = MAX_RETRIES, delay = 1000) => {
//   try {
//     return await operation();
//   } catch (error) {
//     if (retries > 0) {
//       console.log(`Retrying operation in ${delay}ms... (${retries} attempts left)`);
//       await new Promise(resolve => setTimeout(resolve, delay));
//       return retryOperation(operation, retries - 1, delay * 2);
//     } else {
//       throw error;
//     }
//   }
// };

// // Initialiser les prix par défaut si aucun document n'existe
// export const initializeDefaultPrices = async (): Promise<void> => {
//   try {
//     console.log("Vérification des prix par défaut...");
//     const pricesRef = collection(db, COLLECTION_NAME);
//     // Vérifier l'existence d'au moins un document (sans limite ici)
//     const q = query(pricesRef);
//     const snapshot = await getDocs(q);
    
//     if (snapshot.empty) {
//       console.log("Aucun prix trouvé, initialisation des prix par défaut...");
//       const batch = writeBatch(db);
      
//       for (let i = 0; i < defaultPricesData.length; i++) {
//         const priceData = defaultPricesData[i];
//         const priceId = `default-price-${i + 1}`;
//         const priceRef = doc(db, COLLECTION_NAME, priceId);
        
//         batch.set(priceRef, {
//           ...priceData,
//           createdAt: serverTimestamp(),
//           updatedAt: serverTimestamp()
//         });
//       }
      
//       await batch.commit();
//       console.log("Prix par défaut ajoutés avec succès ✅");
//       toast.success("Prix par défaut créés avec succès");
//     } else {
//       console.log("Des prix existent déjà, ignorer l'initialisation ✅");
//     }
//   } catch (error) {
//     console.error("Erreur lors de l'initialisation des prix par défaut:", error);
//     toast.error("Erreur lors de la création des prix par défaut");
//     throw error;
//   }
// };

// // Obtenir tous les prix (sans limite) de manière optimisée
// export const getPrices = async (): Promise<Price[]> => {
//   return retryOperation(async () => {
//     try {
//       console.log("Récupération de tous les prix...");
//       const pricesRef = collection(db, COLLECTION_NAME);
//       // Supprimer le limit() pour récupérer tous les documents
//       const q = query(pricesRef, orderBy('createdAt', 'desc'));
//       let snapshot = await getDocs(q);
      
//       if (snapshot.empty) {
//         console.log("Aucun prix trouvé, initialisation...");
//         await initializeDefaultPrices();
//         snapshot = await getDocs(q);
//       }
      
//       const prices = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data() as Price
//       }));
      
//       console.log(`${prices.length} prix récupérés ✅`);
//       return prices;
//     } catch (error) {
//       console.error("Erreur lors de la récupération des prix:", error);
//       toast.error("Erreur lors de la récupération des prix");
//       throw error;
//     }
//   });
// };

// // Obtenir les prix par catégorie (sans limite) de manière optimisée
// export const getPricesByCategory = async (category: string): Promise<Price[]> => {
//   return retryOperation(async () => {
//     try {
//       console.log(`Récupération des prix pour la catégorie: ${category}...`);
//       const pricesRef = collection(db, COLLECTION_NAME);
      
//       // Vérifier si des prix existent déjà
//       const allPricesQuery = query(pricesRef);
//       const allPricesSnapshot = await getDocs(allPricesQuery);
      
//       if (allPricesSnapshot.empty) {
//         console.log("Aucun prix trouvé, initialisation des prix par défaut...");
//         await initializeDefaultPrices();
//       }
      
//       // Requête pour obtenir tous les documents de la catégorie spécifiée
//       const categoryQuery = query(
//         pricesRef,
//         where('category', '==', category),
//         orderBy('createdAt', 'desc')
//       );
//       let snapshot = await getDocs(categoryQuery);
      
//       let prices = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data() as Price
//       }));
      
//       console.log(`${prices.length} prix récupérés pour la catégorie ${category} ✅`);
      
//       // Si aucun document n'est trouvé pour la catégorie, initialiser pour celle-ci
//       if (prices.length === 0) {
//         console.log(`Aucun prix trouvé pour la catégorie ${category}, initialisation spécifique...`);
//         const categoryPlans = defaultPricesData.filter(price => price.category === category);
        
//         if (categoryPlans.length > 0) {
//           const batch = writeBatch(db);
          
//           for (let i = 0; i < categoryPlans.length; i++) {
//             const priceData = categoryPlans[i];
//             const priceId = `default-${category}-price-${i + 1}`;
//             const priceRef = doc(db, COLLECTION_NAME, priceId);
            
//             batch.set(priceRef, {
//               ...priceData,
//               createdAt: serverTimestamp(),
//               updatedAt: serverTimestamp()
//             });
//           }
          
//           await batch.commit();
//           console.log(`Prix par défaut pour la catégorie ${category} ajoutés avec succès ✅`);
//           snapshot = await getDocs(categoryQuery);
//           prices = snapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data() as Price
//           }));
//         }
//       }
      
//       return prices;
//     } catch (error) {
//       console.error("Erreur lors de la récupération des prix par catégorie:", error);
//       throw error;
//     }
//   });
// };

// // Obtenir un prix spécifique
// export const getPrice = async (id: string): Promise<Price | null> => {
//   try {
//     const docRef = doc(db, COLLECTION_NAME, id);
//     const snapshot = await getDoc(docRef);
    
//     if (!snapshot.exists()) {
//       return null;
//     }
    
//     return {
//       id: snapshot.id,
//       ...snapshot.data() as Price
//     };
//   } catch (error) {
//     console.error("Erreur lors de la récupération du prix:", error);
//     toast.error("Erreur lors de la récupération du prix");
//     return null;
//   }
// };

// // Ajouter un nouveau prix
// export const addPrice = async (price: Price): Promise<string> => {
//   try {
//     const docRef = await addDoc(collection(db, COLLECTION_NAME), {
//       ...price,
//       createdAt: serverTimestamp(),
//       updatedAt: serverTimestamp()
//     });
    
//     toast.success("Prix ajouté avec succès");
//     return docRef.id;
//   } catch (error) {
//     console.error("Erreur lors de l'ajout du prix:", error);
//     toast.error("Erreur lors de l'ajout du prix");
//     throw error;
//   }
// };

// // Mettre à jour un prix
// export const updatePrice = async (id: string, price: Partial<Price>): Promise<void> => {
//   try {
//     const docRef = doc(db, COLLECTION_NAME, id);
//     await updateDoc(docRef, {
//       ...price,
//       updatedAt: serverTimestamp()
//     });
    
//     toast.success("Prix mis à jour avec succès");
//   } catch (error) {
//     console.error("Erreur lors de la mise à jour du prix:", error);
//     toast.error("Erreur lors de la mise à jour du prix");
//     throw error;
//   }
// };

// // Supprimer un prix
// export const deletePrice = async (id: string): Promise<void> => {
//   try {
//     const docRef = doc(db, COLLECTION_NAME, id);
//     await deleteDoc(docRef);
//     toast.success("Prix supprimé avec succès");
//   } catch (error) {
//     console.error("Erreur lors de la suppression du prix:", error);
//     toast.error("Erreur lors de la suppression du prix");
//     throw error;
//   }
// };

// // Mettre à jour l'état "populaire" d'un prix
// export const togglePopular = async (id: string, isPopular: boolean): Promise<void> => {
//   try {
//     const docRef = doc(db, COLLECTION_NAME, id);
//     await updateDoc(docRef, {
//       isPopular,
//       updatedAt: serverTimestamp()
//     });
    
//     toast.success(isPopular ? "Plan marqué comme populaire" : "Plan marqué comme standard");
//   } catch (error) {
//     console.error("Erreur lors de la mise à jour de l'état populaire:", error);
//     toast.error("Erreur lors de la mise à jour de l'état du plan");
//     throw error;
//   }
// };

// // S'abonner aux mises à jour des prix en temps réel
// export const subscribeToPricesUpdates = (callback) => {
//   console.log("Abonnement aux mises à jour des prix en temps réel...");
//   return subscribeToCollection('prices', callback);
// };

// // Exporter les catégories de services pour l'affichage dans le dashboard
// export const getServiceCategories = () => {
//   return serviceCategories;
// };


import { db } from '@/lib/firebase';
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
  orderBy,
  writeBatch,
  serverTimestamp,
  onSnapshot
} from 'firebase/firestore';
import { toast } from 'sonner';
import { pricingPlans, serviceCategories } from '@/data/pricingData';

// Définition de l'interface Price
export interface Price {
  id?: string;
  title: string;
  price: string;
  currency: string;
  period: string;
  features: string;
  isPopular: boolean;
  category: string;
  createdAt?: any;
  updatedAt?: any;
}

// Données par défaut issues de pricingData
const defaultPricesData: Omit<Price, 'id' | 'createdAt' | 'updatedAt'>[] =
  pricingPlans.map(plan => ({
    title: plan.name,
    price: plan.price.toString(),
    currency: 'LYD',
    period: 'monthly',
    features: plan.features.join(','),
    isPopular: plan.popular,
    category: plan.serviceId
  }));

const MAX_RETRIES = 3;

// Fonction de retry générique
const retryOperation = async <T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES,
  delay = 1000
): Promise<T> => {
  try {
    return await operation();
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying operation in ${delay}ms... (${retries} attempts left)`);
      await new Promise(res => setTimeout(res, delay));
      return retryOperation(operation, retries - 1, delay * 2);
    }
    throw error;
  }
};

// Initialiser les prix par défaut
export const initializeDefaultPrices = async (): Promise<void> => {
  try {
    const pricesRef = collection(db, 'prices');
    const snapshot = await getDocs(pricesRef);

    if (snapshot.empty) {
      const batch = writeBatch(db);
      defaultPricesData.forEach((priceData, idx) => {
        const id = `default-price-${idx + 1}`;
        const ref = doc(db, 'prices', id);
        batch.set(ref, {
          ...priceData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      });
      await batch.commit();
      toast.success('Prix par défaut créés ✅');
    }
  } catch (error) {
    console.error('Erreur initialisation par défaut:', error);
    toast.error('Erreur lors de la création des prix par défaut');
    throw error;
  }
};

// Récupérer tous les prix
export const getPrices = async (): Promise<Price[]> =>
  retryOperation(async () => {
    const pricesRef = collection(db, 'prices');
    const q = query(pricesRef, orderBy('createdAt', 'desc'));
    let snapshot = await getDocs(q);

    if (snapshot.empty) {
      await initializeDefaultPrices();
      snapshot = await getDocs(q);
    }

    return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Price) }));
  });

// Récupérer les prix par catégorie
export const getPricesByCategory = async (category: string): Promise<Price[]> =>
  retryOperation(async () => {
    const pricesRef = collection(db, 'prices');
    const allSnapshot = await getDocs(pricesRef);
    if (allSnapshot.empty) await initializeDefaultPrices();

    const q = query(
      pricesRef,
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    );
    let snapshot = await getDocs(q);

    if (snapshot.empty) {
      // Initialisation spécifique si nécessaire
      const categoryDefaults = defaultPricesData.filter(p => p.category === category);
      if (categoryDefaults.length) {
        const batch = writeBatch(db);
        categoryDefaults.forEach((data, idx) => {
          const id = `default-${category}-price-${idx + 1}`;
          const ref = doc(db, 'prices', id);
          batch.set(ref, {
            ...data,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
        });
        await batch.commit();
        snapshot = await getDocs(q);
      }
    }

    return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Price) }));
  });

// Abonnement temps réel à tous les prix
export const subscribeToPricesUpdates = (
  callback: (prices: Price[]) => void
): (() => void) => {
  return onSnapshot(
    query(collection(db, 'prices'), orderBy('createdAt', 'desc')),
    snap => callback(snap.docs.map(doc => ({ id: doc.id, ...(doc.data() as Price) }))),
    error => {
      console.error('Erreur snapshot prices:', error);
      toast.error('Erreur de synchronisation des prix');
    }
  );
};

// Abonnement temps réel par catégorie
export const subscribeToPricesByCategory = (
  category: string,
  callback: (prices: Price[]) => void
): (() => void) => {
  return onSnapshot(
    query(
      collection(db, 'prices'),
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    ),
    snap => callback(snap.docs.map(doc => ({ id: doc.id, ...(doc.data() as Price) }))),
    error => {
      console.error(`Erreur snapshot category ${category}:`, error);
      toast.error('Erreur de synchronisation des prix');
    }
  );
};

// CRUD basiques
export const getPrice = async (id: string): Promise<Price | null> => {
  try {
    const ref = doc(db, 'prices', id);
    const snap = await getDoc(ref);
    return snap.exists() ? { id: snap.id, ...(snap.data() as Price) } : null;
  } catch (error) {
    console.error('Erreur getPrice:', error);
    toast.error('Erreur lors de la récupération du prix');
    return null;
  }
};

export const addPrice = async (price: Price): Promise<string> => {
  try {
    const ref = await addDoc(collection(db, 'prices'), {
      ...price,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    toast.success('Prix ajouté ✅');
    return ref.id;
  } catch (error) {
    console.error('Erreur addPrice:', error);
    toast.error('Erreur lors de l\u2019ajout du prix');
    throw error;
  }
};

export const updatePrice = async (
  id: string,
  price: Partial<Price>
): Promise<void> => {
  try {
    const ref = doc(db, 'prices', id);
    await updateDoc(ref, { ...price, updatedAt: serverTimestamp() });
    toast.success('Prix mis à jour ✅');
  } catch (error) {
    console.error('Erreur updatePrice:', error);
    toast.error('Erreur lors de la mise à jour du prix');
    throw error;
  }
};

export const deletePrice = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'prices', id));
    toast.success('Prix supprimé ✅');
  } catch (error) {
    console.error('Erreur deletePrice:', error);
    toast.error('Erreur lors de la suppression du prix');
    throw error;
  }
};

export const togglePopular = async (
  id: string,
  isPopular: boolean
): Promise<void> => {
  try {
    const ref = doc(db, 'prices', id);
    await updateDoc(ref, { isPopular, updatedAt: serverTimestamp() });
    toast.success(isPopular ? 'Marqué populaire' : 'Démarquéd populaire');
  } catch (error) {
    console.error('Erreur togglePopular:', error);
    toast.error('Erreur lors de la mise à jour du statut populaire');
    throw error;
  }
};

// Export des catégories de service
export const getServiceCategories = () => serviceCategories;