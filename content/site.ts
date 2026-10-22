// ============================================================
// كل محتوى الموقع هنا. عدّل النص ثم أعد النشر.
// All site content lives here, in Arabic (ar) and English (en).
// ============================================================

export type Lang = "ar" | "en";
type T = { ar: string; en: string };

export const SITE_URL = "https://abdullah-alsumairi.vercel.app";

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
  heroEyebrow: { ar: "استشارات بيئية ومكانية، الرياض", en: "Environmental and spatial consulting, Riyadh" },
  heroImageCaption: { ar: "Sentinel-2، 25 مارس 2026، حافة طويق", en: "Sentinel-2, 25 March 2026, the Tuwaiq escarpment" },
  lead: {
    ar: "أبني خرائط وطنية ونماذج مكانية من بيانات الأقمار الصناعية والمناخ والتضاريس، يُعتمد عليها في الحماية والتخطيط وتقييم الأثر البيئي.",
    en: "I build national-scale maps and spatial models from satellite, climate and terrain data, for conservation, planning and environmental impact assessment.",
  },
  facts: [
    { ar: "ماجستير العلوم البيئية، جامعة الملك سعود، بمرتبة الشرف الأولى", en: "M.Sc. Environmental Science, King Saud University, First-Class Honors" },
    { ar: "خبرة في المركز الوطني لتنمية الحياة الفطرية والاستشارات البيئية", en: "Experience at the National Center for Wildlife and in environmental consulting" },
    { ar: "استشاري مستقل منذ يوليو 2026، الرياض", en: "Independent consultant since July 2026, Riyadh" },
  ] as T[],
};

export type MapImage = { src: string; caption: T; w: number; h: number };
export type Project = {
  id: string;
  title: T;
  status: T;
  year: string;
  summary: T;
  result: T;
  facts: { k: T; v: T }[];
  tools: string[];
  card: { src: string; src720: string; w: number; h: number; alt: T };
  gallery: MapImage[];
  link?: { href: string; label: T };
  credit?: T;
};

