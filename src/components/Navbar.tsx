// import { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import {
//   ShieldCheck,
//   Globe,
//   Code,
//   Server,
//   Database,
//   Kanban,
//   Menu,
//   X,
//   ChevronRight,
//   Cloud,
//   Lock,
// } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// // logo image :
// import Logo from "../assets/Logo.png";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
//   const [activeMobileCategory, setActiveMobileCategory] = useState<
//     string | null
//   >(null);
//   const location = useLocation();
//   const dropdownRef = useRef(null);
//   const triggerRef = useRef(null);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // Disable body scroll when mobile menu is open
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isMobileMenuOpen]);

//   const handleMouseEnterDropdown = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setIsSolutionsOpen(true);
//   };

//   const handleMouseLeaveDropdown = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsSolutionsOpen(false);
//     }, 300); // Délai avant fermeture
//   };

//   const handleMouseEnterTrigger = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setIsSolutionsOpen(true);
//   };

//   const handleMouseLeaveTrigger = () => {
//     timeoutRef.current = setTimeout(() => {
//       // Vérifier si la souris n'est pas entrée dans le dropdown
//       if (!dropdownRef.current?.matches(":hover")) {
//         setIsSolutionsOpen(false);
//       }
//     }, 300);
//   };

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setActiveMobileCategory(null);
//   };

//   const toggleMobileCategory = (category: string) => {
//     setActiveMobileCategory(
//       activeMobileCategory === category ? null : category
//     );
//   };

//   const solutionLinks = [
//     {
//       name: "حساباتي للإدارة المالية ",
//       path: "/accounting",
//       description: "نظام محاسبة سحابي شامل مصمم خصيصاً للشركات والمؤسسات",
//       icon: <Database className="h-6 w-6 text-nanosoft-primary mb-2" />,
//       category: "الأنظمة",
//     },
//     {
//       name: "لوجستي لإدارة المخزون والمشتريات ",
//       path: "/inventory",
//       description: "نظام إدارة متكامل للمخزون والمستودعات مع تتبع دقيق",
//       icon: <Server className="h-6 w-6 text-nanosoft-primary mb-2" />,
//       category: "الأنظمة",
//     },
//     {
//       name: "بياناتي لإدارة الموارد البشرية",
//       path: "/hr",
//       description: "إدارة شاملة لشؤون الموظفين من التوظيف حتى إنهاء الخدمة",
//       icon: <ShieldCheck className="h-6 w-6 text-nanosoft-primary mb-2" />,
//       category: "الأنظمة",
//     },
//     {
//       name: " إنجاز لإدارة المشاريع",
//       path: "/injaz",
//       description: "نظام متكامل لإدارة المشاريع والمهام وفرق العمل",
//       icon: <Kanban className="h-6 w-6 text-nanosoft-primary mb-2" />,
//       category: "الأنظمة",
//     },
//     {
//       name: " تخطيط موارد المؤسسة NanoSoft ERP",
//       path: "/erp",
//       description: "نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة",
//       icon: <Globe className="h-6 w-6 text-nanosoft-primary mb-2" />,
//       category: "الأنظمة",
//     },

//     {
//       name: "تطوير البرمجيات",
//       path: "/websitesMobileApps",
//       description: "تطوير البرمجيات حسب احتياج العميل",
//       icon: <Code className="h-6 w-6 text-nanosoft-primary mb-2" />,
//       category: "الخدمات",
//     },
//     {
//       name: "خدمات الأمن السيبراني",
//       path: "/cyber-security",
//       description:
//         "حلول أمن سيبراني متكاملة لحماية البنى التحتية والبيانات الحساسة من التهديدات المتطورة",
//       icon: <Lock className="h-6 w-6 text-nanosoft-primary mb-2" />,
//       category: "الخدمات",
//     },
//     {
//       name: "خدمات الحوسبة السحابية",
//       path: "/cloud-serveces",
//       description:
//         "خدمات استضافة وإدارة الحوسبة السحابية لرفع كفاءة الأداء وتسهيل الوصول إلى المعلومات",
//       icon: <Cloud className="h-6 w-6 text-nanosoft-primary mb-2" />,
//       category: "الخدمات",
//     },
//   ];

