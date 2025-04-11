// import { motion } from "framer-motion";
// import {
//   Shield,
//   Lock,
//   AlertTriangle,
//   Code,
//   Server,
//   Database,
//   Eye,
// } from "lucide-react";
// import PageHeader from "@/components/PageHeader";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Link } from "react-router-dom";

// const CyberSecurity = () => {
//   // Animation variants for staggered children animations
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <div className="pt-20">
//       {/* Hero Section with animated gradient background */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-tr from-nanosoft-primary via-nanosoft-secondary to-nanosoft-accent opacity-90"></div>
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNSIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
//         <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
//           <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
//             الأمن السيبراني
//           </h1>
//           <p className="text-xl text-white/80 text-center max-w-3xl mx-auto">
//             حلول متكاملة لحماية بياناتك ومنشأتك من المخاطر الإلكترونية وتعزيز
//             الأمان الرقمي
//           </p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="container mx-auto px-4 py-12 md:py-20 relative z-10"
//         >
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="w-full md:w-1/2 text-white">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="text-3xl md:text-4xl font-bold mb-6"
//               >
//                 حماية متكاملة لأعمالك الرقمية
//               </motion.h2>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="text-lg mb-8 text-gray-100"
//               >
//                 في عصر التحول الرقمي، يعتبر الأمن السيبراني أحد أهم التحديات
//                 التي تواجه الشركات والمؤسسات. نحن نقدم حلول متكاملة لحماية بنيتك
//                 التحتية وبياناتك من الهجمات الإلكترونية المتطورة.
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 <Link to="/contact">
//                   <Button
//                     size="lg"
//                     className="bg-white md:text-xl text-nanosoft-primary hover:bg-gray-200"
//                   >
//                     تواصل معنا
//                   </Button>
//                 </Link>

//                 <Link to="/pricing">
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-white md:text-xl text-white bg-transparent hover:bg-white/10"
//                   >
//                     اكتشف المزيد
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="w-full md:w-1/2 flex justify-center"
//             >
//               <div className="relative w-72 h-72 md:w-96 md:h-96">
//                 <div className="absolute inset-0 rounded-full bg-nanosoft-primary/20 animate-pulse"></div>
//                 <div className="absolute inset-6 rounded-full bg-nanosoft-primary/30 animate-pulse [animation-delay:500ms]"></div>
//                 <div className="absolute inset-12 rounded-full bg-nanosoft-primary/40 animate-pulse [animation-delay:1000ms]"></div>
//                 <div className="absolute inset-0 w-full h-full flex items-center justify-center">
//                   <Shield
//                     className="w-24 h-24 md:w-32 md:h-32 text-white"
//                     strokeWidth={1.5}
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-3xl font-bold mb-4"
//             >
//               خدمات الأمن السيبراني
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-xl text-gray-600 max-w-3xl mx-auto"
//             >
//               نقدم مجموعة شاملة من الحلول الأمنية المتقدمة لحماية بيئتك الرقمية
//             </motion.p>
//           </div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {/* Service Card 1 */}
//             <motion.div variants={itemVariants} className="h-full">
//               <Card className="h-full border-t-4 border-t-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="pt-6">
//                   <div className="mb-4 p-3 bg-nanosoft-primary/10 rounded-full inline-block">
//                     <Shield className="h-8 w-8 text-nanosoft-primary" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">
//                     تقييم المخاطر الأمنية
//                   </h3>
//                   <p className="text-gray-600">
//                     نقوم بتحليل شامل لبنية نظامك الرقمي لتحديد نقاط الضعف
//                     والثغرات الأمنية المحتملة واقتراح الحلول المناسبة للحماية.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Service Card 2 */}
//             <motion.div variants={itemVariants} className="h-full">
//               <Card className="h-full border-t-4 border-t-nanosoft-secondary hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="pt-6">
//                   <div className="mb-4 p-3 bg-nanosoft-secondary/10 rounded-full inline-block">
//                     <Lock className="h-8 w-8 text-nanosoft-secondary" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">
//                     حماية البيانات والتشفير
//                   </h3>
//                   <p className="text-gray-600">
//                     حماية معلوماتك الحساسة باستخدام أحدث تقنيات التشفير وإدارة
//                     الهويات وضمان سرية البيانات في جميع مراحل المعالجة.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Service Card 3 */}
//             <motion.div variants={itemVariants} className="h-full">
//               <Card className="h-full border-t-4 border-t-nanosoft-tertiary hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="pt-6">
//                   <div className="mb-4 p-3 bg-nanosoft-tertiary/10 rounded-full inline-block">
//                     <AlertTriangle className="h-8 w-8 text-nanosoft-tertiary" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">
//                     الاستجابة للحوادث الأمنية
//                   </h3>
//                   <p className="text-gray-600">
//                     فريق متخصص للاستجابة السريعة للحوادث الأمنية وتقديم الدعم
//                     الفوري والحلول للتعامل مع الاختراقات والهجمات الإلكترونية.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Service Card 4 */}
//             <motion.div variants={itemVariants} className="h-full">
//               <Card className="h-full border-t-4 border-t-nanosoft-accent hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="pt-6">
//                   <div className="mb-4 p-3 bg-nanosoft-accent/10 rounded-full inline-block">
//                     <Code className="h-8 w-8 text-nanosoft-accent" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">
//                     تأمين التطبيقات والأنظمة
//                   </h3>
//                   <p className="text-gray-600">
//                     اختبار وتأمين تطبيقاتك وأنظمتك البرمجية ضد نقاط الضعف
//                     والثغرات، وتطبيق أفضل الممارسات لتطوير برمجيات آمنة.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Service Card 5 */}
//             <motion.div variants={itemVariants} className="h-full">
//               <Card className="h-full border-t-4 border-t-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="pt-6">
//                   <div className="mb-4 p-3 bg-nanosoft-primary/10 rounded-full inline-block">
//                     <Server className="h-8 w-8 text-nanosoft-primary" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">أمن البنية التحتية</h3>
//                   <p className="text-gray-600">
//                     حماية الشبكات والخوادم والبنية التحتية التقنية ضد التهديدات
//                     المختلفة باستخدام أحدث تقنيات الأمان والمراقبة المستمرة.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Service Card 6 */}
//             <motion.div variants={itemVariants} className="h-full">
//               <Card className="h-full border-t-4 border-t-nanosoft-accent hover:shadow-lg transition-shadow duration-300">
//                 <CardContent className="pt-6">
//                   <div className="mb-4 p-3 bg-nanosoft-accent/10 rounded-full inline-block">
//                     <Eye className="h-8 w-8 text-nanosoft-accent" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">
//                     المراقبة الأمنية المستمرة
//                   </h3>
//                   <p className="text-gray-600">
//                     مراقبة مستمرة 24/7 لأنظمتك وشبكاتك للكشف المبكر عن التهديدات
//                     والهجمات المحتملة والتعامل معها بسرعة وكفاءة.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-3xl font-bold mb-4"
//             >
//               منهجيتنا في الأمن السيبراني
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-xl text-gray-600 max-w-3xl mx-auto"
//             >
//               نتبع نهجًا شاملًا ومنظمًا لتأمين بيئتك الرقمية
//             </motion.p>
//           </div>

