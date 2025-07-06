// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      about: 'About Us',
      contact: 'Contact Us'
    },
    hero: {
      title: "Empowering Tomorrow with AI",
      description:
        "At AI Brooklyn, we specialize in cutting-edge artificial intelligence solutions that drive innovation, automation, and smarter digital experiences. From intelligent systems to AI-powered apps, we turn your vision into reality with the power of technology.",
      button: "Discover AI Solutions"
    },
    about: {
      title: "About AI Brooklyn",
      subtitle: "Our AI solutions are:",
      items: {
        userFriendly: {
          title: "User-Friendly",
          desc: "Seamless interfaces designed to simplify complex AI processes for every user.",
        },
        powerful: {
          title: "AI-Powered",
          desc: "Leveraging the latest in machine learning and neural networks for accurate, fast results.",
        },
        cloud: {
          title: "Cloud-Integrated",
          desc: "Access your intelligent systems anywhere, anytime — powered by secure cloud technology.",
        },
        scalable: {
          title: "Scalable",
          desc: "Whether you're a startup or enterprise, our AI solutions scale with your business needs.",
        },
      },
    },
    business_ai: {
      title: "Business AI Solutions",
      subtitle: "Empowering businesses through intelligent, data-driven technologies.",
      services: {
        veo: {
          title: "Veo 3 – Video AI",
          desc: "Create cinematic quality videos from simple text prompts using cutting-edge AI from Veo."
        },
        task: {
          title: "1Task – Workspace by AI",
          desc: "Streamline your workspace using AI to automate, delegate, and track every task intelligently."
        },
        agent: {
          title: "AI Agent",
          desc: "Deploy autonomous AI agents to interact with users, perform tasks, and make decisions on your behalf."
        },
        learn_more: "Learn More →"
      }
    },
    whyUs: {
  title: "Why Us?",
  description: "Empowering your business with AI-driven strategies, automation, and advanced tech.",
  items: {
    quality: {
      title: "AI-Driven Quality",
      desc: "Our smart solutions are crafted with precision and scalability to evolve with your operations."
    },
    timely: {
      title: "On-Time Delivery",
      desc: "We deliver innovative, AI-powered solutions right when you need them — to help you thrive."
    },
    learning: {
      title: "Continuous Learning",
      desc: "We stay ahead through continuous learning, adapting and enhancing AI strategies for your changing needs."
    }
  }
},
   contact: {
      title: 'Get in touch',
      subtitle: 'Fill in the form to start a conversation',
      name: 'Full Name',
      email: 'Email',
      message: 'Message',
      placeholderName: 'John Doe',
      placeholderEmail: 'john@example.com',
      placeholderMessage: 'Tell us more...',
      send: 'Send Message',
      success: 'Message sent successfully!',
    }, nav: {
      home: 'Home',
      about: 'About',
      solutions: 'Solutions',
      contact: 'Contact',
    },
    footer: {
      companyInfo: 'Empowering your business through smart, AI-driven solutions in web development, automation, and data intelligence.',
      quickLinks: {
        title: 'Quick Links',
      },
      services: {
        title: 'AI Services',
        consultation: 'AI Consultation',
        crm: 'Smart CRM Integration',
        web: 'AI Web Solutions',
      },
      contact: {
        title: 'Get in Touch',
        email: 'Email',
      },
      rights: 'All rights reserved.',
    },serviceForm: {
  title: 'Request This Service',
  serviceName: 'Service Name',
  name: 'Full Name',
  namePlaceholder: 'Your name',
  email: 'Email',
  emailPlaceholder: 'you@example.com',
  message: 'Message',
  messagePlaceholder: 'Tell us more about your needs',
  button: 'Send Request',
},
// داخل messages.en
services: {
  "ai-consultation": {
    title: "AI Business Consultation",
    description: "Get expert advice on implementing AI to streamline operations and enhance decision-making.",
    details: "",
    features: [
      "Tailored AI strategies",
      "Market & competitor analysis",
      "Operational efficiency boost"
    ]
  },
  "lead-management": {
    title: "AI-Powered Lead Management",
    description: "Automatically collect, filter, and respond to leads using smart CRM tools integrated with AI.",
    details: "",
    features: [
      "Real-time Facebook leads capture",
      "AI-based scoring & response",
      "CRM integration"
    ]
  },
  "web-ai": {
    title: "AI-Integrated Web Solutions",
    description: "Build smarter websites that adapt to user behavior, personalize content, and optimize performance.",
    details: "",
    features: [
      "AI-powered personalization",
      "Fast, scalable codebase",
      "User engagement tracking"
    ]
  },
  "video-ai": {
    title: "Veo 3 – Video AI",
    description: "Create cinematic quality videos from simple text prompts using cutting-edge AI from Veo.",
    details: "",
    features: [
      "Realistic scene generation",
      "Script-based video creation",
      "High-resolution video output"
    ]
  },
  "workspace-ai": {
    title: "1Task – Workspace by AI",
    description: "Streamline your workspace using AI to automate, delegate, and track every task intelligently.",
    details: "",
    features: [
      "Task assignment automation",
      "Daily AI-powered planning",
      "Progress tracking & reporting"
    ]
  },
  "ai-agent": {
    title: "AI Agent",
    description: "Deploy autonomous AI agents to interact with users, perform tasks, and make decisions on your behalf.",
    details: "",
    features: [
      "Natural language communication",
      "Automated task execution",
      "Self-learning capabilities"
    ]
  }
},

  },

  ar: {
    nav: {
      home: 'الرئيسية',
      solutions: 'الحلول',
      about: 'من نحن',
      contact: 'تواصل معنا'
    },
    hero: {
      title: "تمكين المستقبل بالذكاء الاصطناعي",
      description:
        "في AI Brooklyn، نحن متخصصون في حلول الذكاء الاصطناعي المتقدمة التي تدفع الابتكار، وتُحسن الأتمتة، وتُقدم تجارب رقمية أكثر ذكاءً. من الأنظمة الذكية إلى التطبيقات المدعومة بالذكاء الاصطناعي، نحول رؤيتك إلى واقع بقوة التكنولوجيا.",
      button: "استكشف حلول الذكاء الاصطناعي"
    },
    about: {
      title: "عن AI Brooklyn",
      subtitle: "حلول الذكاء الاصطناعي لدينا:",
      items: {
        userFriendly: {
          title: "سهل الاستخدام",
          desc: "واجهات سلسة مصممة لتبسيط عمليات الذكاء الاصطناعي المعقدة لكل المستخدمين.",
        },
        powerful: {
          title: "مدعوم بالذكاء الاصطناعي",
          desc: "نستخدم أحدث تقنيات التعلم الآلي والشبكات العصبية لتحقيق نتائج دقيقة وسريعة.",
        },
        cloud: {
          title: "مدمج بالسحابة",
          desc: "يمكنك الوصول إلى أنظمتك الذكية في أي وقت ومن أي مكان من خلال تقنيات سحابية آمنة.",
        },
        scalable: {
          title: "قابل للتوسع",
          desc: "سواء كنت شركة ناشئة أو مؤسسة كبيرة، حلولنا تتوسع لتلائم احتياجاتك.",
        },
      },
    },
    business_ai: {
      title: "حلول الذكاء الاصطناعي للأعمال",
      subtitle: "تمكين الشركات من خلال تقنيات ذكية قائمة على البيانات.",
      services: {
        veo: {
          title: "Veo 3 – ذكاء الفيديو",
          desc: "أنشئ فيديوهات سينمائية من مجرد أوامر نصية باستخدام أحدث تقنيات الذكاء الاصطناعي من Veo."
        },
        task: {
          title: "1Task – تنظيم العمل بالذكاء الاصطناعي",
          desc: "نظم سير عملك باستخدام الذكاء الاصطناعي للتنفيذ والتتبع والتفويض بذكاء."
        },
        agent: {
          title: "الوكيل الذكي",
          desc: "قم بنشر وكلاء ذكاء اصطناعي مستقلين للتفاعل مع المستخدمين وأداء المهام واتخاذ القرارات نيابة عنك."
        },
        learn_more: "اعرف المزيد →"
      }
    },
    whyUs: {
  title: "لماذا نحن؟",
  description: "نمكّن عملك من خلال استراتيجيات قائمة على الذكاء الاصطناعي، وأتمتة ذكية، وحلول تكنولوجية متقدمة.",
  items: {
    quality: {
      title: "جودة مدعومة بالذكاء الاصطناعي",
      desc: "حلولنا الذكية مصممة بدقة وقابلة للتوسع لتواكب تطور عملياتك."
    },
    timely: {
      title: "تسليم في الوقت المناسب",
      desc: "نقدم حلولًا مبتكرة مدعومة بالذكاء الاصطناعي في الوقت الذي تحتاجه تمامًا لمساعدتك على النمو."
    },
    learning: {
      title: "تعلم مستمر",
      desc: "نظل في المقدمة من خلال التعلم المستمر وتحسين استراتيجيات الذكاء الاصطناعي وفقًا لاحتياجاتك."
    }
  }
},
    contact: {
      title: 'تواصل معنا',
      subtitle: 'املأ النموذج لبدء المحادثة',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      placeholderName: ' ادخل اسمك',
      placeholderEmail: 'example@mail.com',
      placeholderMessage: 'أخبرنا المزيد...',
      send: 'إرسال الرسالة',
      success: 'تم إرسال الرسالة بنجاح!',
    },
       nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      solutions: 'الحلول',
      contact: 'تواصل معنا',
    },
    footer: {
      companyInfo: 'نُمكّن أعمالك من خلال حلول ذكية قائمة على الذكاء الاصطناعي في تطوير الويب والأتمتة وتحليل البيانات.',
      quickLinks: {
        title: 'روابط سريعة',
      },
      services: {
        title: 'خدمات الذكاء الاصطناعي',
        consultation: 'استشارات الذكاء الاصطناعي',
        crm: 'تكامل CRM الذكي',
        web: 'حلول الويب بالذكاء الاصطناعي',
      },
      contact: {
        title: 'تواصل معنا',
        email: 'البريد الإلكتروني',
      },
      rights: 'جميع الحقوق محفوظة.',
    },serviceForm: {
  title: 'طلب هذه الخدمة',
  serviceName: 'اسم الخدمة',
  name: 'الاسم الكامل',
  namePlaceholder: 'اكتب اسمك',
  email: 'البريد الإلكتروني',
  emailPlaceholder: 'example@email.com',
  message: 'رسالتك',
  messagePlaceholder: 'أخبرنا باحتياجاتك بالتفصيل',
  button: 'إرسال الطلب',
},// داخل messages.en
services: {
  "ai-consultation": {
    title: "استشارات الأعمال بالذكاء الاصطناعي",
    description: "احصل على نصائح احترافية حول كيفية تطبيق الذكاء الاصطناعي لتحسين الكفاءة واتخاذ قرارات ذكية.",
    details: "",
    features: `استراتيجيات ذكاء اصطناعي مخصصة
تحليل السوق والمنافسين
تحسين الكفاءة التشغيلية`
  },
  "lead-management": {
    title: "إدارة العملاء المحتملين بالذكاء الاصطناعي",
    description: "جمع وفرز والرد على العملاء المحتملين تلقائيًا باستخدام أدوات CRM الذكية المدمجة مع الذكاء الاصطناعي.",
    details: "",
    features: `التقاط العملاء من فيسبوك لحظياً
تصنيف واستجابة آلية معتمدة على الذكاء الاصطناعي
تكامل مع أنظمة إدارة العلاقات مع العملاء`
  },
  "web-ai": {
    title: "حلول الويب المدمجة بالذكاء الاصطناعي",
    description: "بناء مواقع ذكية تتكيف مع سلوك المستخدم وتُخصص المحتوى وتُحسن الأداء تلقائيًا.",
    details: "",
    features: `تخصيص المحتوى باستخدام الذكاء الاصطناعي
كود سريع وقابل للتوسع
تتبع تفاعل المستخدمين`
  },
  "video-ai": {
    title: "Veo 3 – ذكاء الفيديو",
    description: "أنشئ فيديوهات سينمائية عالية الجودة من نصوص بسيطة باستخدام أحدث تقنيات Veo.",
    details: "",
    features: `توليد مشاهد واقعية
إنشاء فيديوهات من النصوص
إخراج فيديوهات بدقة عالية`
  },
  "workspace-ai": {
    title: "1Task – تنظيم العمل بالذكاء الاصطناعي",
    description: "نظم بيئة عملك باستخدام الذكاء الاصطناعي للتخطيط والتفويض والتتبع اليومي.",
    details: "",
    features: `أتمتة تعيين المهام
تخطيط يومي مدعوم بالذكاء الاصطناعي
متابعة الأداء والتقارير`
  },
  "ai-agent": {
    title: "الوكيل الذكي بالذكاء الاصطناعي",
    description: "نشر وكلاء ذكاء اصطناعي مستقلين يتفاعلون مع المستخدمين ويؤدون المهام ويتخذون القرارات نيابة عنك.",
    details: "",
    features: `تواصل بلغة طبيعية
تنفيذ المهام تلقائيًا
قدرات التعلم الذاتي`
  }
}



  }
}


// حفظ اللغة المختارة
const defaultLocale = localStorage.getItem('lang') || 'en'

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
  globalInjection: true, // ✅ مهم جداً
})