export const projects: Project[] = [
  {
    id: "tuwaiq-reserve",
    title: { ar: "محمية طويق: ما تكشفه البيانات المفتوحة", en: "What Open Data Reveal About the Tuwaiq Reserve" },
    status: { ar: "دراسة مستقلة", en: "Independent study" },
    year: "2026",
    summary: {
      ar: "دراسة لمنطقة مساحتها 3,941 كم² غرب الرياض ببيانات مفتوحة فقط: نموذج تضاريس 30 م، وSentinel-2، و26 سنة من صور MODIS، وأمطار CHIRPS، وسجلات GBIF. خرجت بـ 27 خريطة لكل منها بطاقة منهجية.",
      en: "A study of a 3,941 km² area west of Riyadh using only open data: a 30 m terrain model, Sentinel-2, 26 years of MODIS imagery, CHIRPS rainfall and GBIF records. It produced 27 maps, each with a method card.",
    },
    result: {
      ar: "3,228 كم² خارج حدود المحمية تصرف مياهها إليها، و99.4% من مساحتها بلا أي سجل نباتي منشور. انتهت الدراسة بمقترح تقسيم أولي متوافق مع إرشادات IUCN.",
      en: "3,228 km² outside the boundary drains into the reserve, and 99.4% of its area has no public plant record. The study ends with a first zoning proposal aligned with IUCN guidance.",
    },
    facts: [
      { k: { ar: "المساحة", en: "Area" }, v: { ar: "3,941 كم² غرب الرياض", en: "3,941 km² west of Riyadh" } },
      { k: { ar: "الأمطار", en: "Rainfall" }, v: { ar: "140 مم سنوياً، 56% منها من مارس إلى مايو", en: "140 mm a year, 56% in March to May" } },
      { k: { ar: "الاخضرار", en: "Greenness" }, v: { ar: "71 كم² تتعافى و115 كم² تتراجع (2001–2026)", en: "71 km² recovering, 115 km² declining (2001–2026)" } },
    ],
    tools: ["R", "QGIS", "Sentinel-2", "MODIS", "CHIRPS", "GHSL", "GBIF"],
    card: { src: "/maps/tuwaiq-card.webp", src720: "/maps/tuwaiq-card-720.webp", w: 1277, h: 1037, alt: { ar: "مقترح تقسيم محمية طويق", en: "Zoning proposal for the Tuwaiq Reserve" } },
    gallery: [
      { src: "/maps/tuwaiq-zoning.webp", w: 1277, h: 1037, caption: { ar: "مقترح التقسيم: حماية مشددة، استعادة، إدارة، عازل", en: "Zoning proposal: strict protection, restoration, managed land, buffer" } },
      { src: "/maps/tuwaiq-summary.webp", w: 1582, h: 1402, caption: { ar: "خريطة ملخصة لأهم النتائج", en: "Summary map of the main findings" } },
      { src: "/maps/tuwaiq-catchment.webp", w: 1344, h: 1080, caption: { ar: "الحوض: مياه تأتي من خارج الحدود", en: "Catchment: water from outside the boundary" } },
      { src: "/maps/tuwaiq-wadis.webp", w: 1320, h: 1170, caption: { ar: "الأودية والأحواض المغلقة قرب ضرما", en: "Wadis and closed basins near Duruma" } },
      { src: "/maps/tuwaiq-greenness.webp", w: 1582, h: 1402, caption: { ar: "مناطق التعافي والتراجع بعد عزل أثر المطر", en: "Recovery and decline after removing rainfall effects" } },
      { src: "/maps/tuwaiq-records.webp", w: 1582, h: 1402, caption: { ar: "السجلات النباتية والموائل غير المدروسة", en: "Plant records and unsurveyed habitat" } },
    ],
  },
  {
    id: "landscape-units",
    title: { ar: "وحدات المشهد الطبيعي في المملكة", en: "National Landscape Units of Saudi Arabia" },
    status: { ar: "مكتمل", en: "Completed" },
    year: "2026",
    summary: {
      ar: "خريطة تغطي المملكة كاملة وتقسّم سطحها إلى 11 وحدة: الجبال والحافات، السفوح، السهول الحصوية، الحرات، الأودية، الروضات، الرمال، السبخات، السهول الساحلية، الواحات والمزارع، والمدن.",
      en: "A Kingdom-wide map that divides the land surface into 11 units: mountains and escarpments, foothills, gravel plains, harrat, wadis, rawdhat, sand seas, sabkha, coastal plains, oases and farmland, and urban land.",
    },
    result: {
      ar: "أساس موحّد لتقسيم المواقع في دراسات خط الأساس وتقييم الأثر ومسوحات التنوع الحيوي.",
      en: "A consistent base for stratifying sites in baseline studies, impact assessments and biodiversity surveys.",
    },
    facts: [
      { k: { ar: "التغطية", en: "Coverage" }, v: { ar: "المملكة كاملة", en: "Whole Kingdom" } },
      { k: { ar: "البيانات", en: "Data" }, v: { ar: "نموذج ارتفاع Copernicus بدقة 30 م في 870 مربع معالجة", en: "Copernicus 30 m DEM, 870 processing tiles" } },
      { k: { ar: "المنهج", en: "Method" }, v: { ar: "Geomorphons وTPI متعدد المقاييس داخل حدود هيئة المساحة", en: "Geomorphons and multiscale TPI within a GEOSA-based boundary" } },
    ],
    tools: ["R (terra)", "QGIS", "Copernicus DEM", "ESA WorldCover", "USGS geology"],
    card: { src: "/maps/landscape-sw.webp", src720: "/maps/landscape-sw-720.webp", w: 1400, h: 1626, alt: { ar: "تفاصيل وحدات المشهد في جنوب غرب المملكة", en: "Landscape units in detail, southwest Saudi Arabia" } },
    gallery: [
      { src: "/maps/landscape-full.webp", w: 3600, h: 2543, caption: { ar: "الخريطة الكاملة مع المفتاح", en: "Full map with legend" } },
      { src: "/maps/landscape-sw-full.webp", w: 2600, h: 3020, caption: { ar: "تفاصيل الجنوب الغربي: الحافات والحرات والأودية", en: "Southwest detail: escarpments, harrat and wadis" } },
    ],
  },
  {
    id: "plant-communities",
    title: { ar: "أطلس المجتمعات النباتية المحتملة", en: "Potential Plant Communities Atlas" },
    status: { ar: "مكتمل", en: "Completed" },
    year: "2026",
    summary: {
      ar: "جمعت 30 دراسة نباتية سعودية منشورة (240 مجتمعاً نباتياً) في 26 نوع مجتمع مصنّف حسب قوة الدليل، ورسمتها على شبكة وطنية بدقة 250 م باستخدام المناخ والتضاريس والتربة ومؤشرات الأقمار الصناعية.",
      en: "I synthesized 30 published Saudi vegetation studies (240 source communities) into 26 evidence-graded community types, mapped on a 250 m national grid from climate, terrain, substrate and satellite indicators.",
    },
    result: {
      ar: "يبيّن أين يُتوقع وجود كل مجتمع نباتي، ومعه خريطة للمناطق التي تنقصها الدراسات الميدانية.",
      en: "Shows where each community is expected, with a companion map of areas that still lack field studies.",
    },
    facts: [
      { k: { ar: "المصادر", en: "Sources" }, v: { ar: "30 دراسة منشورة، 240 مجتمعاً", en: "30 studies, 240 source communities" } },
      { k: { ar: "المخرج", en: "Output" }, v: { ar: "26 نوع مجتمع، خريطة لكل نوع", en: "26 community types, one sheet per type" } },
      { k: { ar: "الدقة", en: "Resolution" }, v: { ar: "شبكة وطنية 250 م", en: "250 m national grid" } },
    ],
    tools: ["R", "QGIS", "CHELSA", "SoilGrids", "Sentinel-2", "Copernicus DEM"],
    card: { src: "/maps/communities-card.webp", src720: "/maps/communities-card-720.webp", w: 1400, h: 1181, alt: { ar: "خريطة المجتمعات النباتية المحتملة في المملكة", en: "Map of potential plant communities of Saudi Arabia" } },
    gallery: [
      { src: "/maps/communities-full.webp", w: 3600, h: 2544, caption: { ar: "خريطة جميع المجتمعات", en: "All communities" } },
      { src: "/maps/communities-t01.webp", w: 3000, h: 2123, caption: { ar: "غابات العرعر الجبلية", en: "Juniperus procera montane woodland" } },
      { src: "/maps/communities-t13.webp", w: 3000, h: 2123, caption: { ar: "أشجار المانجروف (الشورى)", en: "Mangrove (Avicennia marina)" } },
      { src: "/maps/communities-t21.webp", w: 3000, h: 2123, caption: { ar: "شجيرات الغضا في الكثبان", en: "Haloxylon persicum dune shrubland" } },
    ],
  },
  {
    id: "sgi-greening",
    title: { ar: "رصد الاخضرار الوطني ومبادرة السعودية الخضراء", en: "National Greening and the Saudi Green Initiative" },
    status: { ar: "مخطوطة قيد الإعداد", en: "Manuscript in preparation" },
    year: "2026",
    summary: {
      ar: "حللت أرشيف MODIS NDVI كاملاً (230 صورة مركّبة) مع أمطار ERA5 للفترة 2016–2025، وقارنت ما قبل إطلاق المبادرة بما بعده على مستوى كل بكسل.",
      en: "I analysed the full MODIS NDVI archive (230 composites) with ERA5 rainfall for 2016–2025, comparing the periods before and after the initiative's launch pixel by pixel.",
    },
    result: {
      ar: "البكسلات ذات الاخضرار المعنوي فاقت التراجع بنسبة 4.3 إلى 1 (20.3% مقابل 4.7%)، وبقي الاتجاه موجباً بعد عزل أثر الأمطار.",
      en: "Pixels with significant greening outnumbered browning 4.3 to 1 (20.3% vs 4.7%), and the trend stayed positive after rainfall was accounted for.",
    },
    facts: [
      { k: { ar: "الفترة", en: "Period" }, v: { ar: "2016–2025", en: "2016–2025" } },
      { k: { ar: "البيانات", en: "Data" }, v: { ar: "MODIS MOD13Q1 بدقة 250 م، أمطار ERA5", en: "MODIS MOD13Q1 250 m, ERA5 rainfall" } },
      { k: { ar: "المنهج", en: "Method" }, v: { ar: "Mann–Kendall وTheil–Sen وRESTREND", en: "Mann–Kendall, Theil–Sen, RESTREND" } },
    ],
    tools: ["R (terra)", "MODIS", "ERA5", "Mann–Kendall", "Theil–Sen"],
    card: { src: "/maps/sgi-card.webp", src720: "/maps/sgi-card-720.webp", w: 1400, h: 1141, alt: { ar: "خريطة اتجاه الاخضرار والتراجع المعنوي 2016–2025", en: "Map of significant greening and browning trends, 2016–2025" } },
    gallery: [
      { src: "/maps/sgi-trend.webp", w: 2250, h: 1950, caption: { ar: "الاتجاه المعنوي: اخضرار وتراجع", en: "Significant greening and browning" } },
      { src: "/maps/sgi-change.webp", w: 2100, h: 1800, caption: { ar: "تغيّر NDVI بين الفترتين", en: "NDVI change between periods" } },
      { src: "/maps/sgi-theilsen.webp", w: 2100, h: 1800, caption: { ar: "ميل Theil–Sen للأراضي النباتية", en: "Theil–Sen slope, vegetated land" } },
      { src: "/maps/sgi-annual.webp", w: 1283, h: 770, caption: { ar: "متوسط NDVI السنوي الوطني", en: "Annual national mean NDVI" } },
    ],
  },
  {
    id: "escarpment-refugia",
    title: { ar: "ملاجئ الحافات تحت التهديد", en: "Escarpment Refugia Under Threat" },
    status: { ar: "منشور، BMC Ecology and Evolution", en: "Published, BMC Ecology and Evolution" },
    year: "2026",
    summary: {
      ar: "نمذجة الموائل الملائمة حالياً ومستقبلاً لأربعة نباتات عصارية متوطنة في الحافات الجنوبية الغربية، باستخدام MaxEnt وسيناريوهات CMIP6.",
      en: "Current and future habitat-suitability modeling for four endemic succulents of the southwestern escarpment, using MaxEnt and CMIP6 scenarios.",
    },
    result: {
      ar: "الموائل الملائمة اليوم لا تتجاوز 0.58–2.90% من مساحة المملكة، ويتوقع انكماشها لنوعين منها تحت سيناريو SSP2-4.5.",
      en: "Suitable habitat today covers only 0.58–2.90% of the country, and is projected to contract for two of the species under SSP2-4.5.",
    },
    facts: [
      { k: { ar: "الأنواع", en: "Species" }, v: { ar: "4 نباتات عصارية متوطنة", en: "4 endemic succulents" } },
      { k: { ar: "دقة النماذج", en: "Model skill" }, v: { ar: "AUC اختبار 0.91–0.99", en: "Test AUC 0.91–0.99" } },
      { k: { ar: "المحركات", en: "Main drivers" }, v: { ar: "موسمية الأمطار والارتفاع", en: "Rainfall seasonality and elevation" } },
    ],
    tools: ["MaxEnt", "CMIP6", "WorldClim", "QGIS", "R"],
    card: { src: "/maps/escarpment-card.webp", src720: "/maps/escarpment-card-720.webp", w: 1102, h: 772, alt: { ar: "خرائط ملاءمة الموائل لأربعة نباتات متوطنة", en: "Habitat suitability maps for four endemic plants" } },
    gallery: [
      { src: "/maps/escarpment-full.webp", w: 1102, h: 772, caption: { ar: "الملاءمة الحالية للأنواع الأربعة", en: "Current suitability, four species" } },
    ],
    link: { href: "https://doi.org/10.1186/s12862-026-02582-0", label: { ar: "قراءة البحث", en: "Read the paper" } },
    credit: { ar: "الشكل من Al-Hashimi وآخرون (2026)، BMC Ecology and Evolution، ترخيص CC BY-NC-ND 4.0.", en: "Figure from Al-Hashimi et al. (2026), BMC Ecology and Evolution, CC BY-NC-ND 4.0." },
  },
];

