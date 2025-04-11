
// import React, { useState, useEffect } from "react";
// import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
// import { BarChart3, FileText, Home, Settings, LogOut, Menu, X, RefreshCw } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import { useIsMobile } from "@/hooks/use-mobile";
// import { initializeFirebase } from "@/lib/firebase";
// import { Skeleton } from "@/components/ui/skeleton";

// const DashboardLayout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const isMobile = useIsMobile();
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isAuthChecking, setIsAuthChecking] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isInitializing, setIsInitializing] = useState(true);
  
//   // تهيئة Firebase والتحقق من البيانات الافتراضية
//   useEffect(() => {
//     const initialize = async () => {
//       try {
//         setIsInitializing(true);
//         await initializeFirebase(true); // وضع صامت، بدون إشعارات
//       } catch (error) {
//         console.error("خطأ في تهيئة البيانات:", error);
//       } finally {
//         // حتى في حالة وجود خطأ، نتابع للسماح بإعادة المحاولة لاحقًا
//         setIsInitializing(false);
//       }
//     };
    
//     initialize();
    
//     // محاولة إعادة الاتصال الدوري في حالة فشل التهيئة الأولية
//     const reconnectInterval = setInterval(async () => {
//       if (!isInitializing) {
//         const success = await initializeFirebase(true);
//         if (success) {
//           clearInterval(reconnectInterval);
//         }
//       }
//     }, 10000); // إعادة المحاولة كل 10 ثوانٍ
    
//     return () => clearInterval(reconnectInterval);
//   }, []);
  
//   useEffect(() => {
//     // التحقق من مصادقة المسؤول
//     const checkAdminAuth = () => {
//       try {
//         const adminAuth = localStorage.getItem("adminAuth");
        
//         if (adminAuth === "authenticated") {
//           setIsAdmin(true);
//         } else {
//           setIsAdmin(false);
//           if (location.pathname !== "/admin/login") {
//             navigate("/admin/login");
//           }
//         }
//       } catch (error) {
//         console.error("خطأ أثناء التحقق من المصادقة:", error);
//         toast.error("خطأ أثناء التحقق من المصادقة");
//         setIsAdmin(false);
//       } finally {
//         setIsAuthChecking(false);
//       }
//     };
    
//     checkAdminAuth();
//   }, [navigate, location.pathname]);
  
//   // إغلاق الشريط الجانبي عند تغيير المسارات
//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [location.pathname]);
  
//   // إذا كانت الشاشة صغيرة جدًا، يتم إغلاق الشريط الجانبي تلقائيًا
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768 && sidebarOpen) {
//         setSidebarOpen(false);
//       }
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [sidebarOpen]);
  
//   const isActive = (path: string) => {
//     return location.pathname === path || location.pathname.startsWith(`${path}/`);
//   };

//   const handleLogout = () => {
//     try {
//       localStorage.removeItem("adminAuth");
//       toast.success("تم تسجيل الخروج بنجاح");
//       navigate("/admin/login");
//     } catch (error) {
//       console.error("خطأ أثناء تسجيل الخروج:", error);
//       toast.error("خطأ أثناء تسجيل الخروج");
//     }
//   };

//   if (isAuthChecking) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <div className="flex flex-col items-center gap-4">
//           <div className="flex flex-col space-y-3">
//             <Skeleton className="h-8 w-[250px]" />
//             <div className="space-y-2">
//               <Skeleton className="h-4 w-[200px]" />
//               <Skeleton className="h-4 w-[250px]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!isAdmin && location.pathname !== "/admin/login") {
//     return null;
//   }

