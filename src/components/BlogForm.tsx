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
// import { blogCategories } from '@/services/blogService';
// import { X } from 'lucide-react';

// // Schéma de validation pour le formulaire de blog
// const blogSchema = z.object({
//   title: z.string().min(3, { message: 'Le titre doit comporter au moins 3 caractères' }),
//   excerpt: z.string().min(10, { message: 'L\'extrait doit comporter au moins 10 caractères' }),
//   content: z.string().min(20, { message: 'Le contenu doit comporter au moins 20 caractères' }),
//   category: z.string().min(1, { message: 'Veuillez sélectionner une catégorie' }),
//   image: z.string().optional(),
//   published: z.boolean().default(false),
//   date: z.string().optional()
// });

// type BlogFormValues = z.infer<typeof blogSchema>;

// interface BlogFormProps {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   blog?: any;
//   onSubmit: (data: BlogFormValues) => void;
//   onCancel: () => void;
//   isSubmitting?: boolean;
// }

// const BlogForm: React.FC<BlogFormProps> = ({ blog, onSubmit, onCancel, isSubmitting = false }) => {
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
  
//   // Initialiser le formulaire
//   const form = useForm<BlogFormValues>({
//     resolver: zodResolver(blogSchema),
//     defaultValues: {
//       title: blog?.title || '',
//       excerpt: blog?.excerpt || '',
//       content: blog?.content || '',
//       category: blog?.category || 'الكل',
//       image: blog?.image || '',
//       published: blog?.published || false,
//       date: blog?.date || new Date().toISOString().split('T')[0]
//     }
//   });
  
//   // Mettre à jour l'aperçu de l'image lors du chargement initial
//   useEffect(() => {
//     if (blog?.image) {
//       setImagePreview(blog.image);
//     }
//   }, [blog]);
  
//   // Gérer la mise à jour de l'URL de l'image
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const url = e.target.value;
//     form.setValue('image', url);
//     setImagePreview(url);
//   };
  
//   // Effacer l'image
//   const clearImage = () => {
//     form.setValue('image', '');
//     setImagePreview(null);
//   };
  
//   // Gérer la soumission du formulaire
//   const handleSubmit = form.handleSubmit((data) => {
//     // S'assurer que la date est définie
//     if (!data.date) {
//       data.date = new Date().toISOString().split('T')[0];
//     }
    
//     onSubmit(data);
//   });
  
//   return (
//     <Card className="max-w-3xl mx-auto">
//       <CardHeader>
//         <CardTitle>{blog ? 'Modifier l\'article' : 'Nouvel article'}</CardTitle>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="space-y-6">
//           <div className="space-y-2">
//             <Label htmlFor="title">Titre</Label>
//             <Input
//               id="title"
//               placeholder="Titre de l'article"
//               {...form.register('title')}
//               className="text-right"
//             />
//             {form.formState.errors.title && (
//               <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="excerpt">Résumé</Label>
//             <Textarea
//               id="excerpt"
//               placeholder="Bref résumé de l'article"
//               {...form.register('excerpt')}
//               className="min-h-[80px] text-right"
//             />
//             {form.formState.errors.excerpt && (
//               <p className="text-red-500 text-sm">{form.formState.errors.excerpt.message}</p>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="content">Contenu</Label>
//             <Textarea
//               id="content"
//               placeholder="Contenu de l'article (supporte le markdown)"
//               {...form.register('content')}
//               className="min-h-[200px] text-right"
//             />
//             {form.formState.errors.content && (
//               <p className="text-red-500 text-sm">{form.formState.errors.content.message}</p>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="category">Catégorie</Label>
//             <Select
//               onValueChange={(value) => form.setValue('category', value)}
//               defaultValue={form.getValues('category')}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Sélectionner une catégorie" />
//               </SelectTrigger>
//               <SelectContent>
//                 {blogCategories.map((category) => (
//                   <SelectItem key={category} value={category}>
//                     {category}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {form.formState.errors.category && (
//               <p className="text-red-500 text-sm">{form.formState.errors.category.message}</p>
//             )}
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="image">URL de l'image</Label>
//             <div className="flex gap-2">
//               <Input
//                 id="image"
//                 placeholder="https://example.com/image.jpg"
//                 value={form.getValues('image')}
//                 onChange={handleImageChange}
//               />
//               {imagePreview && (
//                 <Button 
//                   type="button" 
//                   variant="ghost" 
//                   size="icon" 
//                   onClick={clearImage}
//                   className="flex-shrink-0"
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               )}
//             </div>
            
//             {imagePreview && (
//               <div className="mt-2 relative border rounded-md overflow-hidden h-48">
//                 <img
//                   src={imagePreview}
//                   alt="Aperçu"
//                   className="w-full h-full object-cover"
//                   onError={() => setImagePreview(null)}
//                 />
//               </div>
//             )}
//           </div>
          
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="published"
//               checked={form.getValues('published')}
//               onCheckedChange={(checked) => form.setValue('published', checked as boolean)}
//             />
//             <Label htmlFor="published">Publier cet article</Label>
//           </div>
//         </CardContent>
        
