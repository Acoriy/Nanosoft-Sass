import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  Phone,
  Globe,
  Code,
  Server,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// logo image :
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const closeSolutions = () => {
    setIsSolutionsOpen(false);
  };

  const solutionLinks = [
    {
      name: "برنامج محاسبة",
      path: "/accounting",
      description: "نظام محاسبة سحابي شامل مصمم خصيصاً للشركات والمؤسسات",
      icon: <Database className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الأنظمة",
    },
    {
      name: "إدارة المخزون",
      path: "/inventory",
      description: "نظام إدارة متكامل للمخزون والمستودعات مع تتبع دقيق",
      icon: <Server className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الأنظمة",
    },
    {
      name: "الموارد البشرية",
      path: "/hr",
      description: "إدارة شاملة لشؤون الموظفين من التوظيف حتى إنهاء الخدمة",
      icon: <ShieldCheck className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الأنظمة",
    },
    {
      name: "نظام ERP",
      path: "/erp",
      description: "نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة",
      icon: <Globe className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الأنظمة",
    },
    {
      name: "تطوير المواقع والتطبيقات",
      path: "/web-development",
      description: "تصميم وتطوير مواقع ويب وتطبيقات جوال احترافية",
      icon: <Code className="h-6 w-6 text-nanosoft-primary mb-2" />,
      category: "الخدمات",
    },
  ];

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الأسعار", path: "/pricing" },
    { name: "المدونة", path: "/blog" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300 w-full",
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-nanosoft-primary"
              onClick={closeMobileMenu}
            >
              {/* <span className="text-nanosoft-primary ml-2">نانو سوفت</span> */}
              <img
                src={Logo}
                alt="logo"
                className={cn(isScrolled ? "w-10" : "w-14")}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Solutions Dropdown */}
              <div className="relative">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className="text-base font-medium bg-transparent transition-colors duration-200 hover:text-nanosoft-primary ml-6"
                        onMouseEnter={toggleSolutions}
                        onClick={toggleSolutions}
                      >
                        الحلول
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Regular Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ml-6",
                    location.pathname === link.path
                      ? "text-nanosoft-primary"
                      : "text-gray-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              {/* Admin Link */}
              <Link
                to="/admin/login"
                className="text-base font-medium transition-colors duration-200 hover:text-nanosoft-primary ml-6 flex items-center"
              >
                <ShieldCheck size={18} className="ml-1" />
                <span>المسؤول</span>
              </Link>

              <Link to="/pricing">
                <Button
                  asChild
                  className={cn(
                    "hidden md:inline-flex bg-transparent text-nanosoft-primary border border-nanosoft-primary font-bold border-x-[2.5px] border-y-[2.5px] hover:bg-white hover:opacity-[0.6] hover:text-nanosoft-primary hover:shadow-md transition-all px-5 py-5",
                    isScrolled ? "bg-nanosoft-primary text-white" : ""
                  )}
                >
                  <a
                    href="http://crm.nanosoft.ly/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ابدأ الآن
                  </a>
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center"
              aria-label="Toggle mobile menu"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current text-gray-900"
              >
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 animate-fade-in inset-0 bg-white bg-opacity-85 backdrop-blur-sm">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-base py-2 font-medium",
                      location.pathname === link.path
                        ? "text-nanosoft-primary"
                        : "text-gray-700"
                    )}
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Solutions Mobile Menu */}
                <div className="py-2">
                  <div className="text-base font-medium mb-2">الحلول</div>
                  <div className="pl-4 border-r-2 border-gray-200">
                    <div className="mb-2">
                      <div className="text-sm font-medium text-gray-700 mb-1">
                        الأنظمة
                      </div>
                      <div className="space-y-2 pl-2">
                        {solutionLinks
                          .filter((link) => link.category === "الأنظمة")
                          .map((system) => (
                            <Link
                              key={system.path}
                              to={system.path}
                              className="block text-sm py-1 text-gray-700 hover:text-nanosoft-primary"
                              onClick={closeMobileMenu}
                            >
                              {system.name}
                            </Link>
                          ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm  text-gray-700 mb-1 font-bold">
                        الخدمات
                      </div>
                      <div className="space-y-2 pl-2">
                        {solutionLinks
                          .filter((link) => link.category === "الخدمات")
                          .map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="block text-sm py-1 text-gray-700 hover:text-nanosoft-primary"
                              onClick={closeMobileMenu}
                            >
                              {service.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Admin Link for Mobile */}
                <Link
                  to="/admin/login"
                  className="text-base py-2 font-medium flex items-center"
                  onClick={closeMobileMenu}
                >
                  <ShieldCheck size={18} className="ml-1" />
                  <span>المسؤول</span>
                </Link>

                <Link to="/pricing" onClick={closeMobileMenu}>
                  <Button
                    asChild
                    className="bg-nanosoft-primary hover:bg-nanosoft-secondary text-white rounded-full transition-all duration-300 transform hover:scale-105 w-full mt-4"
                  >
                    <a
                      
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ابدأ الآن
                    </a>
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Solutions Dropdown Content - Positioned outside nav */}
      {isSolutionsOpen && (
        <div className="fixed top-[84px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg overflow-y-auto">
          <div className="container mx-auto py-10 px-4">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-2xl font-bold text-nanosoft-primary">
                اكتشف حلولنا
              </h2>
              <button
                onClick={closeSolutions}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Systems Section */}
              <div>
                <div className="mb-4 pb-2 border-b">
                  <h3 className="text-lg font-bold text-gray-900">الأنظمة</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solutionLinks
                    .filter((link) => link.category === "الأنظمة")
                    .map((system) => (
                      <Link
                        key={system.path}
                        to={system.path}
                        className="group flex flex-col p-4 rounded-lg transition-all duration-200 hover:bg-gray-50"
                        onClick={closeSolutions}
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

              {/* Services Section */}
              <div>
                <div className="mb-4 pb-2 border-b">
                  <h3 className="text-lg font-bold text-gray-900">الخدمات</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {solutionLinks
                    .filter((link) => link.category === "الخدمات")
                    .map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="group flex flex-col p-4 rounded-lg transition-all duration-200 hover:bg-gray-50"
                        onClick={closeSolutions}
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
