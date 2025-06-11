import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PricingCard = ({ plan, isPopular, isAnnual }) => {
  const { name, description, price, features, notIncluded } = plan;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative rounded-xl ${
        isPopular ? "pricing-highlight" : "border border-border"
      } bg-card p-6`}
    >
      {isPopular && (
        <Badge className="absolute top-4 right-4 bg-indigo-500 hover:bg-indigo-600">
          الأكثر شعبية
        </Badge>
      )}
      
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm text-foreground/70 mb-4">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">{isAnnual ? price.annual : price.monthly}</span>
        <span className="text-foreground/70 mr-1">ريال / {isAnnual ? "سنويًا" : "شهريًا"}</span>
        
        {isAnnual && (
          <div className="mt-1 text-sm text-indigo-400">
            وفر 20% مع الاشتراك السنوي
          </div>
        )}
      </div>
      
      <Button className={`w-full mb-6 ${isPopular ? "bg-indigo-500 hover:bg-indigo-600" : ""}`}>
        ابدأ الآن
      </Button>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <Check className="h-5 w-5 text-indigo-400 mt-0.5 ml-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
        
        {notIncluded && notIncluded.map((feature, index) => (
          <div key={index} className="flex items-start text-foreground/50">
            <X className="h-5 w-5 mt-0.5 ml-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("annual");
  
  const plans = [
    {
      name: "مبتدئ",
      description: "للأفراد والمشاريع الصغيرة",
      price: {
        monthly: "49",
        annual: "39"
      },
      features: [
        "حتى 5 مستخدمين",
        "تخزين 10 جيجابايت",
        "المشاريع غير محدودة",
        "أتمتة أساسية",
        "تكامل مع 3 تطبيقات"
      ],
      notIncluded: [
        "تحليلات متقدمة",
        "دعم مخصص"
      ]
    },
    {
      name: "احترافي",
      description: "للفرق المتنامية والشركات",
      price: {
        monthly: "99",
        annual: "79"
      },
      features: [
        "حتى 20 مستخدم",
        "تخزين 50 جيجابايت",
        "المشاريع غير محدودة",
        "أتمتة متقدمة",
        "تكامل مع 10 تطبيقات",
        "تحليلات متقدمة",
        "دعم مخصص"
      ]
    },
    {
      name: "مؤسسات",
      description: "للشركات الكبيرة والمؤسسات",
      price: {
        monthly: "199",
        annual: "159"
      },
      features: [
        "مستخدمين غير محدودين",
        "تخزين 500 جيجابايت",
        "المشاريع غير محدودة",
        "أتمتة متقدمة",
        "تكامل مع جميع التطبيقات",
        "تحليلات متقدمة",
        "دعم مخصص على مدار الساعة",
        "تدريب مخصص",
        "API مخصصة"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            خطط <span className="gradient-text">أسعار</span> بسيطة وشفافة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/80"
          >
            اختر الخطة المناسبة لاحتياجات فريقك. جميع الخطط تشمل تجربة مجانية لمدة 14 يومًا.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <Tabs
            defaultValue="annual"
            value={billingCycle}
            onValueChange={setBillingCycle}
            className="w-full max-w-xs"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">شهري</TabsTrigger>
              <TabsTrigger value="annual">سنوي</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard plan={plans[0]} isAnnual={billingCycle === "annual"} />
          <PricingCard plan={plans[1]} isPopular={true} isAnnual={billingCycle === "annual"} />
          <PricingCard plan={plans[2]} isAnnual={billingCycle === "annual"} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-foreground/70 mb-4">
            تحتاج إلى خطة مخصصة لاحتياجات فريقك؟
          </p>
          <Button variant="outline">تواصل مع فريق المبيعات</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;