export const services: { title: T; body: T; proof: { label: T; href: string }[] }[] = [
  {
    title: { ar: "نمذجة توزيع الأنواع وملاءمة الموائل", en: "Species distribution and habitat suitability modeling" },
    body: { ar: "أين يعيش النوع اليوم، وأين يُتوقع أن ينتقل مع تغيّر المناخ. مفيد لتحديد مواقع الحماية والاستزراع والمسوحات.", en: "Where a species lives today and where it is likely to shift under climate change. Useful for siting protection, restoration and surveys." },
    proof: [{ label: { ar: "ملاجئ الحافات", en: "Escarpment refugia" }, href: "#escarpment-refugia" }],
  },
  {
    title: { ar: "رصد الغطاء النباتي وتدهور الأراضي بالأقمار الصناعية", en: "Satellite monitoring of vegetation and land degradation" },
    body: { ar: "سلاسل زمنية من MODIS وSentinel-2 تقيس التغيّر وتفصل أثر الأمطار عن أثر الإدارة والتشجير.", en: "MODIS and Sentinel-2 time series that measure change and separate rainfall effects from management and planting." },
    proof: [
      { label: { ar: "رصد الاخضرار الوطني", en: "National greening" }, href: "#sgi-greening" },
      { label: { ar: "محمية طويق", en: "Tuwaiq Reserve" }, href: "#tuwaiq-reserve" },
    ],
  },
  {
    title: { ar: "خرائط موضوعية وطنية وإقليمية", en: "National and regional thematic maps" },
    body: { ar: "خرائط للمشهد الطبيعي والمجتمعات النباتية والنظم البيئية والمحميات، بمصادر موثّقة وجاهزة للطباعة والتقارير.", en: "Maps of landscapes, plant communities, ecosystems and protected areas, with documented sources, ready for print and reports." },
    proof: [
      { label: { ar: "وحدات المشهد", en: "Landscape units" }, href: "#landscape-units" },
      { label: { ar: "المجتمعات النباتية", en: "Plant communities" }, href: "#plant-communities" },
    ],
  },
  {
    title: { ar: "دراسات المحميات والتخطيط المكاني", en: "Protected-area studies and spatial planning" },
    body: { ar: "تحليل الحوض والمياه والغطاء النباتي وفجوات البيانات في المحمية، وتحويلها إلى مقترح تقسيم وأولويات إدارة.", en: "Catchment, water, vegetation and data-gap analysis for a reserve, turned into a zoning proposal and management priorities." },
    proof: [{ label: { ar: "محمية طويق", en: "Tuwaiq Reserve" }, href: "#tuwaiq-reserve" }],
  },
  {
    title: { ar: "خط أساس بيئي وتنوع حيوي لتقييم الأثر", en: "Environmental and biodiversity baselines for EIA" },
    body: { ar: "مسوحات ميدانية وتحليل مكاني وتقارير متوافقة مع متطلبات المركز الوطني للرقابة على الالتزام البيئي.", en: "Field surveys, spatial analysis and reporting aligned with National Center for Environmental Compliance requirements." },
    proof: [{ label: { ar: "الخبرة العملية", en: "Work experience" }, href: "#experience" }],
  },
  {
    title: { ar: "خرائط ومنصات ويب تفاعلية", en: "Interactive web maps and platforms" },
    body: { ar: "تحويل النتائج إلى صفحات ومنصات يتصفحها صاحب القرار من الجوال أو الكمبيوتر.", en: "Turning results into pages and platforms that decision-makers can browse on phone or desktop." },
    proof: [{ label: { ar: "نباتات المملكة", en: "Saudi Native Flora" }, href: "https://saudi-native-flora.vercel.app" }],
  },
];

