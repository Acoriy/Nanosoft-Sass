// import { FaComments } from 'react-icons/fa';

// export type ServiceCategory = {
//   id: string;
//   name: string;
//   description: string;
//   icon: string;
// };



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
//     icon: "💬", // Icône de message (similaire au chat HR du lien)
//   },
//   {
//     id: "injaz",
//     name: " إنجاز لإدارة المشاريع",
//     description: "نظام متكامل لإدارة المشاريع والمهام وفرق العمل",
//     icon: "📋", // Icône de gestion de projet (similaire au lien Flaticon)
//   },
//   {
//     id: "erp",
//     name: " تخطيط موارد المؤسسة NanoSoft ERP",
//     description: "نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة",
//     icon: "🏢",
//   },
//   {
//     id: "software-development",
//     name: "تطوير البرمجيات",
//     description: "تطوير البرمجيات حسب احتياج العميل",
//     icon: "🌐",
//   },
// ];

// // Nous laissons l'interface PricingPlan pour la compatibilité type
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

// // Nous supprimons les données statiques de prix (pricingPlans)
// export const pricingPlans: PricingPlan[] = [];

// export const getPlansForService = (serviceId: string): PricingPlan[] => {
//   return []; // Retourne un tableau vide car nous utilisons maintenant Firebase
// };

import { FaComments } from "react-icons/fa";

export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

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
    icon: "💬",
  },
  {
    id: "injaz",
    name: "إنجاز لإدارة المشاريع",
    description: "نظام متكامل لإدارة المشاريع والمهام وفرق العمل",
    icon: "📋",
  },
  {
    id: "erp",
    name: "تخطيط موارد المؤسسة NanoSoft ERP",
    description: "نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة",
    icon: "🏢",
  },
  {
    id: "software-development",
    name: "تطوير البرمجيات",
    description: "تطوير البرمجيات حسب احتياج العميل",
    icon: "🌐",
  },
];

// On supprime les données statiques de prix
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

export const pricingPlans: PricingPlan[] = [];

export const getPlansForService = (serviceId: string): PricingPlan[] => {
  return []; // Retourne un tableau vide car les plans proviennent de Firebase
};
