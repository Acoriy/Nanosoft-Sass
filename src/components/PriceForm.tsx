// import React, { useState, useEffect } from 'react';
// import { z } from 'zod';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { serviceCategories } from '@/data/pricingData';
// import { toast } from 'sonner';

// // Schéma de validation pour le formulaire de prix
// const priceSchema = z.object({
//   title: z.string().min(3, { message: 'العنوان يجب أن يحتوي على 3 أحرف على الأقل' }),
//   price: z.string().min(1, { message: 'السعر مطلوب' }),
//   currency: z.string().min(1, { message: 'العملة مطلوبة' }),
//   period: z.string().min(1, { message: 'الفترة مطلوبة' }),
//   features: z.string().min(5, { message: 'المميزات يجب أن تحتوي على 5 أحرف على الأقل' }),
//   isPopular: z.boolean().default(false),
//   category: z.string().min(1, { message: 'الفئة مطلوبة' })
// });

// type PriceFormValues = z.infer<typeof priceSchema>;

// interface PriceFormProps {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   price?: any;
//   onSubmit: (data: PriceFormValues) => void;
//   onCancel: () => void;
//   isSubmitting?: boolean;
// }

// const PriceForm: React.FC<PriceFormProps> = ({ price, onSubmit, onCancel, isSubmitting = false }) => {
//   // Initialiser le formulaire
//   const form = useForm<PriceFormValues>({
//     resolver: zodResolver(priceSchema),
//     defaultValues: {
//       title: price?.title || '',
//       price: price?.price || '',
//       currency: price?.currency || 'LYD',
//       period: price?.period || 'monthly',
//       features: price?.features || '',
//       isPopular: price?.isPopular || false,
//       category: price?.category || 'accounting'
//     }
//   });
  
//   // Périodes disponibles
//   const periods = [
//     { id: 'monthly', name: 'شهرياً' },
//     { id: 'yearly', name: 'سنوياً' },
//     { id: 'quarterly', name: 'كل ثلاثة أشهر' }
//   ];
  
//   // Devises disponibles
//   const currencies = [
//     { id: 'LYD', name: 'د.ل (دينار ليبي)' },
//     { id: 'USD', name: '$ (دولار أمريكي)' },
//     { id: 'EUR', name: '€ (يورو)' }
//   ];
  
//   // Gérer la soumission du formulaire
//   const handleSubmit = form.handleSubmit((data) => {
//     try {
//       onSubmit(data);
//     } catch (error) {
//       console.error("خطأ في إرسال النموذج:", error);
//       toast.error("حدث خطأ أثناء حفظ البيانات");
//     }
//   });
  
//   // Prévisualisation des caractéristiques
//   const [featuresPreview, setFeaturesPreview] = useState<string[]>(
//     price?.features ? price.features.split(',') : []
//   );
  
//   // Gérer le changement des caractéristiques
//   const handleFeaturesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const value = e.target.value;
//     form.setValue('features', value);
//     setFeaturesPreview(value.split(','));
//   };
  
//   return (
//     <Card className="max-w-3xl mx-auto">
//       <CardHeader>
//         <CardTitle>{price ? 'تعديل الباقة' : 'باقة جديدة'}</CardTitle>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="space-y-6">
//           <div className="space-y-2">
//             <Label htmlFor="title">العنوان</Label>
//             <Input
//               id="title"
//               placeholder="مثال: الباقة الأساسية"
//               {...form.register('title')}
//               className="text-right"
//             />
//             {form.formState.errors.title && (
//               <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>
//             )}
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="price">السعر</Label>
//               <Input
//                 id="price"
//                 placeholder="مثال: 99"
//                 {...form.register('price')}
//                 className="text-right"
//               />
//               {form.formState.errors.price && (
//                 <p className="text-red-500 text-sm">{form.formState.errors.price.message}</p>
//               )}
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="currency">العملة</Label>
//               <Select
//                 onValueChange={(value) => form.setValue('currency', value)}
//                 defaultValue={form.getValues('currency')}
//               >
//                 <SelectTrigger id="currency" className="text-right">
//                   <SelectValue placeholder="اختر العملة" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {currencies.map((currency) => (
//                     <SelectItem key={currency.id} value={currency.id}>
//                       {currency.name}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               {form.formState.errors.currency && (
//                 <p className="text-red-500 text-sm">{form.formState.errors.currency.message}</p>
//               )}
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="period">الفترة</Label>
//               <Select
//                 onValueChange={(value) => form.setValue('period', value)}
//                 defaultValue={form.getValues('period')}
//               >
//                 <SelectTrigger id="period" className="text-right">
//                   <SelectValue placeholder="اختر الفترة" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {periods.map((period) => (
//                     <SelectItem key={period.id} value={period.id}>
//                       {period.name}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               {form.formState.errors.period && (
//                 <p className="text-red-500 text-sm">{form.formState.errors.period.message}</p>
//               )}
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="category">الفئة</Label>
//             <Select
//               onValueChange={(value) => form.setValue('category', value)}
//               defaultValue={form.getValues('category')}
//             >
//               <SelectTrigger id="category" className="text-right">
//                 <SelectValue placeholder="اختر الفئة" />
//               </SelectTrigger>
//               <SelectContent>
//                 {serviceCategories.map((category) => (
//                   <SelectItem key={category.id} value={category.id}>
//                     <span className="mx-2">{category.icon}</span>
//                     {category.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {form.formState.errors.category && (
//               <p className="text-red-500 text-sm">{form.formState.errors.category.message}</p>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="features">المميزات (تفصل بفواصل)</Label>
//             <Textarea
//               id="features"
//               placeholder="مثال: 5 صفحات،تصميم متجاوب،دعم فني"
//               {...form.register('features')}
//               onChange={handleFeaturesChange}
//               className="min-h-[100px] text-right"
//             />
//             {form.formState.errors.features && (
//               <p className="text-red-500 text-sm">{form.formState.errors.features.message}</p>
//             )}
            