//   const navLinks = [
//     { name: "الرئيسية", path: "/" },
//     { name: "الأسعار", path: "/pricing" },
//     { name: "المدونة", path: "/blog" },
//     { name: "اتصل بنا", path: "/contact" },
//   ];

//   return (
//     <>
//       <nav
//         // className={cn(
//         //   "fixed top-0 right-0 left-0 z-50 transition-all duration-300 w-full",
//         //   isScrolled
//         //     ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
//         //     : "bg-transparent py-5"
//         // )}
//         className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 w-full bg-white shadow-sm"
//       >
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex items-center justify-between">
//             <Link
//               to="/"
//               className="flex items-center space-x-2 text-2xl font-bold text-nanosoft-primary"
//               onClick={closeMobileMenu}
//             >
//               <img
//                 src={Logo}
//                 alt="logo"
//                 // className={cn(isScrolled ? "w-10" : "w-14")}
//                 className="w-14"
//               />
//             </Link>

//             {/* ==================== VERSION DESKTOP ==================== */}
//             {/* <div className="hidden md:flex items-center space-x-8">
//               <div className="relative">
//                 <NavigationMenu>
//                   <NavigationMenuList>
//                     <NavigationMenuItem>
//                       <NavigationMenuTrigger
//                         ref={triggerRef}
//                         className="text-base font-medium bg-transparent transition-colors duration-200 hover:text-nanosoft-primary ml-6"
//                         onMouseEnter={handleMouseEnterTrigger}
//                         onMouseLeave={handleMouseLeaveTrigger}
//                       >
//                         الحلول
//                       </NavigationMenuTrigger>
//                     </NavigationMenuItem>
//                   </NavigationMenuList>
//                 </NavigationMenu>
//               </div>

//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={cn(
//                     "text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ml-6",
//                     location.pathname === link.path
//                       ? "text-nanosoft-primary"
//                       : "text-gray-700"
//                   )}
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               <Link
//                 to="/admin/login"
//                 className="text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ml-6 flex items-center"
//               >
//                 <ShieldCheck size={18} className="ml-1" />
//                 <span>المسؤول</span>
//               </Link>

//               <Link to="/pricing">
//                 <Button
//                   asChild
//                   className={cn(
//                     "hidden md:inline-flex bg-transparent text-nanosoft-primary border border-nanosoft-primary font-bold border-x-[2.5px] border-y-[2.5px] hover:bg-white hover:opacity-[0.6] hover:text-nanosoft-primary hover:shadow-md transition-all px-5 py-5",
//                     isScrolled ? "bg-nanosoft-primary text-white" : ""
//                   )}
//                 >
//                   <a target="_blank" rel="noopener noreferrer">
//                     ابدأ الآن
//                   </a>
//                 </Button>
//               </Link>
//             </div> */}

//             {/* ======== Version Desktop ======== */}
//           <div className="hidden md:flex items-center justify-between w-full mr-8">
//             {/* Partie gauche : Logo et liens rapprochés */}
//             <div className="flex items-center space-x-8">
             
//               {/* Menu déroulant "الحلول" */}
//               <NavigationMenu>
//                 <NavigationMenuList>
//                   <NavigationMenuItem>
//                     <NavigationMenuTrigger
//                       ref={triggerRef}
//                       className="text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ml-8"
//                       onMouseEnter={handleMouseEnterTrigger}
//                       onMouseLeave={handleMouseLeaveTrigger}
//                     >
//                       الحلول
//                     </NavigationMenuTrigger>
//                   </NavigationMenuItem>
//                 </NavigationMenuList>
//               </NavigationMenu>
//               {/* Lien "الأسعار" */}
//               <Link
//                 to="/pricing"
//                 className={cn(
//                   "text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ",
//                   location.pathname === "/pricing"
//                     ? "text-nanosoft-primary"
//                     : "text-gray-700"
//                 )}
//               >
//                 الأسعار
//               </Link>
//             </div>

