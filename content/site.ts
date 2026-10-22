// ============================================================
// كل محتوى الموقع هنا. عدّل النص ثم أعد النشر.
// All site content lives here, in Arabic (ar) and English (en).
// ============================================================

export type Lang = "ar" | "en";
type T = { ar: string; en: string };

export const SITE_URL = "https://alsumairi.vercel.app";

export const contact = {
  email: "Abdullahat1422@gmail.com",
  phoneDisplay: "+966 54 181 9214",
  phone: "+966541819214",
  whatsapp: "https://wa.me/966541819214",
  linkedin: "https://www.linkedin.com/in/abdullah-alsumairi11",
  cv: "/Abdullah_Alsumairi_CV_2026.pdf",
  vcard: "/abdullah-alsumairi.vcf",
};

export const person = {
  name: { ar: "عبدالله السميري", en: "Abdullah Alsumairi" },
  title: {
    ar: "أخصائي بيئي واستشاري GIS ونمذجة مكانية",
    en: "Environmental Specialist and GIS & Spatial Modeling Consultant",
  },
  lead: {
    ar: "خرائط ونماذج مكانية تدعم قرارات الحماية والتخطيط وتقييم الأثر البيئي.",
    en: "Maps and spatial models for conservation, planning and environmental impact assessment.",
  },
  stats: [
    { n: "5", l: { ar: "خرائط ودراسات وطنية", en: "national maps and studies" } },
    { n: "4.81", l: { ar: "معدل الماجستير، جامعة الملك سعود", en: "M.Sc. GPA, King Saud University" } },
    { n: "NCW", l: { ar: "خبرة في المركز الوطني للحياة الفطرية", en: "National Center for Wildlife" } },
  ] as { n: string; l: T }[],
};

export type MapImage = { src: string; caption: T; w: number; h: number };
export type Project = {
  id: string;
  title: T;
  status: T;
  line: T;
  highlight: T;
  tools: string[];
  card: { src: string; src720: string; w: number; h: number; alt: T };
  gallery: MapImage[];
  link?: { href: string; label: T };
  credit?: T;
};