export const skills: { group: T; tools: string[]; usedIn: T }[] = [
  { group: { ar: "نظم المعلومات الجغرافية والاستشعار عن بعد", en: "GIS and remote sensing" }, tools: ["QGIS", "Google Earth Engine", "Sentinel-2", "MODIS", "STAC"], usedIn: { ar: "محمية طويق، رصد الاخضرار، وحدات المشهد", en: "Tuwaiq Reserve, national greening, landscape units" } },
  { group: { ar: "تحليل التضاريس والهيدرولوجيا", en: "Terrain and hydrology" }, tools: ["Geomorphons", "TPI", "Flow routing", "TWI", "HAND", "WhiteboxTools"], usedIn: { ar: "وحدات المشهد، أحواض محمية طويق", en: "Landscape units, Tuwaiq catchments" } },
  { group: { ar: "نمذجة الأنواع والمناخ", en: "Species and climate modeling" }, tools: ["MaxEnt", "maxnet", "CMIP6", "WorldClim", "CHELSA"], usedIn: { ar: "ملاجئ الحافات، رسالة الماجستير", en: "Escarpment refugia, M.Sc. thesis" } },
  { group: { ar: "البرمجة والإحصاء المكاني", en: "Programming and spatial statistics" }, tools: ["R (terra, sf)", "Python (rasterio, geopandas)", "Mann–Kendall", "Theil–Sen", "VIF"], usedIn: { ar: "كل المشاريع أعلاه", en: "All projects above" } },
  { group: { ar: "العمل الميداني", en: "Fieldwork" }, tools: ["مسوحات التنوع الحيوي|Biodiversity surveys", "تصنيف النظم البيئية|Ecosystem classification", "الدرون (رخصة GACA)|Drone (GACA licence)"], usedIn: { ar: "المركز الوطني للحياة الفطرية", en: "National Center for Wildlife" } },
  { group: { ar: "الامتثال البيئي", en: "Environmental compliance" }, tools: ["EIA", "NCEC", "ISO 14001", "ISO 45001"], usedIn: { ar: "مكتب Environmental Way", en: "Environmental Way" } },
  { group: { ar: "تطوير الويب", en: "Web development" }, tools: ["Next.js", "React", "Tailwind", "Vercel"], usedIn: { ar: "نباتات المملكة، هذا الموقع", en: "Saudi Native Flora, this site" } },
];