//         <CardFooter className="flex justify-between">
//           <Button type="button" variant="outline" onClick={onCancel}>
//             Annuler
//           </Button>
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Enregistrement...' : blog ? 'Mettre à jour' : 'Créer'}
//           </Button>
//         </CardFooter>
//       </form>
//     </Card>
//   );
// };

// export default BlogForm;

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
import { blogCategories } from '@/services/blogService';
import { X } from 'lucide-react';

const blogSchema = z.object({
  title: z.string().min(3, { message: 'Le titre doit comporter au moins 3 caractères' }),
  excerpt: z.string().min(10, { message: 'L\'extrait doit comporter au moins 10 caractères' }),
  content: z.string().min(20, { message: 'Le contenu doit comporter au moins 20 caractères' }),
  category: z.string().min(1, { message: 'Veuillez sélectionner une catégorie' }),
  image: z.string().optional(),
  published: z.boolean().default(false),
  date: z.string().optional()
});

export type BlogFormValues = z.infer<typeof blogSchema>;

interface BlogFormProps {
  blog?: Partial<BlogFormValues>;
  onSubmit: (data: BlogFormValues) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

const BlogForm: React.FC<BlogFormProps> = ({ blog, onSubmit, onCancel, isSubmitting = false }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: blog?.title || '',
      excerpt: blog?.excerpt || '',
      content: blog?.content || '',
      category: blog?.category || 'الكل',
      image: blog?.image || '',
      published: blog?.published || false,
      date: blog?.date || new Date().toISOString().split('T')[0]
    }
  });
  
  useEffect(() => {
    if (blog?.image) {
      setImagePreview(blog.image);
    }
  }, [blog]);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    form.setValue('image', url);
    setImagePreview(url);
  };
  
  const clearImage = () => {
    form.setValue('image', '');
    setImagePreview(null);
  };
  
  const handleSubmit = form.handleSubmit((data) => {
    if (!data.date) {
      data.date = new Date().toISOString().split('T')[0];
    }
    
    onSubmit(data);
  });
  
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{blog ? 'Modifier l\'article' : 'Nouvel article'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit} noValidate>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Titre</Label>
            <Input
              id="title"
              placeholder="Titre de l'article"
              {...form.register('title')}
              className="text-right"
              aria-invalid={!!form.formState.errors.title}
              aria-describedby="title-error"
            />
            {form.formState.errors.title && (
              <p id="title-error" role="alert" className="text-red-500 text-sm">
                {form.formState.errors.title.message}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="excerpt">Résumé</Label>
            <Textarea
              id="excerpt"
              placeholder="Bref résumé de l'article"
              {...form.register('excerpt')}
              className="min-h-[80px] text-right"
              aria-invalid={!!form.formState.errors.excerpt}
              aria-describedby="excerpt-error"
            />
            {form.formState.errors.excerpt && (
              <p id="excerpt-error" role="alert" className="text-red-500 text-sm">
                {form.formState.errors.excerpt.message}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content">Contenu</Label>
            <Textarea
              id="content"
              placeholder="Contenu de l'article (supporte le markdown)"
              {...form.register('content')}
              className="min-h-[200px] text-right"
              aria-invalid={!!form.formState.errors.content}
              aria-describedby="content-error"
            />
            {form.formState.errors.content && (
              <p id="content-error" role="alert" className="text-red-500 text-sm">
                {form.formState.errors.content.message}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Catégorie</Label>
            <Select
              onValueChange={(value) => form.setValue('category', value)}
              defaultValue={form.getValues('category')}
            >
              <SelectTrigger aria-label="Sélectionner une catégorie">
                <SelectValue placeholder="Sélectionner une catégorie" />
              </SelectTrigger>
              <SelectContent>
                {blogCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.category && (
              <p role="alert" className="text-red-500 text-sm">
                {form.formState.errors.category.message}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">URL de l'image</Label>
            <div className="flex gap-2">
              <Input
                id="image"
                placeholder="https://example.com/image.jpg"
                value={form.getValues('image')}
                onChange={handleImageChange}
                aria-label="URL de l'image"
              />
              {imagePreview && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  onClick={clearImage}
                  aria-label="Effacer l'image"
                  className="flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            {imagePreview && (
              <div className="mt-2 relative border rounded-md overflow-hidden h-48">
                <img
                  src={imagePreview}
                  alt="Aperçu de l'image"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={() => setImagePreview(null)}
                />
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="published"
              checked={form.getValues('published')}
              onCheckedChange={(checked) => form.setValue('published', checked as boolean)}
              aria-label="Publier cet article"
            />
            <Label htmlFor="published">Publier cet article</Label>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel} aria-label="Annuler l'opération">
            Annuler
          </Button>
          <Button type="submit" disabled={isSubmitting} aria-label={isSubmitting ? 'Enregistrement en cours' : (blog ? 'Mettre à jour l\'article' : 'Créer l\'article')}>
            {isSubmitting ? 'Enregistrement...' : blog ? 'Mettre à jour' : 'Créer'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default BlogForm;

