
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check, Edit, Trash, ArrowRight } from 'lucide-react';

interface PriceCardProps {
  price: {
    id?: string;
    title: string;
    price: string;
    currency: string;
    period: string;
    features: string;
    isPopular: boolean;
    category: string;
  };
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onSelectPlan?: (id: string) => void;
  isAdmin?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ price, onEdit, onDelete, onSelectPlan, isAdmin = false }) => {
  // Make sure features is always a valid string before splitting
  const features = (price.features || '').split(',').filter(feature => feature.trim() !== '');
  
  // Mapping des périodes en arabe
  const periodMap: Record<string, string> = {
    'monthly': 'شهريا',
    'yearly': 'سنويا',
    'quarterly': 'كل ثلاثة أشهر'
  };
  
  // Mapping des devises pour afficher les symboles
  const currencySymbols: Record<string, string> = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'LYD': 'د.ل'
  };

  // Mapping des catégories en arabe
  const categoryMap: Record<string, string> = {
    'accounting': 'برنامج محاسبة',
    'inventory': 'برنامج إدارة المخزون',
    'hr': 'إدارة شؤون الموظفين',
    'erp': 'نظام تخطيط موارد المنشأة',
    'websites': 'تطوير المواقع والتطبيقات'
  };
  
  const currencySymbol = currencySymbols[price.currency] || price.currency;
  const periodText = periodMap[price.period] || price.period;
  const categoryText = categoryMap[price.category] || price.category;
  
  // Animation variants for feature items
  const featureVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (i: number) => ({
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.05 * i,
        duration: 0.3
      }
    })
  };

  // Card animation variants
  const cardVariants = {
    hover: { 
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    initial: { 
      y: 0,
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
    }
  };
  
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className={`relative flex flex-col h-full overflow-hidden border-2 transition-all duration-300 ${
        price.isPopular 
          ? 'bg-gradient-to-br from-nanosoft-primary/20 via-white to-nanosoft-primary/5 border-nanosoft-primary shadow-lg' 
          : 'bg-gradient-to-br from-white via-white to-gray-50 border-gray-200 shadow-sm'
      }`}>
        {/* Popular badge with animation */}
        {price.isPopular && (
          <div className="absolute top-0 left-0 w-28 h-28 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 transform rotate-45 bg-nanosoft-primary text-white font-bold py-1 px-8 mt-4 mr-[-35px] shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
            >
              الأكثر طلباً
            </motion.div>
          </div>
        )}
        
        <CardHeader className={`relative z-10 pb-0 ${price.isPopular ? 'bg-nanosoft-primary/10 rounded-t-lg' : ''}`}>
          <CardTitle className="text-xl font-bold text-nanosoft-primary">
            {price.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {categoryText}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow pt-6 relative z-10">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-gray-900">{currencySymbol}{price.price}</span>
              <span className="text-sm text-gray-500 mr-2">/{periodText}</span>
            </p>
            <div className="w-full flex justify-center mt-3">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-nanosoft-primary to-transparent"></div>
            </div>
          </motion.div>
          
          <ul className="space-y-3 mt-6">
            {features.length > 0 ? (
              features.map((feature, index) => (
                <motion.li 
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={featureVariants}
                  key={index} 
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 ml-2">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">{feature.trim()}</span>
                </motion.li>
              ))
            ) : (
              <li className="text-center text-gray-500 py-4">لا توجد تفاصيل متاحة</li>
            )}
          </ul>
        </CardContent>
        
        <CardFooter className="flex justify-between pt-4 border-t mt-auto relative z-10">
          {isAdmin ? (
            <>
              <Button variant="outline" size="sm" onClick={() => onEdit && price.id && onEdit(price.id)}>
                <Edit className="h-4 w-4 ml-1" />
                تعديل
              </Button>
              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => onDelete && price.id && onDelete(price.id)}>
                <Trash className="h-4 w-4 ml-1" />
                حذف
              </Button>
            </>
          ) : (
            <Button 
              className="w-full bg-nanosoft-primary hover:bg-nanosoft-primary/90 transition-all duration-300 group"
              onClick={() => onSelectPlan && price.id && onSelectPlan(price.id)}
            >
              <span>اختيار هذه الباقة</span>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </Button>
          )}
        </CardFooter>
        
        {/* Enhanced decorative elements */}
        {price.isPopular ? (
          <>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-nanosoft-primary/50 via-nanosoft-primary to-nanosoft-primary/50"></div>
            <div className="absolute top-1/3 right-0 w-1.5 h-16 transform -translate-y-1/2 bg-gradient-to-b from-transparent via-nanosoft-primary to-transparent opacity-50"></div>
            <div className="absolute top-2/3 left-0 w-1.5 h-16 transform -translate-y-1/2 bg-gradient-to-b from-transparent via-nanosoft-primary to-transparent opacity-50"></div>
            <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-nanosoft-primary/10 z-0"></div>
            <div className="absolute -left-12 -bottom-12 w-24 h-24 rounded-full bg-nanosoft-primary/10 z-0"></div>
          </>
        ) : (
          <>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-nanosoft-primary/30 to-transparent"></div>
            <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-gray-100/50 z-0"></div>
          </>
        )}
      </Card>
    </motion.div>
  );
};

export default PriceCard;

