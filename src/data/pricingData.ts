import { FaComments } from 'react-icons/fa';

// export type ServiceCategory = {
//   id: string;
//   name: string;
//   description: string;
//   icon: string;
// };

// export type PricingPlan = {
//   id: string;
//   serviceId: string;
//   name: string;
//   price: number;
//   duration: string;
//   description: string;
//   features: string[];
//   popular: boolean;
// };

// export const serviceCategories: ServiceCategory[] = [
//   {
//     id: "accounting",
//     name: "برنامج محاسبة",
//     description: "برنامج محاسبة متكامل لإدارة الشركات",
//     icon: "💰",
//   },
//   {
//     id: "inventory",
//     name: "برنامج إدارة المخزون والمستودعات",
//     description: "نظام متكامل لإدارة المخزون والمستودعات",
//     icon: "📦",
//   },
//   {
//     id: "hr",
//     name: "برنامج إدارة شؤون الموظفين والموارد البشرية",
//     description: "نظام شامل لإدارة الموارد البشرية",
//     icon: "👥",
//   },
//   {
//     id: "erp",
//     name: "نظام تخطيط موارد المنشأة ERP",
//     description: "حل متكامل لإدارة جميع موارد المنشأة",
//     icon: "🏢",
//   },
//   {
//     id: "websites",
//     name: "تطوير المواقع والتطبيقات",
//     description: "تطوير مواقع وتطبيقات متكاملة",
//     icon: "🌐",
//   },
// ];

// export const pricingPlans: PricingPlan[] = [
//   // برنامج محاسبة
//   {
//     id: "accounting-basic",
//     serviceId: "accounting",
//     name: "الباقة الأساسية",
//     price: 499,
//     duration: "شهريًا",
//     description: "مناسبة للشركات الناشئة والمشاريع الصغيرة",
//     features: [
//       "إدارة الفواتير والمصروفات",
//       "متابعة الإيرادات والمصروفات",
//       "تقارير مالية أساسية",
//       "دعم فني لمدة شهر",
//       "تحديثات مجانية",
//     ],
//     popular: false,
//   },
//   {
//     id: "accounting-standard",
//     serviceId: "accounting",
//     name: "الباقة المتوسطة",
//     price: 999,
//     duration: "شهريًا",
//     description: "مناسبة للشركات المتوسطة والمشاريع المتنامية",
//     features: [
//       "جميع ميزات الباقة الأساسية",
//       "إدارة الضرائب",
//       "إدارة المصروفات المتقدمة",
//       "تقارير مالية متقدمة",
//       "دعم فني لمدة 3 أشهر",
//       "تدريب فريق العمل",
//     ],
//     popular: true,
//   },
//   {
//     id: "accounting-premium",
//     serviceId: "accounting",
//     name: "الباقة المتقدمة",
//     price: 1499,
//     duration: "شهريًا",
//     description: "مناسبة للشركات الكبيرة والمؤسسات",
//     features: [
//       "جميع ميزات الباقة المتوسطة",
//       "تكامل مع الأنظمة البنكية",
//       "إدارة الميزانيات المتقدمة",
//       "التحليل المالي المتقدم",
//       "دعم فني على مدار الساعة",
//       "تحديثات وتخصيصات خاصة",
//       "تدريب مستمر للفريق",
//     ],
//     popular: false,
//   },

//   // برنامج إدارة المخزون والمستودعات
//   {
//     id: "inventory-basic",
//     serviceId: "inventory",
//     name: "الباقة الأساسية",
//     price: 599,
//     duration: "شهريًا",
//     description: "مناسبة للمتاجر الصغيرة والمستودعات البسيطة",
//     features: [
//       "إدارة المخزون الأساسية",
//       "متابعة المنتجات",
//       "إدارة المشتريات البسيطة",
//       "تنبيهات المخزون",
//       "دعم فني لمدة شهر",
//     ],
//     popular: false,
//   },
//   {
//     id: "inventory-standard",
//     serviceId: "inventory",
//     name: "الباقة المتوسطة",
//     price: 1199,
//     duration: "شهريًا",
//     description: "مناسبة للمتاجر المتوسطة ومتعددة الفروع",
//     features: [
//       "جميع ميزات الباقة الأساسية",
//       "إدارة متعددة المستودعات",
//       "نظام الباركود والمسح الضوئي",
//       "تتبع الشحنات والتوصيل",
//       "تقارير مخزون متقدمة",
//       "دعم فني لمدة 3 أشهر",
//     ],
//     popular: true,
//   },
//   {
//     id: "inventory-premium",
//     serviceId: "inventory",
//     name: "الباقة المتقدمة",
//     price: 1999,
//     duration: "شهريًا",
//     description: "مناسبة للمتاجر الكبيرة وسلاسل التوريد",
//     features: [
//       "جميع ميزات الباقة المتوسطة",
//       "التنبؤ بالمخزون والطلب",
//       "إدارة سلسلة التوريد المتكاملة",
//       "تكامل مع أنظمة المحاسبة والمبيعات",
//       "مؤشرات أداء المخزون المتقدمة",
//       "تخصيصات حسب احتياجات العميل",
//       "دعم فني على مدار الساعة",
//     ],
//     popular: false,
//   },