export const languages: { name: T; level: T }[] = [
  { name: { ar: "العربية", en: "Arabic" }, level: { ar: "اللغة الأم", en: "Native" } },
  { name: { ar: "الإنجليزية", en: "English" }, level: { ar: "IELTS 5.5، STEP 79", en: "IELTS 5.5, STEP 79" } },
];

export const publications: { status: T; text: string; href?: string }[] = [
  {
    status: { ar: "منشور", en: "Published" },
    text: "Al-Hashimi A, Darwish M, Al-farraj NS, Al-otaibi N, Al-otaibi A, Al-majed M, Al-amri SS, Boug A (2026). Escarpment refugia under threat: climate-driven redistribution modeling of four endemic succulent species in Saudi Arabia. BMC Ecology and Evolution.",
    href: "https://doi.org/10.1186/s12862-026-02582-0",
  },
  {
    status: { ar: "رسالة ماجستير", en: "M.Sc. thesis" },
    text: "MaxEnt-Based Assessment of Current Habitat Suitability and Environmental Associations for Five Narrow-Range Endemic Plant Species in Saudi Arabia. King Saud University, 2026.",
  },
  {
    status: { ar: "مخطوطة قيد الإعداد", en: "In preparation" },
    text: "National-Scale Vegetation Greenness Dynamics in Saudi Arabia, 2016–2025: A MODIS NDVI and ERA5 Assessment of Change over the Saudi Green Initiative Period.",
  },
  {
    status: { ar: "قيد العمل", en: "In progress" },
    text: "Climate Change Impacts on Habitat Suitability of the Genus Verbascum in the Arabian Peninsula (CMIP6, SSP2-4.5 and SSP5-8.5).",
  },
  {
    status: { ar: "مقترح بحثي", en: "Research proposal" },
    text: "Geographic distribution of liver disease and agricultural land cover across Saudi regions. External Co-Investigator (study design, GIS and environmental methodology), King Faisal Specialist Hospital & Research Centre, 2026.",
  },
];

