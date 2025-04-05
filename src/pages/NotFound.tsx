
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-cairo">
      
      <main className="flex-grow flex items-center justify-center bg-hero-pattern">
        <div className="container mx-auto px-4 md:px-6 py-24 text-center">
          <span className="inline-block px-4 py-1 bg-nanosoft-primary/10 text-nanosoft-primary rounded-full text-sm font-semibold mb-4">
            خطأ 404
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 animate-fade-in">
            الصفحة غير موجودة
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto animate-fade-in-up">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>
          <Button 
            className="btn-primary flex items-center gap-2 mx-auto animate-fade-in-up"
            onClick={() => window.location.href = '/'}
          >
            العودة للصفحة الرئيسية
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </Button>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default NotFound;
