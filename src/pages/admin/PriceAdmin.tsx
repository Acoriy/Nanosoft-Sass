// // import React, { useState, useEffect } from "react";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import { Button } from "@/components/ui/button";
// // import { Dialog, DialogContent } from "@/components/ui/dialog";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Input } from "@/components/ui/input";
// // import { Plus, Pencil, Trash2, Search, RefreshCw } from "lucide-react";
// // import { toast } from "sonner";
// // import { serviceCategories } from "@/data/pricingData";
// // import {
// //   getPrices,
// //   getPricesByCategory,
// //   addPrice,
// //   updatePrice,
// //   deletePrice,
// //   Price,
// //   initializeDefaultPrices,
// //   subscribeToPricesUpdates
// // } from "@/services/priceService";
// // import { Skeleton } from "@/components/ui/skeleton";
// // import { useIsMobile } from "@/hooks/use-mobile";
// // import PriceForm from "@/components/PriceForm";

// // const PriceAdmin = () => {
// //   const [prices, setPrices] = useState<Price[]>([]);
// //   const [selectedCategory, setSelectedCategory] = useState("accounting");
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [editingPrice, setEditingPrice] = useState<Price | null>(null);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [isRefreshing, setIsRefreshing] = useState(false);
// //   const isMobile = useIsMobile();

// //   // Créer des prix par défaut si aucun n'existe et configurer l'abonnement aux mises à jour
// //   useEffect(() => {
// //     const initializePrices = async () => {
// //       try {
// //         setIsLoading(true);

// //         // Initialiser les prix par défaut si nécessaire
// //         await initializeDefaultPrices();

// //         // Puis charger les prix pour la catégorie sélectionnée
// //         await loadPricesByCategory();

// //         // Configurer l'abonnement pour les mises à jour en temps réel
// //         const unsubscribe = subscribeToPricesUpdates((updatedPrices) => {
// //           const filteredPrices = updatedPrices.filter(p => p.category === selectedCategory);
// //           setPrices(filteredPrices);
// //           setIsLoading(false);
// //         });

// //         return () => {
// //           unsubscribe(); // Nettoyer l'abonnement lors du démontage
// //         };
// //       } catch (error) {
// //         console.error("Error initializing prices:", error);
// //         toast.error("حدث خطأ أثناء تهيئة الأسعار");
// //         setIsLoading(false);
// //       }
// //     };

// //     initializePrices();
// //   // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [selectedCategory]);

// //   const loadPricesByCategory = async () => {
// //     try {
// //       setIsLoading(true);
// //       const pricesData = await getPricesByCategory(selectedCategory);
// //       setPrices(pricesData);
// //     } catch (error) {
// //       console.error("Error fetching prices:", error);
// //       toast.error("حدث خطأ أثناء تحميل الأسعار");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const refreshPrices = async () => {
// //     try {
// //       setIsRefreshing(true);
// //       // Forcer la réinitialisation des prix par défaut
// //       await initializeDefaultPrices();
// //       await loadPricesByCategory();
// //       toast.success("تم تحديث الأسعار بنجاح");
// //     } catch (error) {
// //       console.error("Error refreshing prices:", error);
// //       toast.error("حدث خطأ أثناء تحديث الأسعار");
// //     } finally {
// //       setIsRefreshing(false);
// //     }
// //   };

// //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //   const handleFormSubmit = async (values: any) => {
// //     try {
// //       if (editingPrice) {
// //         if (!editingPrice.id) {
// //           toast.error("خطأ في تحديث السعر: معرف السعر غير موجود");
// //           return;
// //         }

// //         await updatePrice(editingPrice.id, values);
// //         setPrices(
// //           prices.map((price) =>
// //             price.id === editingPrice.id ? { ...price, ...values } : price
// //           )
// //         );
// //         toast.success("تم تحديث السعر بنجاح");
// //       } else {
// //         const newId = await addPrice(values as Price);
// //         setPrices([...prices, { id: newId, ...values }]);
// //         toast.success("تم إضافة السعر بنجاح");
// //       }
// //       setIsOpen(false);
// //       setEditingPrice(null);
// //     } catch (error) {
// //       console.error("Error saving price:", error);
// //       toast.error("حدث خطأ أثناء حفظ السعر");
// //     }
// //   };

