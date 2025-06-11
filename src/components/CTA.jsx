import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 gradient-bg opacity-90"></div>
          
          {/* Animated circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-indigo-500/30 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-purple-500/30 blur-3xl"
          />
          
          <div className="relative z-10 py-16 px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white max-w-3xl mx-auto">
              جاهز لتحويل طريقة عمل فريقك؟
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              ابدأ تجربتك المجانية اليوم واكتشف كيف يمكن لمنصتنا مساعدة فريقك على تحقيق المزيد.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-white/90 text-base px-8">
                ابدأ تجربتك المجانية <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-base">
                تواصل مع المبيعات
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;