// import React, { useState, useEffect, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';
// import { Card, CardContent } from "@/components/ui/card";
// import useEmblaCarousel from 'embla-carousel-react';
// import Copilot from "../assets/systheme partenaria.jpg";

// interface NouveauteCardProps {
//   title: string;
//   description: string;
//   imageSrc: string;
//   delay: number;
//   bgColor: string;
// }

// const NouveauteCard = ({ title, description, imageSrc, delay, bgColor }: NouveauteCardProps) => {
//   return (
//     <motion.div
//       className={`rounded-xl overflow-hidden border border-gray-100 h-full ${bgColor}`}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="p-6 flex flex-col h-full">
//         <div className="relative w-full h-44 mb-4 overflow-hidden rounded-lg">
//           <img 
//             src={imageSrc} 
//             alt={title} 
//             className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//           />
//         </div>
        
//         <h3 className="text-xl font-semibold mb-2 rtl">{title}</h3>
//         <p className="text-gray-600 mb-4 flex-grow rtl">{description}</p>
        
//         <a href="#" className="inline-flex items-center text-nanosoft-primary font-medium hover:underline mt-auto rtl">
//           اعرف المزيد <ArrowUpRight className="mr-1 h-4 w-4" />
//         </a>
//       </div>
//     </motion.div>
//   );
// };

// const Decouvrir = () => {
//   const nouveautes = [
//     {
//       title: "أعد تخيل الذكاء الاصطناعي وتجربة العملاء",
//       description: "انضم إلينا في حدث Refresh Paris 2024، موعدنا السنوي الكبير",
//       imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//       bgColor: "bg-amber-50"
//     },
//     {
//       title: "لقد افتتحنا مركز بيانات جديد في دبي",
//       description: "إطلاق مركز البيانات الجديد لشركتنا في الشرق الأوسط وأفريقيا",
//       imageSrc: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//       bgColor: "bg-sky-50"
//     },
//     {
//       title: "اكتشف Copilot الذكي الخاص بنا: مُسرّع الإنتاجية النهائي",
//       description: "استفد من قوة الذكاء الاصطناعي التوليدي وحسّن إنتاجية فرقك",
//       imageSrc: Copilot,
//       bgColor: "bg-emerald-50"
//     },
//     {
//       title: "ها هي منصتنا للشركات الناشئة",
//       description: "اكتشف كيف يمكن لشركتك الاستفادة من قوة تقنيتنا بسهولة",
//       imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//       bgColor: "bg-violet-50"
//     },
//     {
//       title: "أتمتة عملياتك باستخدام أحدث سير العمل لدينا",
//       description: "تتيح لك ميزات الأتمتة الجديدة توفير ما يصل إلى 40% من الوقت",
//       imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//       bgColor: "bg-rose-50"
//     },
//     {
//       title: "انضم إلى مجتمع المطورين لدينا",
//       description: "استخدم واجهة برمجة التطبيقات المفتوحة الخاصة بنا وأنشئ تكاملات مخصصة مع منصتنا",
//       imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
//       bgColor: "bg-blue-50"
//     },
//   ];

//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: 'rtl' }); // Ajouter direction: 'rtl'
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     if (emblaApi) {
//       emblaApi.on('select', () => {
//         setSelectedIndex(emblaApi.selectedScrollSnap());
//       });
//     }
    
//     // return () => {
//     //   if (emblaApi) emblaApi.off('select');
//     // };
//   }, [emblaApi]);

//   const scrollTo = useCallback(
//     (index: number) => emblaApi && emblaApi.scrollTo(index),
//     [emblaApi]
//   );

//   return (
//     <section className="py-20 px-4 bg-white" dir="rtl"> {/* Ajouter dir="rtl" ici */}
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           <div className="md:col-span-1">
//             <div className="sticky top-20">
//               <span className="text-sm font-medium text-nanosoft-primary mb-2 block">الاتجاهات</span>
//               <motion.h2 
//                 className="text-3xl md:text-4xl font-bold mb-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 اكتشف الجديد
//               </motion.h2>
//               <motion.p 
//                 className="text-lg text-gray-600"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//               >
//                 جديدنا، أحداثنا، ورؤيتنا: كل ما تحتاجه لتعرف كيف نجعل العمل أكثر كفاءة، بساطة، وإنسانية باستخدام أحدث تقنيات الذكاء الاصطناعي.
//               </motion.p>
//             </div>
//           </div>
          
//           <div className="md:col-span-2 lg:-translate-x-5">
//             <div className="overflow-hidden" ref={emblaRef}>
//               <div className="flex">
//                 {nouveautes.map((item, index) => (
//                   <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_50%]">
//                     <div className="p-1 h-full">
//                       <Card className="border-0 shadow-none h-full">
//                         <CardContent className="p-0 h-full">
//                           <NouveauteCard
//                             title={item.title}
//                             description={item.description}
//                             imageSrc={item.imageSrc}
//                             delay={index * 0.1}
//                             bgColor={item.bgColor}
//                           />
//                         </CardContent>
//                       </Card>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Points de navigation */}
//             <div className="flex justify-center items-center mt-8 gap-2">
//               <button 
//                 onClick={() => emblaApi?.scrollNext()} // Inverser les boutons pour RTL
//                 className="focus:outline-none p-2"
//                 aria-label="Suivant"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M6.5 4L10.5 8L6.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
              
//               <div className="flex space-x-2">
//                 {nouveautes.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                       index === selectedIndex 
//                         ? 'bg-nanosoft-primary' 
//                         : 'bg-gray-300 hover:bg-gray-400'
//                     }`}
//                     aria-label={`Aller à la diapositive ${index + 1}`}
//                     onClick={() => scrollTo(index)}
//                   />
//                 ))}
//               </div>
              
//               <button 
//                 onClick={() => emblaApi?.scrollPrev()} // Inverser les boutons pour RTL
//                 className="focus:outline-none p-2"
//                 aria-label="Précédent"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M9.5 4L5.5 8L9.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Decouvrir;

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Copilot from "../assets/systheme partenaria.jpg";

interface NouveauteCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
  bgColor: string;
}