// //   const handleEdit = (price: Price) => {
// //     setEditingPrice(price);
// //     setIsOpen(true);
// //   };

// //   const handleDelete = async (id: string) => {
// //     try {
// //       await deletePrice(id);
// //       setPrices(prices.filter((price) => price.id !== id));
// //       toast.success("تم حذف السعر بنجاح");
// //     } catch (error) {
// //       console.error("Error deleting price:", error);
// //       toast.error("حدث خطأ أثناء حذف السعر");
// //     }
// //   };

// //   const openAddDialog = () => {
// //     setEditingPrice(null);
// //     setIsOpen(true);
// //   };

// //   const filteredPrices = prices.filter(
// //     (price) =>
// //       (price.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //        price.category.toLowerCase().includes(searchTerm.toLowerCase()))
// //   );

// //   return (
// //     <div className="space-y-6">
// //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// //         <h1 className="text-3xl font-bold">إدارة الأسعار</h1>
// //         <div className="flex flex-wrap gap-2">
// //           <Button onClick={refreshPrices} variant="outline" disabled={isRefreshing}>
// //             <RefreshCw className={`ml-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
// //             تحديث
// //           </Button>
// //           <Button onClick={openAddDialog}>
// //             <Plus className="ml-2" size={20} />
// //             إضافة سعر
// //           </Button>
// //         </div>
// //       </div>

// //       <Tabs
// //         defaultValue="accounting"
// //         onValueChange={setSelectedCategory}
// //         value={selectedCategory}
// //       >
// //         <TabsList className="mb-4 flex flex-wrap h-fit">
// //           {serviceCategories.map((category) => (
// //             <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
// //               <span>{category.icon}</span>
// //               <span className="whitespace-nowrap">{category.name}</span>
// //             </TabsTrigger>
// //           ))}
// //         </TabsList>

// //         {serviceCategories.map((category) => (
// //           <TabsContent key={category.id} value={category.id}>
// //             <Card>
// //               <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
// //                 <CardTitle>
// //                   {category.name} - {isLoading ? "..." : filteredPrices.length} باقة
// //                 </CardTitle>
// //                 <div className="w-full sm:w-64 relative mt-2 sm:mt-0">
// //                   <Input
// //                     placeholder="بحث..."
// //                     value={searchTerm}
// //                     onChange={(e) => setSearchTerm(e.target.value)}
// //                     className="pr-8 text-right"
// //                   />
// //                   <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
// //                 </div>
// //               </CardHeader>
// //               <CardContent>
// //                 {isLoading ? (
// //                   <div className="space-y-4">
// //                     {[1, 2, 3].map((i) => (
// //                       <div key={i} className="w-full h-16 rounded-md">
// //                         <Skeleton className="w-full h-full" />
// //                       </div>
// //                     ))}
// //                   </div>
// //                 ) : (
// //                   <div className={`${isMobile ? 'overflow-x-auto' : ''}`}>
// //                     <Table>
// //                       <TableHeader>
// //                         <TableRow>
// //                           <TableHead className="text-right">العنوان</TableHead>
// //                           <TableHead className="text-right">السعر</TableHead>
// //                           <TableHead className="text-right">الميزات</TableHead>
// //                           <TableHead className="text-right">الأكثر طلباً</TableHead>
// //                           <TableHead className="text-right">الإجراءات</TableHead>
// //                         </TableRow>
// //                       </TableHeader>
// //                       <TableBody>
// //                         {filteredPrices.length > 0 ? (
// //                           filteredPrices.map((price) => (
// //                             <TableRow key={price.id}>
// //                               <TableCell className="font-medium text-right">{price.title}</TableCell>
// //                               <TableCell className="text-right">
// //                                 {price.price} {price.currency}/{price.period === "monthly" ? "شهريًا" : price.period === "yearly" ? "سنويًا" : "كل ثلاثة أشهر"}
// //                               </TableCell>
// //                               <TableCell className="max-w-xs truncate text-right">{price.features.split(',').length} ميزات</TableCell>
// //                               <TableCell className="text-right">{price.isPopular ? "نعم" : "لا"}</TableCell>
// //                               <TableCell className="flex gap-2 justify-end">
// //                                 <Button
// //                                   variant="outline"
// //                                   size="icon"
// //                                   onClick={() => handleEdit(price)}
// //                                 >
// //                                   <Pencil size={16} />
// //                                 </Button>
// //                                 <Button
// //                                   variant="destructive"
// //                                   size="icon"
// //                                   onClick={() => handleDelete(price.id!)}
// //                                 >
// //                                   <Trash2 size={16} />
// //                                 </Button>
// //                               </TableCell>
// //                             </TableRow>
// //                           ))
// //                         ) : (
// //                           <TableRow>
// //                             <TableCell colSpan={5} className="text-center py-6">
// //                               لا توجد نتائج للبحث أو لم يتم إضافة أسعار لهذه الفئة بعد
// //                             </TableCell>
// //                           </TableRow>
// //                         )}
// //                       </TableBody>
// //                     </Table>
// //                   </div>
// //                 )}
// //               </CardContent>
// //             </Card>
// //           </TabsContent>
// //         ))}
// //       </Tabs>

