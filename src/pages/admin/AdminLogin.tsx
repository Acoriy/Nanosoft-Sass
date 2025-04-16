
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Lock } from "lucide-react";
// import { toast } from "sonner";

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulation d'authentification - dans une application réelle, 
//     // cela se ferait via un appel API sécurisé
//     setTimeout(() => {
//       if (username === "nanosoft" && password === "@nanosoft.2025@") {
//         localStorage.setItem("adminAuth", "authenticated");
//         toast.success("تم تسجيل الدخول بنجاح");
//         navigate("/admin");
//       } else {
//         toast.error("اسم المستخدم أو كلمة المرور غير صحيحة");
//       }
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1 text-center">
//           <div className="flex justify-center mb-4">
//             <div className="rounded-full bg-nanosoft-primary/10 p-3">
//               <Lock className="h-6 w-6 text-nanosoft-primary" />
//             </div>
//           </div>
//           <CardTitle className="text-2xl font-bold">تسجيل دخول المسؤول</CardTitle>
//           <CardDescription>
//             أدخل بيانات الاعتماد الخاصة بك للوصول إلى لوحة التحكم
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div className="space-y-2">
//               <label htmlFor="username" className="text-sm font-medium">
//                 اسم المستخدم
//               </label>
//               <Input
//                 id="username"
//                 placeholder="admin"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="password" className="text-sm font-medium">
//                 كلمة المرور
//               </label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-nanosoft-primary hover:bg-nanosoft-secondary"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <span className="animate-spin mr-2">&#9696;</span>
//                   جارٍ تسجيل الدخول...
//                 </>
//               ) : (
//                 "تسجيل الدخول"
//               )}
//             </Button>
//             {/* <div className="text-center text-sm text-gray-500 mt-4">
//               <p>بيانات الدخول الافتراضية:</p>
//               <p>اسم المستخدم: admin</p>
//               <p>كلمة المرور: admin123</p>
//             </div> */}
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AdminLogin;

//  Methode 2 ) : ------------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Lock } from "lucide-react";
// import { toast } from "sonner";

// const AdminLogin: React.FC = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulation d'authentification via délai.
//     setTimeout(() => {
//       if (username === "nanosoft" && password === "@nanosoft.2025@") {
//         localStorage.setItem("adminAuth", "authenticated");
//         toast.success("تم تسجيل الدخول بنجاح");
//         navigate("/admin");
//       } else {
//         toast.error("اسم المستخدم أو كلمة المرور غير صحيحة");
//       }
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1 text-center">
//           <div className="flex justify-center mb-4">
//             <div className="rounded-full bg-nanosoft-primary/10 p-3">
//               <Lock className="h-6 w-6 text-nanosoft-primary" />
//             </div>
//           </div>
//           <CardTitle className="text-2xl font-bold">تسجيل دخول المسؤول</CardTitle>
//           <CardDescription>
//             أدخل بيانات الاعتماد الخاصة بك للوصول إلى لوحة التحكم
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin} className="space-y-4" noValidate>
//             <div className="space-y-2">
//               <label htmlFor="username" className="text-sm font-medium">
//                 اسم المستخدم
//               </label>
//               <Input
//                 id="username"
//                 placeholder="admin"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//                 aria-required="true"
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="password" className="text-sm font-medium">
//                 كلمة المرور
//               </label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 aria-required="true"
//               />
//             </div>
//             <Button
//               type="submit"
//               className="w-full bg-nanosoft-primary hover:bg-nanosoft-secondary"
//               disabled={isLoading}
//               aria-label={isLoading ? "جارٍ تسجيل الدخول" : "تسجيل الدخول"}
//             >
//               {isLoading ? (
//                 <>
//                   <span className="animate-spin mr-2">&#9696;</span>
//                   جاري تسجيل الدخول...
//                 </>
//               ) : (
//                 "تسجيل الدخول"
//               )}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </main>
//   );
// };

// export default AdminLogin;


// src/pages/AdminLogin.jsx

// src/pages/AdminLogin.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";
import { toast } from "sonner";
// Import des fonctions d'authentification Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Assurez-vous que Firebase est initialisé via votre module d'initialisation
import "@/lib/firebase"; 

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fonction de gestion de la connexion
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const auth = getAuth();
    try {
      // Authentifier l'utilisateur avec Firebase Auth en utilisant email et mot de passe
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Optionnel : stocker un flag dans localStorage pour indiquer l'état d'authentification
      localStorage.setItem("adminAuth", "authenticated");
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/admin");
    } catch (error) {
      console.error("Erreur d'authentification:", error);
      toast.error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-nanosoft-primary/10 p-3">
              <Lock className="h-6 w-6 text-nanosoft-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">تسجيل دخول المسؤول</CardTitle>
          <CardDescription>
            أدخل بيانات الاعتماد الخاصة بك للوصول إلى لوحة التحكم
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4" noValidate>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                البريد الإلكتروني
              </label>
              <Input
                id="email"
                type="email"
                placeholder="exemple@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                كلمة المرور
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-nanosoft-primary hover:bg-nanosoft-secondary"
              disabled={isLoading}
              aria-label={isLoading ? "جارٍ تسجيل الدخول" : "تسجيل الدخول"}
            >
              {isLoading ? (
                <>
                  <span className="animate-spin mr-2">&#9696;</span>
                  جاري تسجيل الدخول...
                </>
              ) : (
                "تسجيل الدخول"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default AdminLogin;

