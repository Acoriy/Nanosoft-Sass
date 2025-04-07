
// import React, { useState, useEffect, useRef } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Check, Edit, Image as ImageIcon, Plus, RefreshCw, Search, Trash2, X } from "lucide-react";
// import { toast } from "sonner";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { 
//   getBlogs, 
//   getBlogsByCategory, 
//   addBlog, 
//   updateBlog, 
//   deleteBlog, 
//   toggleBlogPublish,
//   Blog,
//   initializeDefaultBlogs,
//   blogCategories
// } from "@/services/blogService";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useIsMobile } from "@/hooks/use-mobile";

// // Images de démo pour préremplir la liste d'options
// const demoImages = [
//   "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
//   "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
//   "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
//   "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
//   "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
// ];

// const BlogAdmin = () => {
//   const isMobile = useIsMobile();
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("الكل");
//   const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
//   const [viewMode, setViewMode] = useState("list"); // "list" ou "content"
//   const [currentBlogContent, setCurrentBlogContent] = useState<Blog | null>(null);
//   const [newBlog, setNewBlog] = useState<Blog>({
//     title: "",
//     excerpt: "",
//     content: "",
//     category: "",
//     image: "",
//     date: new Date().toISOString().split("T")[0],
//     published: true
//   });
//   const [isNewDialogOpen, setIsNewDialogOpen] = useState(false);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
//   const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
//   const imageInputRef = useRef<HTMLInputElement>(null);

//   // Fetch blogs from Firebase
//   useEffect(() => {
//     const loadBlogs = async () => {
//       setIsLoading(true);
//       try {
//         // First ensure default blogs exist
//         await initializeDefaultBlogs();
        
//         // Then fetch the blogs based on category
//         let blogsData;
//         if (selectedCategory === "الكل") {
//           blogsData = await getBlogs();
//         } else {
//           blogsData = await getBlogsByCategory(selectedCategory);
//         }
//         setBlogs(blogsData);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         toast.error("حدث خطأ أثناء تحميل المدونات");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadBlogs();
//   }, [selectedCategory]);

//   const refreshBlogs = async () => {
//     try {
//       setIsRefreshing(true);
//       // Forcer la réinitialisation des blogs par défaut
//       await initializeDefaultBlogs();
      
//       // Puis recharger les blogs selon la catégorie sélectionnée
//       let blogsData;
//       if (selectedCategory === "الكل") {
//         blogsData = await getBlogs();
//       } else {
//         blogsData = await getBlogsByCategory(selectedCategory);
//       }
//       setBlogs(blogsData);
      
//       toast.success("تم تحديث المدونات بنجاح");
//     } catch (error) {
//       console.error("Error refreshing blogs:", error);
//       toast.error("حدث خطأ أثناء تحديث المدونات");
//     } finally {
//       setIsRefreshing(false);
//     }
//   };

//   // Filtrer les blogs selon le terme de recherche
//   const filteredBlogs = blogs.filter(blog => 
//     blog && ((blog.title && blog.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (blog.category && blog.category.toLowerCase().includes(searchTerm.toLowerCase())))
//   );

//   const handleDelete = async (id: string) => {
//     if (!id) return;
    
//     try {
//       const blogToDelete = blogs.find(blog => blog.id === id);
//       if (blogToDelete && blogToDelete.image) {
//         await deleteBlog(id, blogToDelete.image);
//       } else {
//         await deleteBlog(id);
//       }
//       setBlogs(blogs.filter(blog => blog.id !== id));
//       toast.success("تم حذف المدونة بنجاح");
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//       toast.error("حدث خطأ أثناء حذف المدونة");
//     }
//   };

//   const handleEdit = (blog: Blog) => {
//     setEditingBlog({...blog});
//     setIsEditDialogOpen(true);
//   };

