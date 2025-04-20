
import { db, storage, subscribeToCollection } from '@/lib/firebase';
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
import { deleteObject, ref } from 'firebase/storage';
import { toast } from 'sonner';

const COLLECTION_NAME = 'blogs';

export interface Blog {
  id?: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  published: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createdAt?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updatedAt?: any;
}

// Liste des catégories disponibles pour les blogs
export const blogCategories = [
  "الكل",
  "أمن معلومات",
  "تكنولوجيا",
  "البرمجة",
  "موارد بشرية",
  "إدارة المخازن والمشتريات",
  "المحاسبة",
  "إدارة المشروعات"
];

// Obtenir tous les blogs
export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log("Aucun blog trouvé.");
      return [];
    }
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Blog
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des blogs:", error);
    // toast.error("Erreur lors de la récupération des articles");
    return [];
  }
};

// Obtenir les blogs par catégorie
export const getBlogsByCategory = async (category: string): Promise<Blog[]> => {
  try {
    const allBlogs = await getBlogs();
    
    if (category === "الكل") {
      return allBlogs;
    }
    
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, where('category', '==', category), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Blog
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des blogs par catégorie:", error);
    // toast.error("Erreur lors de la récupération des articles par catégorie");
    return [];
  }
};

// Obtenir un blog spécifique
export const getBlog = async (id: string): Promise<Blog | null> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const snapshot = await getDoc(docRef);
    
    if (!snapshot.exists()) {
      return null;
    }
    
    return {
      id: snapshot.id,
      ...snapshot.data() as Blog
    };
  } catch (error) {
    console.error("Erreur lors de la récupération du blog:", error);
    // toast.error("Erreur lors de la récupération de l'article");
    return null;
  }
};

// Ajouter un nouveau blog
export const addBlog = async (blog: Blog): Promise<string> => {
  try {
    // Assurer que la date est au bon format
    if (!blog.date) {
      blog.date = new Date().toISOString().split('T')[0];
    }
    
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...blog,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    toast.success("Article ajouté avec succès");
    return docRef.id;
  } catch (error) {
    console.error("Erreur lors de l'ajout du blog:", error);
    // toast.error("Erreur lors de l'ajout de l'article");
    throw error;
  }
};

// Mettre à jour un blog
export const updateBlog = async (id: string, blog: Partial<Blog>): Promise<void> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    
    await updateDoc(docRef, {
      ...blog,
      updatedAt: serverTimestamp()
    });
    
    toast.success("Article mis à jour avec succès");
  } catch (error) {
    console.error("Erreur lors de la mise à jour du blog:", error);
    // toast.error("Erreur lors de la mise à jour de l'article");
    throw error;
  }
};

// Supprimer un blog
export const deleteBlog = async (id: string, imageUrl?: string): Promise<void> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    
    // Si une URL d'image est fournie et qu'elle est stockée dans Firebase Storage, supprimez-la
    if (imageUrl && imageUrl.startsWith('https://firebasestorage.googleapis.com')) {
      try {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
        console.log('Image supprimée avec succès');
      } catch (imageError) {
        console.error('Erreur lors de la suppression de l\'image:', imageError);
      }
    }
    
    await deleteDoc(docRef);
    toast.success("Article supprimé avec succès");
  } catch (error) {
    console.error("Erreur lors de la suppression du blog:", error);
    // toast.error("Erreur lors de la suppression de l'article");
    throw error;
  }
};

// Activer/désactiver la publication d'un blog
export const toggleBlogPublish = async (id: string, published: boolean): Promise<void> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    
    await updateDoc(docRef, {
      published,
      updatedAt: serverTimestamp()
    });
    
    toast.success(published ? "Article publié avec succès" : "Article dépublié");
  } catch (error) {
    console.error("Erreur lors du changement de l'état de publication:", error);
    // toast.error("Erreur lors du changement de l'état de publication");
    throw error;
  }
};

// Fonction pour s'abonner aux mises à jour des blogs en temps réel
export const subscribeToBlogsUpdates = (callback) => {
  return subscribeToCollection('blogs', callback);
};