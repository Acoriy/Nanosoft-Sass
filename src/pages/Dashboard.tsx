
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Cell } from 'recharts';
// import { Area, AreaChart } from 'recharts';
// import { BarChart, Bar } from 'recharts';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Users, DollarSign, LineChart as LineChartIcon, BarChart2 } from 'lucide-react';
// import { useToast } from '@/components/ui/use-toast';
// import { initializeFirebase } from '@/lib/firebase';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();
//   const [isLoading, setIsLoading] = useState(true);
  
//   // فحص المصادقة
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         // لأغراض العرض التوضيحي، نحن لا نتحقق فعليًا من المصادقة
//         // في تطبيق حقيقي، ستتحقق من حالة مصادقة المستخدم هنا
//         const isDbConnected = await initializeFirebase(true);
//         if (!isDbConnected) {
//           toast({
//             title: "خطأ في الاتصال بقاعدة البيانات",
//             description: "يرجى المحاولة مرة أخرى لاحقًا",
//             variant: "destructive"
//           });
//         }
//       } catch (error) {
//         console.error("خطأ في المصادقة:", error);
//       } finally {
//         // محاكاة تأخير التحميل
//         setTimeout(() => {
//           setIsLoading(false);
//         }, 800);
//       }
//     };
    
//     checkAuth();
//   }, [toast, navigate]);
  
//   // بيانات نموذجية للرسوم البيانية
//   const visitData = [
//     { name: 'يناير', قيمة: 2400 },
//     { name: 'فبراير', قيمة: 1398 },
//     { name: 'مارس', قيمة: 9800 },
//     { name: 'أبريل', قيمة: 3908 },
//     { name: 'مايو', قيمة: 4800 },
//     { name: 'يونيو', قيمة: 3800 },
//     { name: 'يوليو', قيمة: 4300 },
//   ];
  
//   const salesData = [
//     { name: 'يناير', الفعلي: 4000, المستهدف: 2400 },
//     { name: 'فبراير', الفعلي: 3000, المستهدف: 1398 },
//     { name: 'مارس', الفعلي: 2000, المستهدف: 9800 },
//     { name: 'أبريل', الفعلي: 2780, المستهدف: 3908 },
//     { name: 'مايو', الفعلي: 1890, المستهدف: 4800 },
//     { name: 'يونيو', الفعلي: 2390, المستهدف: 3800 },
//     { name: 'يوليو', الفعلي: 3490, المستهدف: 4300 },
//   ];
  
//   const pieData = [
//     { name: 'المبيعات', value: 400 },
//     { name: 'التسويق', value: 300 },
//     { name: 'التطوير', value: 300 },
//     { name: 'الدعم', value: 200 },
//   ];
  
//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
//   // بيانات بطاقات الإحصائيات
//   const stats = [
//     {
//       title: 'إجمالي العملاء',
//       value: '1,234',
//       change: '+12.5%',
//       icon: <Users className="h-4 w-4 text-muted-foreground" />,
//       positive: true
//     },
//     {
//       title: 'الإيرادات',
//       value: '$12,345',
//       change: '+8.2%',
//       icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
//       positive: true
//     },
//     {
//       title: 'المبيعات',
//       value: '854',
//       change: '-3.1%',
//       icon: <BarChart2 className="h-4 w-4 text-muted-foreground" />,
//       positive: false
//     },
//     {
//       title: 'النمو',
//       value: '24.5%',
//       change: '+4.3%',
//       icon: <LineChartIcon className="h-4 w-4 text-muted-foreground" />,
//       positive: true
//     }
//   ];
  
