import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import ProductHero from "@/components/ProductHero";
import Footer from "@/components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
    document.title = "تخفيضات صابر الرقمية - اشتراك كانفا برو";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <ProductHero />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;