//           <div className="relative">
//             {/* Vertical line connecting the process steps */}
//             <div className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-nanosoft-primary/20 hidden md:block"></div>

//             {/* Process Step 1 */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//               className="flex flex-col md:flex-row items-center mb-12"
//             >
//               <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0 order-2 md:order-1">
//                 <div className="p-6 rounded-lg shadow-lg bg-white">
//                   <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
//                     التقييم والتشخيص
//                   </h3>
//                   <p className="text-gray-600">
//                     نبدأ بتحليل شامل لبنيتك التحتية الرقمية وتحديد نقاط الضعف
//                     والمخاطر المحتملة والثغرات الأمنية التي قد تكون موجودة في
//                     أنظمتك.
//                   </p>
//                 </div>
//               </div>
//               <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
//                 <div className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10">
//                   1
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 order-3"></div>
//             </motion.div>

//             {/* Process Step 2 */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="flex flex-col md:flex-row items-center mb-12"
//             >
//               <div className="w-full md:w-1/2 order-3"></div>
//               <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
//                 <div className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10">
//                   2
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2 md:order-3">
//                 <div className="p-6 rounded-lg shadow-lg bg-white">
//                   <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
//                     تصميم استراتيجية الأمان
//                   </h3>
//                   <p className="text-gray-600">
//                     بناءً على نتائج التقييم، نقوم بتصميم استراتيجية أمنية
//                     متكاملة تناسب احتياجات عملك وتعالج المخاطر المحددة بأكثر
//                     الطرق فعالية.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Process Step 3 */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="flex flex-col md:flex-row items-center mb-12"
//             >
//               <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0 order-2 md:order-1">
//                 <div className="p-6 rounded-lg shadow-lg bg-white">
//                   <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
//                     تنفيذ الحلول الأمنية
//                   </h3>
//                   <p className="text-gray-600">
//                     نقوم بتنفيذ الحلول الأمنية المناسبة مثل أنظمة الحماية من
//                     الاختراق وجدران الحماية وأنظمة مراقبة الشبكة والتشفير وإدارة
//                     الهويات.
//                   </p>
//                 </div>
//               </div>
//               <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
//                 <div className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10">
//                   3
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 order-3"></div>
//             </motion.div>

