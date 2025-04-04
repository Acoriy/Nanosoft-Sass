


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceCategories } from '../data/pricingData';
import { getPricesByCategory, Price, subscribeToPricesUpdates, initializeDefaultPrices } from '../services/priceService';
import PriceCard from '../components/PriceCard';
import { Skeleton } from '@/components/ui/skeleton';
import {Link} from "react-router-dom"

const Pricing = () => {
  const [selectedService, setSelectedService] = useState<string>(serviceCategories[0].id);
  const [isChangingService, setIsChangingService] = useState<boolean>(false);
  const [pricePlans, setPricePlans] = useState<Price[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const currentService = serviceCategories.find(service => service.id === selectedService) || serviceCategories[0];

  useEffect(() => {
    const loadPrices = async () => {
      try {
        setIsLoading(true);
        
        // Ensure default prices are initialized if none exist
        await initializeDefaultPrices();
        
        // Get prices for the selected category
        const prices = await getPricesByCategory(selectedService);
        
        if (prices.length === 0) {
          console.log("No prices found for category:", selectedService);
          // Try again after a short delay without toast notification
          setTimeout(async () => {
            const retryPrices = await getPricesByCategory(selectedService);
            setPricePlans(retryPrices);
            setIsLoading(false);
          }, 1500);
        } else {
          setPricePlans(prices);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error loading prices:", error);
        setIsLoading(false);
      }
    };
    
    loadPrices();
    
    // Subscribe to real-time updates - but don't use toast notifications here
    const unsubscribe = subscribeToPricesUpdates((updatedPrices) => {
      const filteredPrices = updatedPrices.filter(p => p.category === selectedService);
      if (filteredPrices.length > 0) {
        console.log(`Received ${filteredPrices.length} prices for ${selectedService} in real-time`);
        setPricePlans(filteredPrices);
        setIsLoading(false);
      }
    });
    
    return () => {
      unsubscribe(); // Clean up subscription on unmount
    };
  }, [selectedService]);

  const handleServiceChange = (serviceId: string) => {
    if (serviceId === selectedService) return;
    
    setIsChangingService(true);
    setTimeout(() => {
      setSelectedService(serviceId);
      setIsChangingService(false);
    }, 300);
  };
  
  const handleSelectPlan = (planId: string) => {
    window.open('http://crm.nanosoft.ly/', '_blank');
  };

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-nanosoft-primary/10 text-nanosoft-primary rounded-full text-sm font-medium mb-4">
            الأسعار
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">اختر الباقة المناسبة لاحتياجاتك</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متنوعة من الباقات المصممة لتلبية احتياجات مختلف الأعمال، من الشركات الناشئة إلى المؤسسات الكبيرة.
          </p>
        </motion.div>

        {/* Service Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 p-2 bg-gray-100 rounded-2xl">
            {serviceCategories.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceChange(service.id)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center ${
                  selectedService === service.id
                    ? 'bg-nanosoft-primary text-white shadow-md'
                    : 'bg-transparent text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="ml-2">{service.icon}</span>
                <span className="whitespace-nowrap">{service.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Service Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`service-${selectedService}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">{currentService.name}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{currentService.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Pricing Plans */}
        <AnimatePresence mode="wait">
          {isChangingService || isLoading ? (
            // Placeholder cards during transition or loading
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Array(3).fill(0).map((_, index) => (
                <div key={index} className="h-[600px]">
                  <Skeleton className="h-full w-full rounded-2xl" />
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {pricePlans.length > 0 ? (
                pricePlans.map((plan) => (
                  <motion.div
                    key={plan.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <PriceCard price={plan} onSelectPlan={handleSelectPlan} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 text-center py-10">
                  <p className="text-gray-500">لا توجد باقات متاحة لهذه الفئة حالياً</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">تحتاج إلى حل مخصص؟</h2>
          <p className="text-gray-600 mb-8">
            نحن نفهم أن كل عمل فريد من نوعه. تواصل معنا للحصول على باقة مخصصة تناسب احتياجاتك الخاصة.
          </p>
          <Link to="/contact">
          <a
            href="mailto:info@nanosoft.ly"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            تواصل معنا
          </a>
          </Link>
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">هل يمكنني تغيير الباقة لاحقاً؟</h3>
              <p className="text-gray-600">نعم، يمكنك الترقية أو تخفيض باقتك في أي وقت. سيتم تعديل الفاتورة بشكل تناسبي.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">هل هناك فترة تجريبية مجانية؟</h3>
              <p className="text-gray-600">نقدم استشارة مجانية لمناقشة احتياجاتك ومساعدتك في اختيار الباقة المناسبة.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">ما هي طرق الدفع المقبولة؟</h3>
              <p className="text-gray-600">نقبل التحويل المصرفي والدفع النقدي وبطاقات الائتمان/الخصم.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">كم من الوقت يستغرق تطوير المشروع؟</h3>
              <p className="text-gray-600">يعتمد ذلك على تعقيد المشروع. عادة، تستغرق المشاريع البسيطة 2-4 أسابيع، بينما قد تستغرق المشاريع الأكثر تعقيدًا 2-3 أشهر.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
