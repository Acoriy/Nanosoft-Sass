
// import React from 'react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Edit, Trash, Eye, EyeOff } from 'lucide-react';

// interface BlogCardProps {
//   blog: {
//     id?: string;
//     title: string;
//     excerpt: string;
//     category: string;
//     image?: string;
//     date: string;
//     published: boolean;
//     content?: string;
//   };
//   onEdit?: (id: string) => void;
//   onDelete?: (id: string) => void;
//   onTogglePublish?: (id: string, published: boolean) => void;
//   isAdmin?: boolean;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ 
//   blog, 
//   onEdit, 
//   onDelete, 
//   onTogglePublish,
//   isAdmin = false 
// }) => {
//   return (
//     <Card className="flex flex-col h-full overflow-hidden hover:shadow-md transition-all duration-200">
//       {blog.image && (
//         <div className="relative h-40 overflow-hidden">
//           <img 
//             src={blog.image} 
//             alt={blog.title} 
//             className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//           />
//           {blog.category && (
//             <Badge className="absolute top-2 right-2 bg-nanosoft-primary/90 text-white">
//               {blog.category}
//             </Badge>
//           )}
//         </div>
//       )}
      
//       <CardHeader className={blog.image ? 'pt-4' : 'pt-6'}>
//         <div className="flex justify-between items-start">
//           <CardTitle className="text-lg font-bold line-clamp-2">{blog.title}</CardTitle>
//           {isAdmin && blog.id && (
//             <Badge variant={blog.published ? "default" : "outline"} className={blog.published ? "bg-green-500" : "text-gray-500"}>
//               {blog.published ? "Publié" : "Brouillon"}
//             </Badge>
//           )}
//         </div>
//         <CardDescription className="text-sm text-gray-500">
//           {blog.date}
//         </CardDescription>
//       </CardHeader>
      
//       <CardContent className="flex-grow">
//         <p className="text-sm text-gray-700 line-clamp-3">{blog.excerpt}</p>
//       </CardContent>
      
//       <CardFooter className="flex justify-between pt-4 border-t mt-auto">
//         {isAdmin ? (
//           <div className="flex gap-2 w-full justify-between">
//             <Button variant="outline" size="sm" onClick={() => onEdit && blog.id && onEdit(blog.id)}>
//               <Edit className="h-4 w-4 mr-1" />
//               Modifier
//             </Button>
//             <div className="flex gap-2">
//               {onTogglePublish && blog.id && (
//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   className={blog.published ? "text-amber-500 hover:text-amber-700 hover:bg-amber-50" : "text-green-500 hover:text-green-700 hover:bg-green-50"}
//                   onClick={() => onTogglePublish(blog.id!, !blog.published)}
//                 >
//                   {blog.published ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
//                   {blog.published ? "Dépublier" : "Publier"}
//                 </Button>
//               )}
//               <Button 
//                 variant="outline" 
//                 size="sm" 
//                 className="text-red-500 hover:text-red-700 hover:bg-red-50" 
//                 onClick={() => onDelete && blog.id && onDelete(blog.id)}
//               >
//                 <Trash className="h-4 w-4 mr-1" />
//                 Supprimer
//               </Button>
//             </div>
//           </div>
//         ) : (
//           <Button className="w-full bg-nanosoft-primary hover:bg-nanosoft-primary/90">
//             Lire l'article
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   );
// };

// export default BlogCard;



import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Trash, Eye, EyeOff } from 'lucide-react';

interface BlogCardProps {
  blog: {
    id?: string;
    title: string;
    excerpt: string;
    category: string;
    image?: string;
    date: string;
    published: boolean;
    content?: string;
  };
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onTogglePublish?: (id: string, published: boolean) => void;
  isAdmin?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  blog, 
  onEdit, 
  onDelete, 
  onTogglePublish,
  isAdmin = false 
}) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-md transition-all duration-200">
      {blog.image && (
        <div className="relative h-40 overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {blog.category && (
            <Badge className="absolute top-2 right-2 bg-nanosoft-primary/90 text-white">
              {blog.category}
            </Badge>
          )}
        </div>
      )}
      
      <CardHeader className={blog.image ? 'pt-4' : 'pt-6'}>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold line-clamp-2">{blog.title}</CardTitle>
          {isAdmin && blog.id && (
            <Badge variant={blog.published ? "default" : "outline"} className={blog.published ? "bg-green-500" : "text-gray-500"}>
              {blog.published ? "Publié" : "Brouillon"}
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm text-gray-500">
          {blog.date}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-700 line-clamp-3">{blog.excerpt}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-4 border-t mt-auto">
        {isAdmin ? (
          <div className="flex gap-2 w-full justify-between">
            <Button variant="outline" size="sm" onClick={() => onEdit && blog.id && onEdit(blog.id)}>
              <Edit className="h-4 w-4 mr-1" />
              Modifier
            </Button>
            <div className="flex gap-2">
              {onTogglePublish && blog.id && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={blog.published ? "text-amber-500 hover:text-amber-700 hover:bg-amber-50" : "text-green-500 hover:text-green-700 hover:bg-green-50"}
                  onClick={() => onTogglePublish(blog.id!, !blog.published)}
                >
                  {blog.published ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
                  {blog.published ? "Dépublier" : "Publier"}
                </Button>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-500 hover:text-red-700 hover:bg-red-50" 
                onClick={() => onDelete && blog.id && onDelete(blog.id)}
              >
                <Trash className="h-4 w-4 mr-1" />
                Supprimer
              </Button>
            </div>
          </div>
        ) : (
          <Button className="w-full bg-nanosoft-primary hover:bg-nanosoft-primary/90">
            Lire l'article
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