//   const handleViewContent = (blog: Blog) => {
//     setCurrentBlogContent(blog);
//     setIsViewDialogOpen(true);
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, isEditMode = false) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const result = reader.result as string;
//         if (isEditMode && editingBlog) {
//           setEditingBlog({ ...editingBlog, image: result });
//         } else {
//           setNewBlog({ ...newBlog, image: result });
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUpdateBlog = async () => {
//     try {
//       if (!editingBlog || !editingBlog.id) {
//         toast.error("خطأ في تحديث المدونة: معرف المدونة غير موجود");
//         return;
//       }
      
//       await updateBlog(editingBlog.id, editingBlog);
      
//       // Update local state
//       setBlogs(blogs.map(blog => 
//         blog.id === editingBlog.id ? {...blog, ...editingBlog} : blog
//       ));
      
//       setIsEditDialogOpen(false);
//       toast.success("تم تحديث المدونة بنجاح");
//     } catch (error) {
//       console.error("Error updating blog:", error);
//       toast.error("حدث خطأ أثناء تحديث المدونة");
//     }
//   };

//   const handleAddBlog = async () => {
//     try {
//       if (!newBlog.title || !newBlog.content || !newBlog.category) {
//         toast.error("يرجى ملء جميع الحقول المطلوبة");
//         return;
//       }
      
//       const id = await addBlog(newBlog);
//       const newBlogWithId = { ...newBlog, id };
      
//       setBlogs([newBlogWithId, ...blogs]);
//       setIsNewDialogOpen(false);
//       setNewBlog({
//         title: "",
//         excerpt: "",
//         content: "",
//         category: "",
//         image: "",
//         date: new Date().toISOString().split("T")[0],
//         published: true
//       });
//       toast.success("تمت إضافة المدونة بنجاح");
//     } catch (error) {
//       console.error("Error adding blog:", error);
//       toast.error("حدث خطأ أثناء إضافة المدونة");
//     }
//   };

//   const togglePublish = async (id: string) => {
//     try {
//       const blogToToggle = blogs.find(blog => blog.id === id);
//       if (!blogToToggle) {
//         toast.error("لم يتم العثور على المدونة");
//         return;
//       }
      
//       const newPublishState = !blogToToggle.published;
      
//       await toggleBlogPublish(id, newPublishState);
      
//       // Update local state
//       setBlogs(blogs.map(blog => 
//         blog.id === id ? { ...blog, published: newPublishState } : blog
//       ));
      
//       toast.success(newPublishState ? "تم نشر المدونة بنجاح" : "تم إلغاء نشر المدونة بنجاح");
//     } catch (error) {
//       console.error("Error toggling publish state:", error);
//       toast.error("حدث خطأ أثناء تغيير حالة النشر");
//     }
//   };

//   const selectDemoImage = (url: string, isEditMode = false) => {
//     if (isEditMode && editingBlog) {
//       setEditingBlog({ ...editingBlog, image: url });
//     } else {
//       setNewBlog({ ...newBlog, image: url });
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <h1 className="text-3xl font-bold">إدارة المدونات</h1>
        
//         <div className="flex flex-wrap gap-2">
//           <Button 
//             onClick={refreshBlogs} 
//             variant="outline" 
//             disabled={isRefreshing} 
//             className="flex items-center gap-2"
//           >
//             <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
//             تحديث
//           </Button>
          
//           <Dialog open={isNewDialogOpen} onOpenChange={setIsNewDialogOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-nanosoft-primary hover:bg-nanosoft-secondary">
//                 <Plus className="ml-2 h-4 w-4" /> إضافة مدونة
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>إضافة مدونة جديدة</DialogTitle>
//                 <DialogDescription>
//                   أضف تفاصيل المدونة الجديدة هنا. انقر على حفظ عند الانتهاء.
//                 </DialogDescription>
//               </DialogHeader>
//               <Tabs defaultValue="details">
//                 <TabsList className="mb-4">
//                   <TabsTrigger value="details">التفاصيل الأساسية</TabsTrigger>
//                   <TabsTrigger value="content">المحتوى</TabsTrigger>
//                   <TabsTrigger value="image">الصورة</TabsTrigger>
//                 </TabsList>
                
//                 <TabsContent value="details">
//                   <div className="grid gap-4 py-4">
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="title" className="text-right">
//                         العنوان
//                       </Label>
//                       <Input
//                         id="title"
//                         value={newBlog.title}
//                         onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
//                         className="col-span-3"
//                       />
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="excerpt" className="text-right">
//                         ملخص
//                       </Label>
//                       <Input
//                         id="excerpt"
//                         value={newBlog.excerpt}
//                         onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
//                         className="col-span-3"
//                       />
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="category" className="text-right">
//                         الفئة
//                       </Label>
//                       <Input
//                         id="category"
//                         value={newBlog.category}
//                         onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
//                         className="col-span-3"
//                         list="categories"
//                       />
//                       <datalist id="categories">
//                         {blogCategories.filter(cat => cat !== "الكل").map((cat) => (
//                           <option key={cat} value={cat} />
//                         ))}
//                       </datalist>
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="date" className="text-right">
//                         التاريخ
//                       </Label>
//                       <Input
//                         id="date"
//                         type="date"
//                         value={newBlog.date}
//                         onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
//                         className="col-span-3"
//                       />
//                     </div>
//                   </div>
//                 </TabsContent>
                
//                 <TabsContent value="content">
//                   <div className="grid gap-4 py-4">
//                     <div>
//                       <Label htmlFor="content" className="mb-2 block">
//                         المحتوى
//                       </Label>
//                       <Textarea
//                         id="content"
//                         value={newBlog.content}
//                         onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
//                         className="min-h-[300px]"
//                       />
//                     </div>
//                   </div>
//                 </TabsContent>
                
//                 <TabsContent value="image">
//                   <div className="grid gap-4 py-4">
//                     <div className="space-y-4">
//                       <Label className="block">
//                         الصورة
//                       </Label>
                      
//                       {newBlog.image && (
//                         <div className="relative w-full h-[200px] mb-4 rounded-md overflow-hidden">
//                           <img 
//                             src={newBlog.image} 
//                             alt="Preview" 
//                             className="w-full h-full object-cover"
//                           />
//                           <Button 
//                             variant="destructive" 
//                             size="icon"
//                             className="absolute top-2 right-2"
//                             onClick={() => setNewBlog({ ...newBlog, image: "" })}
//                           >
//                             <X size={16} />
//                           </Button>
//                         </div>
//                       )}
                      
//                       <div className="flex flex-col space-y-4">
//                         <div>
//                           <Label>رفع صورة جديدة</Label>
//                           <Input
//                             ref={imageInputRef}
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => handleImageChange(e, false)}
//                             className="mt-2"
//                           />
//                         </div>
                        
