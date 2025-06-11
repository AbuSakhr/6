import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    quote: "لقد غيرت هذه المنصة طريقة عمل فريقنا بالكامل. الآن نستطيع إدارة جميع مشاريعنا بكفاءة أكبر وإنجاز المزيد في وقت أقل.",
    author: "سارة أحمد",
    role: "مديرة المشاريع، شركة تقنية",
    avatar: "SA"
  },
  {
    quote: "التكامل مع الذكاء الاصطناعي هو ما يميز هذه المنصة عن غيرها. لقد وفرت علينا ساعات من العمل الروتيني وسمحت لنا بالتركيز على المهام الإبداعية.",
    author: "محمد خالد",
    role: "مؤسس شركة ناشئة",
    avatar: "MK"
  },
  {
    quote: "واجهة المستخدم سهلة الاستخدام والتصميم رائع. استغرق الأمر دقائق فقط لتدريب فريقنا على استخدام المنصة، وأصبحنا الآن نعتمد عليها يوميًا.",
    author: "نورا سعيد",
    role: "مديرة التسويق، شركة إعلامية",
    avatar: "NS"
  },
  {
    quote: "الدعم الفني ممتاز والفريق دائمًا مستعد للمساعدة. لقد ساعدونا في تخصيص المنصة لتناسب احتياجاتنا الخاصة، وهذا ما نقدره حقًا.",
    author: "أحمد محمود",
    role: "مدير تكنولوجيا المعلومات، شركة تجارية",
    avatar: "AM"
  },
  {
    quote: "التحليلات المتقدمة ساعدتنا في فهم أداء فريقنا بشكل أفضل واتخاذ قرارات مبنية على البيانات. النتائج كانت مذهلة!",
    author: "ليلى عمر",
    role: "محللة بيانات، شركة استشارية",
    avatar: "LO"
  },
  {
    quote: "بعد تجربة العديد من الحلول المماثلة، يمكنني القول بثقة أن هذه المنصة هي الأفضل. الميزات، والأداء، والقيمة مقابل المال - كل شيء ممتاز.",
    author: "عمر حسن",
    role: "مدير عمليات، شركة خدمات",
    avatar: "OH"
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full glass-card hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 text-2xl text-indigo-400">"</div>
          <p className="text-foreground/90 mb-6 flex-grow">{testimonial.quote}</p>
          <Separator className="mb-4 bg-border/50" />
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3 bg-indigo-500/20">
              <AvatarFallback className="text-indigo-300">{testimonial.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{testimonial.author}</p>
              <p className="text-sm text-foreground/70">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
            ماذا يقول <span className="gradient-text">عملاؤنا</span> عنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/80"
          >
            آلاف الفرق حول العالم تستخدم منصتنا لتحسين إنتاجيتها وتحقيق أهدافها.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;