import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Dashboards : 
import Accounting from "../assets/Dashboards/Accounting UI.bmp";
import HR from "../assets/Dashboards/HR UI.bmp";
import PMS from "../assets/Dashboards/PMS UI.bmp";
import Warehose from "../assets/Dashboards/Warehouse UI.bmp";

const ProductSelector = () => {
  const [activeTab, setActiveTab] = useState("accounting");

  const tabData = {
    projet: {
      title: "إنجاز لإدارة المشروعات ",
      image: PMS,
    },
    logi: {
      title: "لوجستي لإدارة المخزون والمشتريات ",
      image: Warehose,
    },
    hr: {
      title: "بياناتي لإدارة الموارد البشرية",
      image: HR,
    },
    
    accounting: {
      title: "حساباتي للإدارة المالية ",
      image: Accounting,
    },
    // ERP: {
    //   title: "نظام تخطيط موارد المؤسسة NanoSoft ERP ",
    //   image: Dashboard2,
    // },
   
  };



  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            أنظمة رقمية فعالة
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            خدمات تقنية فعالة وقابلة للتطوير، وخدمة عملاء أسرع وأكثر كفاءة.
          </p>

          {/* Tabs - Responsive avec comportement différent mobile/desktop */}
          <div className="mb-6 w-full">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList
                className="
                grid grid-cols-2 gap-2
                md:flex md:flex-wrap
                bg-gradient-to-b from-green-50 to-green-100
                p-1 rounded-lg
                h-fit 
                overflow-x-auto
              "
              >
                {Object.keys(tabData).map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="
                      whitespace-nowrap 
                      px-3 py-2 
                      text-xs md:text-sm
                      min-w-[120px]
                      text-center font-semibold  
                    "
                  >
                    {tabData[tab].title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        {/* Image Section - Responsive et centrée */}
        <motion.div
          className="flex justify-center mb-12 md:mb-20 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-4xl">
            <div className="relative rounded-lg overflow-hidden bg-white shadow-md border border-gray-200">
              <img
                src={tabData[activeTab].image}
                alt={tabData[activeTab].title}
                className="
                  w-full h-auto
                  object-contain
                  mx-auto
                  p-4 md:p-8
                "
                style={{ maxHeight: "60vh" }}
              />
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default ProductSelector;