export const nameNote: T = {
  ar: "منشوراتي العلمية باسم Al-Otaibi, A. وهو اسمي نفسه.",
  en: "My papers are published under the name Al-Otaibi, A.",
};

export const experience: { period: T; role: T; org: T; points: T[] }[] = [
  {
    period: { ar: "يوليو 2026 – الآن", en: "Jul 2026 – present" },
    role: { ar: "استشاري مستقل في GIS والنمذجة البيئية", en: "Independent GIS & Environmental Modeling Consultant" },
    org: { ar: "عمل حر، الرياض", en: "Freelance, Riyadh" },
    points: [
      { ar: "استشارات في نظم المعلومات الجغرافية والاستشعار عن بعد والنمذجة المكانية لعدة جهات.", en: "GIS, remote sensing and spatial modeling consultancy for several organizations." },
      { ar: "بناء طبقات بيانات وطنية بدقة 30 م وسير عمل قابل للتكرار في R وPython لتصنيف التضاريس والمشهد والنظم البيئية.", en: "National 30 m datasets and reproducible R/Python workflows for terrain, landscape and ecosystem classification." },
      { ar: "تحليل سلاسل Sentinel-2 وMODIS الزمنية لرصد الغطاء النباتي وكشف التغيّر.", en: "Sentinel-2 and MODIS time-series analysis for vegetation monitoring and change detection." },
    ],
  },
  {
    period: { ar: "سبتمبر 2025 – مارس 2026", en: "Sep 2025 – Mar 2026" },
    role: { ar: "أخصائي بيئي", en: "Environmental Specialist" },
    org: { ar: "المركز الوطني لتنمية الحياة الفطرية، الرياض", en: "National Center for Wildlife (NCW), Riyadh" },
    points: [
      { ar: "قيادة مسوحات التنوع الحيوي وتصنيف النظم البيئية في المناطق المحمية.", en: "Led biodiversity surveys and ecosystem classification in protected areas." },
      { ar: "نماذج ملاءمة موائل بـ MaxEnt وخرائط QGIS، والمشاركة في تأليف البحث المحكّم الناتج.", en: "Built MaxEnt habitat models and QGIS maps; co-authored the resulting peer-reviewed study." },
      { ar: "تقييم المخاطر قبل الرحلات الميدانية لضمان سلامة الفرق.", en: "Pre-fieldwork risk assessments for safe field operations." },
    ],
  },
  {
    period: { ar: "أبريل – أغسطس 2025", en: "Apr – Aug 2025" },
    role: { ar: "أخصائي بيئي", en: "Environmental Specialist" },
    org: { ar: "مكتب Environmental Way للاستشارات البيئية، الرياض", en: "Environmental Way Consulting Office, Riyadh" },
    points: [
      { ar: "تقييمات ميدانية لحالات التلوث وجمع البيانات للتقديمات التنظيمية.", en: "Site assessments of pollution conditions and data collection for regulatory submissions." },
      { ar: "إعداد وثائق تقييم الأثر البيئي وفق متطلبات المركز الوطني للرقابة على الالتزام البيئي.", en: "Prepared EIA documents in line with NCEC requirements." },
    ],
  },
];