export const projects: Project[] = [
  {
    id: "tuwaiq-reserve",
    title: { ar: "دراسة محمية طويق", en: "Tuwaiq Reserve Study" },
    status: { ar: "2026", en: "2026" },
    line: {
      ar: "الأحواض والأمطار والغطاء النباتي والسجلات الحيوية، وانتهت بمقترح تقسيم للمحمية.",
      en: "Catchments, rainfall, vegetation and species records, ending in a zoning proposal.",
    },
    highlight: { ar: "3,941 كم² و27 خريطة", en: "3,941 km², 27 maps" },
    tools: ["Sentinel-2", "MODIS", "R", "QGIS"],
    card: { src: "/maps/tuwaiq-card.webp", src720: "/maps/tuwaiq-card-720.webp", w: 1277, h: 1037, alt: { ar: "مقترح تقسيم محمية طويق", en: "Zoning proposal for the Tuwaiq Reserve" } },
    gallery: [
      { src: "/maps/tuwaiq-zoning.webp", w: 1277, h: 1037, caption: { ar: "مقترح التقسيم", en: "Zoning proposal" } },
      { src: "/maps/tuwaiq-summary.webp", w: 1582, h: 1402, caption: { ar: "ملخص النتائج", en: "Summary of findings" } },
      { src: "/maps/tuwaiq-catchment.webp", w: 1344, h: 1080, caption: { ar: "الحوض المغذي للمحمية", en: "Catchment feeding the reserve" } },
      { src: "/maps/tuwaiq-wadis.webp", w: 1320, h: 1170, caption: { ar: "الأودية والأحواض المغلقة", en: "Wadis and closed basins" } },
      { src: "/maps/tuwaiq-greenness.webp", w: 1582, h: 1402, caption: { ar: "مناطق التعافي والتراجع", en: "Recovery and decline" } },
      { src: "/maps/tuwaiq-records.webp", w: 1582, h: 1402, caption: { ar: "السجلات النباتية", en: "Plant records" } },
    ],
  },
  {
    id: "landscape-units",
    title: { ar: "وحدات المشهد الطبيعي في المملكة", en: "National Landscape Units" },
    status: { ar: "2026", en: "2026" },
    line: {
      ar: "المملكة كاملة مقسّمة إلى 11 وحدة: جبال، حرات، أودية، روضات، رمال، سبخات وغيرها.",
      en: "The whole Kingdom in 11 units: mountains, harrat, wadis, rawdhat, sand, sabkha and more.",
    },
    highlight: { ar: "تغطية وطنية بدقة 30 م", en: "National, 30 m terrain" },
    tools: ["R", "QGIS", "Copernicus DEM"],
    card: { src: "/maps/landscape-card.webp", src720: "/maps/landscape-card-720.webp", w: 1400, h: 1372, alt: { ar: "خريطة وحدات المشهد الطبيعي", en: "Landscape units map" } },
    gallery: [
      { src: "/maps/landscape-full.webp", w: 3600, h: 2543, caption: { ar: "الخريطة الكاملة", en: "Full map" } },
      { src: "/maps/landscape-sw-full.webp", w: 2600, h: 3020, caption: { ar: "تفاصيل الجنوب الغربي", en: "Southwest detail" } },
    ],
  },
  {
    id: "plant-communities",
    title: { ar: "أطلس المجتمعات النباتية", en: "Plant Communities Atlas" },
    status: { ar: "2026", en: "2026" },
    line: {
      ar: "30 دراسة نباتية منشورة تحوّلت إلى خريطة وطنية لـ 26 مجتمعاً نباتياً.",
      en: "30 published vegetation studies turned into a national map of 26 plant communities.",
    },
    highlight: { ar: "26 مجتمعاً بدقة 250 م", en: "26 communities, 250 m" },
    tools: ["R", "QGIS", "CHELSA", "SoilGrids"],
    card: { src: "/maps/communities-card.webp", src720: "/maps/communities-card-720.webp", w: 1400, h: 1181, alt: { ar: "خريطة المجتمعات النباتية", en: "Plant communities map" } },
    gallery: [
      { src: "/maps/communities-full.webp", w: 3600, h: 2544, caption: { ar: "جميع المجتمعات", en: "All communities" } },
      { src: "/maps/communities-t01.webp", w: 3000, h: 2123, caption: { ar: "غابات العرعر", en: "Juniper woodland" } },
      { src: "/maps/communities-t13.webp", w: 3000, h: 2123, caption: { ar: "المانجروف", en: "Mangrove" } },
      { src: "/maps/communities-t21.webp", w: 3000, h: 2123, caption: { ar: "الغضا", en: "Haloxylon shrubland" } },
    ],
  },
  {
    id: "sgi-greening",
    title: { ar: "رصد الاخضرار الوطني", en: "National Greening Monitor" },
    status: { ar: "قيد النشر", en: "In preparation" },
    line: {
      ar: "تغيّر الغطاء النباتي 2016–2025 قبل وبعد مبادرة السعودية الخضراء، بعد عزل أثر الأمطار.",
      en: "Vegetation change 2016–2025 around the Saudi Green Initiative, with rainfall effects removed.",
    },
    highlight: { ar: "الاخضرار يفوق التراجع 4.3 مرة", en: "Greening outpaces browning 4.3×" },
    tools: ["MODIS NDVI", "ERA5", "R"],
    card: { src: "/maps/sgi-card.webp", src720: "/maps/sgi-card-720.webp", w: 1400, h: 1141, alt: { ar: "خريطة اتجاه الاخضرار", en: "Greening trend map" } },
    gallery: [
      { src: "/maps/sgi-trend.webp", w: 2250, h: 1950, caption: { ar: "الاخضرار والتراجع", en: "Greening and browning" } },
      { src: "/maps/sgi-change.webp", w: 2100, h: 1800, caption: { ar: "التغيّر بين الفترتين", en: "Change between periods" } },
      { src: "/maps/sgi-theilsen.webp", w: 2100, h: 1800, caption: { ar: "ميل الاتجاه", en: "Trend slope" } },
      { src: "/maps/sgi-annual.webp", w: 1283, h: 770, caption: { ar: "المتوسط السنوي", en: "Annual mean" } },
    ],
  },
  {
    id: "escarpment-refugia",
    title: { ar: "ملاجئ الحافات تحت التهديد", en: "Escarpment Refugia Under Threat" },
    status: { ar: "منشور", en: "Published" },
    line: {
      ar: "أين تعيش أربعة نباتات متوطنة اليوم، وكيف ستتغير موائلها مع تغيّر المناخ.",
      en: "Where four endemic plants live today, and how their habitat shifts with climate change.",
    },
    highlight: { ar: "BMC Ecology and Evolution", en: "BMC Ecology and Evolution" },
    tools: ["MaxEnt", "CMIP6", "QGIS"],
    card: { src: "/maps/escarpment-card.webp", src720: "/maps/escarpment-card-720.webp", w: 1102, h: 772, alt: { ar: "خرائط ملاءمة الموائل", en: "Habitat suitability maps" } },
    gallery: [{ src: "/maps/escarpment-full.webp", w: 1102, h: 772, caption: { ar: "الملاءمة الحالية للأنواع الأربعة", en: "Current suitability, four species" } }],
    link: { href: "https://doi.org/10.1186/s12862-026-02582-0", label: { ar: "البحث", en: "Paper" } },
    credit: { ar: "الشكل: Al-Hashimi وآخرون 2026، CC BY-NC-ND 4.0", en: "Figure: Al-Hashimi et al. 2026, CC BY-NC-ND 4.0" },
  },
];