//   // برنامج إدارة شؤون الموظفين والموارد البشرية
//   {
//     id: "hr-basic",
//     serviceId: "hr",
//     name: "الباقة الأساسية",
//     price: 699,
//     duration: "شهريًا",
//     description: "مناسبة للشركات الصغيرة (حتى 20 موظف)",
//     features: [
//       "إدارة بيانات الموظفين",
//       "متابعة الحضور والانصراف",
//       "إدارة الإجازات",
//       "حساب الرواتب الأساسي",
//       "تقارير الموارد البشرية الأساسية",
//     ],
//     popular: false,
//   },
//   {
//     id: "hr-standard",
//     serviceId: "hr",
//     name: "الباقة المتوسطة",
//     price: 1299,
//     duration: "شهريًا",
//     description: "مناسبة للشركات المتوسطة (حتى 100 موظف)",
//     features: [
//       "جميع ميزات الباقة الأساسية",
//       "إدارة التوظيف والمقابلات",
//       "نظام تقييم الأداء",
//       "نظام المكافآت والحوافز",
//       "تتبع التدريب والتطوير",
//       "تقارير متقدمة للموارد البشرية",
//       "دعم فني لمدة 3 أشهر",
//     ],
//     popular: true,
//   },
//   {
//     id: "hr-premium",
//     serviceId: "hr",
//     name: "الباقة المتقدمة",
//     price: 2499,
//     duration: "شهريًا",
//     description: "مناسبة للشركات الكبيرة (أكثر من 100 موظف)",
//     features: [
//       "جميع ميزات الباقة المتوسطة",
//       "تخطيط المسار الوظيفي",
//       "إدارة المواهب",
//       "تحليلات الموارد البشرية المتقدمة",
//       "تكامل مع الأنظمة المالية والإدارية",
//       "نظام الاقتراحات والشكاوى",
//       "تخصيصات حسب احتياجات الشركة",
//       "دعم فني على مدار الساعة",
//     ],
//     popular: false,
//   },

//   // نظام تخطيط موارد المنشأة ERP
//   {
//     id: "erp-basic",
//     serviceId: "erp",
//     name: "الباقة الأساسية",
//     price: 1999,
//     duration: "شهريًا",
//     description: "مناسبة للشركات الصغيرة والمتوسطة",
//     features: [
//       "إدارة المحاسبة الأساسية",
//       "إدارة المخزون الأساسية",
//       "إدارة الموارد البشرية الأساسية",
//       "إدارة المبيعات والمشتريات",
//       "التقارير الأساسية",
//       "دعم فني لمدة شهر",
//     ],
//     popular: false,
//   },
//   {
//     id: "erp-standard",
//     serviceId: "erp",
//     name: "الباقة المتوسطة",
//     price: 3499,
//     duration: "شهريًا",
//     description: "مناسبة للشركات المتوسطة والمتنامية",
//     features: [
//       "جميع ميزات الباقة الأساسية",
//       "إدارة علاقات العملاء",
//       "إدارة سلسلة التوريد",
//       "إدارة المشاريع",
//       "لوحات المعلومات التحليلية",
//       "تكامل مع الأنظمة الأخرى",
//       "تدريب فريق العمل",
//       "دعم فني لمدة 3 أشهر",
//     ],
//     popular: true,
//   },
//   {
//     id: "erp-premium",
//     serviceId: "erp",
//     name: "الباقة المتقدمة",
//     price: 5999,
//     duration: "شهريًا",
//     description: "مناسبة للشركات الكبيرة والمؤسسات",
//     features: [
//       "جميع ميزات الباقة المتوسطة",
//       "ذكاء الأعمال والتحليلات المتقدمة",
//       "أتمتة العمليات التجارية",
//       "تخطيط موارد التصنيع",
//       "إدارة دورة حياة المنتج",
//       "تخصيصات حسب احتياجات المؤسسة",
//       "تكامل مع جميع الأنظمة",
//       "دعم فني على مدار الساعة",
//       "استشارات تطويرية مستمرة",
//     ],
//     popular: false,
//   },

