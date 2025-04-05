import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getBlogs, Blog } from '@/services/blogService';
import { useIsMobile } from '@/hooks/use-mobile';

const HomeBlogSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const fetchedBlogs = await getBlogs();
        // Filter only published blogs and limit to 3
        const publishedBlogs = fetchedBlogs
          .filter(blog => blog.published)
          .sort((a, b) => new Date(b.createdAt || b.date).getTime() - new Date(a.createdAt || a.date).getTime())
          .slice(0, 3);
        setBlogs(publishedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="px-3 py-1 text-nanosoft-primary border-nanosoft-primary mb-3">المدونة</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">آخر المقالات</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اطلع على أحدث المقالات والأخبار في مجال تكنولوجيا المعلومات والبرمجيات
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-1/4 mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : blogs.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${blog.id}`}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={blog.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format'} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(blog.createdAt ? new Date(blog.createdAt.seconds * 1000).toISOString() : blog.date)}
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                      <div className="flex items-center text-nanosoft-primary mt-auto font-medium">
                        <span>قراءة المزيد</span>
                        <ArrowLeft className="h-4 w-4 mr-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">لا توجد مقالات منشورة حالياً</p>
          </div>
        )}

        {blogs.length > 0 && (
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-nanosoft-primary hover:bg-nanosoft-secondary transition-colors duration-300"
            >
              جميع المقالات
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeBlogSection;
