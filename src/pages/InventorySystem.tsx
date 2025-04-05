import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import {
  Check,
  Package,
  BarChart3,
  FileText,
  QrCode,
  Truck,
  AlertTriangle,
  Search,
  BarChart2,
} from "lucide-react";

// images :
import Stock from "../assets/InventorySystem/Stock.jpg";
import { Link } from "react-router-dom";

const features = [
  {
    title: "إدارة المخزون الشاملة",
    icon: <Package className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "تتبع جميع أصناف المخزون بسهولة وإدارة المنتجات بكميات وأماكن مختلفة",
  },
  {
    title: "إدارة المستودعات المتعددة",
    icon: <Truck className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "إدارة عدة مستودعات بكفاءة مع إمكانية نقل البضائع بينها بسهولة وتتبع الحركة",
  },
  {
    title: "نقاط إعادة الطلب",
    icon: <AlertTriangle className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "تنبيهات آلية عند وصول المخزون لحد معين لإعادة الطلب وتجنب نفاذ البضائع",
  },
  {
    title: "الباركود وتقنية QR",
    icon: <QrCode className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "دعم الباركود وتقنية QR لتسريع عمليات الجرد والبيع والتتبع السريع للمنتجات",
  },
  {
    title: "التقارير التفصيلية",
    icon: <BarChart2 className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "تقارير متنوعة ومفصلة حول حركة المخزون والمبيعات والمشتريات والتكاليف",
  },
  {
    title: "البحث المتقدم",
    icon: <Search className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "بحث متقدم عن المنتجات والمعاملات مع فلترة متطورة وخيارات متعددة",
  },
];

const benefits = [
  "تقليل تكاليف المخزون الزائد وتحسين التدفق النقدي",
  "زيادة دقة المخزون وتقليل الفروقات في الجرد",
  "تحسين كفاءة العمل وتقليل الوقت المستغرق في إدارة المخزون",
  "تحسين خدمة العملاء من خلال توفر المعلومات الدقيقة",
  "تقليل مخاطر نفاذ المخزون والخسائر المترتبة عليها",
  "تحسين عمليات التخطيط والتنبؤ بالاحتياجات المستقبلية",
];

const InventorySystem = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-28  md:pt-32">
      <PageHeader
        title="برنامج إدارة المخزون والمستودعات"
        description="نظام إدارة متكامل للمخزون والمستودعات مصمم خصيصاً للشركات والمؤسسات في ليبيا والعالم العربي"
      />

      {/* Hero Section with Image */}
      <div className="flex flex-col md:flex-row items-center gap-10 my-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-right"
        >
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-4">
            نظام متطور
          </Badge>
          <h1 className="text-4xl font-bold mb-6">
            إدارة المخزون والمستودعات بكفاءة عالية
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            برنامج إدارة المخزون من نانوسوفت يوفر لك كل ما تحتاجه لتنظيم مخزونك
            وإدارة المستودعات بدقة عالية وتحكم كامل في جميع عمليات الاستلام
            والصرف.
          </p>
          <div className="flex flex-wrap gap-4 justify-end">
            <Link to="/contact">
              <Button className="bg-nanosoft-primary hover:bg-nanosoft-primary/90">
                طلب عرض توضيحي
              </Button>
            </Link>

            <Link to="/pricing">
              <Button variant="outline">تعرف على المزيد</Button>
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
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
            alt="نظام إدارة المخزون"
            className="rounded-lg shadow-2xl w-full object-cover h-[400px]"
          />
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="my-20">
        <div className="text-center mb-12">
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-2">
            مميزات النظام
          </Badge>
          <h2 className="text-3xl font-bold">
            حلول متكاملة لإدارة المخزون والمستودعات
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            يوفر نظام إدارة المخزون من نانوسوفت مجموعة شاملة من الأدوات التي
            تلبي احتياجات مؤسستك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-right"
            >
              <div className="mb-4 flex justify-end">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="my-20 bg-gradient-to-r from-nanosoft-primary/5 to-nanosoft-primary/10 rounded-2xl p-8 lg:p-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <img
              src={Stock}
              alt="فوائد نظام المخزون"
              className="rounded-lg shadow-xl object-cover h-[400px] w-full"
            />
          </div>
          <div className="flex-1 text-right">
            <Badge className="bg-nanosoft-primary/20 text-nanosoft-primary hover:bg-nanosoft-primary/30 mb-4">
              لماذا تختارنا؟
            </Badge>
            <h2 className="text-3xl font-bold mb-6">
              فوائد استخدام نظام إدارة المخزون من نانوسوفت
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-nanosoft-primary rounded-full p-1 flex-shrink-0 mr-2">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <Link to="/pricing">
              <Button className="mt-8 bg-nanosoft-primary hover:bg-nanosoft-primary/90">
                ابدأ الآن مجاناً
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="my-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          جاهز لتحسين إدارة المخزون في شركتك؟
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          انضم إلى آلاف الشركات التي تستخدم نظام إدارة المخزون من نانوسوفت
          للتحكم في مخزونها بكفاءة وفعالية
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/pricing">
            <Button className="bg-nanosoft-primary hover:bg-nanosoft-primary/90 px-8 py-6 text-lg">
              ابدأ الاشتراك مجانا
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
  );
};

export default InventorySystem;
