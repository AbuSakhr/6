import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-background border-t border-border py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 text-center md:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="font-medium text-lg mb-4 gradient-text">تخفيضات صابر الرقمية</p>
            <p className="text-foreground/70">
              نقدم لك أفضل العروض على الاشتراكات والمنتجات الرقمية. جودة عالية بأسعار تنافسية.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="font-medium text-lg mb-4">روابط سريعة</p>
            <ul className="space-y-2">
              <li>
                <a href="#product" className="text-foreground/70 hover:text-foreground transition-colors">
                  تفاصيل المنتج
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  شروط الخدمة
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-medium text-lg mb-4">تواصل معنا</p>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 text-purple-400 ml-2" />
                <a href="mailto:saber@example.com" className="text-foreground/70 hover:text-foreground transition-colors">
                  saber@example.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 text-purple-400 ml-2" />
                <span className="text-foreground/70 hover:text-foreground transition-colors">
                  +967 XXX XXX XXX (واتساب)
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-purple-400 ml-2" />
                <span className="text-foreground/70">اليمن</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-foreground/70 text-sm"
          >
            © {currentYear} تخفيضات صابر الرقمية. جميع الحقوق محفوظة.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;