//             {/* Partie droite : autres liens et CTA */}
//             <div className="flex items-center space-x-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={cn(
//                     "text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ml-12",
//                     location.pathname === link.path
//                       ? "text-nanosoft-primary"
//                       : "text-gray-700"
//                   )}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Link to="/pricing" className="ml-4">
//                 <Button
//                   asChild
//                   className={cn(
//                     "bg-transparent text-nanosoft-primary border border-nanosoft-primary font-bold border-x-[2.5px] border-y-[2.5px] hover:bg-white hover:opacity-[0.6] hover:text-nanosoft-primary hover:shadow-md transition-all px-5 py-5",
//                     isScrolled ? "bg-nanosoft-primary text-white" : ""
//                   )}
//                 >
//                   <a target="_blank" rel="noopener noreferrer">
//                     ابدأ الآن
//                   </a>
//                 </Button>
//               </Link>
//             </div>
//           </div>
//             {/* ==================== FIN VERSION DESKTOP ==================== */}

//             {/* ==================== TOGGLE MOBILE MENU BUTTON ==================== */}
//             <button
//               onClick={toggleMobileMenu}
//               className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-nanosoft-primary to-nanosoft-secondary text-white shadow-md transition-all duration-300 hover:shadow-lg"
//               aria-label="Toggle mobile menu"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="h-5 w-5" />
//               ) : (
//                 <Menu className="h-5 w-5" />
//               )}
//             </button>
//           </div>

//           {/* ==================== VERSION MOBILE (UPDATED) ==================== */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-md z-50  pb-20 mt-3">
//               <div className="container mx-auto px-4 py-6 bg-white/95">
//                 {/* Main Navigation Links */}
//                 <div className="space-y-1 border-b border-gray-100 pb-4 mb-4">
//                   {navLinks.map((link) => (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       className={cn(
//                         "flex items-center justify-between py-3 px-4 rounded-xl text-lg font-medium transition-all",
//                         location.pathname === link.path
//                           ? "text-white bg-gradient-to-r from-nanosoft-primary to-nanosoft-secondary shadow-md"
//                           : "text-gray-800 hover:bg-gray-50"
//                       )}
//                       onClick={closeMobileMenu}
//                     >
//                       <span>{link.name}</span>
//                       {/* <ChevronRight className="h-5 w-5" /> */}
//                     </Link>
//                   ))}
//                 </div>

//                 {/* Solutions Section */}
//                 {/* Solutions Section */}
//                 <div className="mb-6">
//                   <div
//                     className="flex items-center justify-between py-3 px-4 rounded-xl text-lg font-bold text-gray-900 mb-2 hover:cursor-pointer hover:bg-nanosoft-secondary hover:text-white"
//                     onClick={() => toggleMobileCategory("solutions")}
//                   >
//                     <span>الحلول</span>
//                     <ChevronRight
//                       className={cn(
//                         "h-5 w-5 transition-transform",
//                         activeMobileCategory === "solutions" ? "rotate-90" : ""
//                       )}
//                     />
//                   </div>

//                   {activeMobileCategory === "solutions" && (
//                     <div className="pr-2 space-y-4 mt-2 bg-gray-50 p-4 rounded-xl max-h-60 overflow-y-auto">
//                       {/* Systems Category */}
//                       <div className="mb-3">
//                         <div className="text-base font-semibold text-nanosoft-primary mb-2 pr-2 border-r-2 border-nanosoft-primary">
//                           الأنظمة
//                         </div>
//                         <div className="space-y-2  pr-4">
//                           {solutionLinks
//                             .filter((link) => link.category === "الأنظمة")
//                             .map((system) => (
//                               <Link
//                                 key={system.path}
//                                 to={system.path}
//                                 className="flex items-center py-2 px-3 text-gray-800 hover:bg-white hover:shadow-sm rounded-lg transition-all group"
//                                 onClick={closeMobileMenu}
//                               >
//                                 <div className="h-8 w-8 rounded-full bg-nanosoft-primary/10 flex items-center justify-center ml-3 group-hover:bg-nanosoft-primary/20">
//                                   {system.icon}
//                                 </div>
//                                 <span className="text-base font-medium group-hover:text-nanosoft-primary">
//                                   {system.name}
//                                 </span>
//                               </Link>
//                             ))}
//                         </div>
//                       </div>

