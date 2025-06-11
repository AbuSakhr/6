import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShoppingCart, Gift, Zap, Users, Film, TrendingUp, DollarSign, Tag } from "lucide-react";

const ProductHero = () => {
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

  const productFeatures = [
    { icon: <Zap className="h-5 w-5 text-indigo-400" />, text: "أنشئ محتوى رائعًا بسرعة بدون مهارات تصميم." },
    { icon: <Users className="h-5 w-5 text-indigo-400" />, text: "مثالي لأصحاب المتاجر والمستقلين." },
    { icon: <Film className="h-5 w-5 text-indigo-400" />, text: "صمم إعلانات، شعارات، وفيديوهات ترويجية بسهولة." },
    { icon: <TrendingUp className="h-5 w-5 text-indigo-400" />, text: "إدارة حسابات التواصل الاجتماعي من مكان واحد." },
    { icon: <Gift className="h-5 w-5 text-indigo-400" />, text: "أكثر من 100 مليون صورة، فيديو، ومقطع صوتي." },
  ];

  return (
    <section id="product" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-indigo-900/30 to-background/10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-[15%] w-[350px] h-[350px] rounded-full bg-purple-500/40 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
        className="absolute bottom-10 left-[15%] w-[300px] h-[300px] rounded-full bg-indigo-500/40 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/15 text-sm font-medium text-purple-300 mb-6">
              <Tag className="ml-2 h-4 w-4" />
              لا تقول مش معقول! 🔥😎
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              اشتراك <span className="gradient-text">كانفا برو (Canva Pro)</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-green-400">
              بـ 1500 ريال يمني فقط (أو 3$)
            </h2>
            <p className="text-lg text-foreground/80 mb-1">
              السعر قبل الخصم: <span className="line-through text-red-400/80">~109.99$~</span>
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              تفعيل رسمي لمدة سنة ✅👑
            </p>

            <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
              👈 إذا كنت صاحب متجر وتحب تصمم إعلان لمنتجاتك أو شعار لنشاطك التجاري. <br/>
              👈 إذا كنت تعمل عمل حر وتقدم تصاميم لعملائك وتحب تحصل على ملايين التصاميم الاحترافية القابلة للتعديل بنقرة زر! <br/>
              👈 إذا تحب تسوي فيديو ترويجي لنشاطك التجاري وماعندك خبرة بالمونتاج؟! 🖥️🖱️ <br/>
              👈 إذا عندك حسابات تواصل اجتماعي كثيرة وتريد ادارتها من مكان واحد 📢🚀 <br/>
              🎁 <span className="font-bold text-purple-400">تعااال فهذا العرض لك</span> 👇
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button size="lg" className="text-base px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg">
                <ShoppingCart className="ml-2 h-5 w-5" />
                اطلب الآن بـ 3$
              </Button>
              <Button size="lg" variant="outline" className="text-base border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300">
                تواصل معنا
              </Button>
            </motion.div>
            
            <div className="border-t border-border/30 pt-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-300">نبذة سريعة عن كانفا برو:</h3>
              <ul className="space-y-2.5">
                {productFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-start text-foreground/80"
                  >
                    {feature.icon}
                    <span className="mr-2">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mx-auto max-w-md lg:max-w-xl"
          >
            <div className="glass-card rounded-xl overflow-hidden shadow-2xl border border-white/10 p-2">
              <img  alt="عرض جذاب لـ Canva Pro مع شعار كانفا وأمثلة للتصاميم" className="w-full h-auto rounded-lg" src="https://images.unsplash.com/photo-1675119715594-30fde4bd3dbc" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur-xl opacity-30 -z-10 animate-pulse"></div>
          </motion.div>
        </div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center p-6 glass-card rounded-xl"
        >
            <h3 className="text-2xl font-semibold mb-3 gradient-text">منتجات رقمية إضافية بأسعار رمزية! 🔥</h3>
            <p className="text-foreground/80 max-w-xl mx-auto">
                لا تفوت الفرصة! استكشف مجموعتنا المتنوعة من المنتجات الرقمية الأخرى التي ستساعدك في أعمالك ومشاريعك الشخصية بأسعار لا تقبل المنافسة.
            </p>
            <Button size="lg" variant="outline" className="mt-6 text-base border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300">
                تصفح باقي المنتجات
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;