//             {featuresPreview.length > 0 && featuresPreview[0] !== '' && (
//               <div className="mt-4 p-4 border rounded-md bg-gray-50">
//                 <p className="font-medium mb-2 text-right">معاينة المميزات:</p>
//                 <ul className="list-disc mr-5 space-y-1 text-right">
//                   {featuresPreview.map((feature, index) => (
//                     <li key={index} className="text-sm">{feature.trim()}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
          
//           <div className="flex items-center space-x-2">
//             <Label htmlFor="isPopular">تمييز كباقة مميزة</Label>
//             <Checkbox
//               id="isPopular"
//               checked={form.getValues('isPopular')}
//               onCheckedChange={(checked) => form.setValue('isPopular', checked as boolean)}
//             />
//           </div>
//         </CardContent>
        
//         <CardFooter className="flex justify-between">
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'جاري الحفظ...' : price ? 'تحديث' : 'إنشاء'}
//           </Button>
//           <Button type="button" variant="outline" onClick={onCancel}>
//             إلغاء
//           </Button>
//         </CardFooter>
//       </form>
//     </Card>
//   );
// };

// export default PriceForm;


// PriceForm.tsx
import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { serviceCategories } from '@/data/pricingData';
import { toast } from 'sonner';

// Schéma de validation incluant le nouveau champ priceUSD
export const priceSchema = z.object({
  title: z.string().min(3, { message: 'العنوان يجب أن يحتوي على 3 أحرف على الأقل' }),
  price: z.string().min(1, { message: 'السعر مطلوب' }),
  priceUSD: z.string().min(1, { message: 'السعر بالدولار مطلوب' }), // Nouveau champ
  currency: z.string().min(1, { message: 'العملة مطلوبة' }),
  period: z.string().min(1, { message: 'الفترة مطلوبة' }),
  features: z.string().min(5, { message: 'المميزات يجب أن تحتوي على 5 أحرف على الأقل' }),
  isPopular: z.boolean().default(false),
  category: z.string().min(1, { message: 'الفئة مطلوبة' })
});

export type PriceFormValues = z.infer<typeof priceSchema>;

