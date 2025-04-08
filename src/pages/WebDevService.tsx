import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Code,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Sparkles,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

// images :
import WebDev from "../assets/WebDevService/WebDevOurMethodology.jpg";

// Customer Logos : 
import Customer1 from "../assets/CustomersLogo/Picture1.jpg"; 
import Customer2 from "../assets/CustomersLogo/Picture2.jpg"; 
import Customer3 from "../assets/CustomersLogo/Picture3.jpg"; 
import Customer4 from "../assets/CustomersLogo/Picture7.jpg"; 
import Customer5 from "../assets/CustomersLogo/Picture5.jpg"; 
import Customer6 from "../assets/CustomersLogo/Picture8.jpg"; 


const WebDevService = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const serviceFeatures = [
    {
      icon: <Globe className="h-10 w-10 text-nanosoft-primary" />,
      title: "تصميم مواقع ويب احترافية",
      description:
        "تصميم مواقع ويب متوافقة مع جميع الأجهزة مع تجربة مستخدم مميزة",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-nanosoft-primary" />,
      title: "تطوير تطبيقات الجوال",
      description: "تطبيقات أندرويد و iOS عالية الأداء تلبي احتياجات عملك",
    },
    {
      icon: <Code className="h-10 w-10 text-nanosoft-primary" />,
      title: "تطوير واجهات برمجة التطبيقات",
      description:
        "تطوير واجهات برمجية تسمح بتكامل سلس بين مختلف الأنظمة والخدمات",
    },
    {
      icon: <Zap className="h-10 w-10 text-nanosoft-primary" />,
      title: "تحسين سرعة المواقع",
      description:
        "تحسين أداء المواقع لتقديم تجربة أسرع للمستخدمين وتحسين ترتيب محركات البحث",
    },
    {
      icon: <Shield className="h-10 w-10 text-nanosoft-primary" />,
      title: "أمان المواقع والتطبيقات",
      description: "تطبيق أفضل ممارسات الأمان لحماية بياناتك وبيانات عملائك",
    },
    {
      icon: <Headphones className="h-10 w-10 text-nanosoft-primary" />,
      title: "دعم فني مستمر",
      description:
        "خدمات صيانة ودعم مستمرة لضمان استمرارية عمل مواقعك وتطبيقاتك بكفاءة",
    },
  ];

  

  const clientLogos = [
    Customer1,
    Customer2,
    Customer3,
    Customer4,
    Customer5,
    Customer6,
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="flex-1 text-right order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6 flex flex-col gap-5 md:gap-8 ">
              <p>
                {" "}
                نحول <span className="text-nanosoft-primary">أفكارك</span> إلى
                تجارب{" "}
              </p>
              <p> رقمية استثنائية</p>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              فريق من المطورين والمصممين المحترفين لتحويل رؤيتك إلى واقع رقمي
              يتجاوز توقعاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-end">
              <Link to="/contact">
                <Button
                  onClick={() => navigate("/contact")}
                  className="bg-nanosoft-primary hover:bg-nanosoft-secondary text-white rounded-full px-6 md:px-8 py-3 md:py-6 text-base md:text-lg w-full sm:w-auto"
                >
                  احصل على استشارة مجانية
                </Button>
              </Link>

              <Link to="/pricing">
                <Button
                  variant="outline"
                  onClick={() => navigate("/pricing")}
                  className="border-nanosoft-primary text-nanosoft-primary hover:text-white hover:bg-nanosoft-primary rounded-full px-6 md:px-8 py-3 md:py-6 text-base md:text-lg w-full sm:w-auto"
                >
                  عرض الباقات والأسعار
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 order-1 md:order-2 w-full md:w-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
              alt="Web Development"
              className="w-full h-auto rounded-xl shadow-2xl object-cover max-h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10">
          <div className="text-center mb-10 md:mb-16">
            <motion.h2
              className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              لماذا تختار{" "}
              <span className="text-nanosoft-primary">نانو سوفت</span> لخدمات
              التطوير؟
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              نقدم خدمات احترافية مدعومة بخبرة واسعة في مجال تطوير المواقع
              والتطبيقات
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-right"
                variants={itemVariants}
              >
                <div className="mb-4 flex justify-end">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            منهجية عملنا
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            نتبع منهجية مدروسة من التخطيط حتى الإطلاق لضمان نتائج متميزة
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-16 px-8">
          <motion.ol
            className="relative border-r border-gray-200 text-right flex-1 ml-4 md:ml-0 w-full lg:w-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              {
                title: "التخطيط والتحليل",
                description: "نفهم احتياجاتك ونحدد المتطلبات والأهداف بدقة",
              },
              {
                title: "التصميم",
                description:
                  "نصمم واجهات مستخدم جذابة وسهلة الاستخدام تعكس هوية علامتك التجارية",
              },
              {
                title: "التطوير",
                description:
                  "نطور حلولك باستخدام أحدث التقنيات وأفضل الممارسات",
              },
              {
                title: "الاختبار وضمان الجودة",
                description:
                  "نختبر بدقة جميع الجوانب لضمان الأداء الأمثل والأمان",
              },
              {
                title: "الإطلاق والدعم",
                description: "نطلق مشروعك ونقدم الدعم المستمر لضمان نجاحه",
              },
            ].map((step, index) => (
              <li key={index} className="mb-8 md:mb-10 mr-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-nanosoft-primary rounded-full -right-4 ring-8 ring-white">
                  <span className="text-white font-bold">{index + 1}</span>
                </span>
                <h3 className="font-bold text-lg md:text-xl mb-1 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </li>
            ))}
          </motion.ol>

          <motion.div
            className="flex-1 w-full lg:w-auto order-first lg:order-last"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={WebDev}
              alt="Our Process"
              className="w-full h-auto rounded-xl shadow-xl object-cover max-h-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          عملاؤنا <span className="text-nanosoft-primary">المميزون</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              variants={itemVariants}
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-12 md:h-16 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 mb-4">
            هل أنت مستعد لتصبح شريك نجاحنا القادم؟
          </p>
          <Link to="/pricing">
            <Button
              onClick={() => navigate("/contact")}
              className="bg-nanosoft-primary hover:bg-nanosoft-secondary text-white rounded-full px-8 py-4"
            >
              انضم إلى عملائنا
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          className="bg-gradient-to-r from-nanosoft-primary to-nanosoft-secondary rounded-3xl p-6 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            جاهز لبدء مشروعك الرقمي؟
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90">
            تواصل معنا اليوم واحصل على استشارة مجانية لتحويل فكرتك إلى واقع
            ملموس
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                onClick={() => navigate("/contact")}
                className="border bg-white text-nanosoft-primary hover:border-white hover:text-white hover:bg-nanosoft-primary rounded-full px-6 md:px-8 py-3 md:py-6 text-base md:text-lg w-full sm:w-auto"
              >
                تواصل معنا
              </Button>
            </Link>

            <Link to="/pricing">
              <Button
                variant="outline"
                onClick={() => navigate("/pricing")}
                className="border-white text-white bg-nanosoft-primary hover:bg-white hover:text-nanosoft-primary rounded-full px-6 md:px-8 py-3 md:py-6 text-base md:text-lg w-full sm:w-auto"
              >
                عرض خطط الأسعار
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WebDevService;