//                         <div>
//                           <Label className="mb-2 block">أو اختر من الصور الافتراضية</Label>
//                           <div className="grid grid-cols-3 gap-2">
//                             {demoImages.map((url, i) => (
//                               <div 
//                                 key={i} 
//                                 className={`relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ${newBlog.image === url ? 'border-nanosoft-primary' : 'border-transparent'}`}
//                                 onClick={() => selectDemoImage(url, false)}
//                               >
//                                 <img src={url} alt={`Demo ${i+1}`} className="w-full h-full object-cover" />
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </TabsContent>
//               </Tabs>
//               <DialogFooter>
//                 <Button variant="outline" onClick={() => setIsNewDialogOpen(false)}>
//                   إلغاء
//                 </Button>
//                 <Button onClick={handleAddBlog} className="bg-nanosoft-primary hover:bg-nanosoft-secondary">
//                   حفظ
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
      
//       <Card>
//         <CardHeader>
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//               <CardTitle>المدونات ({isLoading ? "..." : filteredBlogs.length})</CardTitle>
              
//               <div className={`flex gap-2 overflow-x-auto ${isMobile ? 'max-w-[calc(100vw-2rem)] pb-2' : ''}`}>
//                 <Tabs 
//                   value={selectedCategory} 
//                   onValueChange={setSelectedCategory}
//                   className="w-fit"
//                 >
//                   <TabsList className="overflow-x-auto flex">
//                     {blogCategories.map((cat) => (
//                       <TabsTrigger key={cat} value={cat}>
//                         {cat}
//                       </TabsTrigger>
//                     ))}
//                   </TabsList>
//                 </Tabs>
//               </div>
//             </div>
            