//   return (
//     <div className="flex min-h-screen flex-col bg-gray-50 text-right">
//       {/* Mobile Header with menu button */}
//       {isMobile && (
//         <div className="bg-white p-4 flex items-center justify-between border-b shadow-sm sticky top-0 z-10">
//           <Button 
//             variant="ghost" 
//             size="icon" 
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             aria-label={sidebarOpen ? "إغلاق القائمة" : "فتح القائمة"}
//           >
//             {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//           </Button>
//           <h1 className="text-xl font-bold text-nanosoft-primary">لوحة التحكم</h1>
//         </div>
//       )}
      
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <aside 
//           className={`${
//             isMobile 
//               ? `fixed inset-y-0 right-0 z-50 w-72 transform transition-transform duration-300 ease-in-out ${
//                   sidebarOpen ? 'translate-x-0' : 'translate-x-full'
//                 } shadow-xl`
//               : 'w-72 min-w-72'
//           } bg-white border-l shadow-sm overflow-y-auto flex-shrink-0`}
//         >
//           {!isMobile && (
//             <div className="p-6 border-b sticky top-0 bg-white z-10">
//               <h1 className="text-2xl font-bold text-nanosoft-primary">لوحة التحكم</h1>
//             </div>
//           )}
          
//           <nav className="p-4 space-y-2">
//             <Link
//               to="/admin"
//               className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
//                 isActive("/admin") && !isActive("/admin/blogs") && !isActive("/admin/prices")
//                   ? "bg-nanosoft-primary text-white"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               <Home size={20} />
//               <span>الرئيسية</span>
//             </Link>
            
//             <Link
//               to="/admin/blogs"
//               className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
//                 isActive("/admin/blogs")
//                   ? "bg-nanosoft-primary text-white"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               <FileText size={20} />
//               <span>المقالات</span>
//             </Link>
            
//             <Link
//               to="/admin/prices"
//               className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
//                 isActive("/admin/prices")
//                   ? "bg-nanosoft-primary text-white"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               <BarChart3 size={20} />
//               <span>الاشتراكات</span>
//             </Link>
            
//             <Button
//               variant="ghost"
//               className="flex w-full items-center gap-3 p-3 rounded-lg hover:bg-gray-100 justify-start transition-colors duration-200"
//               onClick={() => window.location.reload()}
//             >
//               <RefreshCw size={20} />
//               <span>تحديث</span>
//             </Button>
            
//             <Link
//               to="/"
//               className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 mt-8 transition-colors duration-200"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Settings size={20} />
//               <span>عرض الموقع</span>
//             </Link>

//             <Button
//               variant="ghost"
//               className="flex w-full items-center gap-3 p-3 rounded-lg hover:bg-gray-100 justify-start text-red-500 transition-colors duration-200"
//               onClick={handleLogout}
//             >
//               <LogOut size={20} />
//               <span>تسجيل الخروج</span>
//             </Button>
//           </nav>
//         </aside>
        