//                       {/* Services Category */}
//                       <div>
//                         <div className="text-base font-semibold text-nanosoft-primary mb-2 pr-2 border-r-2 border-nanosoft-primary">
//                           الخدمات
//                         </div>
//                         <div className="space-y-2 pr-4">
//                           {solutionLinks
//                             .filter((link) => link.category === "الخدمات")
//                             .map((service) => (
//                               <Link
//                                 key={service.path}
//                                 to={service.path}
//                                 className="flex items-center py-2 px-3 text-gray-800 hover:bg-white hover:shadow-sm rounded-lg transition-all group"
//                                 onClick={closeMobileMenu}
//                               >
//                                 <div className="h-8 w-8 rounded-full bg-nanosoft-primary/10 flex items-center justify-center ml-3 group-hover:bg-nanosoft-primary/20">
//                                   {service.icon}
//                                 </div>
//                                 <span className="text-base font-medium group-hover:text-nanosoft-primary">
//                                   {service.name}
//                                 </span>
//                               </Link>
//                             ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Admin Link */}
//                 {/* <Link
//                   to="/admin/login"
//                   className="flex items-center justify-between py-3 px-4 rounded-xl text-lg font-medium text-gray-800 hover:bg-gray-50 mb-6"
//                   onClick={closeMobileMenu}
//                 >
//                   <div className="flex items-center">
//                     <ShieldCheck className="ml-2 h-5 w-5 text-nanosoft-primary" />
//                     <span>المسؤول</span>
//                   </div>
//                 </Link> */}

//                 {/* CTA Button */}
//                 <div className="px-4">
//                   <Link to="/pricing" onClick={closeMobileMenu}>
//                     <Button className="w-full py-6 text-lg font-bold bg-gradient-to-r from-nanosoft-primary to-nanosoft-secondary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
//                       ابدأ الآن
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )}
//           {/* ==================== FIN VERSION MOBILE ==================== */}
//         </div>
//       </nav>

//       {/* ==================== MENU DÉROULANT DESKTOP ==================== */}
//       {isSolutionsOpen && (
//         <div
//           ref={dropdownRef}
//           className="fixed top-[84px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg overflow-y-auto"
//           onMouseEnter={handleMouseEnterDropdown}
//           onMouseLeave={handleMouseLeaveDropdown}
//         >
//           <div className="container mx-auto py-10 px-4">
//             <div className="flex justify-between items-start mb-8">
//               <h2 className="text-2xl font-bold text-nanosoft-primary">
//                 اكتشف حلولنا
//               </h2>
//               {/* <button
//                 onClick={() => setIsSolutionsOpen(false)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="18" y1="6" x2="6" y2="18"></line>
//                   <line x1="6" y1="6" x2="18" y2="18"></line>
//                 </svg>
//               </button> */}
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 ">
//               <div>
//                 <div className="mb-4 pb-2 border-b">
//                   <h3 className="text-lg font-bold text-gray-900">الأنظمة</h3>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24">
//                   {solutionLinks
//                     .filter((link) => link.category === "الأنظمة")
//                     .map((system) => (
//                       <Link
//                         key={system.path}
//                         to={system.path}
//                         className="group flex flex-col p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 w-[250px] "
//                         onClick={() => setIsSolutionsOpen(false)}
//                       >
//                         <div className="flex flex-col items-start">
//                           <div className="w-12 h-12 rounded-full bg-nanosoft-primary/10 flex items-center justify-center mb-3">
//                             {system.icon}
//                           </div>
//                           <h3 className="text-lg font-bold text-gray-900 group-hover:text-nanosoft-primary mb-2">
//                             {system.name}
//                           </h3>
//                           <p className="mt-1 text-sm text-gray-600 text-right">
//                             {system.description}
//                           </p>
//                         </div>
//                       </Link>
//                     ))}
//                 </div>
//               </div>

