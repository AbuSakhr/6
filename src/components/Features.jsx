import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  BarChart3, 
  Users, 
  Calendar, 
  MessageSquare, 
  Lock
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: "أتمتة سير العمل",
    description: "أتمتة المهام المتكررة وتبسيط العمليات لتوفير الوقت وتقليل الأخطاء."
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "تحليلات متقدمة",
    description: "رؤى قابلة للتنفيذ حول أداء الفريق والمشاريع لاتخاذ قرارات أفضل."
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "تعاون الفريق",
    description: "أدوات تعاونية قوية تمكن فريقك من العمل معًا بسلاسة."
  },
  {
    icon: <Calendar className="h-10 w-10" />,
    title: "إدارة المشاريع",
    description: "تتبع المشاريع والمهام والمواعيد النهائية في مكان واحد."
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "تكامل الذكاء الاصطناعي",
    description: "استفد من قوة الذكاء الاصطناعي لتحسين الإنتاجية وتوليد الأفكار."
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: "أمان متقدم",
    description: "حماية بيانات شركتك بأحدث تقنيات الأمان والتشفير."
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-4 text-indigo-400">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-foreground/70">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-indigo-950/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            ميزات <span className="gradient-text">متقدمة</span> لتعزيز إنتاجية فريقك
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/80"
          >
            كل ما تحتاجه لإدارة فريقك ومشاريعك بكفاءة في مكان واحد.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#pricing" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium">
            اكتشف جميع الميزات
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;