
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (  
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Grille des sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Section 1 : Logo et description (Zoom) */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center">
              <img src={Logo} alt="نانو سوفت" className="w-14 h-auto" />
            </div>
            <p className="text-gray-400 mt-4">
              شركة رائدة في مجال تقنية المعلومات وتطوير الحلول المتكاملة للشركات والمؤسسات.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://www.facebook.com/nanosoft.libya" target='_blank' className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-nanosoft-primary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/nanosoft-ly?originalSubdomain=ly" target='_blank' className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-nanosoft-primary transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCIjcanGw-Gbm3mazrnS8r2w" target='_blank' className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-nanosoft-primary transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
              
            </div>
          </motion.div>

          {/* Section 2 : Liens rapides (Glissement vers la droite) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h4 className="text-lg font-semibold mb-5">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">الرئيسية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">من نحن</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">خدماتنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">المنتجات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">المدونة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">اتصل بنا</a></li>
            </ul>
          </motion.div>

          {/* Section 3 : Services (Glissement vers la gauche) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h4 className="text-lg font-semibold mb-5">خدماتنا</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">تطوير البرمجيات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">تطبيقات الجوال</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">تطوير المواقع</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">الذكاء الاصطناعي</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">خدمات السحابة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">الأمن السيبراني</a></li>
            </ul>
          </motion.div>

          {/* Section 4 : Contact (Rotation) */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h4 className="text-lg font-semibold mb-5">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-nanosoft-primary ml-3 mt-1" />
                <span className="text-gray-400">ليبيا - طرابلس</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-nanosoft-primary ml-3" />
                <span className="text-gray-400">918889193 218+</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-nanosoft-primary ml-3" />
                <span className="text-gray-400">info@nanosoft.ly</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Section de copyright (Fondu enchaîné) */}
        <motion.div
          className="border-t border-gray-800 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} نانو سوفت. جميع الحقوق محفوظة.
            </p>

            <div className="flex space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">سياسة الخصوصية</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">الشروط والأحكام</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">الدعم الفني</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