export const award = {
  title: { ar: "بيئة ثون 2026، صندوق البيئة", en: "Envirothon 2026, Environment Fund" },
  body: {
    ar: "نظام البطاقة البيئية (ECS): منصة تقيّم الأداء البيئي للمنشآت، ضمن أفضل 40 فريقاً من أكثر من 300 مشاركة.",
    en: "Environmental Card System (ECS): a platform that scores facility environmental performance, shortlisted in the top 40 of 300+ entries.",
  },
  href: "https://environmental-card-system.vercel.app",
};

export const education: { degree: T; place: T; detail: T }[] = [
  { degree: { ar: "ماجستير العلوم البيئية", en: "M.Sc. Environmental Science" }, place: { ar: "جامعة الملك سعود، 2024–2026", en: "King Saud University, 2024–2026" }, detail: { ar: "المعدل 4.81 من 5، مرتبة الشرف الأولى", en: "GPA 4.81 / 5, First-Class Honors" } },
  { degree: { ar: "بكالوريوس الأحياء", en: "B.Sc. Biology" }, place: { ar: "جامعة شقراء، 2019–2024", en: "Shaqra University, 2019–2024" }, detail: { ar: "المعدل 4.3 من 5", en: "GPA 4.3 / 5" } },
];

// الشهادات: أول 6 تظهر مباشرة، والباقي تحت "كل الشهادات"
export const certifications: { name: T; issuer: string }[] = [
  { name: { ar: "رخصة الطيار عن بعد (الدرون)، الفئة المفتوحة", en: "Remote Pilot Certificate, Open Category" }, issuer: "GACA, 2025" },
  { name: { ar: "القائمة الحمراء للنظم البيئية", en: "IUCN Red List of Ecosystems" }, issuer: "IUCN Academy, 2025" },
  { name: { ar: "تحديد وترسيم المناطق الرئيسية للتنوع الحيوي (KBAs)", en: "Identifying and Delineating Key Biodiversity Areas" }, issuer: "IUCN / CBD, 2025" },
  { name: { ar: "ISO 14001 نظام الإدارة البيئية", en: "ISO 14001 Environmental Management System" }, issuer: "IIRSM" },
  { name: { ar: "ISO 45001 الصحة والسلامة المهنية", en: "ISO 45001 Occupational Health and Safety" }, issuer: "IIRSM" },
  { name: { ar: "اتفاقية رامسار للأراضي الرطبة", en: "Ramsar Convention on Wetlands" }, issuer: "Ramsar, 2025" },
  { name: { ar: "رسم خرائط أولويات التنوع الحيوي", en: "Introduction to Mapping Biodiversity Priorities" }, issuer: "IUCN Academy, 2025" },
  { name: { ar: "تصنيف النباتات ورصدها", en: "Plant Classification and Monitoring" }, issuer: "NCW, 2025" },
  { name: { ar: "ISO 9001 نظام إدارة الجودة", en: "ISO 9001 Quality Management System" }, issuer: "IIRSM" },
  { name: { ar: "تقييم دورة الحياة والاستشارات المستدامة", en: "Life Cycle Assessment and Sustainability Consulting" }, issuer: "Coursera" },
  { name: { ar: "الاقتصاد الدائري وكفاءة الموارد", en: "Circular Economy and Resource Efficiency" }, issuer: "National Academy for the Environment, 2026" },
  { name: { ar: "بناء تطبيقات الذكاء الاصطناعي المتقدمة", en: "Advanced AI Application Development" }, issuer: "Tuwaiq Academy, 2026" },
  { name: { ar: "دبلوم متقدم في حماية الحياة الفطرية", en: "Advanced Diploma in Wildlife Conservation" }, issuer: "Alison" },
  { name: { ar: "الإنتاج الزراعي المحمي وإدارة الأعمال", en: "Greenhouse Production and Business Management" }, issuer: "TOPIAN NEOM & Estidamah" },
  { name: { ar: "Power BI وExcel", en: "Power BI and Microsoft Excel" }, issuer: "Certified" },
  { name: { ar: "شهادة شكر وتقدير، بيئة ثون 2026", en: "Certificate of Appreciation, Envirothon 2026" }, issuer: "Environment Fund, 2026" },
  { name: { ar: "عضو جمعية مختصي الاستدامة في السعودية", en: "Member, Sustainability Professionals of Saudi Arabia" }, issuer: "Since 2025" },
];

