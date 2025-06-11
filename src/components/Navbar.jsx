import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-bold gradient-text"
            >
              تخفيضات صابر الرقمية
            </motion.div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <motion.a
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              href="#product"
            >
              المنتج
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              href="#contact"
            >
              تواصل معنا
            </motion.a>
          </nav>

          <div className="flex items-center space-x-2 rtl:space-x-reverse">
             <Button size="sm">
              <ShoppingCart className="ml-2 h-4 w-4" />
              اطلب الآن
            </Button>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              className="text-sm font-medium text-foreground/80 hover:text-foreground py-2"
              href="#product"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              المنتج
            </a>
            <a
              className="text-sm font-medium text-foreground/80 hover:text-foreground py-2"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;