//             {/* Process Step 4 */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="flex flex-col md:flex-row items-center"
//             >
//               <div className="w-full md:w-1/2 order-3"></div>
//               <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
//                 <div className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10">
//                   4
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2 md:order-3">
//                 <div className="p-6 rounded-lg shadow-lg bg-white">
//                   <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
//                     المراقبة والتحسين المستمر
//                   </h3>
//                   <p className="text-gray-600">
//                     نوفر خدمات مراقبة مستمرة وتحديثات دورية لضمان الحماية
//                     المستمرة ضد التهديدات المتطورة وتحسين مستوى الأمان باستمرار.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-nanosoft-primary to-nanosoft-accent text-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="max-w-3xl mx-auto text-center"
//           >
//             <h2 className="text-3xl font-bold mb-6">
//               احمِ عملك الآن مع حلولنا للأمن السيبراني
//             </h2>
//             <p className="text-xl mb-8 text-green-50">
//               تواصل معنا اليوم للحصول على استشارة مجانية ومعرفة كيف يمكننا
//               مساعدتك في حماية أعمالك وبياناتك
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Link to="/pricing">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="text-nanosoft-primary hover:text-white border-white hover:bg-white/10"
//                 >
//                   تعرف على المزيد
//                 </Button>
//               </Link>

//               <Link to="/contact">
//                 <Button
//                   size="lg"
//                   className="bg-transparent text-white border border-white hover:bg-white hover:text-nanosoft-primary"
//                 >
//                   طلب استشارة مجانية
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CyberSecurity;