// //       <Dialog open={isOpen} onOpenChange={setIsOpen}>
// //         <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
// //           <PriceForm
// //             price={editingPrice}
// //             onSubmit={handleFormSubmit}
// //             onCancel={() => setIsOpen(false)}
// //             isSubmitting={false}
// //           />
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default PriceAdmin;

// import React, { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Plus, Pencil, Trash2, Search, RefreshCw } from "lucide-react";
// import { toast } from "sonner";
// import { serviceCategories } from "@/data/pricingData";
// import {
//   getPrices,
//   getPricesByCategory,
//   addPrice,
//   updatePrice,
//   deletePrice,
//   Price,
//   initializeDefaultPrices,
//   subscribeToPricesUpdates
// } from "@/services/priceService";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useIsMobile } from "@/hooks/use-mobile";
// import PriceForm from "@/components/PriceForm";

// const PriceAdmin = () => {
//   const [prices, setPrices] = useState<Price[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("accounting");
//   const [isOpen, setIsOpen] = useState(false);
//   const [editingPrice, setEditingPrice] = useState<Price | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const isMobile = useIsMobile();

//   useEffect(() => {
//     const initializePrices = async () => {
//       try {
//         setIsLoading(true);

//         await initializeDefaultPrices();

//         await loadPricesByCategory();

//         const unsubscribe = subscribeToPricesUpdates((updatedPrices) => {
//           const filteredPrices = updatedPrices.filter(p => p.category === selectedCategory);
//           setPrices(filteredPrices);
//           setIsLoading(false);
//         });

//         return () => {
//           unsubscribe();
//         };
//       } catch (error) {
//         console.error("Error initializing prices:", error);
//         toast.error("حدث خطأ أثناء تهيئة الأسعار");
//         setIsLoading(false);
//       }
//     };

//     initializePrices();
//   }, [selectedCategory]);

//   const loadPricesByCategory = async () => {
//     try {
//       setIsLoading(true);
//       const pricesData = await getPricesByCategory(selectedCategory);
//       setPrices(pricesData);
//     } catch (error) {
//       console.error("Error fetching prices:", error);
//       toast.error("حدث خطأ أثناء تحميل الأسعار");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const refreshPrices = async () => {
//     try {
//       setIsRefreshing(true);
//       await initializeDefaultPrices();
//       await loadPricesByCategory();
//       toast.success("تم تحديث الأسعار بنجاح");
//     } catch (error) {
//       console.error("Error refreshing prices:", error);
//       toast.error("حدث خطأ أثناء تحديث الأسعار");
//     } finally {
//       setIsRefreshing(false);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const handleFormSubmit = async (values: any) => {
//     try {
//       if (editingPrice) {
//         if (!editingPrice.id) {
//           toast.error("خطأ في تحديث السعر: معرف السعر غير موجود");
//           return;
//         }