interface PriceFormProps {
  // Vous pouvez utiliser any ou mieux typé selon vos besoins
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  price?: any;
  onSubmit: (data: PriceFormValues) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

const PriceForm: React.FC<PriceFormProps> = ({ price, onSubmit, onCancel, isSubmitting = false }) => {
  const form = useForm<PriceFormValues>({
    resolver: zodResolver(priceSchema),
    defaultValues: {
      title: price?.title || '',
      price: price?.price || '',
      priceUSD: price?.priceUSD || '', // Valeur par défaut pour le nouveau champ
      currency: price?.currency || 'LYD',
      period: price?.period || 'monthly',
      features: price?.features || '',
      isPopular: price?.isPopular || false,
      category: price?.category || 'accounting'
    }
  });
  
  // Les périodes proposées
  const periods = [
    { id: 'monthly', name: 'شهرياً' },
    { id: 'yearly', name: 'سنوياً' },
    { id: 'quarterly', name: 'كل ثلاثة أشهر' }
  ];
  
  // Les devises proposées
  const currencies = [
    { id: 'LYD', name: 'د.ل (دينار ليبي)' },
    { id: 'USD', name: '$ (دولار أمريكي)' },
    { id: 'EUR', name: '€ (يورو)' }
  ];
  
  // Pour déboguer, on peut afficher les valeurs envoyées
  const handleSubmit = form.handleSubmit((data) => {
    console.log("Données du formulaire :", data);
    try {
      onSubmit(data);
    } catch (error) {
      console.error("خطأ في إرسال النموذج:", error);
      toast.error("حدث خطأ أثناء حفظ البيانات");
    }
  });
  
  // Gestion de la prévisualisation des caractéristiques
  const [featuresPreview, setFeaturesPreview] = useState<string[]>(
    price?.features ? price.features.split(',') : []
  );
  const handleFeaturesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    form.setValue('features', value);
    setFeaturesPreview(value.split(','));
  };
  
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{price ? 'تعديل الباقة' : 'باقة جديدة'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">العنوان</Label>
            <Input
              id="title"
              placeholder="مثال: الباقة الأساسية"
              {...form.register('title')}
              className="text-right"
            />
            {form.formState.errors.title && (
              <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">السعر (بالدينار)</Label>
              <Input
                id="price"
                placeholder="مثال: 99"
                {...form.register('price')}
                className="text-right"
              />
              {form.formState.errors.price && (
                <p className="text-red-500 text-sm">{form.formState.errors.price.message}</p>
              )}
            </div>
            
            {/* Nouveau champ pour le prix en USD */}
            <div className="space-y-2">
              <Label htmlFor="priceUSD">السعر بالدولار (USD)</Label>
              <Input
                id="priceUSD"
                placeholder="مثال: 25"
                {...form.register('priceUSD')}
                className="text-right"
              />
              {form.formState.errors.priceUSD && (
                <p className="text-red-500 text-sm">{form.formState.errors.priceUSD.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="currency">العملة</Label>
              <Select
                onValueChange={(value) => form.setValue('currency', value)}
                defaultValue={form.getValues('currency')}
              >
                <SelectTrigger id="currency" className="text-right">
                  <SelectValue placeholder="اختر العملة" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.id} value={currency.id}>
                      {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.currency && (
                <p className="text-red-500 text-sm">{form.formState.errors.currency.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="period">الفترة</Label>
              <Select
                onValueChange={(value) => form.setValue('period', value)}
                defaultValue={form.getValues('period')}
              >
                <SelectTrigger id="period" className="text-right">
                  <SelectValue placeholder="اختر الفترة" />
                </SelectTrigger>
                <SelectContent>
                  {periods.map((period) => (
                    <SelectItem key={period.id} value={period.id}>
                      {period.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.period && (
                <p className="text-red-500 text-sm">{form.formState.errors.period.message}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">الفئة</Label>
            <Select
              onValueChange={(value) => form.setValue('category', value)}
              defaultValue={form.getValues('category')}
            >
              <SelectTrigger id="category" className="text-right">
                <SelectValue placeholder="اختر الفئة" />
              </SelectTrigger>
              <SelectContent>
                {serviceCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    <span className="mx-2">{category.icon}</span>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.category && (
              <p className="text-red-500 text-sm">{form.formState.errors.category.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="features">المميزات (تفصل بفواصل)</Label>
            <Textarea
              id="features"
              placeholder="مثال: 5 صفحات،تصميم متجاوب،دعم فني"
              {...form.register('features')}
              onChange={handleFeaturesChange}
              className="min-h-[100px] text-right"
            />
            {form.formState.errors.features && (
              <p className="text-red-500 text-sm">{form.formState.errors.features.message}</p>
            )}
            
            {featuresPreview.length > 0 && featuresPreview[0] !== '' && (
              <div className="mt-4 p-4 border rounded-md bg-gray-50">
                <p className="font-medium mb-2 text-right">معاينة المميزات:</p>
                <ul className="list-disc mr-5 space-y-1 text-right">
                  {featuresPreview.map((feature, index) => (
                    <li key={index} className="text-sm">{feature.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Label htmlFor="isPopular">تمييز كباقة مميزة</Label>
            <Checkbox
              id="isPopular"
              checked={form.getValues('isPopular')}
              onCheckedChange={(checked) => form.setValue('isPopular', checked as boolean)}
            />
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'جاري الحفظ...' : price ? 'تحديث' : 'إنشاء'}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            إلغاء
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default PriceForm;


