// // LogosSection.tsx
// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// const LogosSection = ({ brands }) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       x: ["0%", "-50%"],
//       transition: {
//         duration: 20,
//         repeat: Infinity,
//         ease: "linear",
//       },
//     });
//   }, [controls]);

//   return (
//     <div className="py-10 overflow-hidden bg-white">
//       <motion.div
//         className="flex gap-12 min-w-max"
//         animate={controls}
//       >
//         {/* Doublez les logos pour permettre un scroll infini fluide */}
//         {[...brands, ...brands].map((brand, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center"
//           >
//             <img
//               src={brand.src}
//               alt={brand.alt}
//               className="h-10 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default LogosSection;

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface Brand {
  src: string;
  alt: string;
}

interface LogosSectionProps {
  brands: Brand[];
}

const LogosSection: React.FC<LogosSectionProps> = ({ brands }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="py-10 overflow-hidden bg-white" aria-label="Logos des partenaires">
      <motion.div className="flex gap-12 min-w-max" animate={controls}>
        {/* Dupliquer la liste pour un défilement infini */}
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={brand.src}
              alt={brand.alt}
              loading="lazy"
              className="h-10 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default LogosSection;