//         await updatePrice(editingPrice.id, values);
//         setPrices(
//           prices.map((price) =>
//             price.id === editingPrice.id ? { ...price, ...values } : price
//           )
//         );
//         toast.success("تم تحديث السعر بنجاح");
//       } else {
//         const newId = await addPrice(values as Price);
//         setPrices([...prices, { id: newId, ...values }]);
//         toast.success("تم إضافة السعر بنجاح");
//       }
//       setIsOpen(false);
//       setEditingPrice(null);
//     } catch (error) {
//       console.error("Error saving price:", error);
//       toast.error("حدث خطأ أثناء حفظ السعر");
//     }
//   };

//   const handleEdit = (price: Price) => {
//     setEditingPrice(price);
//     setIsOpen(true);
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await deletePrice(id);
//       setPrices(prices.filter((price) => price.id !== id));
//       toast.success("تم حذف السعر بنجاح");
//     } catch (error) {
//       console.error("Error deleting price:", error);
//       toast.error("حدث خطأ أثناء حذف السعر");
//     }
//   };

//   const openAddDialog = () => {
//     setEditingPrice(null);
//     setIsOpen(true);
//   };

//   const filteredPrices = prices.filter(
//     (price) =>
//       (price.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//        price.category.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <h1 className="text-3xl font-bold">إدارة الأسعار</h1>
//         <div className="flex flex-wrap gap-2">
//           <Button onClick={refreshPrices} variant="outline" disabled={isRefreshing}>
//             <RefreshCw className={`ml-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
//             تحديث
//           </Button>
//           <Button onClick={openAddDialog}>
//             <Plus className="ml-2" size={20} />
//             إضافة سعر
//           </Button>
//         </div>
//       </div>

//       <Tabs
//         defaultValue="accounting"
//         onValueChange={setSelectedCategory}
//         value={selectedCategory}
//       >
//         <TabsList className="mb-4 flex flex-wrap h-fit">
//           {serviceCategories.map((category) => (
//             <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
//               <span>{category.icon}</span>
//               <span className="whitespace-nowrap">{category.name}</span>
//             </TabsTrigger>
//           ))}
//         </TabsList>

//         {serviceCategories.map((category) => (
//           <TabsContent key={category.id} value={category.id}>
//             <Card>
//               <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
//                 <CardTitle>
//                   {category.name} - {isLoading ? "..." : filteredPrices.length} باقة
//                 </CardTitle>
//                 <div className="w-full sm:w-64 relative mt-2 sm:mt-0">
//                   <Input
//                     placeholder="بحث..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="pr-8 text-right"
//                   />
//                   <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 {isLoading ? (
//                   <div className="space-y-4">
//                     {[1, 2, 3].map((i) => (
//                       <div key={i} className="w-full h-16 rounded-md">
//                         <Skeleton className="w-full h-full" />
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className={`${isMobile ? 'overflow-x-auto' : ''}`}>
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead className="text-right">العنوان</TableHead>
//                           <TableHead className="text-right">السعر</TableHead>
//                           <TableHead className="text-right">الميزات</TableHead>
//                           <TableHead className="text-right">الأكثر طلباً</TableHead>
//                           <TableHead className="text-right">الإجراءات</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {filteredPrices.length > 0 ? (
//                           filteredPrices.map((price) => (
//                             <TableRow key={price.id}>
//                               <TableCell className="font-medium text-right">{price.title}</TableCell>
//                               <TableCell className="text-right">
//                                 {price.price} {price.currency}/{price.period === "monthly" ? "شهريًا" : price.period === "yearly" ? "سنويًا" : "كل ثلاثة أشهر"}
//                               </TableCell>
//                               <TableCell className="max-w-xs truncate text-right">{price.features.split(',').length} ميزات</TableCell>
//                               <TableCell className="text-right">{price.isPopular ? "نعم" : "لا"}</TableCell>
//                               <TableCell className="flex gap-2 justify-end">
//                                 <Button
//                                   variant="outline"
//                                   size="icon"
//                                   onClick={() => handleEdit(price)}
//                                 >
//                                   <Pencil size={16} />
//                                 </Button>
//                                 <Button
//                                   variant="destructive"
//                                   size="icon"
//                                   onClick={() => handleDelete(price.id!)}
//                                 >
//                                   <Trash2 size={16} />
//                                 </Button>
//                               </TableCell>
//                             </TableRow>
//                           ))
//                         ) : (
//                           <TableRow>
//                             <TableCell colSpan={5} className="text-center py-6">
//                               لا توجد نتائج للبحث أو لم يتم إضافة أسعار لهذه الفئة بعد
//                             </TableCell>
//                           </TableRow>
//                         )}
//                       </TableBody>
//                     </Table>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </TabsContent>
//         ))}
//       </Tabs>

