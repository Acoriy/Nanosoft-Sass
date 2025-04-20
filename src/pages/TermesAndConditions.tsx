import { motion } from "framer-motion";
import { FileText, Shield, AlertTriangle, ExternalLink, Check, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";

const TermsAndConditions = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
      {/* Hero Section with Parallax Effect */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-r from-nanosoft-primary/10 to-nanosoft-secondary/10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <PageHeader 
            title="الشروط والأحكام"
            description="تعرف على الشروط والأحكام الخاصة باستخدام خدمات نانوسوفت"
          />
        </motion.div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-nanosoft-primary/5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-nanosoft-secondary/10"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </section>

      {/* Content Section */}
      <motion.section 
        className="container mx-auto px-4 py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Introduction */}
        <motion.div 
          className="max-w-3xl mx-auto mb-12 text-center"
          variants={sectionVariants}
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-nanosoft-primary/10">
              <FileText className="h-10 w-10 text-nanosoft-primary" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">شروط وأحكام استخدام خدمات نانوسوفت</h2>
          <p className="text-gray-600 leading-relaxed">
            مرحبًا بك في موقع شركة البرمجيات الدقيقة (نانوسوفت) للحلول البرمجية وخدمات تقنية المعلومات. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام الموقع أو أي من الخدمات والأنظمة والتطبيقات الخاصة بنا. باستخدامك لأي من خدماتنا، فإنك توافق على الالتزام بهذه الشروط.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <motion.div variants={sectionVariants} className="term-section">
            <Card className="border-r-4 border-r-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-nanosoft-primary/10">
                    <Check className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">1. قبول الشروط</h3>
                    <p className="text-gray-600 leading-relaxed">
                      باستخدامك لخدماتنا وأنظمتنا، فإنك توافق على هذه الشروط. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدامها.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 2 */}
          <motion.div variants={sectionVariants} className="term-section">
            <Card className="border-r-4 border-r-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-nanosoft-primary/10">
                    <Shield className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">2. استخدام الخدمات والأنظمة والتطبيقات</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pr-6 mt-2">
                      <li>يُسمح لك بالاستخدام لأغراض قانونية فقط.</li>
                      <li>يُحظر عليك الاستخدام لأي غرض غير قانوني أو احتيالي.</li>
                      <li>يُحظر عليك التدخل في تشغيل الأنظمة والموقع والتطبيقات أو محاولة الوصول غير المصرح به إلى أي جزء منها.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={sectionVariants} className="term-section">
            <Card className="border-r-4 border-r-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-nanosoft-primary/10">
                    <FileText className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">3. الملكية الفكرية</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pr-6 mt-2">
                      <li>جميع المحتويات الموجودة على الموقع، بما في ذلك النصوص والصور والشعارات والعلامات التجارية، هي ملك لشركة البرمجيات الدقيقة (نانوسوفت) للحلول البرمجية وخدمات تقنية المعلومات أو المرخصين التابعين لها.</li>
                      <li>يُحظر عليك نسخ أو توزيع أو تعديل أو استخدام أي محتوى من الموقع دون إذن كتابي من شركة البرمجيات الدقيقة (نانوسوفت) للحلول البرمجية وخدمات تقنية المعلومات.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 4 */}
          <motion.div variants={sectionVariants} className="term-section">
            <Card className="border-r-4 border-r-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-nanosoft-primary/10">
                    <AlertTriangle className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">4. حدود المسؤولية</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pr-6 mt-2">
                      <li>يتم توفير الموقع والأنظمة والتطبيقات وكافة الخدمات "كما هي" دون أي ضمانات من أي نوع.</li>
                      <li>لا تتحمل شركة البرمجيات الدقيقة (نانوسوفت) للحلول البرمجية وخدمات تقنية المعلومات مسؤولية أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية تنشأ عن استخدامك لخدماتنا وأنظمتنا وتطبيقاتنا.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 5 */}
          <motion.div variants={sectionVariants} className="term-section">
            <Card className="border-r-4 border-r-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-nanosoft-primary/10">
                    <ExternalLink className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">5. الروابط الخارجية</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pr-6 mt-2">
                      <li>قد يحتوي الموقع على روابط لمواقع خارجية.</li>
                      <li>لا تتحمل شركة البرمجيات الدقيقة (نانوسوفت) للحلول البرمجية وخدمات تقنية المعلومات مسؤولية محتوى أو دقة أو ممارسات الخصوصية الخاصة بالمواقع الخارجية.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 6 */}
          <motion.div variants={sectionVariants} className="term-section">
            <Card className="border-r-4 border-r-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-nanosoft-primary/10">
                    <RefreshCw className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">6. التغييرات على الشروط</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pr-6 mt-2">
                      <li>يجوز لشركة البرمجيات الدقيقة (نانوسوفت) للحلول البرمجية وخدمات تقنية المعلومات تعديل هذه الشروط في أي وقت.</li>
                      <li>سيتم نشر أي تغييرات على هذه الشروط على الموقع.</li>
                      <li>يُعتبر استخدامك المستمر للموقع وأي تطبيقات أو أنظمة أو الخدمات بعد نشر أي تغييرات موافقة منك على هذه التغييرات.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Section 7 */}
          <motion.div variants={sectionVariants} className="term-section">
            <Card className="border-r-4 border-r-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-nanosoft-primary/10">
                    <Shield className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">7. القانون الحاكم</h3>
                    <p className="text-gray-600 leading-relaxed">
                      تخضع هذه الشروط وتفسر وفقًا لقوانين دولة ليبيا.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={sectionVariants} className="term-section">
            <Card className="border-r-4 border-r-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-nanosoft-primary/10">
                    <FileText className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">8. الاتصال بنا</h3>
                    <p className="text-gray-600 leading-relaxed">
                      إذا كان لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pr-6 mt-2">
                      <li>البريد الإلكتروني: info@nanosoft.ly</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        {/* <motion.div 
          className="flex justify-center mt-16"
          variants={sectionVariants}
        >
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-nanosoft-primary/10 hover:bg-nanosoft-primary/20 text-nanosoft-primary px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 group"
          >
            العودة إلى الأعلى
            <svg 
              className="w-5 h-5 transform rotate-180 group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </motion.div> */}
      </motion.section>
    </div>
  );
};

export default TermsAndConditions;