// WhatsApp Configuration
export const WHATSAPP = {
    teachers: "966593396156",
    universities: "966573557027", 
    designTech: "966573557027"
};

// Services Data
export const SERVICES = [
    // Teachers Services
    {
        id: "t-01",
        title: "خطط علاجية",
        category: "teachers",
        shortDesc: "تصميم خطط علاجية مخصصة وفق مستويات الطلاب.",
        image: "/images/teachers/remedial.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "خطة علاجية شاملة تتضمن أهداف واضحة، أنشطة تفاعلية، وطرق تقييم متنوعة",
            forWhom: "معلمي المراحل الدراسية المختلفة الذين يحتاجون لخطط علاجية للطلاب المتأخرين",
            steps: [
                "تحليل نتائج الطلاب وتحديد نقاط الضعف",
                "تصميم خطة علاجية مخصصة",
                "إعداد الأنشطة والتمارين العلاجية",
                "تطوير أدوات التقييم والتتبع"
            ],
            requirements: "تقديم نتائج الطلاب، تحديد المهارات المطلوب علاجها، المدة الزمنية المتاحة",
            duration: "3-5 أيام عمل",
            price: "يبدأ من 150 ريال"
        }
    },
    {
        id: "t-02",
        title: "خطط إثرائية",
        category: "teachers",
        shortDesc: "تصميم خطط إثرائية للطلاب المتفوقين.",
        image: "/images/teachers/enrichment.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "خطة إثرائية متقدمة تشمل أنشطة تحفيزية وتطويرية للمهارات العليا",
            forWhom: "معلمي الطلاب المتفوقين والمتميزين في مختلف المواد الدراسية",
            steps: [
                "تقييم مستوى الطالب المتفوق",
                "تصميم أنشطة إثرائية متقدمة",
                "إعداد مشاريع تطويرية",
                "تطوير أدوات تقييم متقدمة"
            ],
            requirements: "تحديد الطلاب المتفوقين، المادة الدراسية، الأهداف الإثرائية المطلوبة",
            duration: "3-7 أيام عمل",
            price: "يبدأ من 200 ريال"
        }
    },
    {
        id: "t-03",
        title: "تحضير دروس على منصة مدرستي",
        category: "teachers",
        shortDesc: "تحضير خطط أسبوعية على منصة مدرستي.",
        image: "/images/teachers/madrasati.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "خطط دروس أسبوعية كاملة على منصة مدرستي مع الأنشطة والموارد",
            forWhom: "معلمي المراحل الدراسية المختلفة الذين يستخدمون منصة مدرستي",
            steps: [
                "تحليل المنهج الدراسي والأهداف",
                "تصميم خطط الدروس الأسبوعية",
                "إعداد الأنشطة التفاعلية",
                "رفع المحتوى على منصة مدرستي"
            ],
            requirements: "المنهج الدراسي، عدد الحصص الأسبوعية، المستوى الدراسي",
            duration: "2-4 أيام عمل",
            price: "يبدأ من 100 ريال"
        }
    },
    {
        id: "t-04",
        title: "عروض بوربوينت",
        category: "teachers",
        shortDesc: "تصميم عروض تقديمية احترافية للمواد الدراسية.",
        image: "/images/teachers/powerpoint.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "عرض بوربوينت احترافي مع تصميم جذاب ومحتوى تفاعلي",
            forWhom: "معلمي جميع المواد الدراسية في مختلف المراحل",
            steps: [
                "تحليل المحتوى الدراسي",
                "تصميم قالب العرض",
                "إعداد المحتوى والصور",
                "إضافة التأثيرات والانتقالات"
            ],
            requirements: "المحتوى الدراسي، عدد الشرائح المطلوبة، التصميم المفضل",
            duration: "1-3 أيام عمل",
            price: "يبدأ من 80 ريال"
        }
    },
    {
        id: "t-05",
        title: "اختبارات",
        category: "teachers",
        shortDesc: "تصميم اختبارات متنوعة ومقاييس تقييم.",
        image: "/images/teachers/exams.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "اختبارات متنوعة مع مفتاح الإجابة ومقاييس التقييم",
            forWhom: "معلمي جميع المواد الدراسية الذين يحتاجون اختبارات تقييمية",
            steps: [
                "تحليل المحتوى المطلوب اختباره",
                "تصميم أسئلة متنوعة المستويات",
                "إعداد مفتاح الإجابة",
                "تطوير مقاييس التقييم"
            ],
            requirements: "المحتوى الدراسي، نوع الاختبار، عدد الأسئلة المطلوبة",
            duration: "1-2 أيام عمل",
            price: "يبدأ من 60 ريال"
        }
    },
    {
        id: "t-06",
        title: "تحليل نتائج",
        category: "teachers",
        shortDesc: "تحليل نتائج الطلاب وإعداد تقارير مفصلة.",
        image: "/images/teachers/results.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "تحليل إحصائي شامل للنتائج مع رسوم بيانية وتوصيات",
            forWhom: "معلمي ومديري المدارس الذين يحتاجون تحليل نتائج الطلاب",
            steps: [
                "جمع بيانات النتائج",
                "تحليل إحصائي شامل",
                "إعداد الرسوم البيانية",
                "كتابة التوصيات والتحسينات"
            ],
            requirements: "بيانات نتائج الطلاب، نوع التحليل المطلوب، الفترة الزمنية",
            duration: "2-4 أيام عمل",
            price: "يبدأ من 120 ريال"
        }
    },
    {
        id: "t-07",
        title: "ورشات عمل",
        category: "teachers",
        shortDesc: "تنظيم ورش عمل تطويرية للمعلمين.",
        image: "/images/teachers/workshops.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "ورشة عمل تطويرية شاملة مع مواد تدريبية وشهادات مشاركة",
            forWhom: "المعلمين والكوادر التعليمية الراغبين في التطوير المهني",
            steps: [
                "تحديد موضوع الورشة والأهداف",
                "إعداد المحتوى التدريبي",
                "تصميم الأنشطة التفاعلية",
                "تنفيذ الورشة وتقييمها"
            ],
            requirements: "موضوع الورشة، عدد المشاركين، المدة الزمنية، المكان",
            duration: "1-2 أسابيع",
            price: "يبدأ من 500 ريال"
        }
    },
    {
        id: "t-08",
        title: "الفاقد التعليمي",
        category: "teachers",
        shortDesc: "تقييم ومعالجة الفاقد التعليمي للطلاب.",
        image: "/images/teachers/learning-loss.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "تقييم شامل للفاقد التعليمي مع خطة علاجية مفصلة",
            forWhom: "المعلمين والمرشدين الطلابيين الذين يتعاملون مع الفاقد التعليمي",
            steps: [
                "تقييم مستوى الفاقد التعليمي",
                "تحليل الأسباب والعوامل المؤثرة",
                "تصميم خطة علاجية شاملة",
                "متابعة التقدم والتقييم المستمر"
            ],
            requirements: "بيانات الطلاب، نتائج التقييمات السابقة، المدة الزمنية المتاحة",
            duration: "1-2 أسابيع",
            price: "يبدأ من 300 ريال"
        }
    },
    {
        id: "t-09",
        title: "إدارة ملف الصلاحيات",
        category: "teachers",
        shortDesc: "إدارة وتنظيم ملفات الصلاحيات للمعلمين.",
        image: "/images/teachers/permissions.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "ملف صلاحيات منظم ومحدث مع نظام تتبع وإدارة",
            forWhom: "المعلمين ومديري المدارس الذين يحتاجون إدارة ملفات الصلاحيات",
            steps: [
                "جمع وتنظيم الوثائق المطلوبة",
                "تصنيف الصلاحيات حسب النوع",
                "إعداد نظام تتبع وتحديث",
                "تدريب المستخدمين على النظام"
            ],
            requirements: "الوثائق المطلوبة، عدد المعلمين، نوع الصلاحيات",
            duration: "3-7 أيام عمل",
            price: "يبدأ من 150 ريال"
        }
    },
    {
        id: "t-10",
        title: "ملفات اللجان",
        category: "teachers",
        shortDesc: "إدارة وتنظيم ملفات اللجان المدرسية.",
        image: "/images/teachers/committees.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "ملفات لجان منظمة مع محاضر اجتماعات وتقارير دورية",
            forWhom: "رؤساء اللجان المدرسية ومديري المدارس",
            steps: [
                "تصنيف اللجان وتحديد المهام",
                "إعداد قوالب المحاضر والتقارير",
                "تنظيم الملفات والوثائق",
                "إعداد نظام متابعة وتقييم"
            ],
            requirements: "أنواع اللجان، عدد الأعضاء، المهام المطلوبة",
            duration: "5-10 أيام عمل",
            price: "يبدأ من 200 ريال"
        }
    },
    {
        id: "t-11",
        title: "تطوير وتنفيذ خطط الإدارة",
        category: "teachers",
        shortDesc: "تطوير خطط إدارية شاملة للمدارس.",
        image: "/images/teachers/admin-plans.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "خطة إدارية شاملة مع آليات التنفيذ والمتابعة",
            forWhom: "مديري المدارس والوحدات الإدارية",
            steps: [
                "تحليل الوضع الحالي للمدرسة",
                "تحديد الأهداف الإدارية",
                "تصميم خطط العمل والتنفيذ",
                "إعداد نظام متابعة وتقييم"
            ],
            requirements: "معلومات المدرسة، الأهداف المطلوبة، المدة الزمنية",
            duration: "2-4 أسابيع",
            price: "يبدأ من 800 ريال"
        }
    },
    {
        id: "t-12",
        title: "الإشراف على الميزانية التشغيلية",
        category: "teachers",
        shortDesc: "إدارة ومتابعة الميزانية التشغيلية للمدرسة.",
        image: "/images/teachers/budget.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "نظام إدارة ميزانية شامل مع تقارير دورية ومتابعة",
            forWhom: "مديري المدارس ومسؤولي الميزانيات",
            steps: [
                "تحليل الميزانية الحالية",
                "تصميم نظام إدارة مالي",
                "إعداد تقارير دورية",
                "متابعة الإنفاق والتحكم"
            ],
            requirements: "الميزانية المتاحة، المصروفات المطلوبة، الفترة الزمنية",
            duration: "1-2 أسابيع",
            price: "يبدأ من 400 ريال"
        }
    },
    {
        id: "t-13",
        title: "تنظيم اللجان والفرق",
        category: "teachers",
        shortDesc: "تنظيم وإدارة اللجان والفرق المدرسية.",
        image: "/images/teachers/teams.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "هيكل تنظيمي للجان والفرق مع أدوار ومسؤوليات واضحة",
            forWhom: "مديري المدارس ورؤساء اللجان",
            steps: [
                "تحديد اللجان والفرق المطلوبة",
                "تصميم الهيكل التنظيمي",
                "تحديد الأدوار والمسؤوليات",
                "إعداد نظام تنسيق وتواصل"
            ],
            requirements: "عدد المعلمين، نوع الأنشطة، المهام المطلوبة",
            duration: "3-7 أيام عمل",
            price: "يبدأ من 250 ريال"
        }
    },
    {
        id: "t-14",
        title: "دعم الفعاليات الإدارية",
        category: "teachers",
        shortDesc: "دعم وتنظيم الفعاليات والأنشطة الإدارية.",
        image: "/images/teachers/events.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "دعم شامل للفعاليات مع تخطيط وتنفيذ احترافي",
            forWhom: "مديري المدارس ومنظمي الفعاليات",
            steps: [
                "تخطيط الفعالية وتحديد الأهداف",
                "إعداد الجدول الزمني والموارد",
                "تنفيذ الفعالية",
                "تقييم النتائج والتوصيات"
            ],
            requirements: "نوع الفعالية، عدد المشاركين، الميزانية المتاحة",
            duration: "1-4 أسابيع",
            price: "يبدأ من 300 ريال"
        }
    },
    {
        id: "t-15",
        title: "ملفات الإنجاز",
        category: "teachers",
        shortDesc: "إعداد وتنظيم ملفات الإنجاز للمعلمين.",
        image: "/images/teachers/achievement.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "ملف إنجاز احترافي مع توثيق شامل للإنجازات",
            forWhom: "المعلمين الراغبين في توثيق إنجازاتهم المهنية",
            steps: [
                "جمع وتصنيف الإنجازات",
                "تصميم قالب ملف الإنجاز",
                "توثيق الإنجازات والأنشطة",
                "إعداد العرض النهائي"
            ],
            requirements: "الإنجازات والأنشطة، الشهادات، المدة الزمنية",
            duration: "5-10 أيام عمل",
            price: "يبدأ من 200 ريال"
        }
    },
    {
        id: "t-16",
        title: "سجلات الدرجات",
        category: "teachers",
        shortDesc: "إدارة وتنظيم سجلات درجات الطلاب.",
        image: "/images/teachers/grades.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "نظام إدارة درجات شامل مع تقارير وتحليلات",
            forWhom: "المعلمين ومديري المدارس",
            steps: [
                "تصميم نظام تسجيل الدرجات",
                "إعداد قوالب التقارير",
                "تدريب المعلمين على النظام",
                "متابعة وتحديث البيانات"
            ],
            requirements: "عدد الطلاب، المواد الدراسية، نظام التقييم",
            duration: "1-2 أسابيع",
            price: "يبدأ من 180 ريال"
        }
    },
    {
        id: "t-17",
        title: "ملف الكشافة",
        category: "teachers",
        shortDesc: "إدارة وتنظيم ملفات الكشافة المدرسية.",
        image: "/images/teachers/scouts.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "ملف كشافة منظم مع خطط أنشطة وتقارير",
            forWhom: "قادة الكشافة المدرسية ومديري المدارس",
            steps: [
                "تنظيم ملفات الكشافة",
                "إعداد خطط الأنشطة",
                "توثيق الأنشطة والإنجازات",
                "إعداد التقارير الدورية"
            ],
            requirements: "عدد الكشافة، الأنشطة المطلوبة، المدة الزمنية",
            duration: "3-7 أيام عمل",
            price: "يبدأ من 150 ريال"
        }
    },
    {
        id: "t-18",
        title: "ملف لجنة الاختبارات",
        category: "teachers",
        shortDesc: "إدارة ملفات لجان الاختبارات المدرسية.",
        image: "/images/teachers/exam-committee.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "ملف لجنة اختبارات شامل مع إجراءات وتقارير",
            forWhom: "رؤساء لجان الاختبارات ومديري المدارس",
            steps: [
                "تنظيم ملف اللجنة",
                "إعداد الإجراءات واللوائح",
                "توثيق الاجتماعات والقرارات",
                "إعداد التقارير الدورية"
            ],
            requirements: "عدد الطلاب، المواد الدراسية، نوع الاختبارات",
            duration: "5-10 أيام عمل",
            price: "يبدأ من 200 ريال"
        }
    },
    {
        id: "t-19",
        title: "ملف توثيق الشواهد",
        category: "teachers",
        shortDesc: "توثيق وإدارة الشواهد والإنجازات.",
        image: "/images/teachers/evidence.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "نظام توثيق شامل للشواهد والإنجازات",
            forWhom: "المعلمين والمديرين الراغبين في توثيق إنجازاتهم",
            steps: [
                "تصنيف الشواهد والإنجازات",
                "تصميم نظام التوثيق",
                "توثيق الشواهد والأنشطة",
                "إعداد التقارير والعروض"
            ],
            requirements: "الشواهد والإنجازات، المدة الزمنية، نوع التوثيق",
            duration: "1-2 أسابيع",
            price: "يبدأ من 250 ريال"
        }
    },
    {
        id: "t-20",
        title: "خدمات إضافية أخرى",
        category: "teachers",
        shortDesc: "خدمات تعليمية وإدارية إضافية حسب الطلب.",
        image: "/images/teachers/other.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "خدمات مخصصة حسب احتياجات العميل",
            forWhom: "المعلمين والمديرين الذين يحتاجون خدمات خاصة",
            steps: [
                "تحليل الاحتياجات المطلوبة",
                "تصميم الحلول المناسبة",
                "تنفيذ الخدمة المطلوبة",
                "متابعة وتقييم النتائج"
            ],
            requirements: "تحديد الخدمة المطلوبة، المتطلبات الخاصة، المدة الزمنية",
            duration: "حسب طبيعة الخدمة",
            price: "حسب طبيعة الخدمة"
        }
    },
    {
        id: "t-21",
        title: "سجل التقارير اليومية والأسبوعية",
        category: "teachers",
        shortDesc: "إعداد وتنظيم سجلات التقارير اليومية والأسبوعية للمعلمين.",
        image: "/images/teachers/daily-reports.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "سجل تقارير منظم مع قوالب جاهزة ونظام متابعة شامل",
            forWhom: "المعلمين ومديري المدارس الذين يحتاجون توثيق الأنشطة اليومية والأسبوعية",
            steps: [
                "تصميم قوالب التقارير اليومية والأسبوعية",
                "إعداد نظام تسجيل وتوثيق",
                "تدريب المعلمين على استخدام السجل",
                "متابعة وتحديث التقارير بانتظام"
            ],
            requirements: "عدد المعلمين، نوع الأنشطة المطلوب توثيقها، المدة الزمنية",
            duration: "3-7 أيام عمل",
            price: "يبدأ من 120 ريال"
        }
    },
    {
        id: "t-22",
        title: "سجل الإذاعة المدرسية",
        category: "teachers",
        shortDesc: "إعداد وتنظيم سجل الإذاعة المدرسية والأنشطة الصباحية.",
        image: "/images/teachers/school-radio.jpg",
        whatsappKey: "teachers",
        details: {
            whatYouGet: "سجل إذاعة مدرسية شامل مع خطط برامج وتقارير دورية",
            forWhom: "مشرفي الإذاعة المدرسية ومديري المدارس",
            steps: [
                "تصميم سجل الإذاعة المدرسية",
                "إعداد خطط البرامج الأسبوعية",
                "تنظيم جدول المذيعين والمواضيع",
                "توثيق الأنشطة والتقارير"
            ],
            requirements: "عدد الطلاب المشاركين، المواضيع المطلوبة، المدة الزمنية",
            duration: "5-10 أيام عمل",
            price: "يبدأ من 150 ريال"
        }
    },

    // Universities Services
    {
        id: "u-01",
        title: "عروض تقديمية جامعية",
        category: "universities",
        shortDesc: "تصميم عروض تقديمية احترافية للمواد الجامعية.",
        image: "/images/universities/presentations.jpg",
        whatsappKey: "universities",
        details: {
            whatYouGet: "عرض تقديمي احترافي مع تصميم أكاديمي ومحتوى علمي دقيق",
            forWhom: "الطلاب الجامعيين وأعضاء هيئة التدريس",
            steps: [
                "تحليل المحتوى العلمي",
                "تصميم قالب أكاديمي احترافي",
                "إعداد المحتوى والمراجع",
                "إضافة التأثيرات والانتقالات"
            ],
            requirements: "المحتوى العلمي، عدد الشرائح، التصميم المفضل",
            duration: "2-5 أيام عمل",
            price: "يبدأ من 120 ريال"
        }
    },
    {
        id: "u-02",
        title: "حل الواجبات",
        category: "universities",
        shortDesc: "حل واجبات أكاديمية احترافية ومفصلة.",
        image: "/images/universities/assignments.jpg",
        whatsappKey: "universities",
        details: {
            whatYouGet: "حل واجب أكاديمي شامل مع شرح مفصل وخطوات واضحة",
            forWhom: "الطلاب الجامعيين في مختلف التخصصات",
            steps: [
                "تحليل متطلبات الواجب",
                "البحث والجمع للمعلومات",
                "حل الواجب مع شرح مفصل",
                "مراجعة وتدقيق الحل"
            ],
            requirements: "متطلبات الواجب، المادة الدراسية، الموعد النهائي",
            duration: "1-7 أيام عمل",
            price: "يبدأ من 80 ريال"
        }
    },
    {
        id: "u-03",
        title: "المساعدة بالاختبارات",
        category: "universities",
        shortDesc: "مراجعات وتحضير للاختبارات الجامعية.",
        image: "/images/universities/exam-help.jpg",
        whatsappKey: "universities",
        details: {
            whatYouGet: "مراجعة شاملة للمادة مع أسئلة تدريبية وملخصات",
            forWhom: "الطلاب الجامعيين الراغبين في التحضير للاختبارات",
            steps: [
                "تحليل المادة الدراسية",
                "إعداد ملخصات شاملة",
                "تصميم أسئلة تدريبية",
                "إجراء مراجعة شاملة"
            ],
            requirements: "المادة الدراسية، نوع الاختبار، المدة المتاحة",
            duration: "3-7 أيام عمل",
            price: "يبدأ من 150 ريال"
        }
    },
    {
        id: "u-04",
        title: "التقارير",
        category: "universities",
        shortDesc: "كتابة تقارير أكاديمية احترافية.",
        image: "/images/universities/reports.jpg",
        whatsappKey: "universities",
        details: {
            whatYouGet: "تقرير أكاديمي احترافي مع مراجع وملاحظات",
            forWhom: "الطلاب الجامعيين وأعضاء هيئة التدريس",
            steps: [
                "تحليل متطلبات التقرير",
                "البحث وجمع المعلومات",
                "كتابة التقرير",
                "مراجعة وتدقيق المحتوى"
            ],
            requirements: "موضوع التقرير، عدد الصفحات، الموعد النهائي",
            duration: "3-10 أيام عمل",
            price: "يبدأ من 200 ريال"
        }
    },
    {
        id: "u-05",
        title: "مشاريع التخرج",
        category: "universities",
        shortDesc: "تصميم وإعداد مشاريع تخرج احترافية.",
        image: "/images/universities/graduation.jpg",
        whatsappKey: "universities",
        details: {
            whatYouGet: "مشروع تخرج شامل مع بحث وتطبيق وعرض تقديمي",
            forWhom: "طلاب السنة الأخيرة في مختلف التخصصات",
            steps: [
                "تحديد موضوع المشروع",
                "إجراء البحث العلمي",
                "تطوير المشروع",
                "إعداد العرض النهائي"
            ],
            requirements: "التخصص، موضوع المشروع، المدة الزمنية",
            duration: "1-3 أشهر",
            price: "يبدأ من 800 ريال"
        }
    },
    {
        id: "u-06",
        title: "رسائل الماجستير",
        category: "universities",
        shortDesc: "كتابة وإعداد رسائل ماجستير أكاديمية.",
        image: "/images/universities/masters.jpg",
        whatsappKey: "universities",
        details: {
            whatYouGet: "رسالة ماجستير أكاديمية كاملة مع بحث ومراجع",
            forWhom: "طلاب الدراسات العليا في مختلف التخصصات",
            steps: [
                "تحديد موضوع البحث",
                "إجراء البحث العلمي",
                "كتابة الرسالة",
                "مراجعة وتدقيق المحتوى"
            ],
            requirements: "التخصص، موضوع البحث، متطلبات الجامعة",
            duration: "3-6 أشهر",
            price: "يبدأ من 2000 ريال"
        }
    },
    {
        id: "u-07",
        title: "الأبحاث العلمية",
        category: "universities",
        shortDesc: "إعداد أبحاث علمية احترافية للنشر.",
        image: "/images/universities/research.jpg",
        whatsappKey: "universities",
        details: {
            whatYouGet: "بحث علمي احترافي جاهز للنشر في المجلات العلمية",
            forWhom: "الباحثين وأعضاء هيئة التدريس",
            steps: [
                "تحديد موضوع البحث",
                "إجراء البحث العلمي",
                "كتابة البحث",
                "مراجعة وتدقيق المحتوى"
            ],
            requirements: "موضوع البحث، المجلة المستهدفة، متطلبات النشر",
            duration: "1-3 أشهر",
            price: "يبدأ من 1500 ريال"
        }
    },
    {
        id: "u-08",
        title: "تقارير التدريب الميداني",
        category: "universities",
        shortDesc: "إعداد تقارير التدريب الميداني للطلاب.",
        image: "/images/universities/field-training.jpg",
        whatsappKey: "universities",
        details: {
            whatYouGet: "تقرير تدريب ميداني شامل مع توثيق الخبرات",
            forWhom: "الطلاب الجامعيين في مرحلة التدريب الميداني",
            steps: [
                "توثيق خبرات التدريب",
                "تحليل المهارات المكتسبة",
                "كتابة التقرير",
                "إضافة الملاحظات والتوصيات"
            ],
            requirements: "مدة التدريب، نوع التدريب، متطلبات الجامعة",
            duration: "1-2 أسابيع",
            price: "يبدأ من 300 ريال"
        }
    },

    // Design & Tech Services
    {
        id: "d-01",
        title: "تصميم مواقع إلكترونية",
        category: "design-tech",
        shortDesc: "تصميم وبناء مواقع إلكترونية احترافية ومتجاوبة.",
        image: "/images/design/websites.jpg",
        whatsappKey: "designTech",
        details: {
            whatYouGet: "موقع إلكتروني احترافي متجاوب مع إدارة محتوى سهلة",
            forWhom: "الشركات والأفراد الراغبين في وجود إلكتروني احترافي",
            steps: [
                "تحليل متطلبات الموقع",
                "تصميم الواجهات",
                "برمجة الموقع",
                "اختبار وإطلاق الموقع"
            ],
            requirements: "نوع الموقع، عدد الصفحات، الميزات المطلوبة",
            duration: "2-4 أسابيع",
            price: "يبدأ من 1500 ريال"
        }
    },
    {
        id: "d-02",
        title: "بناء متاجر على سلة",
        category: "design-tech",
        shortDesc: "تصميم وبناء متاجر إلكترونية على منصة سلة.",
        image: "/images/design/salla-stores.jpg",
        whatsappKey: "designTech",
        details: {
            whatYouGet: "متجر إلكتروني احترافي على منصة سلة مع إدارة شاملة",
            forWhom: "التجار والشركات الراغبين في البيع الإلكتروني",
            steps: [
                "تصميم المتجر",
                "إعداد المنتجات",
                "تكوين طرق الدفع والشحن",
                "إطلاق المتجر"
            ],
            requirements: "نوع المنتجات، عدد المنتجات، طرق الدفع المطلوبة",
            duration: "1-3 أسابيع",
            price: "يبدأ من 800 ريال"
        }
    },
    {
        id: "d-03",
        title: "تصميم لوجوهات",
        category: "design-tech",
        shortDesc: "تصميم لوجوهات احترافية للعلامات التجارية.",
        image: "/images/design/logos.jpg",
        whatsappKey: "designTech",
        details: {
            whatYouGet: "لوجو احترافي مع ملفات مختلفة الأحجام والأنواع",
            forWhom: "الشركات والأفراد الراغبين في هوية بصرية مميزة",
            steps: [
                "تحليل هوية العلامة التجارية",
                "تصميم أفكار متعددة",
                "تطوير التصميم النهائي",
                "إعداد الملفات النهائية"
            ],
            requirements: "اسم العلامة التجارية، نوع النشاط، الألوان المفضلة",
            duration: "3-7 أيام عمل",
            price: "يبدأ من 300 ريال"
        }
    },
    {
        id: "d-04",
        title: "وضع اللوجوهات على موكابس",
        category: "design-tech",
        shortDesc: "وضع اللوجوهات على موكابس احترافية.",
        image: "/images/design/mockups.jpg",
        whatsappKey: "designTech",
        details: {
            whatYouGet: "موكابس احترافية للوجو على مختلف المنتجات",
            forWhom: "الشركات الراغبة في رؤية لوجوها على منتجات حقيقية",
            steps: [
                "اختيار المنتجات المناسبة",
                "وضع اللوجو على الموكابس",
                "إضافة التأثيرات والظلال",
                "إعداد الملفات النهائية"
            ],
            requirements: "اللوجو، المنتجات المطلوبة، عدد الموكابس",
            duration: "1-3 أيام عمل",
            price: "يبدأ من 150 ريال"
        }
    },
    {
        id: "d-05",
        title: "تصميم صور للمنتجات",
        category: "design-tech",
        shortDesc: "تصميم صور احترافية للمنتجات والخدمات.",
        image: "/images/design/product-images.jpg",
        whatsappKey: "designTech",
        details: {
            whatYouGet: "صور احترافية للمنتجات مع تصميم جذاب",
            forWhom: "التجار والشركات الراغبين في عرض منتجاتهم بشكل احترافي",
            steps: [
                "تحليل المنتج والجمهور المستهدف",
                "تصميم الصور",
                "إضافة النصوص والعناصر",
                "إعداد الملفات النهائية"
            ],
            requirements: "المنتج، النصوص المطلوبة، عدد الصور",
            duration: "2-5 أيام عمل",
            price: "يبدأ من 200 ريال"
        }
    }
];

// Helper function to get services by category
export function getServicesByCategory(category) {
    return SERVICES.filter(service => service.category === category);
}

// Helper function to get service by ID
export function getServiceById(id) {
    return SERVICES.find(service => service.id === id);
}

// Helper function to get WhatsApp number by key
export function getWhatsAppNumber(key) {
    return WHATSAPP[key] || WHATSAPP.teachers;
}