//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
//           <PriceForm
//             price={editingPrice}
//             onSubmit={handleFormSubmit}
//             onCancel={() => setIsOpen(false)}
//             isSubmitting={false}
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default PriceAdmin;

// 2) la verssion actuelle :

// import React, { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Plus, Pencil, Trash2, Search, RefreshCw } from "lucide-react";
// import { toast } from "sonner";
// import { serviceCategories } from "@/data/pricingData";
// import {
//   getPrices,
//   getPricesByCategory,
//   addPrice,
//   updatePrice,
//   deletePrice,
//   Price,
//   initializeDefaultPrices,
//   subscribeToPricesUpdates
// } from "@/services/priceService";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useIsMobile } from "@/hooks/use-mobile";
// import PriceForm from "@/components/PriceForm";

// const PriceAdmin = () => {
//   const [prices, setPrices] = useState<Price[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("accounting");
//   const [isOpen, setIsOpen] = useState(false);
//   const [editingPrice, setEditingPrice] = useState<Price | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const isMobile = useIsMobile();

//   useEffect(() => {
//     const initializePrices = async () => {
//       try {
//         setIsLoading(true);

//         // Initialiser les prix par défaut si nécessaire
//         await initializeDefaultPrices();

//         // Charger les prix pour la catégorie sélectionnée avec filtrage
//         await loadPricesByCategory();

//         // Configurer l'abonnement pour les mises à jour en temps réel
//         const unsubscribe = subscribeToPricesUpdates((updatedPrices) => {
//           // Filtrer pour n'inclure que les données valides et appartenant à la catégorie sélectionnée
//           const filteredPrices = updatedPrices
//             .filter((p: Price) => p && p.id)
//             .filter((p: Price) => p.category === selectedCategory);
//           setPrices(filteredPrices);
//           setIsLoading(false);
//         });

//         return () => {
//           unsubscribe(); // Nettoyer l'abonnement lors du démontage
//         };
//       } catch (error) {
//         console.error("Error initializing prices:", error);
//         toast.error("حدث خطأ أثناء تهيئة الأسعار");
//         setIsLoading(false);
//       }
//     };

//     initializePrices();
//   }, [selectedCategory]);

