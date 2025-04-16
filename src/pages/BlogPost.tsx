import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBlog, getBlogs } from '@/services/blogService';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Share2 } from 'lucide-react';

interface BlogPost {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  published: boolean;
  author?: string;
  tags?: string[];
}

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchBlogData = async () => {
      setIsLoading(true);
      setError(null);
      window.scrollTo(0, 0);
      
      try {
        if (!id) {
          setError("معرف المدونة غير موجود");
          setIsLoading(false);
          return;
        }
        
        const blogData = await getBlog(id);
        if (blogData) {
          setPost(blogData);
          
          // Récupérer tous les blogs pour les posts associés
          const allBlogs = await getBlogs();
          const related = allBlogs
            .filter(p => p.id !== id && p.published)
            .filter(p => p.category === blogData.category)
            .slice(0, 3);
          
          setRelatedPosts(related);
        } else {
          setError("المقال غير موجود");
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setError("حدث خطأ أثناء تحميل المقال");
        toast.error('حدث خطأ أثناء تحميل المقال');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogData();
  }, [id]);

  // Formatage des dates en arabe
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('ar-LY', options);
    } catch (error) {
      return dateString;
    }
  };

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          toast.success('تم نسخ الرابط إلى الحافظة');
        })
        .catch((error) => {
          console.error('Error copying to clipboard:', error);
          toast.error('حدث خطأ أثناء نسخ الرابط');
        });
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  if (isLoading) {
    return (
      <main className="min-h-screen pt-24 pb-20" lang="ar">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Skeleton className="h-5 w-32" />
            </div>
            <Skeleton className="h-6 w-36 mb-4" />
            <Skeleton className="h-12 w-full mb-6" />
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Skeleton className="h-10 w-10 rounded-full ml-3" />
                <div>
                  <Skeleton className="h-5 w-24 mb-1" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-[400px] w-full rounded-2xl mb-10" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="min-h-screen pt-24 pb-20" lang="ar">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">{error || "المقال غير موجود"}</h1>
          <p className="text-gray-600 mb-8">
            عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-nanosoft-primary text-white rounded-full font-medium hover:bg-nanosoft-secondary transition-colors"
              aria-label="العودة إلى المدونة"
            >
              <ArrowLeft className="ml-2 h-4 w-4" />
              العودة إلى المدونة
            </Link>
            <button
              onClick={handleRetry}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition-colors"
              aria-label="إعادة المحاولة"
            >
              إعادة المحاولة
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-20" lang="ar">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto">
          {/* En-tête de l'article */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-nanosoft-primary transition-colors mb-8"
              aria-label="العودة إلى المدونة"
            >
              <ArrowLeft className="ml-2 h-5 w-5" />
              العودة إلى المدونة
            </Link>

            <div className="flex items-center mb-4">
              <span className="inline-block px-3 py-1 bg-nanosoft-primary/10 text-nanosoft-primary text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="mx-3 text-gray-300" aria-hidden="true">•</span>
              <span className="text-gray-500 text-sm">{formatDate(post.date)}</span>
            </div>

            <h1 id="post-title" className="text-3xl md:text-4xl font-bold mb-6 text-right">
              {post.title}
            </h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div
                  className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-semibold text-lg ml-3"
                  aria-hidden="true"
                >
                  {(post.author || 'المسؤول').charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{post.author || 'المسؤول'}</p>
                  <p className="text-gray-500 text-sm">كاتب</p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center text-gray-500 hover:text-nanosoft-primary transition-colors"
                aria-label="مشاركة المقال"
              >
                <Share2 className="ml-2 h-5 w-5" />
                مشاركة
              </button>
            </div>
          </motion.header>

          {/* Image mise en avant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg mb-10"
          >
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475";
                }}
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">لا توجد صورة</span>
              </div>
            )}
          </motion.div>

          {/* Contenu de l'article */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none mb-12 blog-content text-right"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.section>

          {/* Affichage des tags s'il y en a */}
          {post.tags && post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Section commentaire */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold mb-6 text-right">شاركنا رأيك</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="comment" className="block mb-2 font-medium text-gray-700 text-right">
                  التعليق
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-nanosoft-primary focus:ring-2 focus:ring-nanosoft-primary/20 transition-all duration-300"
                  placeholder="اكتب تعليقك هنا..."
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700 text-right">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-nanosoft-primary focus:ring-2 focus:ring-nanosoft-primary/20 transition-all duration-300"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-right">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-nanosoft-primary focus:ring-2 focus:ring-nanosoft-primary/20 transition-all duration-300"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>
              <button
                type="button"
                className="px-6 py-3 bg-nanosoft-primary text-white rounded-xl font-medium hover:bg-nanosoft-secondary transition-colors flex items-center justify-center"
                aria-label="إرسال التعليق"
              >
                إرسال التعليق
              </button>
            </form>
          </motion.section>
        </article>

        {/* Articles associés */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
            aria-label="مقالات ذات صلة"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index + 0.6 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <Link to={`/blog/${relatedPost.id}`} className="block" aria-labelledby={`related-post-${relatedPost.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true"></div>
                      <div className="absolute bottom-4 right-4">
                        <span className="inline-block px-3 py-1 bg-nanosoft-primary/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-500 text-sm mb-2">
                        {formatDate(relatedPost.date)}
                      </p>
                      <h3 id={`related-post-${relatedPost.id}`} className="text-lg font-bold mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* Section Newsletter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 max-w-3xl mx-auto text-center"
          aria-label="اشترك في نشرتنا الإخبارية"
        >
          <h2 className="text-2xl font-bold mb-4">أعجبك المقال؟</h2>
          <p className="text-gray-600 mb-6">
            اشترك في نشرتنا الإخبارية للحصول على أحدث المقالات والأخبار.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); /* traitement de l'inscription */ }}>
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-nanosoft-primary focus:ring-2 focus:ring-nanosoft-primary/20 transition-all duration-300"
              required
              aria-label="بريدك الإلكتروني"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-nanosoft-primary text-white rounded-xl font-medium hover:bg-nanosoft-secondary transition-colors"
              aria-label="اشترك الآن"
            >
              اشترك الآن
            </button>
          </form>
        </motion.section>
      </div>
    </main>
  );
};

export default BlogPostPage;













