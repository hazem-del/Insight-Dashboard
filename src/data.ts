import { 
  Users, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  Zap, 
  Activity,
  LayoutDashboard,
  BarChart3,
  ListChecks,
  Target,
  MousePointer2
} from "lucide-react";
import { DashboardData, TabConfig } from "./types";

export const tabs: TabConfig[] = [
  { id: "overview", label: "الواقع الحقيقي", icon: LayoutDashboard },
  { id: "products", label: "تحليل المنتجات", icon: Zap },
  { id: "funnel", label: "القمع والموبايل", icon: BarChart3 },
  { id: "retention", label: "العملاء والمناطق", icon: Users },
  { id: "scale", label: "خطة النمو", icon: ListChecks },
  { id: "strategy", label: "استراتيجية النمو & الإبداع", icon: Target },
  { id: "ugc", label: "سكريبتات UGC & Klaviyo", icon: MousePointer2 },
];

export const dashboardData: DashboardData = {
  header: {
    searchPlaceholder: "Search command center... (⌘+K)",
    liveOrderPrefix: "Live Order: ",
    liveOrderValue: "Eternal Love (580 ج)",
    verifiedDataLabel: "Verified Data",
    version: "Shopify Analytics v2.4"
  },
  statsLabels: {
    totalSales: "إجمالي المبيعات",
    roas: "ROAS الحقيقي",
    netProfit: "صافي الربح",
    cpa: "CPA الحقيقي",
    orders: "إجمالي الطلبات"
  },
  charts: {
    revenueVsSpend: {
      title: "نمو المبيعات مقابل الإنفاق",
      subTitle: "Real-time Data Stream",
      revenueLabel: "Revenue",
      spendLabel: "Spend"
    }
  },
  ui: {
    aiRecommendationTitle: "توصية الذكاء الاصطناعي",
    executeNowButton: "تنفيذ الآن",
    bestSellerBadge: "Best Seller",
    recommendationPrefix: "توصية:",
    strategicWarningTitle: "تحذير استراتيجي",
    growthOpportunitiesTitle: "فرص نمو مخفية (Red Flags إيجابية)",
    organicGrowthDetected: "Organic Growth Detected",
    mobileTrafficNote: "أي احتكاك في تجربة الموبايل يعني خسارة مباشرة للأرباح.",
    checkoutCompletionGoal: "الهدف: 70%",
    revenueLeakTitle: "تسريب أرباح ضائع",
    retentionTitle: "Customer Retention (LTV)",
    retentionSubTitle: "أكبر فرصة مخفية في الأكاونت لزيادة الأرباح بدون زيادة الصرف.",
    ltvCurrentLabel: "LTV الحالي (شراء مرة واحدة)",
    ltvTargetLabel: "LTV المستهدف (3 مشتريات)",
    geoDistributionTitle: "توزيع المبيعات حسب المحافظات",
    geoDistributionSubTitle: "أعلى معدلات تحويل (CVR) في مصر",
    trafficSourcesTitle: "مصادر الزيارات",
    trafficSourcesSubTitle: "أين يأتي عملاؤك؟",
    roadmapTitle: "خارطة طريق النمو (Roadmap)",
    roadmapSubTitle: "الخطوات القادمة للوصول لـ 500k شهرياً",
    checklistTitle: "قائمة التحقق اليومية",
    checklistSubTitle: "لضمان استقرار الأداء",
    strategyTitle: "استراتيجية النمو & الإبداع",
    strategySubTitle: "كيف نسيطر على السوق؟",
    atcRecoveryTitle: "زوايا استهداف الـ ATC & Checkout",
    scaleSubTitle: "تحسين معادلة القيمة للعميل",
    checklistExecutionTitle: "Checklist التنفيذ الفوري",
    ugcTitle: "سكريبتات UGC",
    ugcSubTitle: "المحتوى الذي يبيع",
    klaviyoTitle: "Klaviyo & WhatsApp Flows",
    klaviyoSubTitle: "الأتمتة لزيادة الأرباح",
    expectedNumbersTitle: "الأرقام المتوقعة (شهرياً)",
    extraRevenueLabel: "إيراد إضافي"
  },
  stats: {
    totalSales: "138,600 ج",
    totalSalesTrend: "+12.5%",
    roas: "5.95x",
    roasTrend: "+0.8x",
    netProfit: "+25,223 ج",
    netProfitTrend: "Healthy",
    cpa: "96 ج",
    orders: "242"
  },
  overviewChart: [
    { name: '1-3 Apr', revenue: 32000, spend: 5800 },
    { name: '4-6 Apr', revenue: 38000, spend: 6200 },
    { name: '7-9 Apr', revenue: 34000, spend: 5500 },
    { name: '10-12 Apr', revenue: 34600, spend: 5787 },
  ],
  aiRecommendation: "ارفع ميزانية Eternal Love بنسبة 15% فوراً. معدل التحويل في القاهرة يتجاوز 8% حالياً.",
  systemHealth: [
    { name: "Shopify API", value: "99.9%", percentage: 99.9, color: "bg-emerald-500" },
    { name: "Meta Ads API", value: "98.4%", percentage: 98.4, color: "bg-cyan-500" },
  ],
  activities: [
    { id: 1, type: 'order', user: 'أحمد م.', product: 'Eternal Love', time: 'منذ دقيقتين', amount: '580 ج', icon: ShoppingCart, color: 'text-indigo-400' },
    { id: 2, type: 'checkout', user: 'سارة ع.', product: 'Keychain', time: 'منذ 5 دقائق', amount: '84 ج', icon: CreditCard, color: 'text-cyan-400' },
    { id: 3, type: 'high_value', user: 'محمد خ.', product: 'Bundle Offer', time: 'منذ 12 دقيقة', amount: '950 ج', icon: Zap, color: 'text-emerald-400' },
    { id: 4, type: 'return', user: 'هاني س.', product: 'Eternal Love', time: 'منذ 18 دقيقة', amount: '580 ج', icon: Users, color: 'text-purple-400' },
  ],
  correctionBanner: {
    title: "تصحيح جوهري: الأكاونت رابح وبقوة!",
    description: "التحليل المحدث من Shopify Analytics كشف إن الأوردرات 242 مش 120. الـ ROAS الحقيقي يقترب من 6x."
  },
  funnel: [
    { label: "Sessions", value: "7,444", percentage: 100, color: "border-indigo-500/20 text-indigo-400", icon: Users, subLabel: "إجمالي الزيارات" },
    { label: "Added to Cart", value: "540", percentage: 7.25, color: "border-cyan-500/20 text-cyan-400", icon: ShoppingCart, subLabel: "معدل طبيعي" },
    { label: "Reached Checkout", value: "418", percentage: 5.61, color: "border-purple-500/20 text-purple-400", icon: CreditCard, subLabel: "معدل جيد" },
    { label: "Purchased", value: "242", percentage: 3.25, color: "border-emerald-500/20 text-emerald-400", icon: Package, subLabel: "ممتاز لمصر" },
  ],
  funnelAnalysis: {
    title: "Shopify Funnel Analysis",
    description: "معدل التحويل الكلي 3.25% - ممتاز للسوق المصري."
  },
  funnelStats: {
    mobileTraffic: "95%",
    checkoutCompletion: 57.9,
    revenueLeak: "80,960 ج",
    revenueLeakNote: "ضائع كل 12 يوم بسبب خروج 176 شخص من الـ Checkout."
  },
  geoDistribution: [
    { name: 'المنصورة', cvr: 9.2, color: '#10b981' },
    { name: 'الإسكندرية', cvr: 7.2, color: '#6366f1' },
    { name: 'القاهرة', cvr: 6.3, color: '#a855f7' },
    { name: 'الجيزة', cvr: 5.7, color: '#06b6d4' },
  ],
  topProducts: [
    { 
      name: 'Eternal Love Light', 
      sales: 79400, 
      stock: 54, 
      status: 'High',
      revenueShare: "57% من إجمالي المبيعات",
      description: "المنتج الملك",
      stats: [
        { label: "CPA الحقيقي", value: "153 ج", color: "text-indigo-400" },
        { label: "Breakeven", value: "363 ج", color: "text-slate-400" },
        { label: "Margin", value: "+210 ج", color: "text-emerald-400" },
        { label: "Sell-through", value: "54.3%", color: "text-cyan-400" },
      ],
      performanceNote: "هذا المنتج لديه هامش أمان ضخم (210 ج). يمكننا مضاعفة الميزانية الإعلانية فوراً مع الحفاظ على الربحية."
    },
    { 
      name: 'ONE & ONE Keychain', 
      sales: 18000, 
      stock: 12, 
      status: 'Low',
      revenueShare: "18% Revenue",
      description: "منتج Volume",
      stats: [
        { label: "CPA الحقيقي", value: "76 ج", color: "text-indigo-400" },
        { label: "Breakeven", value: "84 ج", color: "text-slate-400" },
        { label: "Margin", value: "+8 ج", color: "text-red-400" },
        { label: "Sell-through", value: "12.5%", color: "text-amber-400" },
      ],
      performanceNote: "المنتج بيخسر (صافي -4,615 ج) بسبب الـ CPA المرتفع مقارنة بالهامش. يجب تحويله لـ Upsell فقط."
    },
  ],
  growthOpportunities: [
    { name: "Pencil Holder", growth: "↑460%", desc: "نمو مجنون بدون إعلانات" },
    { name: "Al Ahly Tableau", growth: "↑94%", desc: "سوق رياضي واعد" },
    { name: "Ramadan Lights", growth: "↑171%", desc: "موسمية قوية جداً" },
  ],
  trafficSources: [
    { name: 'Facebook Paid', value: 43, color: '#6366f1', icon: MousePointer2 },
    { name: 'Instagram Paid', value: 36, color: '#a855f7', icon: MousePointer2 },
    { name: 'Direct', value: 18, color: '#06b6d4', icon: MousePointer2 },
    { name: 'Others', value: 3, color: '#1e293b', icon: MousePointer2 },
  ],
  retention: {
    currentLtv: { value: "460 ج", label: "LTV الحالي (شراء مرة واحدة)", percentage: 25 },
    targetLtv: { value: "1,380 ج", label: "LTV المستهدف (3 مشتريات)", percentage: 100 },
    quote: "\"البراند اللي يقدر يدفع أكتر لاكتساب عميل هو اللي بيكسب.\" - هورموزي. لو رفعت الـ LTV، تقدر تسيطر على السوق وتتحمل تكلفة إعلانات أعلى من المنافسين.",
    retentionRate: "0% RETENTION"
  },
  ugcScripts: {
    eternalLove: [
      { 
        title: "SCRIPT 1 — بنت", 
        hook: "الـ Hook المرئي", 
        scene: "الكاميرا مظلمة تماماً — ثواني صمت. فجأة بتضغط على زرار — اللوحة بتتنور بكاملها. وجهها بيتضح في الضوء — بتبتسم.", 
        dialogue: "ده مش ديكور عادي. ده اسمي. مكتوب بالنور. وبقى أحسن حاجة في أوضتي.",
        notes: "صوّري في أوضة مظلمة. اللوحة لازم تبان واضحة والنور قوي. عيشي اللحظة فعلاً.",
        screenText: ["اطلب لوحتك بـ 690 ج فقط", "التوصيل 2-3 أيام"]
      },
      { 
        title: "SCRIPT 2 — شاب", 
        hook: "الـ Unboxing Reaction", 
        scene: "كاميرا على إيده بيفتح الكرتونة. بيطلع اللوحة ببطء. بيقلّبها يشوفها.", 
        dialogue: "فكّرت هدية زي بعضها. لما وصلتلي — مش كده. ده من Laser Afandi — وده اسمي.",
        notes: "الـ Unboxing لازم يبان Organic. الـ Reaction لما يشوف اللوحة مضاءة هو أهم لحظة.",
        screenText: ["شوف لوحتك"]
      },
      { 
        title: "SCRIPT 3 — بنت", 
        hook: "الـ Comparison", 
        scene: "بتقف قدام الحيط — كاميرا بتشوف الخلفية. بتتحرك جنب اللوحة المضاءة.", 
        dialogue: "كنت بدور هدية مختلفة. باشتري زهور — بتعدي. باشتري شوكولاتة — بتخلص. دي... فضلت. وهتفضل.",
        notes: "الـ Pacing بطيء ومتأمل. الجملة الأخيرة 'هتفضل' قوليها وانتي بتتأملي اللوحة.",
        screenText: ["هدية مرة واحدة — بتفضل للأبد", "Laser Afandi"]
      },
      { 
        title: "SCRIPT 4 — شاب", 
        hook: "الـ Direct Hook", 
        scene: "وجهه مباشرة في الكاميرا — confident. بيتحرك ويكشف اللوحة خلفه.", 
        dialogue: "لو بتدور على هدية مختلفة فعلاً — دي اللي بتدور عليها. لوحة أكريليك مضيئة — اسمك أو اسم أي حد عايزه.",
        notes: "الأول direct — من غير introduction. الـ Reveal للوحة لازم يكون clean وواضح.",
        screenText: ["اطلب دلوقتي من Laser Afandi"]
      },
    ],
    keychain: [
      { 
        title: "SCRIPT 1 — بنت", 
        hook: "الـ Everyday Moment", 
        dialogue: "كل يوم الصبح لما باخد مفاتيحي... بفتكر بيه. واحدة معايا. وواحدة معاه.",
        notes: "الـ Setting الصباحي يخليه Relatable جداً. الـ Voiceover أحسن من الكلام المباشر.",
        screenText: ["ONE & ONE — من Laser Afandi"]
      },
      { 
        title: "SCRIPT 2 — شاب", 
        hook: "الـ Gift Reveal", 
        dialogue: "لقيتها بتفضل تبص فيهم. واحدة ليها وواحدة ليّا. Small thing. Big meaning.",
        notes: "الـ Tone خفيف وبيضحك. عرض الاتنين مع بعض في نفس الشوت مهم جداً.",
        screenText: ["ONE & ONE — 175 ج للاتنين"]
      },
      { 
        title: "SCRIPT 3 — بنت", 
        hook: "المسافة مش بتفصل", 
        dialogue: "صاحبتي جوزها في الخليج. بعتاله واحدة هناك — وعندها واحدة هنا. قالتلي: 'كل ما بفتح العربية بفتكر بيكي.'",
        notes: "الـ Tone عاطفي وبسيط. الـ Story بتاعت الصاحبة بتعمل الـ Relatability.",
        screenText: ["ONE & ONE — لما المسافة تكون كبيرة"]
      },
    ]
  },
  ugcInstructions: {
    duration: "15-30 ث",
    dimensions: "9:16",
    dos: [
      "صوّر في أكتر من Lighting",
      "ابعت 3+ takes لكل سكريبت",
      "صوّر Raw بدون Filters",
      "الـ Natural mistakes بتعمل Trust"
    ],
    donts: [
      "ما تقولش \"بالنسبالي\" أو \"برايي\"",
      "ما تبانش إن في Script مكتوب",
      "ما تعملش transitions مبهرة",
      "ما تكتبش \"إعلان\" أو \"#ad\""
    ]
  },
  klaviyoFlow: [
    { time: "بعد ساعة", title: "نسيت حاجة؟", desc: "صورة المنتج + زرار الإكمال" },
    { time: "بعد 24 ساعة", title: "لسه متاح", desc: "Reviews + Urgency" },
    { time: "بعد 72 ساعة", title: "خصم 10%", desc: "كود BACK10 (ليك لوحدك)" },
  ],
  klaviyoStats: {
    recoveryRate: "10%",
    extraOrders: "+45 Orders",
    extraRevenue: "20,700 ج"
  },
  strategy: {
    tools: [
      { name: "Klaviyo", desc: "لإعادة استهداف الـ Abandoned Checkout (إجباري).", impact: "High" },
      { name: "Loox / Judge.me", desc: "لجمع التقييمات بالصور (Trust Factor عالي في مصر).", impact: "Critical" },
      { name: "Microsoft Clarity", desc: "لمراقبة تسجيلات العملاء وفهم سبب الهروب عند الدفع.", impact: "Medium" },
      { name: "ReConvert", desc: "لعمل Upsell في صفحة الـ Thank You (بيع الميدالية مع اللوحة).", impact: "High" },
      { name: "WhatsApp Marketing", desc: "استخدام أداة مثل (Interakt) للتواصل المباشر مع العملاء.", impact: "Extreme" },
    ],
    eternalLoveAngles: [
      { title: "The Sanctuary Angle", desc: "التركيز على إن اللوحة بتحول الأوضة لمكان هادي ومريح للأعصاب (Vibe & Aesthetic)." },
      { title: "The Memory Keeper", desc: "تخليد ذكرى معينة (تاريخ خطوبة، أول مقابلة) مش بس كهدية، لكن كقطعة ديكور خالدة." },
      { title: "The Night Light", desc: "استخدامها كـ Night Light شيك جداً للمكاتب أو غرف النوم (Functional Angle)." },
      { title: "The Customization Process", desc: "فيديو سريع بيوري العميل إزاي بيختار الاسم والخط (Personalization Experience)." },
    ],
    keychainAngles: [
      { title: "The Connection Angle", desc: "المسافات مش عائق. واحدة معاك وواحدة مع اللي بتحبه (Long Distance Relationship)." },
      { title: "The Bestie Angle", desc: "مش لازم حبيب، ممكن تكون لأعز صديقة (Friendship Bond)." },
      { title: "The Daily Reminder", desc: "كل ما تفتح باب بيتك أو عربيتك تفتكر الشخص ده (Emotional Anchor)." },
      { title: "The Minimalist Style", desc: "إكسسوار شيك وبسيط بيتحط في المفاتيح بيدي شكل مميز (Fashion/Accessory Angle)." },
    ],
    retargetingAngles: [
      { title: "The Trust Angle", desc: "فيديو يركز على الضمان (30 يوم) والدفع عند الاستلام." },
      { title: "The Social Proof", desc: "تجميعة لصور عملاء حقيقيين استلموا اللوحة ومنبهرين بيها." },
      { title: "The Incentive", desc: "كود خصم (LAST10) صالح لمدة 24 ساعة فقط." },
    ],
    atcRecoveryAngles: [
      { title: "The \"Why Wait?\"", desc: "\"الكمية محدودة جداً والطلب عالي. احجز لوحتك دلوقتي قبل ما تخلص.\"" },
      { title: "The \"Real Faces\"", desc: "\"أكتر من 1000 عميل وثقوا فينا. شوف صورهم وهما مستلمين الهدايا.\"" },
      { title: "The \"Risk-Free\"", desc: "\"مش عاجباك؟ رجعها وخد فلوسك. ضمان استبدال واسترجاع 30 يوم.\"" },
    ],
    atcRecoveryDescription: "الناس دي عندها \"نية شراء\" عالية جداً. هما محتاجين بس (زقة صغيرة) أو (تأكيد أمان)."
  },
  scale: {
    hormoziEquation: {
      numerator: {
        title: "رفع القيمة (Numerator)",
        items: [
          "ضمان 30 يوم (إزالة المخاطرة تماماً)",
          "رسالة شخصية مجانية (رفع القيمة المعنوية)"
        ]
      },
      denominator: {
        title: "تقليل الاحتكاك (Denominator)",
        items: [
          "وصول خلال 2-3 أيام (تقليل وقت الانتظار)",
          "تغليف هدية مجاني (تقليل مجهود العميل)"
        ]
      }
    },
    phases: [
      { title: "Phase 01: Fix the Leak", color: "indigo", tasks: ["Klaviyo Retention", "Checkout Optimization"] },
      { title: "Phase 02: Vertical Scale", color: "cyan", tasks: ["Budget Scaling", "Geo-Targeting"] },
      { title: "Phase 03: Horizontal Scale", color: "emerald", tasks: ["New Products", "Bundle Strategy"] },
    ]
  },
  roadmap: [
    { day: "النهارده", task: "Klaviyo → Abandoned Checkout Flow", active: true },
    { day: "بكرة", task: "ارسال Script 1 للـ Creator", active: false },
    { day: "3 أيام", task: "Meta Retargeting Campaign", active: false },
    { day: "أسبوع", task: "مراجعة Klaviyo وتعديل الـ Subject", active: false },
  ],
  checklist: [
    "اشترك في Klaviyo واعمل Post-Purchase Flow",
    "ركّب Microsoft Clarity وشوف الـ Recordings",
    "تأكد من وجود Instapay و Vodafone Cash",
    "افتح الستور من موبايل أندرويد وجرب تشتري",
    "اعمل Bundle Offer: Eternal + Keychain",
    "ارفع بودجت الـ Eternal بـ 20%"
  ],
  footerQuote: "\"إنت مش بتبيع منتجات — إنت بتبني قاعدة عملاء. الـ LTV هو اللي بيخليك تسيطر على السوق.\""
};