//             <div className="relative w-full sm:w-64">
//               <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//               <Input
//                 placeholder="البحث..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pr-10"
//               />
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent>
//           {isLoading ? (
//             <div className="space-y-4">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="w-full h-16 rounded-md">
//                   <Skeleton className="w-full h-full" />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className={`${isMobile ? 'overflow-x-auto' : ''}`}>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="text-right">المعرف</TableHead>
//                     <TableHead className="text-right">العنوان</TableHead>
//                     <TableHead className="text-right">الفئة</TableHead>
//                     <TableHead className="text-right">التاريخ</TableHead>
//                     <TableHead className="text-right">الصورة</TableHead>
//                     <TableHead className="text-right">الحالة</TableHead>
//                     <TableHead className="text-right">الإجراءات</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => (
//                     <TableRow key={blog.id}>
//                       <TableCell className="font-medium">{blog.id?.substring(0, 6)}...</TableCell>
//                       <TableCell>
//                         <div className="max-w-[180px] truncate" title={blog.title}>
//                           {blog.title}
//                         </div>
//                       </TableCell>
//                       <TableCell>{blog.category}</TableCell>
//                       <TableCell>{blog.date}</TableCell>
//                       <TableCell>
//                         {blog.image ? (
//                           <div className="h-10 w-10 rounded-md overflow-hidden">
//                             <img 
//                               src={blog.image} 
//                               alt={blog.title} 
//                               className="h-full w-full object-cover" 
//                             />
//                           </div>
//                         ) : (
//                           <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
//                             <ImageIcon size={16} className="text-gray-400" />
//                           </div>
//                         )}
//                       </TableCell>
//                       <TableCell>
//                         <Button
//                           variant={blog.published ? "default" : "outline"}
//                           size="sm"
//                           onClick={() => togglePublish(blog.id!)}
//                           className={
//                             blog.published
//                               ? "bg-green-500 hover:bg-green-600"
//                               : "text-gray-500"
//                           }
//                         >
//                           {blog.published ? "منشور" : "مسودة"}
//                         </Button>
//                       </TableCell>
//                       <TableCell>
//                         <div className="flex space-x-2 gap-2">
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             onClick={() => handleViewContent(blog)}
//                           >
//                             <Search className="h-4 w-4" />
//                           </Button>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             onClick={() => handleEdit(blog)}
//                           >
//                             <Edit className="h-4 w-4" />
//                           </Button>
//                           <Button
//                             variant="outline"
//                             size="icon"
//                             className="text-red-500"
//                             onClick={() => handleDelete(blog.id!)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   )) : (
//                     <TableRow>
//                       <TableCell colSpan={7} className="text-center py-6">
//                         لا توجد نتائج للبحث
//                       </TableCell>
//                     </TableRow>
//                   )}
//                 </TableBody>
//               </Table>
//             </div>
//           )}
//         </CardContent>
//       </Card>
      
//       {/* Affichage du contenu complet du blog */}
//       <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
//         <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
//           {currentBlogContent && (
//             <>
//               <DialogHeader>
//                 <DialogTitle>{currentBlogContent.title}</DialogTitle>
//                 <DialogDescription>
//                   {currentBlogContent.excerpt}
//                 </DialogDescription>
//               </DialogHeader>
              
//               {currentBlogContent.image && (
//                 <div className="w-full h-[200px] rounded-md overflow-hidden my-4">
//                   <img 
//                     src={currentBlogContent.image} 
//                     alt={currentBlogContent.title} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               )}
              
//               <div className="py-4 whitespace-pre-line">
//                 {currentBlogContent.content}
//               </div>
              
//               <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
//                 <span>الفئة: {currentBlogContent.category}</span>
//                 <span>التاريخ: {currentBlogContent.date}</span>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
      
//       {/* Édition d'un blog existant */}
//       <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
//         <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>تعديل المدونة</DialogTitle>
//             <DialogDescription>
//               قم بتعديل تفاصيل المدونة هنا. انقر على حفظ عند الانتهاء.
//             </DialogDescription>
//           </DialogHeader>
//           {editingBlog && (
//             <Tabs defaultValue="details">
//               <TabsList className="mb-4">
//                 <TabsTrigger value="details">التفاصيل الأساسية</TabsTrigger>
//                 <TabsTrigger value="content">المحتوى</TabsTrigger>
//                 <TabsTrigger value="image">الصورة</TabsTrigger>
//               </TabsList>
              
//               <TabsContent value="details">
//                 <div className="grid gap-4 py-4">
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="edit-title" className="text-right">
//                       العنوان
//                     </Label>
//                     <Input
//                       id="edit-title"
//                       value={editingBlog.title}
//                       onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
//                       className="col-span-3"
//                     />
//                   </div>
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="edit-excerpt" className="text-right">
//                       ملخص
//                     </Label>
//                     <Input
//                       id="edit-excerpt"
//                       value={editingBlog.excerpt}
//                       onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
//                       className="col-span-3"
//                     />
//                   </div>
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="edit-category" className="text-right">
//                       الفئة
//                     </Label>
//                     <Input
//                       id="edit-category"
//                       value={editingBlog.category}
//                       onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
//                       className="col-span-3"
//                       list="edit-categories"
//                     />
//                     <datalist id="edit-categories">
//                       {blogCategories.filter(cat => cat !== "الكل").map((cat) => (
//                         <option key={cat} value={cat} />
//                       ))}
//                     </datalist>
//                   </div>
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="edit-date" className="text-right">
//                       التاريخ
//                     </Label>
//                     <Input
//                       id="edit-date"
//                       type="date"
//                       value={editingBlog.date}
//                       onChange={(e) => setEditingBlog({ ...editingBlog, date: e.target.value })}
//                       className="col-span-3"
//                     />
//                   </div>
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label className="text-right">حالة النشر</Label>
//                     <div className="col-span-3 flex items-center space-x-2 gap-2">
//                       <Button
//                         variant={editingBlog.published ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setEditingBlog({ ...editingBlog, published: true })}
//                         className={editingBlog.published ? "bg-green-500 hover:bg-green-600" : ""}
//                       >
//                         <Check className="ml-2 h-4 w-4" /> منشور
//                       </Button>
//                       <Button
//                         variant={!editingBlog.published ? "default" : "outline"}
//                         size="sm"
//                         onClick={() => setEditingBlog({ ...editingBlog, published: false })}
//                         className={!editingBlog.published ? "bg-gray-500 hover:bg-gray-600" : ""}
//                       >
//                         مسودة
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>
              