export const NouveauteCard: React.FC<NouveauteCardProps> = ({
  title,
  description,
  imageSrc,
  delay,
  bgColor,
}) => {
  return (
    <motion.div
      className={`rounded-xl overflow-hidden border border-gray-100 h-full ${bgColor}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      role="article"
      aria-label={title}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="relative w-full h-44 mb-4 overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <a
          href="#"
          className="inline-flex items-center text-nanosoft-primary font-medium hover:underline"
          aria-label={`اعرف المزيد sur ${title}`}
        >
          اعرف المزيد <ArrowUpRight className="mr-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

const Decouvrir = () => {
  const nouveautes = [
    {
      title: "أعد تخيل الذكاء الاصطناعي وتجربة العملاء",
      description: "انضم إلينا في حدث Refresh Paris 2024، موعدنا السنوي الكبير",
      imageSrc:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bgColor: "bg-amber-50",
    },
    {
      title: "لقد افتتحنا مركز بيانات جديد في دبي",
      description: "إطلاق مركز البيانات الجديد لشركتنا في الشرق الأوسط وأفريقيا",
      imageSrc:
        "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bgColor: "bg-sky-50",
    },
    {
      title: "اكتشف Copilot الذكي الخاص بنا: مُسرّع الإنتاجية النهائي",
      description: "استفد من قوة الذكاء الاصطناعي التوليدي وحسّن إنتاجية فرقك",
      imageSrc: Copilot,
      bgColor: "bg-emerald-50",
    },
    {
      title: "ها هي منصتنا للشركات الناشئة",
      description: "اكتشف كيف يمكن لشركتك الاستفادة من قوة تقنيتنا بسهولة",
      imageSrc:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bgColor: "bg-violet-50",
    },
    {
      title: "أتمتة عملياتك باستخدام أحدث سير العمل لدينا",
      description: "تتيح لك ميزات الأتمتة الجديدة توفير ما يصل إلى 40% من الوقت",
      imageSrc:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bgColor: "bg-rose-50",
    },
    {
      title: "انضم إلى مجتمع المطورين لدينا",
      description: "استخدم واجهة برمجة التطبيقات المفتوحة لإنشاء تكاملات مخصصة",
      imageSrc:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bgColor: "bg-blue-50",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="py-20 bg-white" dir="rtl" aria-labelledby="decouvrir-title">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <span className="text-sm font-medium text-nanosoft-primary mb-2 block">الاتجاهات</span>
              <motion.h2
                id="decouvrir-title"
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                اكتشف الجديد
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                جديدنا، أحداثنا، ورؤيتنا: كل ما تحتاجه لتعرف كيف نجعل العمل أكثر كفاءة، بساطة، وإنسانية باستخدام أحدث تقنيات الذكاء الاصطناعي.
              </motion.p>
            </div>
          </div>
          <div className="md:col-span-2 lg:-translate-x-5">
            <div className="overflow-hidden" ref={emblaRef} role="region" aria-label="Carrousel des nouveautés">
              <div className="flex">
                {nouveautes.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_50%]"
                  >
                    <div className="p-1 h-full">
                      <Card className="border-0 shadow-none h-full">
                        <CardContent className="p-0 h-full">
                          <NouveauteCard
                            title={item.title}
                            description={item.description}
                            imageSrc={item.imageSrc}
                            delay={index * 0.1}
                            bgColor={item.bgColor}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Points */}
            <div className="flex justify-center items-center mt-8 gap-2" role="tablist">
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="focus:outline-none p-2"
                aria-label="Diapositive suivante"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6.5 4L10.5 8L6.5 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex space-x-2">
                {nouveautes.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === selectedIndex
                        ? "bg-nanosoft-primary"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Aller à la diapositive ${index + 1}`}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="focus:outline-none p-2"
                aria-label="Diapositive précédente"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M9.5 4L5.5 8L9.5 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decouvrir;