//   // تطوير المواقع والتطبيقات
//   {
//     id: "websites-basic",
//     serviceId: "websites",
//     name: "الباقة الأساسية",
//     price: 499,
//     duration: "شهريًا",
//     description: "مناسبة للشركات الناشئة والمشاريع الصغيرة",
//     features: [
//       "تصميم موقع من 5 صفحات",
//       "تصميم متوافق مع الأجهزة المحمولة",
//       "تحسين لمحركات البحث",
//       "ربط وسائل التواصل الاجتماعي",
//       "دعم فني لمدة شهر",
//     ],
//     popular: false,
//   },
//   {
//     id: "websites-standard",
//     serviceId: "websites",
//     name: "الباقة المتوسطة",
//     price: 999,
//     duration: "شهريًا",
//     description: "مناسبة للشركات المتوسطة والمشاريع المتنامية",
//     features: [
//       "تصميم موقع من 10 صفحات",
//       "تصميم متوافق مع الأجهزة المحمولة",
//       "تحسين لمحركات البحث",
//       "ربط وسائل التواصل الاجتماعي",
//       "لوحة تحكم متكاملة",
//       "دعم فني لمدة 3 أشهر",
//       "تدريب على استخدام الموقع",
//     ],
//     popular: true,
//   },
//   {
//     id: "websites-premium",
//     serviceId: "websites",
//     name: "الباقة المتقدمة",
//     price: 1499,
//     duration: "شهريًا",
//     description: "مناسبة للشركات الكبيرة والمؤسسات",
//     features: [
//       "تصميم موقع غير محدود الصفحات",
//       "تصميم فريد ومخصص",
//       "تحسين متقدم لمحركات البحث",
//       "ربط وسائل التواصل الاجتماعي",
//       "لوحة تحكم متكاملة",
//       "دعم فني لمدة سنة",
//       "تدريب على استخدام الموقع",
//       "استضافة مجانية لمدة سنة",
//       "تقارير شهرية عن أداء الموقع",
//     ],
//     popular: false,
//   },
// ];

// export const getPlansForService = (serviceId: string): PricingPlan[] => {
//   return pricingPlans.filter(plan => plan.serviceId === serviceId);
// };

// -------------------------------------------------------------------

export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

// Le tableau des catégories de services est maintenu
// export const serviceCategories: ServiceCategory[] = [
//   {
//     id: "accounting",
//     name: "حساباتي للإدارة المالية",
//     description: "برنامج محاسبة متكامل لإدارة الشركات",
//     icon: "💰",
//   },
//   {
//     id: "inventory",
//     name: "لوجستي لإدارة المخزون والمشتريات",
//     description: "نظام متكامل لإدارة المخزون والمستودعات",
//     icon: "📦",
//   },
//   {
//     id: "hr",
//     name: "بياناتي لإدارة الموارد البشرية",
//     description: "نظام شامل لإدارة الموارد البشرية",
//     icon: "👥",

//   },
//   {
//     id: "injaz",
//       name: "نظام إنجاز لإدارة المشاريع",
//       description: "نظام متكامل لإدارة المشاريع والمهام وفرق العمل",
//       icon: "🏢",
    
//   },
//   {
//     id: "erp",
//       name: "نظام تخطيط موارد المؤسسة NanoSoft ERP",
//       description: "نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة",
//     icon: "🏢",
//   },
//   {
//     id: "websites",
//     name: "تطوير البرمجيات",
//     description: "تطوير البرمجيات حسب احتياج العميل",
//     icon: "🌐",
//   },
// ];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "accounting",
    name: "حساباتي للإدارة المالية",
    description: "برنامج محاسبة متكامل لإدارة الشركات",
    icon: "💰",
  },
  {
    id: "inventory",
    name: "لوجستي لإدارة المخزون والمشتريات",
    description: "نظام متكامل لإدارة المخزون والمستودعات",
    icon: "📦",
  },
  {
    id: "hr",
    name: "بياناتي لإدارة الموارد البشرية",
    description: "نظام شامل لإدارة الموارد البشرية",
    icon: "💬", // Icône de message (similaire au chat HR du lien)
  },
  {
    id: "injaz",
    name: "نظام إنجاز لإدارة المشاريع",
    description: "نظام متكامل لإدارة المشاريع والمهام وفرق العمل",
    icon: "📋", // Icône de gestion de projet (similaire au lien Flaticon)
  },
  {
    id: "erp",
    name: "نظام تخطيط موارد المؤسسة NanoSoft ERP",
    description: "نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة",
    icon: "🏢",
  },
  {
    id: "websites",
    name: "تطوير البرمجيات",
    description: "تطوير البرمجيات حسب احتياج العميل",
    icon: "🌐",
  },
];

// Nous laissons l'interface PricingPlan pour la compatibilité type
export type PricingPlan = {
  id: string;
  serviceId: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular: boolean;
};

// Nous supprimons les données statiques de prix (pricingPlans)
export const pricingPlans: PricingPlan[] = [];

export const getPlansForService = (serviceId: string): PricingPlan[] => {
  return []; // Retourne un tableau vide car nous utilisons maintenant Firebase
};