//               <div className="mr-32">
//                 <div className="mb-4 pb-2 border-b ">
//                   <h3 className="text-lg font-bold text-gray-900">الخدمات</h3>
//                 </div>
//                 <div className="grid grid-cols-1 gap-4">
//                   {solutionLinks
//                     .filter((link) => link.category === "الخدمات")
//                     .map((service) => (
//                       <Link
//                         key={service.path}
//                         to={service.path}
//                         className="group flex flex-col p-4 rounded-lg transition-all duration-200 hover:bg-gray-50"
//                         onClick={() => setIsSolutionsOpen(false)}
//                       >
//                         <div className="flex flex-col items-start">
//                           <div className="w-12 h-12 rounded-full bg-nanosoft-primary/10 flex items-center justify-center mb-3">
//                             {service.icon}
//                           </div>
//                           <h3 className="text-lg font-bold text-gray-900 group-hover:text-nanosoft-primary mb-2">
//                             {service.name}
//                           </h3>
//                           <p className="mt-1 text-sm text-gray-600 text-right">
//                             {service.description}
//                           </p>
//                         </div>
//                       </Link>
//                     ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* ==================== FIN MENU DÉROULANT DESKTOP ==================== */}
//     </>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react"; 
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  Globe,
  Code,
  Server,
  Database,
  Kanban,
  Menu,
  X,
  ChevronRight,
  Cloud,
  Lock,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// logo image :
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnterDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsSolutionsOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 300); // Délai avant fermeture
  };

  const handleMouseEnterTrigger = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsSolutionsOpen(true);
  };

  const handleMouseLeaveTrigger = () => {
    timeoutRef.current = setTimeout(() => {
      if (!dropdownRef.current?.matches(":hover")) {
        setIsSolutionsOpen(false);
      }
    }, 300);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileCategory(null);
  };

  const toggleMobileCategory = (category) => {
    setActiveMobileCategory(activeMobileCategory === category ? null : category);
  };

  const solutionLinks = [
    {
      name: "حساباتي للإدارة المالية ",
      path: "/accounting",
      description: "نظام محاسبة سحابي شامل مصمم خصيصاً للشركات والمؤسسات",
      icon: <Database className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الأنظمة",
    },
    {
      name: "لوجستي لإدارة المخزون والمشتريات ",
      path: "/inventory",
      description: "نظام إدارة متكامل للمخزون والمستودعات مع تتبع دقيق",
      icon: <Server className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الأنظمة",
    },
    {
      name: "بياناتي لإدارة الموارد البشرية",
      path: "/hr",
      description: "إدارة شاملة لشؤون الموظفين من التوظيف حتى إنهاء الخدمة",
      icon: <ShieldCheck className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الأنظمة",
    },
    {
      name: "إنجاز لإدارة المشاريع",
      path: "/injaz",
      description: "نظام متكامل لإدارة المشاريع والمهام وفرق العمل",
      icon: <Kanban className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الأنظمة",
    },
    {
      name: "تخطيط موارد المؤسسة NanoSoft ERP",
      path: "/erp",
      description: "نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة",
      icon: <Globe className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الأنظمة",
    },
    {
      name: "تطوير البرمجيات",
      path: "/software-development",
      description: "تطوير البرمجيات حسب احتياج العميل",
      icon: <Code className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الخدمات",
    },
    {
      name: "خدمات الأمن السيبراني",
      path: "/cyber-security",
      description:
        "حلول أمن سيبراني متكاملة لحماية البنى التحتية والبيانات الحساسة من التهديدات المتطورة",
      icon: <Lock className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الخدمات",
    },
    {
      name: "خدمات الحوسبة السحابية",
      path: "/cloud-services",
      description:
        "خدمات استضافة وإدارة الحوسبة السحابية لرفع كفاءة الأداء وتسهيل الوصول إلى المعلومات",
      icon: <Cloud className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الخدمات",
    },
  ];

  // Tableaux de liens pour la navigation
  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الأسعار", path: "/pricing" },
    { name: "المدونة", path: "/blog" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  // Pour la version desktop, on exclut le lien "الأسعار"
  const desktopNavLinks = navLinks.filter((link) => link.path !== "/pricing");

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 w-full bg-white shadow-sm"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-nanosoft-primary"
              onClick={closeMobileMenu}
            >
              <img
                src={Logo}
                alt="logo"
                className="w-14"
              />
            </Link>

            {/* ==================== VERSION DESKTOP ==================== */}
            <div className="hidden md:flex items-center justify-between w-full mr-8">
              {/* Partie gauche : Logo et liens rapprochés */}
              <div className="flex items-center space-x-8">
                {/* Menu déroulant "الحلول" */}
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        ref={triggerRef}
                        className="text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ml-8"
                        onMouseEnter={handleMouseEnterTrigger}
                        onMouseLeave={handleMouseLeaveTrigger}
                      >
                        الحلول
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                  {/* Lien "الأسعار" */}
               <Link
                 to="/pricing"
                 className={cn(
                   "text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ",
                   location.pathname === "/pricing"
                     ? "text-nanosoft-primary"
                     : "text-gray-700"
                 )}
               >
                 الأسعار
               </Link>
              </div>

              {/* Partie droite : autres liens et CTA */}
              <div className="flex items-center space-x-8">
                {desktopNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ml-12",
                      location.pathname === link.path
                        ? "text-nanosoft-primary"
                        : "text-gray-700"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/pricing" className="hidden md:block ml-4">
                  <Button
                    asChild
                    className={cn(
                      "bg-transparent text-nanosoft-primary border border-nanosoft-primary font-bold border-x-[2.5px] border-y-[2.5px] hover:bg-white hover:opacity-[0.6] hover:text-nanosoft-primary hover:shadow-md transition-all px-5 py-5",
                      isScrolled ? "bg-nanosoft-primary text-white" : ""
                    )}
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      ابدأ الآن
                    </a>
                  </Button>
                </Link>
              </div>
            </div>
            {/* ==================== FIN VERSION DESKTOP ==================== */}

            {/* ==================== TOGGLE MOBILE MENU BUTTON ==================== */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-nanosoft-primary to-nanosoft-secondary text-white shadow-md transition-all duration-300 hover:shadow-lg"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* ==================== VERSION MOBILE ==================== */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-md z-50 pb-20 mt-3">
              <div className="container mx-auto px-4 py-6 bg-white/95">
                {/* Main Navigation Links */}
                <div className="space-y-1 border-b border-gray-100 pb-4 mb-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        "flex items-center justify-between py-3 px-4 rounded-xl text-lg font-medium transition-all",
                        location.pathname === link.path
                          ? "text-white bg-gradient-to-r from-nanosoft-primary to-nanosoft-secondary shadow-md"
                          : "text-gray-800 hover:bg-gray-50"
                      )}
                      onClick={closeMobileMenu}
                    >
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>

                {/* ... le reste du menu mobile */}
                <div className="mb-6">
                  <div
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-lg font-bold text-gray-900 mb-2 hover:cursor-pointer hover:bg-nanosoft-secondary hover:text-white"
                    onClick={() => toggleMobileCategory("solutions")}
                  >
                    <span>الحلول</span>
                    <ChevronRight
                      className={cn(
                        "h-5 w-5 transition-transform",
                        activeMobileCategory === "solutions" ? "rotate-90" : ""
                      )}
                    />
                  </div>

                  {activeMobileCategory === "solutions" && (
                    <div className="pr-2 space-y-4 mt-2 bg-gray-50 p-4 rounded-xl max-h-60 overflow-y-auto">
                      {/* Systems Category */}
                      <div className="mb-3">
                        <div className="text-base font-semibold text-nanosoft-primary mb-2 pr-2 border-r-2 border-nanosoft-primary">
                          الأنظمة
                        </div>
                        <div className="space-y-2 pr-4">
                          {solutionLinks
                            .filter((link) => link.category === "الأنظمة")
                            .map((system) => (
                              <Link
                                key={system.path}
                                to={system.path}
                                className="flex items-center py-2 px-3 text-gray-800 hover:bg-white hover:shadow-sm rounded-lg transition-all group"
                                onClick={closeMobileMenu}
                              >
                                <div className="h-8 w-8 rounded-full bg-nanosoft-primary/10 flex items-center justify-center ml-3 group-hover:bg-nanosoft-primary/20">
                                  {system.icon}
                                </div>
                                <span className="text-base font-medium group-hover:text-nanosoft-primary">
                                  {system.name}
                                </span>
                              </Link>
                            ))}
                        </div>
                      </div>

                      {/* Services Category */}
                      <div>
                        <div className="text-base font-semibold text-nanosoft-primary mb-2 pr-2 border-r-2 border-nanosoft-primary">
                          الخدمات
                        </div>
                        <div className="space-y-2 pr-4">
                          {solutionLinks
                            .filter((link) => link.category === "الخدمات")
                            .map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="flex items-center py-2 px-3 text-gray-800 hover:bg-white hover:shadow-sm rounded-lg transition-all group"
                                onClick={closeMobileMenu}
                              >
                                <div className="h-8 w-8 rounded-full bg-nanosoft-primary/10 flex items-center justify-center ml-3 group-hover:bg-nanosoft-primary/20">
                                  {service.icon}
                                </div>
                                <span className="text-base font-medium group-hover:text-nanosoft-primary">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="px-4">
                  <Link to="/pricing" onClick={closeMobileMenu}>
                    <Button className="w-full py-6 text-lg font-bold bg-gradient-to-r from-nanosoft-primary to-nanosoft-secondary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      ابدأ الآن
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {/* ==================== FIN VERSION MOBILE ==================== */}
        </div>
      </nav>

      {/* MENU DÉROULANT DESKTOP */}
      {isSolutionsOpen && (
        <div
          ref={dropdownRef}
          className="fixed top-[84px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg overflow-y-auto"
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <div className="container mx-auto py-10 px-4">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-2xl font-bold text-nanosoft-primary">
                اكتشف حلولنا
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <div className="mb-4 pb-2 border-b">
                  <h3 className="text-lg font-bold text-gray-900">الأنظمة</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-24">
                  {solutionLinks
                    .filter((link) => link.category === "الأنظمة")
                    .map((system) => (
                      <Link
                        key={system.path}
                        to={system.path}
                        className="group flex flex-col p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 w-[250px]"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        <div className="flex flex-col items-start">
                          <div className="w-12 h-12 rounded-full bg-nanosoft-primary/10 flex items-center justify-center mb-3">
                            {system.icon}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-nanosoft-primary mb-2">
                            {system.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600 text-right">
                            {system.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              <div className="mr-32">
                <div className="mb-4 pb-2 border-b">
                  <h3 className="text-lg font-bold text-gray-900">الخدمات</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {solutionLinks
                    .filter((link) => link.category === "الخدمات")
                    .map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="group flex flex-col p-4 rounded-lg transition-all duration-200 hover:bg-gray-50"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        <div className="flex flex-col items-start">
                          <div className="w-12 h-12 rounded-full bg-nanosoft-primary/10 flex items-center justify-center mb-3">
                            {service.icon}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-nanosoft-primary mb-2">
                            {service.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600 text-right">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