export const services: { title: T; line: T; photo: string }[] = [
  { title: { ar: "نمذجة توزيع الأنواع", en: "Species distribution modeling" }, line: { ar: "الموائل اليوم ومع تغيّر المناخ", en: "Habitat today and under climate change" }, photo: "a1" },
  { title: { ar: "رصد الغطاء النباتي", en: "Vegetation monitoring" }, line: { ar: "سلاسل زمنية من الأقمار الصناعية", en: "Satellite time series" }, photo: "a2" },
  { title: { ar: "خرائط وطنية وإقليمية", en: "National and regional maps" }, line: { ar: "مشهد، نبات، نظم بيئية", en: "Landscape, vegetation, ecosystems" }, photo: "u9" },
  { title: { ar: "دراسات المحميات", en: "Protected-area studies" }, line: { ar: "أحواض، موائل، ومقترحات تقسيم", en: "Catchments, habitats, zoning" }, photo: "e1" },
  { title: { ar: "خط أساس لتقييم الأثر", en: "EIA baselines" }, line: { ar: "مسح ميداني وتحليل مكاني", en: "Field survey and spatial analysis" }, photo: "u4" },
  { title: { ar: "خرائط ويب تفاعلية", en: "Interactive web maps" }, line: { ar: "نتائجك على الجوال والكمبيوتر", en: "Your results on any screen" }, photo: "u12" },
];

export const skills: { group: T; tools: string[]; usedIn: T }[] = [
  { group: { ar: "GIS والاستشعار عن بعد", en: "GIS and remote sensing" }, tools: ["QGIS", "Google Earth Engine", "Sentinel-2", "MODIS"], usedIn: { ar: "طويق، الاخضرار", en: "Tuwaiq, greening" } },
  { group: { ar: "التضاريس والهيدرولوجيا", en: "Terrain and hydrology" }, tools: ["Geomorphons", "TPI", "HAND", "Flow routing"], usedIn: { ar: "وحدات المشهد", en: "Landscape units" } },
  { group: { ar: "نمذجة الأنواع والمناخ", en: "Species and climate modeling" }, tools: ["MaxEnt", "CMIP6", "WorldClim", "CHELSA"], usedIn: { ar: "ملاجئ الحافات", en: "Escarpment refugia" } },
  { group: { ar: "البرمجة والإحصاء", en: "Programming and statistics" }, tools: ["R", "Python", "Mann–Kendall", "Theil–Sen"], usedIn: { ar: "كل المشاريع", en: "All projects" } },
  { group: { ar: "الميدان", en: "Fieldwork" }, tools: ["مسوحات التنوع الحيوي|Biodiversity surveys", "الدرون (GACA)|Drone (GACA)"], usedIn: { ar: "الحياة الفطرية", en: "NCW" } },
  { group: { ar: "الامتثال البيئي", en: "Compliance" }, tools: ["EIA", "NCEC", "ISO 14001", "ISO 45001"], usedIn: { ar: "Environmental Way", en: "Environmental Way" } },
  { group: { ar: "الويب", en: "Web" }, tools: ["Next.js", "React", "Vercel"], usedIn: { ar: "نباتات المملكة", en: "Saudi Native Flora" } },
];

