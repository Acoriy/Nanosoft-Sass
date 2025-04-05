import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Check,
  Users,
  Clock,
  Calendar,
  BarChart3,
  MessageSquare,
  FileText,
  Kanban,
  LineChart,
  CheckCircle2,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Images
// import DashboardImg from "../assets/ProjectManagement/dashboard.jpg";
// import TaskManagementImg from "../assets/ProjectManagement/task-management.jpg";
// import TeamCollaborationImg from "../assets/ProjectManagement/team-collaboration.jpg";
// import TimeTrackingImg from "../assets/ProjectManagement/time-tracking.jpg";
// import ReportingImg from "../assets/ProjectManagement/reporting.jpg";
// import HeroImg from "../assets/ProjectManagement/hero-image.jpg";

import DashboardImg from "../assets/Dashboard1.jpg";
import TeamCollaborationImg from "../assets/ERPSystem/resurece human.jpg"
import HeroImg from "../assets/HRSystem/magmentHR2.jpg"

const features = [
  {
    title: "إدارة المشاريع",
    icon: <Kanban className="h-8 w-8 text-nanosoft-primary" />,
    description: "إدارة متكاملة للمشاريع مع تتبع فعال للمهام والإنجازات والمخرجات ضمن الميزانية والمواعيد المحددة",
    points: [
      "تخطيط وجدولة المشاريع بطريقة مرنة",
      "تتبع سير العمل ونسب الإنجاز بدقة",
      "إدارة الموارد وتوزيع المهام بكفاءة",
      "متابعة ميزانية المشروع والتكاليف الفعلية",
    ],
    image: DashboardImg,
  },
  {
    title: "إدارة المهام",
    icon: <Check className="h-8 w-8 text-nanosoft-primary" />,
    description: "تنظيم وتتبع المهام بسهولة مع إمكانية تحديد الأولويات وتخصيص المسؤوليات ومتابعة الإنجاز",
    points: [
      "إنشاء وتوزيع المهام على أعضاء الفريق",
      "تحديد أولويات المهام وتواريخ الاستحقاق",
      "تتبع حالة التنفيذ والإنجاز للمهام",
      "إضافة ملاحظات ومرفقات على المهام",
    ],
    image: "https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525",
  },
  {
    title: "التعاون الفعال",
    icon: <Users className="h-8 w-8 text-nanosoft-primary" />,
    description: "منصة تعاونية تسهل التواصل وتبادل المعلومات بين أعضاء الفريق لتحسين الإنتاجية والتنسيق",
    points: [
      "مشاركة المستندات والملفات بين أعضاء الفريق",
      "التعليق والنقاش حول المهام والمشاريع",
      "رؤية متكاملة لعمل الفريق ومساهمات كل عضو",
      "إشعارات فورية للمستجدات والتحديثات",
    ],
    image: TeamCollaborationImg,
  },
  {
    title: "تتبع الوقت",
    icon: <Clock className="h-8 w-8 text-nanosoft-primary" />,
    description: "تسجيل وتتبع الوقت المستغرق في المهام والمشاريع بدقة لتحليل الإنتاجية وتحسين توزيع الموارد",
    points: [
      "تسجيل ساعات العمل على المهام والمشاريع",
      "تحليل توزيع الوقت على مختلف الأنشطة",
      "تقارير الإنتاجية والكفاءة الزمنية",
      "حساب تكلفة العمل بناءً على الوقت المستغرق",
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUEuhJ9ZbZBA4qoX7l7SSIp19heiE0OLKtA&s",
  },
  {
    title: "التقارير والتحليلات",
    icon: <BarChart3 className="h-8 w-8 text-nanosoft-primary" />,
    description: "تقارير تفصيلية وتحليلات متقدمة تمنحك رؤية واضحة عن أداء المشاريع والفرق وتوزيع الموارد",
    points: [
      "لوحات متابعة تفاعلية لمراقبة الأداء",
      "تقارير تفصيلية عن تقدم المشاريع والمهام",
      "مؤشرات قياس الأداء الرئيسية KPIs",
      "تحليل اتجاهات الإنتاجية والأداء على مدار الوقت",
    ],
    image: "https://databeat.io/wp-content/uploads/2023/11/Executive-Management-Reporting-IMG.jpg",
  },
];

const benefits = [
  {
    title: "زيادة الإنتاجية",
    description: "تحسين كفاءة فريق العمل وتقليل الوقت المهدر في المتابعة والتنسيق من خلال منصة موحدة",
    icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
  },
  {
    title: "تحسين التواصل",
    description: "تعزيز التعاون والتنسيق بين أعضاء الفريق مع تقليل الاجتماعات غير الضرورية والمراسلات المتكررة",
    icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "دقة المتابعة",
    description: "متابعة دقيقة لسير المشاريع والمهام مع تنبيهات فورية عن أي تأخير أو مشكلات محتملة",
    icon: <Clock className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "قرارات أفضل",
    description: "اتخاذ قرارات مدروسة بناءً على بيانات حقيقية ومؤشرات أداء واضحة عن المشاريع والموارد",
    icon: <LineChart className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "توثيق العمل",
    description: "حفظ كامل لتاريخ المشاريع والمهام والإنجازات مع إمكانية الرجوع إليها في أي وقت",
    icon: <FileText className="h-6 w-6 text-teal-500" />,
  },
  {
    title: "مرونة وتخصيص",
    description: "تخصيص النظام ليناسب طبيعة عمل مؤسستك مع إمكانية التوسع والتكيف مع الاحتياجات المتغيرة",
    icon: <Settings className="h-6 w-6 text-indigo-500" />,
  },
];

const testimonials = [
  {
    content: "ساعدنا نظام إنجاز على تنظيم العمل وزيادة إنتاجية الفريق بأكثر من 40%، مع تحسين واضح في جودة التسليم وسرعته.",
    author: "محمد عبدالله",
    position: "مدير المشاريع، شركة الأفق للتقنية",
  },
  {
    content: "الآن أصبح لدينا رؤية واضحة عن سير العمل في جميع المشاريع، مما ساعدنا على توقع المشكلات قبل حدوثها ومعالجتها مبكراً.",
    author: "سارة أحمد",
    position: "المدير التنفيذي، مؤسسة الإبداع",
  },
  {
    content: "نظام سهل الاستخدام وفعال، وفر علينا الكثير من الوقت الذي كان يضيع في المتابعة والتنسيق بين أعضاء الفريق.",
    author: "أحمد علي",
    position: "قائد فريق التطوير، تكنولوجيا المستقبل",
  },
];

const Injaze = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 my-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-right"
          >
            <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-4">
              نظام إنجاز
            </Badge>
            <h1 className="text-4xl font-bold mb-6">
              نظام متكامل لإدارة المشاريع والمهام
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              منصة شاملة تمكنك من إدارة المشاريع وتتبع المهام وتنسيق عمل الفريق بكفاءة عالية، مما يساعد على إنجاز الأعمال في الوقت المحدد وضمن الميزانية المخططة.
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Link to="/contact">
                <Button className="bg-nanosoft-primary hover:bg-nanosoft-primary/90 px-6 py-6 text-lg">
                  طلب عرض توضيحي
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="px-6 py-6 text-lg">
                  تعرف على الأسعار
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <img
              src={HeroImg}
              alt="نظام إدارة المشاريع"
              className="rounded-lg shadow-2xl w-full object-cover h-[400px]"
            />
          </motion.div>
        </div>

        {/* Main Benefits Section */}
        <div className="my-20 bg-gradient-to-r from-nanosoft-primary/5 to-nanosoft-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-4">
              مميزات النظام
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              نظام إدارة مشاريع احترافي للشركات والمؤسسات
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              صمم نظام إنجاز خصيصاً لتلبية احتياجات الشركات والمؤسسات العربية مع دعم كامل للغة العربية وواجهة مستخدم سهلة وبديهية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rtl">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-right"
              >
                <div className="mb-4 flex justify-end">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Tabs */}
        <div className="my-20">
          <div className="text-center mb-12">
            <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-2">
              الوظائف الرئيسية
            </Badge>
            <h2 className="text-3xl font-bold">
              كل ما تحتاجه لإدارة مشاريعك بنجاح
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              يوفر نظام إنجاز مجموعة متكاملة من الأدوات والوظائف التي تساعدك على إدارة المشاريع والمهام بكفاءة عالية
            </p>
          </div>

          <Tabs 
            defaultValue="projects" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-6 w-full flex flex-wrap justify-center gap-2 min-h-fit">
              <TabsTrigger value="projects">إدارة المشاريع</TabsTrigger>
              <TabsTrigger value="tasks">إدارة المهام</TabsTrigger>
              <TabsTrigger value="collaboration">التعاون الفعال</TabsTrigger>
              <TabsTrigger value="time">تتبع الوقت</TabsTrigger>
              <TabsTrigger value="reports">التقارير والتحليلات</TabsTrigger>
            </TabsList>

            {features.map((feature, index) => (
              <TabsContent
                key={index}
                value={["projects", "tasks", "collaboration", "time", "reports"][index]}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 text-right">
                    <div className="mb-4 text-nanosoft-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>

                    <ul className="space-y-3">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/pricing">
                      <Button className="mt-4 bg-nanosoft-primary hover:bg-nanosoft-primary/90">
                        اكتشف المزيد
                      </Button>
                    </Link>
                  </div>

                  <div className="flex-1">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-lg shadow-lg w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* How It Works */}
        <div className="my-20">
          <div className="text-center mb-12">
            <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-2">
              آلية العمل
            </Badge>
            <h2 className="text-3xl font-bold">
              كيف يساعدك نظام إنجاز في إدارة مشاريعك
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              نظام متكامل يغطي جميع مراحل المشروع من التخطيط وحتى التسليم والتقييم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-right"
            >
              <div className="bg-nanosoft-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto md:mr-0">
                <Calendar className="h-8 w-8 text-nanosoft-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">التخطيط والجدولة</h3>
              <p className="text-gray-600">
                إنشاء خطط المشاريع وتحديد المراحل والأهداف وتواريخ التسليم وتوزيع الموارد بكفاءة
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-right"
            >
              <div className="bg-nanosoft-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto md:mr-0">
                <Kanban className="h-8 w-8 text-nanosoft-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">تنفيذ ومتابعة</h3>
              <p className="text-gray-600">
                تتبع تقدم العمل في الوقت الحقيقي مع تحديثات مباشرة عن حالة المهام والمشاريع وأي معوقات
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-right"
            >
              <div className="bg-nanosoft-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto md:mr-0">
                <BarChart3 className="h-8 w-8 text-nanosoft-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">تقييم وتحليل</h3>
              <p className="text-gray-600">
                قياس أداء المشاريع والفرق من خلال تقارير تفصيلية ومؤشرات أداء تساعد على التحسين المستمر
              </p>
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="my-20">
          <div className="text-center mb-12">
            <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-2">
              آراء العملاء
            </Badge>
            <h2 className="text-3xl font-bold">ماذا يقول عملاؤنا عن نظام إنجاز</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              تجارب حقيقية من شركات ومؤسسات استخدمت نظام إنجاز لتحسين إدارة مشاريعها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-right"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="my-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            جاهز لتحسين إدارة مشاريعك مع نظام إنجاز؟
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            انضم إلى مئات الشركات والمؤسسات التي تستخدم نظام إنجاز لتحسين كفاءة إدارة المشاريع وزيادة الإنتاجية
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/pricing">
              <Button className="bg-nanosoft-primary hover:bg-nanosoft-primary/90 px-8 py-6 text-lg">
                ابدأ الاستخدام الآن
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline" className="px-8 py-6 text-lg">
                تواصل مع فريق المبيعات
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Injaze;