//   const loadPricesByCategory = async () => {
//     try {
//       setIsLoading(true);
//       const pricesData = await getPricesByCategory(selectedCategory);
//       // Filtrer les données pour ne garder que celles existantes et avec un id
//       const filteredData = pricesData.filter((price: Price) => price && price.id);
//       setPrices(filteredData);
//     } catch (error) {
//       console.error("Error fetching prices:", error);
//       // toast.error("حدث خطأ أثناء تحميل الأسعار"); // Message retiré
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const refreshPrices = async () => {
//     try {
//       setIsRefreshing(true);
//       await initializeDefaultPrices();
//       await loadPricesByCategory();
//       toast.success("تم تحديث الأسعار بنجاح");
//     } catch (error) {
//       console.error("Error refreshing prices:", error);
//       toast.error("حدث خطأ أثناء تحديث الأسعار");
//     } finally {
//       setIsRefreshing(false);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const handleFormSubmit = async (values: any) => {
//     try {
//       if (editingPrice) {
//         if (!editingPrice.id) {
//           toast.error("خطأ في تحديث السعر: معرف السعر غير موجود");
//           return;
//         }

//         await updatePrice(editingPrice.id, values);
//         setPrices(
//           prices.map((price) =>
//             price.id === editingPrice.id ? { ...price, ...values } : price
//           )
//         );
//         toast.success("تم تحديث السعر بنجاح");
//       } else {
//         const newId = await addPrice(values as Price);
//         setPrices([...prices, { id: newId, ...values }]);
//         toast.success("تم إضافة السعر بنجاح");
//       }
//       setIsOpen(false);
//       setEditingPrice(null);
//     } catch (error) {
//       console.error("Error saving price:", error);
//       toast.error("حدث خطأ أثناء حفظ السعر");
//     }
//   };

//   const handleEdit = (price: Price) => {
//     setEditingPrice(price);
//     setIsOpen(true);
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await deletePrice(id);
//       setPrices(prices.filter((price) => price.id !== id));
//       toast.success("تم حذف السعر بنجاح");
//     } catch (error) {
//       console.error("Error deleting price:", error);
//       toast.error("حدث خطأ أثناء حذف السعر");
//     }
//   };

//   const openAddDialog = () => {
//     setEditingPrice(null);
//     setIsOpen(true);
//   };

//   const filteredPrices = prices.filter(
//     (price) =>
//       price.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       price.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <h1 className="text-3xl font-bold">إدارة الأسعار</h1>
//         <div className="flex flex-wrap gap-2">
//           <Button onClick={refreshPrices} variant="outline" disabled={isRefreshing}>
//             <RefreshCw className={`ml-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
//             تحديث
//           </Button>
//           <Button onClick={openAddDialog}>
//             <Plus className="ml-2" size={20} />
//             إضافة سعر
//           </Button>
//         </div>
//       </div>

//       <Tabs
//         defaultValue="accounting"
//         onValueChange={setSelectedCategory}
//         value={selectedCategory}
//       >
//         <TabsList className="mb-4 flex flex-wrap h-fit">
//           {serviceCategories.map((category) => (
//             <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
//               <span>{category.icon}</span>
//               <span className="whitespace-nowrap">{category.name}</span>
//             </TabsTrigger>
//           ))}
//         </TabsList>

//         {serviceCategories.map((category) => (
//           <TabsContent key={category.id} value={category.id}>
//             <Card>
//               <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
//                 <CardTitle>
//                   {category.name} - {isLoading ? "..." : filteredPrices.length} باقة
//                 </CardTitle>
//                 <div className="w-full sm:w-64 relative mt-2 sm:mt-0">
//                   <Input
//                     placeholder="بحث..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="pr-8 text-right"
//                   />
//                   <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 {isLoading ? (
//                   <div className="space-y-4">
//                     {[1, 2, 3].map((i) => (
//                       <div key={i} className="w-full h-16 rounded-md">
//                         <Skeleton className="w-full h-full" />
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className={`${isMobile ? 'overflow-x-auto' : ''}`}>
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead className="text-right">العنوان</TableHead>
//                           <TableHead className="text-right">السعر</TableHead>
//                           <TableHead className="text-right">الميزات</TableHead>
//                           <TableHead className="text-right">الأكثر طلباً</TableHead>
//                           <TableHead className="text-right">الإجراءات</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {filteredPrices.length > 0 ? (
//                           filteredPrices.map((price) => (
//                             <TableRow key={price.id}>
//                               <TableCell className="font-medium text-right">{price.title}</TableCell>
//                               <TableCell className="text-right">
//                                 {price.price} {price.currency}/{price.period === "monthly" ? "شهريًا" : price.period === "yearly" ? "سنويًا" : "كل ثلاثة أشهر"}
//                               </TableCell>
//                               <TableCell className="max-w-xs truncate text-right">
//                                 {price.features.split(',').length} ميزات
//                               </TableCell>
//                               <TableCell className="text-right">
//                                 {price.isPopular ? "نعم" : "لا"}
//                               </TableCell>
//                               <TableCell className="flex gap-2 justify-end">
//                                 <Button
//                                   variant="outline"
//                                   size="icon"
//                                   onClick={() => handleEdit(price)}
//                                 >
//                                   <Pencil size={16} />
//                                 </Button>
//                                 <Button
//                                   variant="destructive"
//                                   size="icon"
//                                   onClick={() => handleDelete(price.id!)}
//                                 >
//                                   <Trash2 size={16} />
//                                 </Button>
//                               </TableCell>
//                             </TableRow>
//                           ))
//                         ) : (
//                           <TableRow>
//                             <TableCell colSpan={5} className="text-center py-6">
//                               لا توجد نتائج للبحث أو لم يتم إضافة أسعار لهذه الفئة بعد
//                             </TableCell>
//                           </TableRow>
//                         )}
//                       </TableBody>
//                     </Table>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </TabsContent>
//         ))}
//       </Tabs>

//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
//           <PriceForm
//             price={editingPrice}
//             onSubmit={handleFormSubmit}
//             onCancel={() => setIsOpen(false)}
//             isSubmitting={false}
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default PriceAdmin;

// 3) laverssion en teste :

// PriceAdmin.tsx
// PriceAdmin.tsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// ✅ Types
type Price = {
  id?: string;
  duration: string;
  price: number;
  priceDollar: number;
};

// ✅ Composant principal
export default function PricingAdmin() {
  const [prices, setPrices] = useState<Price[]>([]);
  const { register, handleSubmit, reset } = useForm<Omit<Price, "id">>();
  const pricesCollection = collection(db, "prices");

  // 🔄 Récupération des prix
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const snapshot = await getDocs(pricesCollection);
        const priceList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Price[];
        setPrices(priceList);
      } catch (error) {
        toast.error("Erreur lors du chargement des prix");
        console.error(error);
      }
    };

    fetchPrices();
  }, []);

  // ✅ Ajouter un prix
  const onSubmit = async (values: Omit<Price, "id">) => {
    try {
      const docRef = await addDoc(pricesCollection, values);
      const newPrice: Price = { ...values, id: docRef.id };
      setPrices([...prices, newPrice]);
      toast.success("Prix ajouté avec succès");
      reset();
    } catch (error) {
      toast.error("Erreur lors de l'ajout");
      console.error(error);
    }
  };

  // ❌ Supprimer un prix
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(pricesCollection, id));
      setPrices(prices.filter((p) => p.id !== id));
      toast.success("Prix supprimé avec succès");
    } catch (error) {
      toast.error("Erreur lors de la suppression");
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Ajouter un prix</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input {...register("duration")} placeholder="Durée (ex: 1 mois)" />
        <Input type="number" {...register("price")} placeholder="Prix en MAD" />
        <Input
          type="number"
          {...register("priceDollar")}
          placeholder="Prix en Dollar"
        />
        <Button type="submit">Ajouter</Button>
      </form>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Liste des prix</h3>
        {prices.map((price) => (
          <div
            key={price.id}
            className="flex items-center justify-between border p-3 rounded mb-2"
          >
            <div>
              <p className="font-medium">{price.duration}</p>
              <p className="text-sm text-gray-600">
                {price.price} MAD / {price.priceDollar} $
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={() => price.id && handleDelete(price.id)}
            >
              Supprimer
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