export const languages: { name: T; level: T }[] = [
  { name: { ar: "العربية", en: "Arabic" }, level: { ar: "الأم", en: "Native" } },
  { name: { ar: "الإنجليزية", en: "English" }, level: { ar: "IELTS 5.5، STEP 79", en: "IELTS 5.5, STEP 79" } },
];

export const publications: { status: T; title: string; venue: string; href?: string }[] = [
  { status: { ar: "منشور", en: "Published" }, title: "Escarpment refugia under threat: climate-driven redistribution modeling of four endemic succulent species in Saudi Arabia", venue: "BMC Ecology and Evolution, 2026", href: "https://doi.org/10.1186/s12862-026-02582-0" },
  { status: { ar: "ماجستير", en: "M.Sc. thesis" }, title: "MaxEnt-based habitat suitability of five narrow-range endemic plants in Saudi Arabia", venue: "King Saud University, 2026" },
  { status: { ar: "قيد النشر", en: "In preparation" }, title: "National-scale vegetation greenness dynamics in Saudi Arabia, 2016–2025", venue: "MODIS NDVI and ERA5" },
  { status: { ar: "قيد العمل", en: "In progress" }, title: "Climate change and habitat suitability of the genus Verbascum in the Arabian Peninsula", venue: "CMIP6" },
  { status: { ar: "مقترح", en: "Proposal" }, title: "Liver disease and agricultural land cover across Saudi regions", venue: "KFSHRC, external co-investigator" },
];

export const nameNote: T = { ar: "منشوراتي باسم Al-Otaibi, A.", en: "Published as Al-Otaibi, A." };

export const experience: { period: T; role: T; org: T }[] = [
  { period: { ar: "2026 – الآن", en: "2026 – now" }, role: { ar: "استشاري مستقل في GIS والنمذجة البيئية", en: "Independent GIS & Environmental Modeling Consultant" }, org: { ar: "عمل حر", en: "Freelance" } },
  { period: { ar: "2025 – 2026", en: "2025 – 2026" }, role: { ar: "أخصائي بيئي", en: "Environmental Specialist" }, org: { ar: "المركز الوطني لتنمية الحياة الفطرية", en: "National Center for Wildlife" } },
  { period: { ar: "2025", en: "2025" }, role: { ar: "أخصائي بيئي", en: "Environmental Specialist" }, org: { ar: "Environmental Way للاستشارات البيئية", en: "Environmental Way Consulting" } },
];

export const award = {
  title: { ar: "أفضل 40 فريقاً من 300+، بيئة ثون 2026", en: "Top 40 of 300+, Envirothon 2026" },
  org: { ar: "صندوق البيئة، منصة ECS", en: "Environment Fund, ECS platform" },
  href: "https://environmental-card-system.vercel.app",
};

export const education: { degree: T; place: T }[] = [
  { degree: { ar: "ماجستير العلوم البيئية", en: "M.Sc. Environmental Science" }, place: { ar: "جامعة الملك سعود، مرتبة الشرف الأولى", en: "King Saud University, First-Class Honors" } },
  { degree: { ar: "بكالوريوس الأحياء", en: "B.Sc. Biology" }, place: { ar: "جامعة شقراء", en: "Shaqra University" } },
];

