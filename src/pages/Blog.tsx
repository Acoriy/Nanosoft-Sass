
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { getBlogs } from '@/services/blogService';
// import { Skeleton } from "@/components/ui/skeleton";

// type Category = {
//   name: string;
//   value: string;
// };

// const categories: Category[] = [
//   { name: 'الكل', value: 'all' },
//   { name: 'تطوير', value: 'تطوير' },
//   { name: 'تسويق', value: 'تسويق' },
//   { name: 'تصميم', value: 'تصميم' },
//   { name: 'تكنولوجيا', value: 'تكنولوجيا' },
//   { name: 'أمن', value: 'أمن' },
// ];

// const Blog = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [searchQuery, setSearchQuery] = useState<string>('');

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setIsLoading(true);
//       try {
//         const blogs = await getBlogs();
//         // Only get published blogs for the public page
//         const publishedBlogs = blogs.filter(blog => blog.published);
//         setBlogPosts(publishedBlogs);
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString('ar-LY', options);
//   };

//   const filteredPosts = blogPosts.filter((post) => {
//     const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
//     const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-20">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block px-4 py-1.5 bg-nanosoft-primary/10 text-nanosoft-primary rounded-full text-sm font-medium mb-4">
//             المدونة
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">آخر المقالات والأخبار</h1>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             اطلع على أحدث الموضوعات في عالم التكنولوجيا والبرمجة والتسويق الرقمي
//           </p>
//         </motion.div>

//         {/* Search and Filter */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="max-w-4xl mx-auto mb-12"
//         >
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             <div className="relative w-full md:w-1/2">
//               <input
//                 type="text"
//                 placeholder="ابحث عن مقالات..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full py-3 px-5 pr-12 rounded-xl border border-gray-200 focus:border-nanosoft-primary focus:ring-2 focus:ring-nanosoft-primary/20 transition-all duration-300"
//               />
//               <svg
//                 className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 ></path>
//               </svg>
//             </div>
            
//             <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
//               {categories.map((category) => (
//                 <button
//                   key={category.value}
//                   onClick={() => setSelectedCategory(category.value)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     selectedCategory === category.value
//                       ? 'bg-nanosoft-primary text-white shadow-md'
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   {category.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Blog Posts Grid */}
//         {isLoading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[420px]">
//                 <Skeleton className="h-48 w-full" />
//                 <div className="p-6 space-y-4">
//                   <Skeleton className="h-4 w-24" />
//                   <Skeleton className="h-6 w-full" />
//                   <Skeleton className="h-6 w-2/3" />
//                   <Skeleton className="h-20 w-full" />
//                   <div className="flex justify-between">
//                     <Skeleton className="h-6 w-16" />
//                     <Skeleton className="h-6 w-20" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : filteredPosts.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredPosts.map((post, index) => (
//               <motion.article
//                 key={post.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 * index }}
//                 className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
//               >
//                 <Link to={`/blog/${post.id}`} className="block">
//                   <div className="relative h-48 overflow-hidden">
//                     <img 
//                       src={post.image} 
//                       alt={post.title} 
//                       className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                     <div className="absolute bottom-4 right-4 left-4">
//                       <span className="inline-block px-3 py-1 bg-nanosoft-primary/80 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-2">
//                         {post.category}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <div className="flex items-center text-gray-500 text-sm mb-3">
//                       <span>{formatDate(post.date)}</span>
//                       <span className="mx-2">•</span>
//                       <span>{post.author || 'المسؤول'}</span>
//                     </div>
                    
//                     <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
//                       {post.title}
//                     </h2>
                    
//                     <p className="text-gray-600 mb-4 line-clamp-3">
//                       {post.excerpt}
//                     </p>
                    
//                     <div className="pt-2 flex justify-between items-center">
//                       <div className="flex flex-wrap gap-2">
//                         {post.tags && post.tags.slice(0, 2).map((tag, i) => (
//                           <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
                      
//                       <span className="text-nanosoft-primary font-medium text-sm flex items-center">
//                         اقرأ المزيد
//                         <svg
//                           className="w-4 h-4 mr-1 rtl:rotate-180"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 12h14M12 5l7 7-7 7"
//                           ></path>
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.article>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <svg
//                 className="w-16 h-16 mx-auto text-gray-300 mb-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 ></path>
//               </svg>
//               <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد نتائج</h3>
//               <p className="text-gray-500">لم نتمكن من العثور على أي مقالات تطابق بحثك.</p>
//               <button
//                 onClick={() => {
//                   setSearchQuery('');
//                   setSelectedCategory('all');
//                 }}
//                 className="mt-4 px-5 py-2 bg-nanosoft-primary text-white rounded-full text-sm font-medium hover:bg-nanosoft-secondary transition-colors"
//               >
//                 عرض جميع المقالات
//               </button>
//             </motion.div>
//           </div>
//         )}