export const ui = {
  nav: { maps: { ar: "الخرائط", en: "Maps" }, services: { ar: "الخدمات", en: "Services" }, research: { ar: "الأبحاث", en: "Research" }, experience: { ar: "الخبرة", en: "Experience" }, contact: { ar: "تواصل", en: "Contact" } },
  langSwitch: { ar: "English", en: "العربية" },
  langHref: { ar: "/en/", en: "/" },
  requestConsult: { ar: "اطلب استشارة", en: "Request a consultation" },
  viewMaps: { ar: "شاهد الخرائط", en: "See the maps" },
  saveContact: { ar: "حفظ جهة الاتصال", en: "Save contact" },
  downloadCv: { ar: "السيرة الذاتية (PDF)", en: "CV (PDF)" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  email: { ar: "إيميل", en: "Email" },
  call: { ar: "اتصال", en: "Call" },
  openMap: { ar: "تكبير الخريطة", en: "Open the map" },
  maps: { ar: "خرائط ومشاريع مختارة", en: "Selected maps and projects" },
  mapsIntro: { ar: "اضغط على أي خريطة لتكبيرها. على الجوال تقدر تقرّب بإصبعين.", en: "Tap any map to open it. On a phone, pinch to zoom." },
  result: { ar: "النتيجة", en: "Result" },
  services: { ar: "وش أقدر أسوي لك", en: "What I can do for you" },
  example: { ar: "مثال من عملي:", en: "See it in:" },
  skills: { ar: "المهارات وأين استخدمتها", en: "Skills and where I used them" },
  usedIn: { ar: "استُخدمت في", en: "Used in" },
  langs: { ar: "اللغات", en: "Languages" },
  research: { ar: "الأبحاث والمنشورات", en: "Research and publications" },
  experience: { ar: "الخبرة العملية", en: "Experience" },
  award: { ar: "جائزة", en: "Award" },
  education: { ar: "التعليم", en: "Education" },
  certs: { ar: "الشهادات والرخص", en: "Certifications and licences" },
  allCerts: { ar: "كل الشهادات", en: "All certifications" },
  contactTitle: { ar: "عندك مشروع خرائط أو دراسة بيئية؟", en: "Have a mapping or environmental project?" },
  contactBody: { ar: "أرسل لي وصفاً مختصراً للمنطقة والهدف والمدة، وأرد عليك بتصور للعمل.", en: "Send a short note on the area, the goal and the timeline, and I'll reply with a proposed approach." },
  close: { ar: "إغلاق", en: "Close" },
  prev: { ar: "السابقة", en: "Previous" },
  next: { ar: "التالية", en: "Next" },
  zoomHint: { ar: "قرّب بإصبعين أو بعجلة الفأرة، واسحب للتنقل", en: "Pinch or scroll to zoom, drag to move" },
  resetZoom: { ar: "إعادة الضبط", en: "Reset" },
  visit: { ar: "زيارة", en: "Visit" },
  footer: { ar: "الرياض، المملكة العربية السعودية", en: "Riyadh, Saudi Arabia" },
};