// أول 6 تظهر مباشرة، والباقي تحت "الكل"
export const certifications: { name: T; issuer: string }[] = [
  { name: { ar: "رخصة الطيار عن بعد (درون)", en: "Remote Pilot Certificate" }, issuer: "GACA" },
  { name: { ar: "القائمة الحمراء للنظم البيئية", en: "IUCN Red List of Ecosystems" }, issuer: "IUCN" },
  { name: { ar: "المناطق الرئيسية للتنوع الحيوي", en: "Key Biodiversity Areas" }, issuer: "IUCN / CBD" },
  { name: { ar: "ISO 14001", en: "ISO 14001" }, issuer: "IIRSM" },
  { name: { ar: "ISO 45001", en: "ISO 45001" }, issuer: "IIRSM" },
  { name: { ar: "اتفاقية رامسار", en: "Ramsar Convention" }, issuer: "Ramsar" },
  { name: { ar: "رسم خرائط أولويات التنوع الحيوي", en: "Mapping Biodiversity Priorities" }, issuer: "IUCN" },
  { name: { ar: "تصنيف النباتات ورصدها", en: "Plant Classification and Monitoring" }, issuer: "NCW" },
  { name: { ar: "ISO 9001", en: "ISO 9001" }, issuer: "IIRSM" },
  { name: { ar: "تقييم دورة الحياة", en: "Life Cycle Assessment" }, issuer: "Coursera" },
  { name: { ar: "الاقتصاد الدائري", en: "Circular Economy" }, issuer: "National Academy for the Environment" },
  { name: { ar: "تطبيقات الذكاء الاصطناعي", en: "AI Application Development" }, issuer: "Tuwaiq Academy" },
  { name: { ar: "دبلوم حماية الحياة الفطرية", en: "Wildlife Conservation Diploma" }, issuer: "Alison" },
  { name: { ar: "الإنتاج الزراعي المحمي", en: "Greenhouse Production" }, issuer: "TOPIAN NEOM & Estidamah" },
  { name: { ar: "Power BI وExcel", en: "Power BI and Excel" }, issuer: "Certified" },
  { name: { ar: "شكر وتقدير، بيئة ثون", en: "Appreciation, Envirothon" }, issuer: "Environment Fund" },
  { name: { ar: "عضو جمعية مختصي الاستدامة", en: "Sustainability Professionals of Saudi Arabia" }, issuer: "Member" },
];

export const photoCredits = "Unsplash: Rikaz Basyouni, Mustafa Ahmed, Satishaa Javali, Call Me Fred, Glenov Brankovic, M K, Ayman Mokhtar";

export const ui = {
  nav: { maps: { ar: "الخرائط", en: "Maps" }, services: { ar: "الخدمات", en: "Services" }, about: { ar: "عني", en: "About" }, contact: { ar: "تواصل", en: "Contact" } },
  langSwitch: { ar: "English", en: "العربية" },
  langHref: { ar: "/en/", en: "/" },
  requestConsult: { ar: "اطلب استشارة", en: "Request a consultation" },
  viewMaps: { ar: "شاهد الخرائط", en: "See the maps" },
  saveContact: { ar: "حفظ الرقم", en: "Save contact" },
  downloadCv: { ar: "السيرة الذاتية", en: "CV" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  email: { ar: "إيميل", en: "Email" },
  call: { ar: "اتصال", en: "Call" },
  openMap: { ar: "تكبير", en: "Open" },
  maps: { ar: "خرائط ومشاريع", en: "Maps and projects" },
  services: { ar: "الخدمات", en: "Services" },
  band: { ar: "من الميدان إلى الخريطة", en: "From the field to the map" },
  skills: { ar: "المهارات", en: "Skills" },
  research: { ar: "الأبحاث", en: "Research" },
  experience: { ar: "الخبرة", en: "Experience" },
  education: { ar: "التعليم", en: "Education" },
  certs: { ar: "الشهادات", en: "Certifications" },
  allCerts: { ar: "الكل", en: "All" },
  langs: { ar: "اللغات", en: "Languages" },
  contactTitle: { ar: "خلنا نشتغل على مشروعك", en: "Let's work on your project" },
  close: { ar: "إغلاق", en: "Close" },
  prev: { ar: "السابقة", en: "Previous" },
  next: { ar: "التالية", en: "Next" },
  zoomHint: { ar: "قرّب بإصبعين", en: "Pinch to zoom" },
  resetZoom: { ar: "إعادة", en: "Reset" },
  footer: { ar: "الرياض", en: "Riyadh" },
};