import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  AlertTriangle,
  Code,
  Server,
  Database,
  Eye,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CyberSecurity = () => {
  // Variantes pour l’animation en cascade
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden" aria-labelledby="cybersecurity-hero">
        <div className="absolute inset-0 bg-gradient-to-tr from-nanosoft-primary via-nanosoft-secondary to-nanosoft-accent opacity-90" aria-hidden="true"></div>
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNSIvPjwvZz48L2c+PC9zdmc+')] opacity-20"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
          <h1
            id="cybersecurity-hero"
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          >
            الأمن السيبراني
          </h1>
          <p className="text-xl text-white/80 text-center max-w-3xl mx-auto">
            حلول متكاملة لحماية بياناتك ومنشأتك من المخاطر الإلكترونية et renforcer
            l’<strong>sécurité numérique</strong>.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-4 py-12 md:py-20 relative z-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                حماية متكاملة لأعمالك الرقمية
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg mb-8 text-gray-100"
              >
                في عصر التحول الرقمي، يعتبر الأمن السيبراني أحد أهم التحديات التي
                تواجه الشركات والمؤسسات. نقدم حلولاً شاملة لحماية بنيتك التحتية وبياناتك
                من الهجمات الإلكترونية المتطورة.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white md:text-xl text-nanosoft-primary hover:bg-gray-200"
                    aria-label="تواصل معنا"
                  >
                    تواصل معنا
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white md:text-xl text-white bg-transparent hover:bg-white/10"
                    aria-label="اكتشف المزيد"
                  >
                    اكتشف المزيد
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-nanosoft-primary/20 animate-pulse" aria-hidden="true"></div>
                <div className="absolute inset-6 rounded-full bg-nanosoft-primary/30 animate-pulse [animation-delay:500ms]" aria-hidden="true"></div>
                <div className="absolute inset-12 rounded-full bg-nanosoft-primary/40 animate-pulse [animation-delay:1000ms]" aria-hidden="true"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield
                    className="w-24 h-24 md:w-32 md:h-32 text-white"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="cybersecurity-services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              id="cybersecurity-services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              خدمات الأمن السيبراني
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              نقدم مجموعة شاملة من الحلول الأمنية المتقدمة لحماية بيئتك الرقمية.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Card 1 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-primary/10 rounded-full inline-block" aria-hidden="true">
                    <Shield className="h-8 w-8 text-nanosoft-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">تقييم المخاطر الأمنية</h3>
                  <p className="text-gray-600">
                    تحليل شامل لنظامك الرقمي لتحديد نقاط الضعف والثغرات الأمنية
                    واقتراح الحلول المناسبة.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-secondary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-secondary/10 rounded-full inline-block" aria-hidden="true">
                    <Lock className="h-8 w-8 text-nanosoft-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">حماية البيانات والتشفير</h3>
                  <p className="text-gray-600">
                    تأمين معلوماتك الحساسة باستخدام أحدث تقنيات التشفير وإدارة الهويات.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-tertiary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-tertiary/10 rounded-full inline-block" aria-hidden="true">
                    <AlertTriangle className="h-8 w-8 text-nanosoft-tertiary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">الاستجابة للحوادث الأمنية</h3>
                  <p className="text-gray-600">
                    فريق متخصص للاستجابة السريعة وتقديم الدعم الفوري للحوادث الأمنية.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-accent hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-accent/10 rounded-full inline-block" aria-hidden="true">
                    <Code className="h-8 w-8 text-nanosoft-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">تأمين التطبيقات والأنظمة</h3>
                  <p className="text-gray-600">
                    تأمين تطبيقاتك وأنظمتك ضد نقاط الضعف باستخدام أفضل الممارسات.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 5 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-primary/10 rounded-full inline-block" aria-hidden="true">
                    <Server className="h-8 w-8 text-nanosoft-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">أمن البنية التحتية</h3>
                  <p className="text-gray-600">
                    حماية الشبكات والخوادم باستخدام تقنيات المراقبة المستمرة.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 6 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-accent hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-accent/10 rounded-full inline-block" aria-hidden="true">
                    <Eye className="h-8 w-8 text-nanosoft-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">المراقبة الأمنية المستمرة</h3>
                  <p className="text-gray-600">
                    مراقبة 24/7 لأنظمتك للكشف المبكر عن التهديدات والتعامل معها.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16" aria-labelledby="cybersecurity-process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              id="cybersecurity-process"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              منهجيتنا في الأمن السيبراني
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              نتبع نهجاً شاملاً ومنظماً لتأمين بيئتك الرقمية.
            </motion.p>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-nanosoft-primary/20 hidden md:block" aria-hidden="true"></div>

            {/* Process Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0 order-2 md:order-1">
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
                    التقييم والتشخيص
                  </h3>
                  <p className="text-gray-600">
                    تحليل شامل لبنيتك التحتية لتحديد نقاط الضعف والمخاطر والثغرات الأمنية.
                  </p>
                </div>
              </div>
              <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div
                  className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10"
                  aria-label="الخطوة 1"
                >
                  1
                </div>
              </div>
              <div className="w-full md:w-1/2 order-3" aria-hidden="true"></div>
            </motion.div>

            {/* Process Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="w-full md:w-1/2 order-3" aria-hidden="true"></div>
              <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div
                  className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10"
                  aria-label="الخطوة 2"
                >
                  2
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2 md:order-3">
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
                    تصميم استراتيجية الأمان
                  </h3>
                  <p className="text-gray-600">
                    بناء استراتيجية أمنية متكاملة تناسب احتياجات عملك وتعالج المخاطر المحددة.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Process Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0 order-2 md:order-1">
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
                    تنفيذ الحلول الأمنية
                  </h3>
                  <p className="text-gray-600">
                    تنفيذ الحلول الأمنية المناسبة مثل جدران الحماية وأنظمة مراقبة الشبكة.
                  </p>
                </div>
              </div>
              <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div
                  className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10"
                  aria-label="الخطوة 3"
                >
                  3
                </div>
              </div>
              <div className="w-full md:w-1/2 order-3" aria-hidden="true"></div>
            </motion.div>

            {/* Process Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 order-3" aria-hidden="true"></div>
              <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div
                  className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10"
                  aria-label="الخطوة 4"
                >
                  4
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2 md:order-3">
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
                    المراقبة والتحسين المستمر
                  </h3>
                  <p className="text-gray-600">
                    خدمات مراقبة دورية وتحديثات مستمرة لضمان الحماية المستمرة ضد التهديدات.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-nanosoft-primary to-nanosoft-accent text-white" aria-labelledby="cybersecurity-cta">
        <div className="container mx-auto px-4">
          <motion.div
            id="cybersecurity-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              احمِ عملك الآن مع حلولنا للأمن السيبراني
            </h2>
            <p className="text-xl mb-8 text-green-50">
              تواصل معنا اليوم للحصول على استشارة مجانية ومعرفة كيف يمكننا مساعدتك في حماية أعمالك وبياناتك.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-nanosoft-primary hover:text-white border-white hover:bg-white/10"
                  aria-label="تعرف على المزيد"
                >
                  تعرف على المزيد
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-transparent text-white border border-white hover:bg-white hover:text-nanosoft-primary"
                  aria-label="طلب استشارة مجانية"
                >
                  طلب استشارة مجانية
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CyberSecurity;