//         {/* Newsletter Subscription */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-24 max-w-3xl mx-auto bg-gradient-to-r from-nanosoft-primary/10 to-nanosoft-accent/10 rounded-2xl p-8 md:p-10"
//         >
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
//             <p className="text-gray-600 mb-6">
//               احصل على أحدث المقالات والأخبار مباشرة إلى بريدك الإلكتروني.
//             </p>
//             <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
//               <input
//                 type="email"
//                 placeholder="أدخل بريدك الإلكتروني"
//                 className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-nanosoft-primary focus:ring-2 focus:ring-nanosoft-primary/20 transition-all duration-300"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-nanosoft-primary text-white rounded-xl font-medium hover:bg-nanosoft-secondary transition-colors"
//               >
//                 اشترك الآن
//               </button>
//             </form>
//             <p className="text-xs text-gray-500 mt-4">
//               لن نرسل لك أي رسائل غير مرغوب فيها. يمكنك إلغاء الاشتراك في أي وقت.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Blog;



import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlogs } from '@/services/blogService';
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [existingCategories, setExistingCategories] = useState<{name: string, value: string}[]>([
    { name: 'الكل', value: 'all' }
  ]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const blogs = await getBlogs();
        // Only get published blogs for the public page
        const publishedBlogs = blogs.filter(blog => blog.published);
        setBlogPosts(publishedBlogs);
        
        // Extract unique categories from fetched blogs
        const categories = new Set<string>();
        publishedBlogs.forEach(blog => {
          if (blog.category) categories.add(blog.category);
        });
        
        // Create category objects for UI
        const categoryObjects = Array.from(categories).map(category => ({
          name: category,
          value: category
        }));
        
        // Always include 'All' category
        setExistingCategories([
          { name: 'الكل', value: 'all' },
          ...categoryObjects
        ]);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ar-LY', options);
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-nanosoft-primary/10 text-nanosoft-primary rounded-full text-sm font-medium mb-4">
            المدونة
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">آخر المقالات والأخبار</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            اطلع على أحدث الموضوعات في عالم التكنولوجيا والبرمجة والتسويق الرقمي
          </p>
        </motion.div>

        {/* Search and Filter - Only showing existing categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="ابحث عن مقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-5 pr-12 rounded-xl border border-gray-200 focus:border-nanosoft-primary focus:ring-2 focus:ring-nanosoft-primary/20 transition-all duration-300"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
              {existingCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-nanosoft-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid - With responsive image handling */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[420px]">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-20 w-full" />
                  <div className="flex justify-between">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy" // Add lazy loading for better performance
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 left-4">
                      <span className="inline-block px-3 py-1 bg-nanosoft-primary/80 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-2">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author || 'المسؤول'}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-2 flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {post.tags && post.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <span className="text-nanosoft-primary font-medium text-sm flex items-center">
                        اقرأ المزيد
                        <svg
                          className="w-4 h-4 mr-1 rtl:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14M12 5l7 7-7 7"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد نتائج</h3>
              <p className="text-gray-500">لم نتمكن من العثور على أي مقالات تطابق بحثك.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-5 py-2 bg-nanosoft-primary text-white rounded-full text-sm font-medium hover:bg-nanosoft-secondary transition-colors"
              >
                عرض جميع المقالات
              </button>
            </motion.div>
          </div>
        )}

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 max-w-3xl mx-auto bg-gradient-to-r from-nanosoft-primary/10 to-nanosoft-accent/10 rounded-2xl p-8 md:p-10"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
            <p className="text-gray-600 mb-6">
              احصل على أحدث المقالات والأخبار مباشرة إلى بريدك الإلكتروني.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-nanosoft-primary focus:ring-2 focus:ring-nanosoft-primary/20 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-nanosoft-primary text-white rounded-xl font-medium hover:bg-nanosoft-secondary transition-colors"
              >
                اشترك الآن
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              لن نرسل لك أي رسائل غير مرغوب فيها. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