//   // عرض هياكل التحميل
//   if (isLoading) {
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {[1, 2, 3, 4].map((i) => (
//             <Card key={i} className="animate-pulse">
//               <CardContent className="p-6">
//                 <div className="h-10 w-1/2 bg-gray-200 rounded mb-4"></div>
//                 <div className="h-6 w-full bg-gray-200 rounded"></div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
        
//         <div className="mt-8 grid gap-6 md:grid-cols-2">
//           <Card className="animate-pulse">
//             <CardContent className="p-6">
//               <div className="h-60 w-full bg-gray-200 rounded"></div>
//             </CardContent>
//           </Card>
//           <Card className="animate-pulse">
//             <CardContent className="p-6">
//               <div className="h-60 w-full bg-gray-200 rounded"></div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">لوحة التحكم</h1>
//           <p className="text-muted-foreground">نظرة عامة على أداء النظام والإحصائيات الأخيرة.</p>
//         </div>
        
//         <div className="mt-4 md:mt-0 flex space-x-2 space-x-reverse">
//           <Button onClick={() => navigate('/admin/blogs')}>
//             <span>إدارة المقالات</span>
//             <ArrowRight className="ms-2 h-4 w-4" />
//           </Button>
//           <Button onClick={() => navigate('/admin/prices')} variant="outline">
//             <span>إدارة الأسعار</span>
//             <ArrowRight className="ms-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
      
//       {/* بطاقات الإحصائيات */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat, index) => (
//           <Card key={index}>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between space-x-4 space-x-reverse">
//                 <div className="flex flex-col">
//                   <span className="text-muted-foreground text-sm">{stat.title}</span>
//                   <span className="text-2xl font-bold">{stat.value}</span>
//                 </div>
//                 <div className="bg-muted p-2 rounded-full">
//                   {stat.icon}
//                 </div>
//               </div>
//               <div className={`flex items-center mt-4 text-sm ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
//                 <span>{stat.change}</span>
//                 <span className="text-muted-foreground ms-2">منذ الشهر الماضي</span>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
      
//       {/* الرسوم البيانية */}
//       <div className="mt-8">
//         <Tabs defaultValue="overview" className="w-full">
//           <TabsList className="mb-6">
//             <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
//             <TabsTrigger value="analytics">التحليلات</TabsTrigger>
//             <TabsTrigger value="reports">التقارير</TabsTrigger>
//           </TabsList>
          
//           <TabsContent value="overview" className="space-y-6">
//             <div className="grid gap-6 md:grid-cols-2">
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-medium mb-4">الزيارات الشهرية</h3>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <AreaChart data={visitData}>
//                       <defs>
//                         <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                           <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
//                           <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
//                         </linearGradient>
//                       </defs>
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <Tooltip />
//                       <Area type="monotone" dataKey="قيمة" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
              
//               <Card>
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-medium mb-4">توزيع الميزانية</h3>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <PieChart>
//                       <Pie
//                         data={pieData}
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={60}
//                         outerRadius={80}
//                         fill="#8884d8"
//                         paddingAngle={5}
//                         dataKey="value"
//                         label
//                       >
//                         {pieData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                       <Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </CardContent>
//               </Card>
//             </div>
            
//             <Card>
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-medium mb-4">المبيعات مقابل الأهداف</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={salesData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="الفعلي" fill="#8884d8" name="المبيعات الفعلية" />
//                     <Bar dataKey="المستهدف" fill="#82ca9d" name="المبيعات المستهدفة" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>
//           </TabsContent>
          
//           <TabsContent value="analytics">
//             <Card>
//               <CardContent className="p-6 h-[500px] flex items-center justify-center">
//                 <p className="text-muted-foreground">ستتوفر التحليلات المتقدمة قريبًا.</p>
//               </CardContent>
//             </Card>
//           </TabsContent>
          
//           <TabsContent value="reports">
//             <Card>
//               <CardContent className="p-6 h-[500px] flex items-center justify-center">
//                 <p className="text-muted-foreground">ستتوفر التقارير المفصلة قريبًا.</p>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
  Area, AreaChart,
  BarChart, Bar
} from 'recharts';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, DollarSign, LineChart as LineChartIcon, BarChart2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { initializeFirebase } from '@/lib/firebase';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  
  // Vérification d'authentification (pour la démo)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isDbConnected = await initializeFirebase(true);
        if (!isDbConnected) {
          toast({
            title: "خطأ في الاتصال بقاعدة البيانات",
            description: "يرجى المحاولة مرة أخرى لاحقًا",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("خطأ في المصادقة:", error);
      } finally {
        // Simuler un délai avant le rendu final
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }
    };
    
    checkAuth();
  }, [toast, navigate]);
  
  // Données statiques pour les graphiques
  const visitData = [
    { name: 'يناير', valeur: 2400 },
    { name: 'فبراير', valeur: 1398 },
    { name: 'مارس', valeur: 9800 },
    { name: 'أبريل', valeur: 3908 },
    { name: 'مايو', valeur: 4800 },
    { name: 'يونيو', valeur: 3800 },
    { name: 'يوليو', valeur: 4300 },
  ];
  
  const salesData = [
    { name: 'يناير', الفعلي: 4000, المستهدف: 2400 },
    { name: 'فبراير', الفعلي: 3000, المستهدف: 1398 },
    { name: 'مارس', الفعلي: 2000, المستهدف: 9800 },
    { name: 'أبريل', الفعلي: 2780, المستهدف: 3908 },
    { name: 'مايو', الفعلي: 1890, المستهدف: 4800 },
    { name: 'يونيو', الفعلي: 2390, المستهدف: 3800 },
    { name: 'يوليو', الفعلي: 3490, المستهدف: 4300 },
  ];
  
  const pieData = [
    { name: 'المبيعات', value: 400 },
    { name: 'التسويق', value: 300 },
    { name: 'التطوير', value: 300 },
    { name: 'الدعم', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  // Données pour les cartes statistiques
  const stats = [
    {
      title: 'إجمالي العملاء',
      value: '1,234',
      change: '+12.5%',
      icon: <Users className="h-4 w-4" />,
      positive: true
    },
    {
      title: 'الإيرادات',
      value: '$12,345',
      change: '+8.2%',
      icon: <DollarSign className="h-4 w-4" />,
      positive: true
    },
    {
      title: 'المبيعات',
      value: '854',
      change: '-3.1%',
      icon: <BarChart2 className="h-4 w-4" />,
      positive: false
    },
    {
      title: 'النمو',
      value: '24.5%',
      change: '+4.3%',
      icon: <LineChartIcon className="h-4 w-4" />,
      positive: true
    }
  ];
  
  // Écran de chargement
  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8" lang="ar">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-10 w-1/2 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 w-full bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-60 w-full bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
          <Card className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-60 w-full bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }
  
  return (
    <main className="container mx-auto px-4 py-8" lang="ar">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">لوحة التحكم</h1>
          <p className="text-gray-600">نظرة عامة على أداء النظام والإحصائيات الأخيرة.</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2 space-x-reverse">
          <Button onClick={() => navigate('/admin/blogs')} aria-label="إدارة المقالات">
            <span>إدارة المقالات</span>
            <ArrowRight className="ms-2 h-4 w-4" />
          </Button>
          <Button onClick={() => navigate('/admin/prices')} variant="outline" aria-label="إدارة الأسعار">
            <span>إدارة الأسعار</span>
            <ArrowRight className="ms-2 h-4 w-4" />
          </Button>
        </div>
      </header>
      
      {/* Cartes statistiques */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4 space-x-reverse">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-sm">{stat.title}</span>
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <div className="bg-gray-100 p-2 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className={`flex items-center mt-4 text-sm ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                <span>{stat.change}</span>
                <span className="text-gray-500 ms-2">منذ الشهر الماضي</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
      
      {/* Graphiques sous forme d’onglets */}
      <section className="mt-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">الزيارات الشهرية</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={visitData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area type="monotone" dataKey="valeur" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">توزيع الميزانية</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">المبيعات مقابل الأهداف</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="الفعلي" fill="#8884d8" name="المبيعات الفعلية" />
                    <Bar dataKey="المستهدف" fill="#82ca9d" name="المبيعات المستهدفة" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardContent className="p-6 h-[500px] flex items-center justify-center">
                <p className="text-gray-500">ستتوفر التحليلات المتقدمة قريبًا.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports">
            <Card>
              <CardContent className="p-6 h-[500px] flex items-center justify-center">
                <p className="text-gray-500">ستتوفر التقارير المفصلة قريبًا.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Dashboard;
