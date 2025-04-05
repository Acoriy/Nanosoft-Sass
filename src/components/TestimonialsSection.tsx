import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote, Star, ChevronRight, ChevronLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "نانو سوفت غيرت طريقة تعاملنا مع قواعد البيانات بشكل كامل. إنها أداة لا غنى عنها لفريقنا.",
    author: "أحمد محمد",
    role: "مطور رئيسي",
    company: "تيك ستارت",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    quote: "أكثر ORM بديهية استخدمتها على الإطلاق. وفر لنا وقتًا كبيرًا وقلل من الأخطاء بشكل ملحوظ.",
    author: "سارة أحمد",
    role: "مديرة تقنية المعلومات",
    company: "مؤسسة النجاح",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "كان الانتقال إلى نانو سوفت سريعًا وسلسًا. زادت إنتاجيتنا بنسبة 40% منذ اعتمادها.",
    author: "محمد علي",
    role: "مهندس عمليات",
    company: "شركة المستقبل",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    id: 4,
    quote: "أوصي بـ نانو سوفت لأي فريق يبحث عن تبسيط تفاعلاته مع قواعد البيانات مع الحفاظ على الأمان.",
    author: "ليلى خالد",
    role: "مهندسة برمجيات",
    company: "كلود نيتيف",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="testimonials"
      className="relative py-12 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#109A60] via-[#0C954A] to-[#12A288] opacity-10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#109A60] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#12A288] opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <div className="inline-block mb-4 relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#109859]/20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 rounded-full bg-[#0C954A]/20 animate-pulse delay-300"></div>
            <div className="relative z-10 flex items-center gap-1 text-[#0C954A] mb-2 justify-center">
              <Star className="fill-[#0C954A]" size={22} />
              <Star className="fill-[#0C954A]" size={22} />
              <Star className="fill-[#0C954A]" size={22} />
              <Star className="fill-[#0C954A]" size={22} />
              <Star className="fill-[#0C954A]" size={22} />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative">
            <span className="relative inline-block">
              <span className="absolute inset-0 -skew-y-3 bg-gradient-to-r from-[#109A60]/10 to-[#12A288]/10 rounded-lg transform-gpu"></span>
              <span className="relative text-[#109A60]">ما يقوله عملاؤنا</span>
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto relative">
            <span className="absolute top-0 left-0 w-full h-full bg-white/50 filter blur-xl -z-10 rounded-full"></span>
            اكتشف كيف تحول منصتنا عمليات التطوير وتعزز إنتاجية الفرق.
          </p>
        </motion.div>

        {isMobile ? (
          <div className="relative max-w-md mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-white/80 hover:bg-white border-[#109A60] text-[#109A60]" />
              <CarouselNext className="right-0 bg-white/80 hover:bg-white border-[#109A60] text-[#109A60]" />
            </Carousel>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-5xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDg2IDQ4Ij48cGF0aCBkPSJNODUuNSAyNGwtMTguNSAxMC41Ljk2IDIyTDQzIDQyLjk2IDI0LjA0IDU2LjUgMjUgMzQuNSA2LjUgMjQgMjUgMTMuNSAyNC4wNCA4LjUgNDMgMjIuMDRsMjQuOTYtMTMuNTQuOTYgMjJMODUuNSAyNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwOUE2MCIgc3Ryb2tlLXdpZHRoPSIuNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9zdmc+')] opacity-20"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <motion.div
                  className="lg:col-span-4 space-y-3 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#12A288]/10"
                  variants={itemVariants}
                >
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#109A60] to-[#12A288] rounded-full mb-4"></div>
                    <h3 className="text-xl font-semibold text-[#109A60]">التوصيات</h3>
                    <p className="text-sm text-gray-500 mt-1">اختر للقراءة</p>
                  </div>
                  
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      onClick={() => setActiveTestimonial(index)}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeTestimonial === index 
                          ? 'bg-gradient-to-r from-[#109A60]/10 to-[#12A288]/10 shadow-sm' 
                          : 'hover:bg-gray-50'
                      }`}
                      variants={itemVariants}
                    >
                      <Avatar className={`border-2 ${activeTestimonial === index ? 'border-[#109A60]' : 'border-transparent'} transition-all duration-300`}>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback className="bg-[#109A60]/10 text-[#109A60]">
                          <User size={20} />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className={`font-medium ${activeTestimonial === index ? 'text-[#109A60]' : 'text-gray-700'}`}>
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                      {activeTestimonial === index && (
                        <div className="ml-auto">
                          <div className="w-2 h-2 rounded-full bg-[#109A60]"></div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  className="lg:col-span-8 relative"
                  variants={itemVariants}
                >
                  <div 
                    className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10"
                    onClick={prevTestimonial}
                  >
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full w-10 h-10 bg-white/90 border-[#12A288]/20 text-[#109A60] shadow-lg hover:bg-[#109A60] hover:text-white transition-all"
                    >
                      <ChevronLeft size={20} />
                    </Button>
                  </div>
                  
                  <div 
                    className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10"
                    onClick={nextTestimonial}
                  >
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full w-10 h-10 bg-white/90 border-[#12A288]/20 text-[#109A60] shadow-lg hover:bg-[#109A60] hover:text-white transition-all"
                    >
                      <ChevronRight size={20} />
                    </Button>
                  </div>
                  
                  <motion.div
                    className="relative bg-white shadow-xl rounded-2xl overflow-hidden border border-[#12A288]/10 transform transition-transform duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#109A60]/5 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#12A288]/5 rounded-full blur-2xl"></div>
                    
                    <div className="p-6 md:p-10 relative z-10">
                      <div className="mb-6">
                        <div className="inline-block p-3 bg-[#109A60]/10 rounded-2xl mb-6">
                          <Quote size={28} className="text-[#109A60]" />
                        </div>
                        
                        <div className="flex space-x-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="fill-[#109A60] text-[#109A60]" />
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="text-lg md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
                        "{testimonials[activeTestimonial].quote}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <Avatar className="h-14 w-14 border-4 border-[#109A60]/10 mr-4">
                          <AvatarImage 
                            src={testimonials[activeTestimonial].avatar} 
                            alt={testimonials[activeTestimonial].author}
                            className="object-cover" 
                          />
                          <AvatarFallback className="bg-[#109A60]/10 text-[#109A60]">
                            <User size={24} />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-lg text-gray-900">{testimonials[activeTestimonial].author}</div>
                          <div className="text-sm text-[#109A60]">
                            {testimonials[activeTestimonial].role}, <span className="font-semibold">{testimonials[activeTestimonial].company}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              className="flex mt-8 space-x-2 justify-center"
              variants={itemVariants}
            >
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'bg-[#109A60] w-6' 
                      : 'bg-[#109A60]/30 hover:bg-[#109A60]/50'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Voir le témoignage ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>
        )}
        
        <motion.div
          className="flex justify-center mt-8 md:mt-12"
          variants={itemVariants}
        >
          <Button 
            className="group bg-white hover:bg-[#109A60] text-[#109A60] hover:text-white border border-[#109A60]/30 shadow-lg hover:shadow-xl hover:shadow-[#109A60]/20 px-6 py-4 md:px-8 md:py-6 h-auto rounded-full transition-all duration-300"
          >
            <span className="mr-2">عرض جميع التوصيات</span>
            <ChevronLeft className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div
    className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
    <p className="text-gray-700 mb-6 text-base md:text-lg">"{testimonial.quote}"</p>
    <div className="flex items-center">
      <img 
        src={testimonial.avatar} 
        alt={testimonial.author} 
        className="w-12 h-12 rounded-full mr-4 rtl:mr-0 rtl:ml-4"
      />
      <div>
        <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
        <p className="text-gray-600 text-sm">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

export default TestimonialsSection;