//         {/* Main content */}
//         <main className={`flex-1 p-4 md:p-6 lg:p-8 overflow-auto ${isMobile && sidebarOpen ? 'opacity-50' : ''}`}>
//           {isInitializing ? (
//             <div className="space-y-6">
//               <div className="flex justify-between items-center">
//                 <Skeleton className="h-10 w-48" />
//                 <Skeleton className="h-10 w-32" />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
//                     <Skeleton className="h-6 w-24 mb-4" />
//                     <Skeleton className="h-10 w-16 mb-2" />
//                     <Skeleton className="h-4 w-32" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <Outlet />
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  FileText,
  Home,
  Settings,
  LogOut,
  Menu,
  X,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { initializeFirebase } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  // Initialisation de Firebase
  useEffect(() => {
    const initialize = async () => {
      try {
        setIsInitializing(true);
        await initializeFirebase(true);
      } catch (error) {
        console.error("خطأ في تهيئة البيانات:", error);
      } finally {
        setIsInitializing(false);
      }
    };
    initialize();

    const reconnectInterval = setInterval(async () => {
      if (!isInitializing) {
        const success = await initializeFirebase(true);
        if (success) clearInterval(reconnectInterval);
      }
    }, 10000);
    return () => clearInterval(reconnectInterval);
  }, [isInitializing]);

  // Vérification de l'authentification admin
  useEffect(() => {
    const checkAdminAuth = () => {
      try {
        const adminAuth = localStorage.getItem("adminAuth");
        if (adminAuth === "authenticated") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          if (location.pathname !== "/admin/login") navigate("/admin/login");
        }
      } catch (error) {
        console.error("خطأ أثناء التحقق من المصادقة:", error);
        toast.error("خطأ أثناء التحقق من المصادقة");
        setIsAdmin(false);
      } finally {
        setIsAuthChecking(false);
      }
    };
    checkAdminAuth();
  }, [navigate, location.pathname]);

  // Fermeture du sidebar lors du changement de route
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Gestion du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && sidebarOpen) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  const handleLogout = () => {
    try {
      localStorage.removeItem("adminAuth");
      toast.success("تم تسجيل الخروج بنجاح");
      navigate("/admin/login");
    } catch (error) {
      console.error("خطأ أثناء تسجيل الخروج:", error);
      toast.error("خطأ أثناء تسجيل الخروج");
    }
  };

  if (isAuthChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center" role="alert" aria-live="assertive">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-8 w-[250px]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isAdmin && location.pathname !== "/admin/login") return null;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-right">
      {/* Header Mobile */}
      {isMobile && (
        <header className="bg-white p-4 flex items-center justify-between border-b shadow-sm sticky top-0 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <h1 className="text-xl font-bold text-nanosoft-primary">لوحة التحكم</h1>
        </header>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            isMobile
              ? `fixed inset-y-0 right-0 z-50 w-72 transform transition-transform duration-300 ease-in-out ${
                  sidebarOpen ? "translate-x-0" : "translate-x-full"
                } shadow-xl`
              : "w-72 min-w-72"
          } bg-white border-l shadow-sm overflow-y-auto flex-shrink-0`}
          aria-label="Menu de navigation"
        >
          {!isMobile && (
            <div className="p-6 border-b sticky top-0 bg-white z-10">
              <h1 className="text-2xl font-bold text-nanosoft-primary">لوحة التحكم</h1>
            </div>
          )}
          <nav className="p-4 space-y-2">
            <Link
              to="/admin"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                isActive("/admin") && !isActive("/admin/blogs") && !isActive("/admin/prices")
                  ? "bg-nanosoft-primary text-white"
                  : "hover:bg-gray-100"
              }`}
              aria-current={isActive("/admin") ? "page" : undefined}
            >
              <Home size={20} aria-hidden="true" />
              <span>الرئيسية</span>
            </Link>
            <Link
              to="/admin/blogs"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                isActive("/admin/blogs") ? "bg-nanosoft-primary text-white" : "hover:bg-gray-100"
              }`}
              aria-current={isActive("/admin/blogs") ? "page" : undefined}
            >
              <FileText size={20} aria-hidden="true" />
              <span>المقالات</span>
            </Link>
            <Link
              to="/admin/prices"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                isActive("/admin/prices") ? "bg-nanosoft-primary text-white" : "hover:bg-gray-100"
              }`}
              aria-current={isActive("/admin/prices") ? "page" : undefined}
            >
              <BarChart3 size={20} aria-hidden="true" />
              <span>الاشتراكات</span>
            </Link>
            <Button
              variant="ghost"
              className="flex w-full items-center gap-3 p-3 rounded-lg hover:bg-gray-100 justify-start transition-colors duration-200"
              onClick={() => window.location.reload()}
              aria-label="تحديث الصفحة"
            >
              <RefreshCw size={20} aria-hidden="true" />
              <span>تحديث</span>
            </Button>
            <Link
              to="/"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 mt-8 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="عرض الموقع"
            >
              <Settings size={20} aria-hidden="true" />
              <span>عرض الموقع</span>
            </Link>
            <Button
              variant="ghost"
              className="flex w-full items-center gap-3 p-3 rounded-lg hover:bg-gray-100 justify-start text-red-500 transition-colors duration-200"
              onClick={handleLogout}
              aria-label="تسجيل الخروج"
            >
              <LogOut size={20} aria-hidden="true" />
              <span>تسجيل الخروج</span>
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 p-4 md:p-6 lg:p-8 overflow-auto ${isMobile && sidebarOpen ? "opacity-50" : ""}`}
          id="main-content"
        >
          {isInitializing ? (
            <div className="space-y-6" role="status" aria-live="polite">
              <div className="flex justify-between items-center">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-10 w-32" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <Skeleton className="h-6 w-24 mb-4" />
                    <Skeleton className="h-10 w-16 mb-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