//               <TabsContent value="content">
//                 <div className="grid gap-4 py-4">
//                   <div>
//                     <Label htmlFor="edit-content" className="mb-2 block">
//                       المحتوى
//                     </Label>
//                     <Textarea
//                       id="edit-content"
//                       value={editingBlog.content || ""}
//                       onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
//                       className="min-h-[300px]"
//                     />
//                   </div>
//                 </div>
//               </TabsContent>
              
//               <TabsContent value="image">
//                 <div className="grid gap-4 py-4">
//                   <div className="space-y-4">
//                     <Label className="block">
//                       الصورة
//                     </Label>
                    
//                     {editingBlog.image && (
//                       <div className="relative w-full h-[200px] mb-4 rounded-md overflow-hidden">
//                         <img 
//                           src={editingBlog.image} 
//                           alt="Preview" 
//                           className="w-full h-full object-cover"
//                         />
//                         <Button 
//                           variant="destructive" 
//                           size="icon"
//                           className="absolute top-2 right-2"
//                           onClick={() => setEditingBlog({ ...editingBlog, image: "" })}
//                         >
//                           <X size={16} />
//                         </Button>
//                       </div>
//                     )}
                    
//                     <div className="flex flex-col space-y-4">
//                       <div>
//                         <Label>رفع صورة جديدة</Label>
//                         <Input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => handleImageChange(e, true)}
//                           className="mt-2"
//                         />
//                       </div>
                      
//                       <div>
//                         <Label className="mb-2 block">أو اختر من الصور الافتراضية</Label>
//                         <div className="grid grid-cols-3 gap-2">
//                           {demoImages.map((url, i) => (
//                             <div 
//                               key={i} 
//                               className={`relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ${editingBlog.image === url ? 'border-nanosoft-primary' : 'border-transparent'}`}
//                               onClick={() => selectDemoImage(url, true)}
//                             >
//                               <img src={url} alt={`Demo ${i+1}`} className="w-full h-full object-cover" />
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           )}
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
//               إلغاء
//             </Button>
//             <Button onClick={handleUpdateBlog} className="bg-nanosoft-primary hover:bg-nanosoft-secondary">
//               حفظ التغييرات
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default BlogAdmin;


import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, Edit, Image as ImageIcon, Plus, RefreshCw, Search, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  getBlogs, 
  getBlogsByCategory, 
  addBlog, 
  updateBlog, 
  deleteBlog, 
  toggleBlogPublish,
  Blog,
  initializeDefaultBlogs,
  blogCategories
} from "@/services/blogService";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";

const demoImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
];

