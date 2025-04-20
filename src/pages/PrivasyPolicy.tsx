import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  // Animation variants pour les différentes sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Variants pour la liste
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>سياسة الخصوصية - نانوسوفت</title>
        <meta name="description" content="سياسة الخصوصية لشركة البرمجيات الدقيقة (نانوسوفت) للحلول البرمجية وخدمات تقنية المعلومات" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header Section with Parallax Effect */}
        <motion.div 
          className="relative w-full h-64 md:h-80 bg-nanosoft-primary overflow-hidden flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-nanosoft-primary/90 to-nanosoft-accent/90"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          <motion.div 
            className="relative z-10 text-center px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">سياسة الخصوصية</h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              نلتزم بحماية خصوصية معلوماتك الشخصية
            </p>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Introduction */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">سياسة الخصوصية لشركة البرمجيات الدقيقة (نانوسوفت)</h2>
              <p className="text-gray-700 leading-relaxed">
                تلتزم شركة البرمجيات الدقيقة (نانوسوفت) للحلول البرمجية وخدمات تقنية المعلومات ("نحن"، "الشركة") بكافة أنظمتها وموقعها وتطبيقاتها بحماية خصوصية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا والكشف عن معلوماتك عندما تزور موقعنا الإلكتروني ("الموقع") أو تستخدم خدماتنا ("الخدمات").
              </p>
            </motion.div>
            
            <Separator className="my-8" />

            {/* Section 1 */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-bold">1</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">المعلومات التي نجمعها</h3>
              </div>
              <div className="pr-14">
                <p className="text-gray-700 mb-3 leading-relaxed">قد نقوم بجمع أنواع مختلفة من المعلومات، بما في ذلك:</p>
                <motion.ul className="list-disc list-inside text-gray-700 space-y-2 pr-5">
                  <motion.li variants={listItemVariants} className="leading-relaxed">المعلومات التعريفية: مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف وأي معلومات تعريفية أخرى للمستخدم.</motion.li>
                </motion.ul>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-bold">2</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">كيف نجمع البيانات الشخصية</h3>
              </div>
              <div className="pr-14">
                <motion.ul className="list-disc list-inside text-gray-700 space-y-3 pr-5">
                  <motion.li variants={listItemVariants} className="leading-relaxed">عبر المواقع: يمكننا أن نجمع المعلومات الشخصية عبر المواقع؛ مثلا: عند تسجيل الدخول بعد الاشتراك في الخدمة. او عند تجديد الخدمة.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">من خلال المتصفح أو الجهاز الخاص بكم: يتم جمع بعض المعلومات بواسطة معظم المتصفحات أو من خلال جهازكم تلقائيا. نستخدم هذه المعلومات لأغراض الإحصائيات وضمان حسن عمل المواقع والتطبيقات.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">من خلال ملفات سجل الخادم: إنّ "عنوان بروتوكول الإنترنت IP" الخاص بكم هو رقم يُخصّص تلقائيا للحاسوب أو الجهاز الذي تستخدمونه من قبل موفّر خدمة الإنترنت الخاص بكم. ويتمّ تحديد عنوان بروتوكول الإنترنت وتسجيله تلقائيًا في ملفات سجل الخادم كلّما قام المستخدم بزيارة المواقع، مع تحديد وقت الزيارة والصفحة/الصفحات التي جرت زيارتها.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">باستخدام ملفات تعريف الارتباط "الكوكيز" تتيح ملفات تعريف الارتباط لخادم الويب نقل البيانات إلى حاسوب أو جهاز لغرض حفظها ولأغراض أخرى. إن كنتم لا تريدون أن يتم جمع المعلومات من خلال استخدام ملفات تعريف الارتباط، هناك إجراء بسيط متوفر في معظم المتصفحات يتيح لكم عدم استخدام ملفات تعريف الارتباط.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">من خلال استخدامكم للتطبيقات: عند تنزيل أو استخدام أحد التطبيقات، يمكننا نحن ومقدّمو الخدمات لدينا أن نتتبّع ونجمع بيانات استخدام التطبيق، مثل وقت وتاريخ دخول التطبيق الموجود على جهازكم إلى خوادمنا والمعلومات والملفات التي تم الدخول اليها بالاعتماد على رقم هاتفك او عنوان بروتوكول الانترنت.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">من خلال الموقع الجغرافي: قد نجمع معلومات حول الموقع الجغرافي لجهازكم وذلك للأغراض الإحصائية فقط.</motion.li>
                </motion.ul>
                <p className="text-gray-700 mt-3 leading-relaxed">قد نلجأ في بعض الحالات ان نستخدم خدمات الطرف الثالث مثل Google Analytics أو Google Search Console لتحسين تجربة المستخدم عبر الاحصائيات المقدمة من هذه الخدمات</p>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-bold">3</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">كيفية استخدامنا للمعلومات</h3>
              </div>
              <div className="pr-14">
                <p className="text-gray-700 mb-3 leading-relaxed">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                <motion.ul className="list-disc list-inside text-gray-700 space-y-2 pr-5">
                  <motion.li variants={listItemVariants} className="leading-relaxed">تقديم الخدمات وتحسينها.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">الرد على استفساراتك وطلباتك.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">إرسال رسائل بريد إلكتروني تسويقية وعروض ترويجية (يمكنك إلغاء الاشتراك في أي وقت).</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">تحليل استخدام الموقع وتحسين تجربة المستخدم.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">حماية حقوقنا وممتلكاتنا.</motion.li>
                </motion.ul>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-bold">4</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">مشاركة المعلومات</h3>
              </div>
              <div className="pr-14">
                <p className="text-gray-700 leading-relaxed">لا نقوم بمشاركة المعلومات مع أي جهة خارجية، الشركة ملتزمة بالحفاظ على بيانات الزبائن وحمايتها بأفضل الطرق لضمان أمنها وسرية المعلومات.</p>
              </div>
            </motion.div>
            
            {/* Section 5 */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-bold">5</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">أمان المعلومات</h3>
              </div>
              <div className="pr-14">
                <p className="text-gray-700 leading-relaxed mb-3">
                  نعتمد في خدمتنا على تدابير أمنية نظامية وفنية وإدارية عندما يتعلق الأمر بحماية المستخدمين وذلك بحماية المعلومات الشخصية وتوفير أعلى درجات الحماية في الخوادم والمواقع والتطبيقات، طبعا في عالم الانترنت الواسع والمتطور يوميا لا يمكن أن نضمن امانا تاما ولكن نحن على ثقة أننا وبشكل دائم نعمل على زيادة أمان وحماية مستخدمي الأنظمة الخاصة بالشركة.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  إذا كان لديكم أي سبب يدفعكم إلى الاعتقاد بأنّ نشاطكم معنا لم يعد آمنًا (مثلا، إذا شعرتم بأنّه قد تم اختراق أمن أي حساب لديكم معنا)، نرجو منكم إخطارنا على الفور بالمشكلة من خلال الاتصال بنا وفقًا للنموذج الوارد في الصفحة الرئيسية (اتصل بنا).
                </p>
              </div>
            </motion.div>
            
            {/* Section 6 */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-bold">6</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">فترة الاحتفاظ بالمعلومات</h3>
              </div>
              <div className="pr-14">
                <p className="text-gray-700 leading-relaxed">
                  سنحتفظ بمعلوماتكم الشخصية للفترة اللازمة من أجل تحقيق الأغراض المذكورة في هذه السياسة من خدمات وتحسينات وغيرها.
                </p>
              </div>
            </motion.div>
            
            {/* Section 7 */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-bold">7</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">حقوقك</h3>
              </div>
              <div className="pr-14">
                <p className="text-gray-700 mb-3 leading-relaxed">لديك الحق في:</p>
                <motion.ul className="list-disc list-inside text-gray-700 space-y-2 pr-5">
                  <motion.li variants={listItemVariants} className="leading-relaxed">الوصول إلى معلوماتك الشخصية وتصحيحها وحذفها.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">الاعتراض على معالجة معلوماتك الشخصية.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">طلب تقييد معالجة معلوماتك الشخصية.</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">نقل بياناتك.</motion.li>
                </motion.ul>
              </div>
            </motion.div>
            
            {/* Section 8 */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-bold">8</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">تغييرات على سياسة الخصوصية</h3>
              </div>
              <div className="pr-14">
                <p className="text-gray-700 leading-relaxed">
                  قد نجري تغييرات على هذه السياسة. لذلك، نرجو منكم إلقاء نظرة عليها من حين لآخر وسنقوم بإضافة تاريخ عملية التحديث في كل مرة يتم تحديث سياسة الخصوصية في أعلى هذه الصفحة. يسري مفعول أي تغييرات قد نجريها على سياسة حماية الخصوصية منذ لحظة نشر سياسة حماية الخصوصية المراجعة على الموقع. ويعني استخدامكم المواقع بعد إجراء هذه التغييرات أنّكم توافقون على سياسة حماية الخصوصية.
                </p>
              </div>
            </motion.div>
            
            {/* Section 9 */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="flex items-center mb-4 gap-3">
                <div className="w-10 h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center text-nanosoft-primary font-bold">9</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">الاتصال بنا</h3>
              </div>
              <div className="pr-14">
                <p className="text-gray-700 mb-3 leading-relaxed">إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:</p>
                <motion.ul className="list-disc list-inside text-gray-700 space-y-2 pr-5">
                  <motion.li variants={listItemVariants} className="leading-relaxed">رقم الهاتف: 218918889193+</motion.li>
                  <motion.li variants={listItemVariants} className="leading-relaxed">البريد الإلكتروني: info@nanosoft.ly</motion.li>
                </motion.ul>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.div 
              className="mt-12 text-center text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              آخر تحديث: {new Date().toLocaleDateString('ar-LY')}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;