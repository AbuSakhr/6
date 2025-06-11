import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-pattern">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/20 to-transparent pointer-events-none" />
      
      {/* Animated circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 right-[20%] w-[300px] h-[300px] rounded-full bg-indigo-500/30 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute bottom-20 left-[20%] w-[250px] h-[250px] rounded-full bg-purple-500/30 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm font-medium text-indigo-300 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2"></span>
            إطلاق جديد: تكامل الذكاء الاصطناعي
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            <span className="gradient-text">أتمتة العمليات</span> وتعزيز إنتاجية فريقك
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-foreground/80 max-w-2xl mb-8"
          >
            منصة متكاملة تجمع بين إدارة المهام، والتعاون، والذكاء الاصطناعي لمساعدة فريقك على العمل بكفاءة أكبر وإنجاز المزيد.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="lg" className="text-base px-8">
              ابدأ مجانًا <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              عرض توضيحي
            </Button>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl"
          >
            {[
              "تجربة مجانية لمدة 14 يومًا",
              "لا حاجة لبطاقة ائتمان",
              "دعم فني على مدار الساعة",
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-center justify-center text-sm text-foreground/80"
              >
                <CheckCircle2 className="h-4 w-4 text-indigo-400 mr-2" />
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <div className="glass-card rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <img  alt="لقطة شاشة للمنصة تعرض واجهة المستخدم بتصميم أنيق مستوحى من Notion" className="w-full h-auto" src="https://images.unsplash.com/photo-1686061592689-312bbfb5c055" />
          </div>
          
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-xl opacity-20 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;