const BlogAdmin = () => {
  const isMobile = useIsMobile();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [viewMode, setViewMode] = useState("list");
  const [currentBlogContent, setCurrentBlogContent] = useState<Blog | null>(null);
  const [newBlog, setNewBlog] = useState<Blog>({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
    published: true
  });
  const [isNewDialogOpen, setIsNewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const loadBlogsData = async () => {
    setIsLoading(true);
    try {
      await initializeDefaultBlogs();
      
      let blogsData;
      if (selectedCategory === "الكل") {
        blogsData = await getBlogs();
      } else {
        blogsData = await getBlogsByCategory(selectedCategory);
      }
      // Filtrer les blogs pour ne garder que ceux qui existent et ont un id
      blogsData = blogsData.filter((blog: Blog) => blog && blog.id);
      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("حدث خطأ أثناء تحميل المدونات");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBlogsData();
  }, [selectedCategory]);

  const refreshBlogs = async () => {
    try {
      setIsRefreshing(true);
      await initializeDefaultBlogs();
      
      let blogsData;
      if (selectedCategory === "الكل") {
        blogsData = await getBlogs();
      } else {
        blogsData = await getBlogsByCategory(selectedCategory);
      }
      blogsData = blogsData.filter((blog: Blog) => blog && blog.id);
      setBlogs(blogsData);
      
      toast.success("تم تحديث المدونات بنجاح");
    } catch (error) {
      console.error("Error refreshing blogs:", error);
      toast.error("حدث خطأ أثناء تحديث المدونات");
    } finally {
      setIsRefreshing(false);
    }
  };

  const filteredBlogs = blogs.filter(blog => 
    blog &&
    ((blog.title && blog.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (blog.category && blog.category.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const handleDelete = async (id: string) => {
    if (!id) return;
    
    try {
      const blogToDelete = blogs.find(blog => blog.id === id);
      if (blogToDelete && blogToDelete.image) {
        await deleteBlog(id, blogToDelete.image);
      } else {
        await deleteBlog(id);
      }
      setBlogs(blogs.filter(blog => blog.id !== id));
      toast.success("تم حذف المدونة بنجاح");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("حدث خطأ أثناء حذف المدونة");
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog({ ...blog });
    setIsEditDialogOpen(true);
  };

  const handleViewContent = (blog: Blog) => {
    setCurrentBlogContent(blog);
    setIsViewDialogOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, isEditMode = false) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        if (isEditMode && editingBlog) {
          setEditingBlog({ ...editingBlog, image: result });
        } else {
          setNewBlog({ ...newBlog, image: result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateBlog = async () => {
    try {
      if (!editingBlog || !editingBlog.id) {
        toast.error("خطأ في تحديث المدونة: معرف المدونة غير موجود");
        return;
      }
      
      await updateBlog(editingBlog.id, editingBlog);
      
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id ? { ...blog, ...editingBlog } : blog
      ));
      
      setIsEditDialogOpen(false);
      toast.success("تم تحديث المدونة بنجاح");
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("حدث خطأ أثناء تحديث المدونة");
    }
  };

  const handleAddBlog = async () => {
    try {
      if (!newBlog.title || !newBlog.content || !newBlog.category) {
        toast.error("يرجى ملء جميع الحقول المطلوبة");
        return;
      }
      
      const id = await addBlog(newBlog);
      const newBlogWithId = { ...newBlog, id };
      
      setBlogs([newBlogWithId, ...blogs]);
      setIsNewDialogOpen(false);
      setNewBlog({
        title: "",
        excerpt: "",
        content: "",
        category: "",
        image: "",
        date: new Date().toISOString().split("T")[0],
        published: true
      });
      toast.success("تمت إضافة المدونة بنجاح");
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("حدث خطأ أثناء إضافة المدونة");
    }
  };

  const togglePublish = async (id: string) => {
    try {
      const blogToToggle = blogs.find(blog => blog.id === id);
      if (!blogToToggle) {
        toast.error("لم يتم العثور على المدونة");
        return;
      }
      
      const newPublishState = !blogToToggle.published;
      
      await toggleBlogPublish(id, newPublishState);
      
      setBlogs(blogs.map(blog => 
        blog.id === id ? { ...blog, published: newPublishState } : blog
      ));
      
      toast.success(newPublishState ? "تم نشر المدونة بنجاح" : "تم إلغاء نشر المدونة بنجاح");
    } catch (error) {
      console.error("Error toggling publish state:", error);
      toast.error("حدث خطأ أثناء تغيير حالة النشر");
    }
  };

  const selectDemoImage = (url: string, isEditMode = false) => {
    if (isEditMode && editingBlog) {
      setEditingBlog({ ...editingBlog, image: url });
    } else {
      setNewBlog({ ...newBlog, image: url });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold">إدارة المدونات</h1>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            onClick={refreshBlogs} 
            variant="outline" 
            disabled={isRefreshing} 
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            تحديث
          </Button>
          
          <Dialog open={isNewDialogOpen} onOpenChange={setIsNewDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-nanosoft-primary hover:bg-nanosoft-secondary">
                <Plus className="ml-2 h-4 w-4" /> إضافة مدونة
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>إضافة مدونة جديدة</DialogTitle>
                <DialogDescription>
                  أضف تفاصيل المدونة الجديدة هنا. انقر على حفظ عند الانتهاء.
                </DialogDescription>
              </DialogHeader>
              <Tabs defaultValue="details">
                <TabsList className="mb-4">
                  <TabsTrigger value="details">التفاصيل الأساسية</TabsTrigger>
                  <TabsTrigger value="content">المحتوى</TabsTrigger>
                  <TabsTrigger value="image">الصورة</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        العنوان
                      </Label>
                      <Input
                        id="title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="excerpt" className="text-right">
                        ملخص
                      </Label>
                      <Input
                        id="excerpt"
                        value={newBlog.excerpt}
                        onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="category" className="text-right">
                        الفئة
                      </Label>
                      <Input
                        id="category"
                        value={newBlog.category}
                        onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                        className="col-span-3"
                        list="categories"
                      />
                      <datalist id="categories">
                        {blogCategories.filter(cat => cat !== "الكل").map((cat) => (
                          <option key={cat} value={cat} />
                        ))}
                      </datalist>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="date" className="text-right">
                        التاريخ
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={newBlog.date}
                        onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="content">
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label htmlFor="content" className="mb-2 block">
                        المحتوى
                      </Label>
                      <Textarea
                        id="content"
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                        className="min-h-[300px]"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="image">
                  <div className="grid gap-4 py-4">
                    <div className="space-y-4">
                      <Label className="block">
                        الصورة
                      </Label>
                      
                      {newBlog.image && (
                        <div className="relative w-full h-[200px] mb-4 rounded-md overflow-hidden">
                          <img 
                            src={newBlog.image} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                          <Button 
                            variant="destructive" 
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => setNewBlog({ ...newBlog, image: "" })}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      )}
                      
                      <div className="flex flex-col space-y-4">
                        <div>
                          <Label>رفع صورة جديدة</Label>
                          <Input
                            ref={imageInputRef}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, false)}
                            className="mt-2"
                          />
                        </div>
                        
                        <div>
                          <Label className="mb-2 block">أو اختر من الصور الافتراضية</Label>
                          <div className="grid grid-cols-3 gap-2">
                            {demoImages.map((url, i) => (
                              <div 
                                key={i} 
                                className={`relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ${newBlog.image === url ? 'border-nanosoft-primary' : 'border-transparent'}`}
                                onClick={() => selectDemoImage(url, false)}
                              >
                                <img src={url} alt={`Demo ${i+1}`} className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsNewDialogOpen(false)}>
                  إلغاء
                </Button>
                <Button onClick={handleAddBlog} className="bg-nanosoft-primary hover:bg-nanosoft-secondary">
                  حفظ
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <CardTitle>المدونات ({isLoading ? "..." : filteredBlogs.length})</CardTitle>
              
              <div className={`flex gap-2 overflow-x-auto ${isMobile ? 'max-w-[calc(100vw-2rem)] pb-2' : ''}`}>
                <Tabs 
                  value={selectedCategory} 
                  onValueChange={setSelectedCategory}
                  className="w-fit"
                >
                  <TabsList className="overflow-x-auto flex">
                    {blogCategories.map((cat) => (
                      <TabsTrigger key={cat} value={cat}>
                        {cat}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            <div className="relative w-full sm:w-64">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="البحث..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-full h-16 rounded-md">
                  <Skeleton className="w-full h-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className={`${isMobile ? 'overflow-x-auto' : ''}`}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">المعرف</TableHead>
                    <TableHead className="text-right">العنوان</TableHead>
                    <TableHead className="text-right">الفئة</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                    <TableHead className="text-right">الصورة</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => (
                    <TableRow key={blog.id}>
                      <TableCell className="font-medium">{blog.id?.substring(0, 6)}...</TableCell>
                      <TableCell>
                        <div className="max-w-[180px] truncate" title={blog.title}>
                          {blog.title}
                        </div>
                      </TableCell>
                      <TableCell>{blog.category}</TableCell>
                      <TableCell>{blog.date}</TableCell>
                      <TableCell>
                        {blog.image ? (
                          <div className="h-10 w-10 rounded-md overflow-hidden">
                            <img 
                              src={blog.image} 
                              alt={blog.title} 
                              className="h-full w-full object-cover" 
                            />
                          </div>
                        ) : (
                          <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                            <ImageIcon size={16} className="text-gray-400" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant={blog.published ? "default" : "outline"}
                          size="sm"
                          onClick={() => togglePublish(blog.id!)}
                          className={
                            blog.published
                              ? "bg-green-500 hover:bg-green-600"
                              : "text-gray-500"
                          }
                        >
                          {blog.published ? "منشور" : "مسودة"}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2 gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleViewContent(blog)}
                          >
                            <Search className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleEdit(blog)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="text-red-500"
                            onClick={() => handleDelete(blog.id!)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        لا توجد نتائج للبحث
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
          {currentBlogContent && (
            <>
              <DialogHeader>
                <DialogTitle>{currentBlogContent.title}</DialogTitle>
                <DialogDescription>
                  {currentBlogContent.excerpt}
                </DialogDescription>
              </DialogHeader>
              
              {currentBlogContent.image && (
                <div className="w-full h-[200px] rounded-md overflow-hidden my-4">
                  <img 
                    src={currentBlogContent.image} 
                    alt={currentBlogContent.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="py-4 whitespace-pre-line">
                {currentBlogContent.content}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span>الفئة: {currentBlogContent.category}</span>
                <span>التاريخ: {currentBlogContent.date}</span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>تعديل المدونة</DialogTitle>
            <DialogDescription>
              قم بتعديل تفاصيل المدونة هنا. انقر على حفظ عند الانتهاء.
            </DialogDescription>
          </DialogHeader>
          {editingBlog && (
            <Tabs defaultValue="details">
              <TabsList className="mb-4">
                <TabsTrigger value="details">التفاصيل الأساسية</TabsTrigger>
                <TabsTrigger value="content">المحتوى</TabsTrigger>
                <TabsTrigger value="image">الصورة</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details">
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-title" className="text-right">
                      العنوان
                    </Label>
                    <Input
                      id="edit-title"
                      value={editingBlog.title}
                      onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-excerpt" className="text-right">
                      ملخص
                    </Label>
                    <Input
                      id="edit-excerpt"
                      value={editingBlog.excerpt}
                      onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-category" className="text-right">
                      الفئة
                    </Label>
                    <Input
                      id="edit-category"
                      value={editingBlog.category}
                      onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                      className="col-span-3"
                      list="edit-categories"
                    />
                    <datalist id="edit-categories">
                      {blogCategories.filter(cat => cat !== "الكل").map((cat) => (
                        <option key={cat} value={cat} />
                      ))}
                    </datalist>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="edit-date" className="text-right">
                      التاريخ
                    </Label>
                    <Input
                      id="edit-date"
                      type="date"
                      value={editingBlog.date}
                      onChange={(e) => setEditingBlog({ ...editingBlog, date: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">حالة النشر</Label>
                    <div className="col-span-3 flex items-center space-x-2 gap-2">
                      <Button
                        variant={editingBlog.published ? "default" : "outline"}
                        size="sm"
                        onClick={() => setEditingBlog({ ...editingBlog, published: true })}
                        className={editingBlog.published ? "bg-green-500 hover:bg-green-600" : ""}
                      >
                        <Check className="ml-2 h-4 w-4" /> منشور
                      </Button>
                      <Button
                        variant={!editingBlog.published ? "default" : "outline"}
                        size="sm"
                        onClick={() => setEditingBlog({ ...editingBlog, published: false })}
                        className={!editingBlog.published ? "bg-gray-500 hover:bg-gray-600" : ""}
                      >
                        مسودة
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="content">
                <div className="grid gap-4 py-4">
                  <div>
                    <Label htmlFor="edit-content" className="mb-2 block">
                      المحتوى
                    </Label>
                    <Textarea
                      id="edit-content"
                      value={editingBlog.content || ""}
                      onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                      className="min-h-[300px]"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="image">
                <div className="grid gap-4 py-4">
                  <div className="space-y-4">
                    <Label className="block">
                      الصورة
                    </Label>
                    
                    {editingBlog.image && (
                      <div className="relative w-full h-[200px] mb-4 rounded-md overflow-hidden">
                        <img 
                          src={editingBlog.image} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                        />
                        <Button 
                          variant="destructive" 
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() => setEditingBlog({ ...editingBlog, image: "" })}
                        >
                          <X size={16} />
                        </Button>
                      </div>
                    )}
                    
                    <div className="flex flex-col space-y-4">
                      <div>
                        <Label>رفع صورة جديدة</Label>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, true)}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label className="mb-2 block">أو اختر من الصور الافتراضية</Label>
                        <div className="grid grid-cols-3 gap-2">
                          {demoImages.map((url, i) => (
                            <div 
                              key={i} 
                              className={`relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ${editingBlog.image === url ? 'border-nanosoft-primary' : 'border-transparent'}`}
                              onClick={() => selectDemoImage(url, true)}
                            >
                              <img src={url} alt={`Demo ${i+1}`} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              إلغاء
            </Button>
            <Button onClick={handleUpdateBlog} className="bg-nanosoft-primary hover:bg-nanosoft-secondary">
              حفظ التغييرات
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogAdmin;
