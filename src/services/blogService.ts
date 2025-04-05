
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
  createdAt?: any;
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

// Données des blogs par défaut
const defaultBlogsData = [
  {
    title: "Bienvenue sur notre blog",
    excerpt: "Découvrez nos dernières actualités et articles sur la technologie, la programmation et plus encore",
    content: `Bienvenue sur notre blog ! 

Nous sommes ravis de vous accueillir dans cet espace dédié au partage de connaissances et d'informations sur diverses thématiques.

## Que trouverez-vous ici ?

- Des articles sur la technologie
- Des tutoriels de programmation
- Des conseils en gestion de ressources humaines
- Des astuces pour la gestion des stocks et des achats
- Des informations sur la comptabilité et la gestion financière
- Des méthodologies de gestion de projets

N'hésitez pas à explorer les différentes catégories et à nous faire part de vos commentaires !`,
    category: "الكل",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: new Date().toISOString().split('T')[0],
    published: true
  },
  {
    title: "Guide des abonnements",
    excerpt: "Découvrez nos différentes formules d'abonnement et choisissez celle qui vous convient le mieux",
    content: `# Guide des abonnements

Nous proposons différentes formules d'abonnement adaptées à vos besoins. Que vous soyez une petite entreprise, une startup en pleine croissance ou une grande organisation, nous avons la solution qu'il vous faut.

## Abonnement Essentiel

Idéal pour les petites entreprises ou les projets personnels
- 5 pages web
- Hébergement gratuit
- Support technique 24/7
- Design responsive
- SEO de base

## Abonnement Pro

Parfait pour les entreprises en croissance
- 10 pages web
- Hébergement gratuit
- Support technique 24/7
- Design responsive
- SEO avancé
- Blog intégré
- Système de gestion de contenu

## Abonnement Enterprise

Pour les grandes organisations ayant des besoins complexes
- Pages illimitées
- Hébergement gratuit
- Support technique dédié 24/7
- Design responsive premium
- SEO professionnel
- Blog avancé
- Système de gestion de contenu personnalisé
- Intégration avec les réseaux sociaux
- Analyses avancées

Contactez-nous pour en savoir plus sur nos offres et obtenir un devis personnalisé.`,
    category: "تكنولوجيا",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: new Date().toISOString().split('T')[0],
    published: true
  },
  {
    title: "Actualités 2024",
    excerpt: "Découvrez les dernières tendances technologiques et les innovations qui façonneront l'année 2024",
    content: `# Tendances technologiques en 2024

## Intelligence artificielle et apprentissage automatique

L'IA continue de transformer tous les secteurs d'activité. En 2024, nous assistons à une démocratisation des outils d'IA générative, permettant même aux petites entreprises d'optimiser leurs processus et d'améliorer leur expérience client.

## Développement durable et tech verte

La technologie verte prend une place de plus en plus importante. Les entreprises adoptent des solutions écologiques pour réduire leur empreinte carbone et répondre aux attentes des consommateurs de plus en plus conscients des enjeux environnementaux.

## Cybersécurité

Avec l'augmentation des cyberattaques, la sécurité informatique devient une priorité absolue. Les solutions de sécurité basées sur l'IA et l'apprentissage automatique sont en plein essor pour contrer les menaces toujours plus sophistiquées.

## Réalité augmentée et virtuelle

Les technologies AR et VR sortent du domaine du gaming pour s'imposer dans la formation professionnelle, l'e-commerce et même le travail collaboratif à distance.

## Blockchain et Web3

Au-delà des cryptomonnaies, la blockchain trouve de nouvelles applications dans la traçabilité, les contrats intelligents et la gestion de l'identité numérique.

Restez à l'affût de nos prochains articles pour approfondir ces sujets et découvrir comment ces tendances peuvent impacter votre entreprise.`,
    category: "تكنولوجيا",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    date: new Date().toISOString().split('T')[0],
    published: true
  }
];

// Fonction pour initialiser les blogs par défaut si aucun n'existe
export const initializeDefaultBlogs = async (): Promise<void> => {
  try {
    // Vérifier si des blogs existent déjà
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, limit(1));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log("Aucun blog trouvé, initialisation des blogs par défaut...");
      
      // Utiliser un batch pour une meilleure performance et fiabilité
      const batch = writeBatch(db);
      
      // Créer des blogs par défaut avec des IDs spécifiques pour faciliter les tests
      for (let i = 0; i < defaultBlogsData.length; i++) {
        const blogData = defaultBlogsData[i];
        const blogId = `default-blog-${i+1}`;
        const blogRef = doc(db, COLLECTION_NAME, blogId);
        
        batch.set(blogRef, {
          ...blogData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }
      
      // Exécuter le batch
      await batch.commit();
      console.log("Blogs par défaut ajoutés avec succès");
      toast.success("Articles par défaut créés avec succès");
    } else {
      console.log("Des blogs existent déjà, ignorer l'initialisation");
    }
  } catch (error) {
    console.error("Erreur lors de l'initialisation des blogs par défaut:", error);
    toast.error("Erreur lors de la création des articles par défaut");
  }
};

// Obtenir tous les blogs
export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log("Aucun blog trouvé, initialisation...");
      await initializeDefaultBlogs();
      
      // Récupérer à nouveau après l'initialisation
      const newSnapshot = await getDocs(q);
      return newSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as Blog
      }));
    }
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Blog
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des blogs:", error);
    toast.error("Erreur lors de la récupération des articles");
    return [];
  }
};

// Obtenir les blogs par catégorie
export const getBlogsByCategory = async (category: string): Promise<Blog[]> => {
  try {
    // Vérifier d'abord si des blogs existent
    const allBlogs = await getBlogs();
    if (allBlogs.length === 0) {
      // Si aucun blog n'existe, les blogs par défaut auront été créés par getBlogs()
      // Maintenant nous pouvons filtrer
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
    }
    
    if (category === "الكل") {
      return allBlogs;
    }
    
    // Sinon, juste requête normale
    const blogsRef = collection(db, COLLECTION_NAME);
    const q = query(blogsRef, where('category', '==', category), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as Blog
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des blogs par catégorie:", error);
    toast.error("Erreur lors de la récupération des articles par catégorie");
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
    toast.error("Erreur lors de la récupération de l'article");
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
    toast.error("Erreur lors de l'ajout de l'article");
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
    toast.error("Erreur lors de la mise à jour de l'article");
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
        // Continuer malgré l'erreur de suppression d'image
      }
    }
    
    await deleteDoc(docRef);
    
    toast.success("Article supprimé avec succès");
  } catch (error) {
    console.error("Erreur lors de la suppression du blog:", error);
    toast.error("Erreur lors de la suppression de l'article");
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
    toast.error("Erreur lors du changement de l'état de publication");
    throw error;
  }
};

// Fonction pour s'abonner aux mises à jour des blogs en temps réel
export const subscribeToBlogsUpdates = (callback) => {
  return subscribeToCollection('blogs', callback);
};
