// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { MdArrowBackIos } from "react-icons/md";
// import { ArrowBigDown } from "lucide-react";

// const NewFeaturesSection = () => {
//   // Configuration du carrousel
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   // Données pour les cartes (traduites en arabe)
//   const cards = [
//     {
//       id: 1,
//       title: "أعد تخيل الذكاء الاصطناعي وتجربة العملاء",
//       description:
//         "انضم إلينا في حدث Refresh Paris 2024، موعدنا السنوي الكبير.",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
//       bgColor: "#109A60",
//     },
//     {
//       id: 2,
//       title: "لقد افتتحنا مركز بيانات جديد في دبي",
//       description:
//         "إطلاق مركز بيانات Freshworks الجديد للشرق الأوسط وأفريقيا.",
//       image:
//         "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000",
//       bgColor: "#0C954A",
//     },
//     {
//       id: 3,
//       title: "اكتشف Freddy AI Copilot: مُسرّع الإنتاجية النهائي",
//       description:
//         "استفد من قوة الذكاء الاصطناعي التوليدي وحسّن إنتاجية فرقك.",
//       image:
//         "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000",
//       bgColor: "#109859",
//     },
//     {
//       id: 4,
//       title: "هذا هو Freddy Freshworks",
//       description:
//         "اكتشف كيف يغير ذكاءنا الاصطناعي تجربة العملاء.",
//       image:
//         "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000",
//       bgColor: "#12A288",
//     },
//   ];

//   return (
//     <section className="py-20 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* En-tête traduit en arabe */}
//         <div className="text-center mb-16">
//           <span className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
//             الاتجاهات
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//             اكتشف الجديد
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             جديدنا، أحداثنا، ورؤيتنا: كل ما تحتاجه لمعرفة كيف تجعل Freshworks العمل أكثر إنتاجية، بساطة، وإنسانية باستخدام الذكاء الاصطناعي المتقدم.
//           </p>
//           <a
//             href="#"
//             className="inline-flex items-center text-primary font-medium hover:opacity-[0.6] hover:underline transition-colors duration-300"
//           >
//             اكتشف كل أخبارنا
//             <MdArrowBackIos/>
          
//           </a>
//         </div>

//         {/* Carrousel */}
//         <Slider {...settings}>
//           {cards.map((card) => (
//             <div key={card.id} className="px-4">
//               <div
//                 className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//                 style={{ backgroundColor: card.bgColor }}
//               >
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-white mb-4">
//                     {card.title}
//                   </h3>
//                   <p className="text-white/80 mb-6">{card.description}</p>
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-white font-medium hover:text-white/80 transition-colors duration-300"
//                   >
//                     اكتشف المزيد
//                     <svg
//                       className="w-4 h-4 ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default NewFeaturesSection;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos } from "react-icons/md";
import { ArrowBigDown } from "lucide-react";

const NewFeaturesSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    // amélioration de la navigation pour l’accessibilité
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appendDots: (dots: any) => (
      <div role="tablist" className="mt-4">
        <ul style={{ margin: 0 }}> {dots} </ul>
      </div>
    ),
  };

  const cards = [
    {
      id: 1,
      title: "أعد تخيل الذكاء الاصطناعي وتجربة العملاء",
      description:
        "انضم إلينا في حدث Refresh Paris 2024، موعدنا السنوي الكبير.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
      bgColor: "#109A60",
    },
    {
      id: 2,
      title: "لقد افتتحنا مركز بيانات جديد في دبي",
      description: "إطلاق مركز بيانات Freshworks الجديد للشرق الأوسط وأفريقيا.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000",
      bgColor: "#0C954A",
    },
    {
      id: 3,
      title: "اكتشف Freddy AI Copilot: مُسرّع الإنتاجية النهائي",
      description:
        "استفد من قوة الذكاء الاصطناعي التوليدي وحسّن إنتاجية فرقك.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000",
      bgColor: "#109859",
    },
    {
      id: 4,
      title: "هذا هو Freddy Freshworks",
      description: "اكتشف كيف يغير ذكاءنا الاصطناعي تجربة العملاء.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000",
      bgColor: "#12A288",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white" aria-labelledby="new-features-title">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
            الاتجاهات
          </span>
          <h2 id="new-features-title" className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            اكتشف الجديد
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            جديدنا، أحداثنا، ورؤيتنا: كل ما تحتاجه لمعرفة كيف تجعل Freshworks العمل أكثر إنتاجية، بساطة، وإنسانية باستخدام الذكاء الاصطناعي المتقدم.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:opacity-60 hover:underline transition-colors duration-300"
            aria-label="اكتشف كل أخبارنا"
          >
            اكتشف كل أخبارنا
            <MdArrowBackIos aria-hidden="true" />
          </a>
        </div>

        <Slider {...settings} aria-label="Carrousel des nouveautés">
          {cards.map((card) => (
            <div key={card.id} className="px-4">
              <div
                className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: card.bgColor }}
                role="article"
                aria-label={card.title}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white/80 mb-6">{card.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-white font-medium hover:text-white/80 transition-colors duration-300"
                    aria-label={`اكتشف المزيد sur ${card.title}`}
                  >
                    اكتشف المزيد
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewFeaturesSection;
