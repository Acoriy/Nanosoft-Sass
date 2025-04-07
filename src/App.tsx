
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Dashboard from "./pages/Dashboard";
import BlogAdmin from "./pages/admin/BlogAdmin";
import PriceAdmin from "./pages/admin/PriceAdmin";
import AdminLogin from "./pages/admin/AdminLogin";
import DashboardLayout from "./components/DashboardLayout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import AccountingSystem from "./pages/AccountingSystem";
import InventorySystem from "./pages/InventorySystem";
import HRSystem from "./pages/HRSystem";
// import ERPSystem from "./pages/ERPSystem";
import ContactUs from "./pages/ContactUs";
import WebDevService from "./pages/WebDevService";
import Injaze from "./pages/Injaze";
import ERPSystem from "./pages/ERPSystem";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop/>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Pages publiques */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Index />
                  <Footer />
                </>
              }
            />
            <Route
              path="/pricing"
              element={
                <>
                  <Navbar />
                  <Pricing />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <>
                  <Navbar />
                  <Blog />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <>
                  <Navbar />
                  <BlogPost />
                  <Footer />
                </>
              }
            />
            
            {/* Page de contact */}
            <Route
              path="/contact"
              element={
                <>
                  <Navbar />
                  <ContactUs />
                  <Footer />
                </>
              }
            />
            
            {/* New Web Development Service Page */}
            <Route
              path="/websites"
              element={
                <>
                  <Navbar />
                  <WebDevService />
                  <Footer />
                </>
              }
            />
            
            {/* Nouvelles pages des produits */}
            <Route
              path="/accounting"
              element={
                <>
                  <Navbar />
                  <AccountingSystem />
                  <Footer />
                </>
              }
            />
            <Route
              path="/inventory"
              element={
                <>
                  <Navbar />
                  <InventorySystem />
                  <Footer />
                </>
              }
            />
            <Route
              path="/hr"
              element={
                <>
                  <Navbar />
                  <HRSystem />
                  <Footer />
                </>
              }
            />
            <Route
              path="/injaz"
              element={
                <>
                  <Navbar />
                  <Injaze/>
                  <Footer />
                </>
              }
            />
            <Route
              path="/erp"
              element={
                <>
                  <Navbar />
                  <ERPSystem/>
                  <Footer />
                </>
              }
            />
            
            
            {/* Admin Login */}
            <Route path="/admin/login" element={<AdminLogin />} />
            
            {/* Dashboard Admin */}
            <Route path="/admin" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="blogs" element={<BlogAdmin />} />
              <Route path="prices" element={<PriceAdmin />} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
