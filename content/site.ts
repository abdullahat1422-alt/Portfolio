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
    ar: "أتعاون مع الجهات الحكومية والخاصة والبحثية في مسوحات التنوع الأحيائي ونظم المعلومات الجغرافية والاستشعار عن بعد والنمذجة المكانية، وأربط متطلبات الامتثال البيئي بتحليل مبني على البيانات.",
    en: "I collaborate with government, private and research organizations on biodiversity surveys, GIS, remote sensing and spatial modeling, bridging environmental compliance with data-driven analysis.",
  },
  profile: {
    ar: "أخصائي بيئي حاصل على ماجستير العلوم البيئية بتقدير امتياز من جامعة الملك سعود، بخبرة في الاستشارات البيئية وحماية الحياة الفطرية والعمل الجيومكاني المستقل. أعددت وثائق تقييم الأثر البيئي وفق متطلبات المركز الوطني للرقابة على الالتزام البيئي، وقدت مسوحات التنوع الحيوي ونمذجة ملاءمة الموائل في المركز الوطني لتنمية الحياة الفطرية، وشاركت في تأليف بحث محكّم نُشر في مجلة BMC Ecology and Evolution عام 2026.",
    en: "Environmental specialist with an M.Sc. in Environmental Science with Distinction from King Saud University, with experience across environmental consulting, wildlife conservation and independent geospatial work. I have prepared EIA documents aligned with NCEC requirements, led biodiversity surveys and habitat suitability modeling at the National Center for Wildlife, and co-authored a peer-reviewed article in BMC Ecology and Evolution.",
  },
  stats: [
    { n: "+50", l: { ar: "خريطة منجزة ضمن مختارات من أعمالي", en: "maps produced across selected works" } },
    { n: { ar: "ماجستير", en: "M.Sc." }, l: { ar: "العلوم البيئية، جامعة الملك سعود", en: "Environmental Science, King Saud University" } },
    { n: { ar: "خبرة عملية وميدانية", en: "Hands-on field experience" }, l: { ar: "في المحميات والتنوع الأحيائي مع NCW وRed Sea Global ومكاتب الاستشارات البيئية", en: "in protected areas and biodiversity with NCW, Red Sea Global and environmental consultancies" } },
  ] as { n: string | T; l: T }[],
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
      ar: "دراسة مكانية لمنطقة غرب الرياض شملت الأحواض المائية والمناخ والغطاء النباتي وسجلات التنوع الحيوي، وانتهت بمقترح تقسيم متوافق مع إرشادات IUCN.",
      en: "A spatial study west of Riyadh covering catchments, climate, vegetation and biodiversity records, concluding with an IUCN-aligned zoning proposal.",
    },
    highlight: { ar: "3,941 كم² و+30 خريطة", en: "3,941 km², 30+ maps" },
    tools: ["Sentinel-2", "MODIS", "R", "QGIS"],
    card: { src: "/maps/tuwaiq-card.webp", src720: "/maps/tuwaiq-card-720.webp", w: 1277, h: 1037, alt: { ar: "مقترح تقسيم محمية طويق", en: "Zoning proposal for the Tuwaiq Reserve" } },
    gallery: [
      { src: "/maps/tuwaiq-zoning.webp", w: 1277, h: 1037, caption: { ar: "مقترح التقسيم", en: "Zoning proposal" } },
      { src: "/maps/tuwaiq-summary.webp", w: 1582, h: 1402, caption: { ar: "ملخص النتائج", en: "Summary of findings" } },
      { src: "/maps/tuwaiq-catchment.webp", w: 1344, h: 1080, caption: { ar: "الحوض المغذي للمحمية", en: "Catchment feeding the reserve" } },
      { src: "/maps/tuwaiq-wadis.webp", w: 1320, h: 1170, caption: { ar: "الأودية والأحواض المغلقة", en: "Wadis and closed basins" } },
      { src: "/maps/tuwaiq-greenness.webp", w: 1582, h: 1402, caption: { ar: "مناطق التعافي والتراجع", en: "Recovery and decline" } },
      { src: "/maps/tuwaiq-records.webp", w: 1582, h: 1402, caption: { ar: "السجلات النباتية", en: "Plant records" } },
      { src: "/maps/tuwaiq-e01.webp", w: 3000, h: 2120, caption: { ar: "وحدات الموائل المحتملة والسجلات النباتية", en: "Potential habitat units and plant records" } },
      { src: "/maps/tuwaiq-e03.webp", w: 3000, h: 2120, caption: { ar: "فجوات بيانات التنوع الحيوي وأولويات المسح الميداني", en: "Biodiversity evidence gaps and field-survey priorities" } },
      { src: "/maps/tuwaiq-h02.webp", w: 3000, h: 2120, caption: { ar: "شبكة الأودية ورتب Strahler", en: "Wadi network and Strahler order" } },
      { src: "/maps/tuwaiq-h03.webp", w: 3000, h: 2120, caption: { ar: "تركّز الجريان السطحي", en: "Topographic flow concentration" } },
      { src: "/maps/tuwaiq-h04.webp", w: 3000, h: 2120, caption: { ar: "تقاطعات الأودية مع الطرق والسدود والمخارج", en: "Wadi-road crossings, dams and outlets" } },
      { src: "/maps/tuwaiq-h05.webp", w: 3000, h: 2120, caption: { ar: "مورفومترية الأحواض", en: "Basin morphometry" } },
      { src: "/maps/tuwaiq-v01.webp", w: 3000, h: 2120, caption: { ar: "الاخضرار الموسمي، ربيع 2026", en: "Seasonal greenness, spring 2026" } },
      { src: "/maps/tuwaiq-v03.webp", w: 3000, h: 2120, caption: { ar: "تغيّر الغطاء النباتي بين ربيعين متقاربي الأمطار", en: "Vegetation change between rain-matched springs" } },
      { src: "/maps/tuwaiq-v03b.webp", w: 3000, h: 2120, caption: { ar: "اتجاه الاخضرار طويل المدى 2001–2026 بعد عزل أثر المطر", en: "Long-term rain-adjusted greenness trend, 2001–2026" } },
    ],
  },
  {
    id: "jabal-shada",
    title: { ar: "محمية جبل شدا الأعلى", en: "Jabal Shada al-A'la Protected Area" },
    status: { ar: "2026", en: "2026" },
    line: {
      ar: "تحليل نباتي مكاني لمحمية جبلية في منطقة الباحة: أحزمة الارتفاع، واستجابة الاخضرار عبر المواسم، ووحدات نباتية استكشافية، وخريطة مجتمعات نباتية محتملة مبنية على الأدبيات مع مستوى الثقة.",
      en: "A spatial vegetation analysis of a mountain reserve in Al Baha: elevation strata, seasonal greenness response, exploratory vegetation units, and a literature-informed community map with confidence levels.",
    },
    highlight: { ar: "5 خرائط بدقة 20 م", en: "5 maps at 20 m" },
    tools: ["Sentinel-2", "R", "QGIS", "Copernicus DEM"],
    card: { src: "/maps/shada-card.webp", src720: "/maps/shada-card-720.webp", w: 1400, h: 1386, alt: { ar: "خريطة المجتمعات النباتية المحتملة في محمية جبل شدا الأعلى", en: "Potential vegetation communities of Jabal Shada al-A'la" } },
    gallery: [
      { src: "/maps/shada-communities.webp", w: 3000, h: 2357, caption: { ar: "المجتمعات النباتية المحتملة", en: "Potential vegetation communities" } },
      { src: "/maps/shada-confidence.webp", w: 3000, h: 2057, caption: { ar: "مستوى الثقة في خريطة المجتمعات", en: "Confidence of the community map" } },
      { src: "/maps/shada-units.webp", w: 3000, h: 2250, caption: { ar: "وحدات نباتية استكشافية", en: "Exploratory vegetation units" } },
      { src: "/maps/shada-ndvi.webp", w: 3000, h: 2057, caption: { ar: "الاخضرار حسب الارتفاع والموسم", en: "Greenness by elevation and season" } },
      { src: "/maps/shada-elevation.webp", w: 1826, h: 2420, caption: { ar: "أحزمة الارتفاع على الظل التضاريسي", en: "Elevation strata on hillshade" } },
    ],
  },
  {
    id: "landscape-units",
    title: { ar: "وحدات المشهد الطبيعي في المملكة", en: "National Landscape Units" },
    status: { ar: "2026", en: "2026" },
    line: {
      ar: "خريطة على مستوى المملكة لـ 11 وحدة مشهد طبيعي، بمعالجة نموذج ارتفاع Copernicus عبر 870 مربعاً باستخدام geomorphons وTPI متعدد المقاييس.",
      en: "A Kingdom-wide map of 11 landscape units, processing the Copernicus DEM across 870 tiles with geomorphon and multiscale TPI analysis.",
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
      ar: "تجميع 30 دراسة نباتية سعودية منشورة (240 مجتمعاً مصدرياً) في 26 نوع مجتمع مصنّف حسب قوة الدليل، مع خريطة لفجوات المعرفة.",
      en: "30 published Saudi vegetation studies (240 source communities) synthesized into 26 evidence-graded community types, with a knowledge-gap map.",
    },
    highlight: { ar: "26 مجتمعاً بدقة 250 م", en: "26 communities, 250 m" },
    tools: ["R", "QGIS", "CHELSA", "SoilGrids"],
    card: { src: "/maps/communities-card.webp", src720: "/maps/communities-card-720.webp", w: 1400, h: 1181, alt: { ar: "خريطة المجتمعات النباتية", en: "Plant communities map" } },
    gallery: [
      { src: "/maps/communities-full.webp", w: 3600, h: 2544, caption: { ar: "جميع المجتمعات", en: "All communities" } },
      { src: "/maps/communities-t01.webp", w: 3000, h: 2123, caption: { ar: "غابات العرعر", en: "Juniper woodland" } },
      { src: "/maps/communities-t13.webp", w: 3000, h: 2123, caption: { ar: "المانجروف", en: "Mangrove" } },
      { src: "/maps/communities-t21.webp", w: 3000, h: 2123, caption: { ar: "الغضا", en: "Haloxylon shrubland" } },
      { src: "/maps/communities-t04.webp", w: 3000, h: 2123, caption: { ar: "غابات السلم الجبلية", en: "Acacia asak woodland" } },
      { src: "/maps/communities-t22.webp", w: 3000, h: 2123, caption: { ar: "نباتات السبخات", en: "Inland sabkha halophytes" } },
    ],
  },
  {
    id: "sgi-greening",
    title: { ar: "رصد الاخضرار الوطني", en: "National Greening Monitor" },
    status: { ar: "قيد النشر", en: "In preparation" },
    line: {
      ar: "تقييم وطني لتغيّر الاخضرار 2016–2025 حول مبادرة السعودية الخضراء من أرشيف MODIS NDVI وأمطار ERA5، مع فصل أثر الأمطار بتحليل RESTREND.",
      en: "A national assessment of greenness change 2016–2025 around the Saudi Green Initiative from MODIS NDVI and ERA5, separating rainfall effects with RESTREND.",
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
      ar: "نمذجة إعادة التوزيع المناخي لأربعة نباتات عصارية متوطنة في الحافات الجنوبية الغربية باستخدام MaxEnt وسيناريوهات CMIP6.",
      en: "Climate-driven redistribution modeling of four endemic succulents on the southwestern escarpment using MaxEnt and CMIP6 scenarios.",
    },
    highlight: { ar: "BMC Ecology and Evolution", en: "BMC Ecology and Evolution" },
    tools: ["MaxEnt", "CMIP6", "QGIS"],
    card: { src: "/maps/escarpment-card.webp", src720: "/maps/escarpment-card-720.webp", w: 1102, h: 772, alt: { ar: "خرائط ملاءمة الموائل", en: "Habitat suitability maps" } },
    gallery: [{ src: "/maps/escarpment-full.webp", w: 1102, h: 772, caption: { ar: "الملاءمة الحالية للأنواع الأربعة", en: "Current suitability, four species" } }],
    link: { href: "https://doi.org/10.1186/s12862-026-02582-0", label: { ar: "البحث", en: "Paper" } },
    credit: { ar: "الشكل: Al-Hashimi وآخرون 2026، CC BY-NC-ND 4.0", en: "Figure: Al-Hashimi et al. 2026, CC BY-NC-ND 4.0" },
  },
];

// معرض الخرائط: خرائط إضافية من الأعمال
export const mapGallery: { thumb: string; full: string; w: number; h: number; tw: number; th: number; caption: T; from: T }[] = [
  { thumb: "/maps/g-tuwaiq-h02.webp", full: "/maps/tuwaiq-h02.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "شبكة الأودية ورتب Strahler", en: "Wadi network and Strahler order" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-shada-conf.webp", full: "/maps/shada-confidence.webp", w: 3000, h: 2057, tw: 720, th: 741, caption: { ar: "الثقة في خريطة المجتمعات النباتية", en: "Confidence of the community map" }, from: { ar: "جبل شدا", en: "Jabal Shada" } },
  { thumb: "/maps/g-tuwaiq-e01.webp", full: "/maps/tuwaiq-e01.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "وحدات الموائل المحتملة", en: "Potential habitat units" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-tuwaiq-v03b.webp", full: "/maps/tuwaiq-v03b.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "اتجاه الاخضرار 2001–2026", en: "Greenness trend 2001–2026" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-shada-elev.webp", full: "/maps/shada-elevation.webp", w: 1826, h: 2420, tw: 720, th: 716, caption: { ar: "أحزمة الارتفاع في جبل شدا", en: "Jabal Shada elevation strata" }, from: { ar: "جبل شدا", en: "Jabal Shada" } },
  { thumb: "/maps/g-tuwaiq-h05.webp", full: "/maps/tuwaiq-h05.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "مورفومترية الأحواض", en: "Basin morphometry" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-shada-units.webp", full: "/maps/shada-units.webp", w: 3000, h: 2250, tw: 720, th: 581, caption: { ar: "وحدات نباتية استكشافية", en: "Exploratory vegetation units" }, from: { ar: "جبل شدا", en: "Jabal Shada" } },
  { thumb: "/maps/g-tuwaiq-h04.webp", full: "/maps/tuwaiq-h04.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "تقاطعات الأودية مع الطرق", en: "Wadi-road crossings and dams" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-catchment.webp", full: "/maps/tuwaiq-catchment.webp", w: 1344, h: 1080, tw: 720, th: 579, caption: { ar: "الحوض المغذي لمحمية طويق", en: "Catchment feeding the Tuwaiq Reserve" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-t21.webp", full: "/maps/communities-t21.webp", w: 3000, h: 2123, tw: 720, th: 802, caption: { ar: "مجتمع الغضا في الكثبان", en: "Haloxylon persicum dune shrubland" }, from: { ar: "الأطلس", en: "Atlas" } },
  { thumb: "/maps/g-sgichange.webp", full: "/maps/sgi-change.webp", w: 2100, h: 1800, tw: 720, th: 617, caption: { ar: "تغيّر NDVI بين الفترتين", en: "NDVI change between periods" }, from: { ar: "الاخضرار", en: "Greening" } },
  { thumb: "/maps/g-lsw.webp", full: "/maps/landscape-sw-full.webp", w: 2600, h: 3020, tw: 720, th: 836, caption: { ar: "الحافات والحرات في الجنوب الغربي", en: "Southwest escarpments and harrat" }, from: { ar: "المشهد", en: "Landscape" } },
  { thumb: "/maps/g-wadis.webp", full: "/maps/tuwaiq-wadis.webp", w: 1320, h: 1170, tw: 720, th: 638, caption: { ar: "الأودية والأحواض المغلقة قرب ضرما", en: "Wadis and closed basins near Duruma" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-t04.webp", full: "/maps/communities-t04.webp", w: 3000, h: 2123, tw: 720, th: 802, caption: { ar: "غابات السلم على المنحدرات", en: "Acacia asak rocky-slope woodland" }, from: { ar: "الأطلس", en: "Atlas" } },
  { thumb: "/maps/g-sgibase.webp", full: "/maps/sgi-baseline.webp", w: 1027, h: 880, tw: 720, th: 617, caption: { ar: "متوسط NDVI قبل المبادرة", en: "Mean NDVI before the initiative" }, from: { ar: "الاخضرار", en: "Greening" } },
  { thumb: "/maps/g-greenness.webp", full: "/maps/tuwaiq-greenness.webp", w: 1582, h: 1402, tw: 720, th: 638, caption: { ar: "التعافي والتراجع في طويق", en: "Recovery and decline at Tuwaiq" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-t22.webp", full: "/maps/communities-t22.webp", w: 3000, h: 2123, tw: 720, th: 802, caption: { ar: "نباتات السبخات الداخلية", en: "Inland sabkha halophytes" }, from: { ar: "الأطلس", en: "Atlas" } },
  { thumb: "/maps/g-sgitheil.webp", full: "/maps/sgi-theilsen.webp", w: 2100, h: 1800, tw: 720, th: 617, caption: { ar: "ميل اتجاه الاخضرار", en: "Greening trend slope" }, from: { ar: "الاخضرار", en: "Greening" } },
  { thumb: "/maps/g-summary.webp", full: "/maps/tuwaiq-summary.webp", w: 1582, h: 1402, tw: 720, th: 638, caption: { ar: "ملخص نتائج طويق", en: "Tuwaiq summary map" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-t01.webp", full: "/maps/communities-t01.webp", w: 3000, h: 2123, tw: 720, th: 802, caption: { ar: "غابات العرعر الجبلية", en: "Juniper montane woodland" }, from: { ar: "الأطلس", en: "Atlas" } },
];

export const services: { title: T; line: T; photo: string }[] = [
  { title: { ar: "نمذجة توزيع الأنواع", en: "Species distribution modeling" }, line: { ar: "نماذج MaxEnt للملاءمة الحالية والمستقبلية تحت سيناريوهات CMIP6", en: "MaxEnt suitability models, current and future under CMIP6" }, photo: "a1" },
  { title: { ar: "رصد الغطاء النباتي", en: "Vegetation monitoring" }, line: { ar: "تحليل سلاسل Sentinel-2 وMODIS الزمنية لكشف التغيّر والاتجاهات", en: "Sentinel-2 and MODIS time series for change and trend detection" }, photo: "a2" },
  { title: { ar: "خرائط وطنية وإقليمية", en: "National and regional maps" }, line: { ar: "طبقات وطنية بدقة 30 م وخرائط جاهزة للنشر والتقارير", en: "National 30 m datasets and publication-quality maps" }, photo: "u9" },
  { title: { ar: "دراسات المحميات", en: "Protected-area studies" }, line: { ar: "تحليل الأحواض والموائل وفجوات البيانات وصولاً إلى مقترح تقسيم", en: "Catchment, habitat and data-gap analysis through to a zoning proposal" }, photo: "e1" },
  { title: { ar: "خط أساس لتقييم الأثر", en: "EIA baselines" }, line: { ar: "مسوحات ميدانية وتقارير متوافقة مع متطلبات المركز الوطني للرقابة على الالتزام البيئي", en: "Field surveys and reporting aligned with NCEC requirements" }, photo: "u4" },
  { title: { ar: "خرائط ويب تفاعلية", en: "Interactive web maps" }, line: { ar: "عرض النتائج في منصات وخرائط تفاعلية لصاحب القرار", en: "Results delivered as interactive maps and platforms" }, photo: "u12" },
];

export const skills: { group: T; tools: string[]; usedIn: T; href?: string }[] = [
  { group: { ar: "GIS والاستشعار عن بعد", en: "GIS and remote sensing" }, tools: ["QGIS", "Google Earth Engine", "Sentinel-2", "MODIS"], usedIn: { ar: "طويق، الاخضرار", en: "Tuwaiq, greening" } },
  { group: { ar: "التضاريس والهيدرولوجيا", en: "Terrain and hydrology" }, tools: ["Geomorphons", "TPI", "HAND", "Flow routing"], usedIn: { ar: "وحدات المشهد", en: "Landscape units" } },
  { group: { ar: "نمذجة الأنواع والمناخ", en: "Species and climate modeling" }, tools: ["MaxEnt", "CMIP6", "WorldClim", "CHELSA"], usedIn: { ar: "ملاجئ الحافات", en: "Escarpment refugia" } },
  { group: { ar: "البرمجة والإحصاء", en: "Programming and statistics" }, tools: ["R", "Python", "Mann–Kendall", "Theil–Sen"], usedIn: { ar: "كل المشاريع", en: "All projects" } },
  { group: { ar: "الميدان", en: "Fieldwork" }, tools: ["مسوحات التنوع الحيوي|Biodiversity surveys", "الدرون (GACA)|Drone (GACA)"], usedIn: { ar: "الحياة الفطرية", en: "NCW" } },
  { group: { ar: "الامتثال البيئي", en: "Compliance" }, tools: ["EIA", "NCEC", "ISO 14001", "ISO 45001"], usedIn: { ar: "Environmental Way", en: "Environmental Way" } },
  { group: { ar: "الويب", en: "Web" }, tools: ["Next.js", "React", "Vercel"], usedIn: { ar: "نباتات المملكة", en: "Saudi Native Flora" }, href: "https://saudi-native-flora.netlify.app/" },
];

export const languages: { name: T; level: T }[] = [
  { name: { ar: "العربية", en: "Arabic" }, level: { ar: "الأم", en: "Native" } },
  { name: { ar: "الإنجليزية", en: "English" }, level: { ar: "IELTS 5.5، STEP 79", en: "IELTS 5.5, STEP 79" } },
];

export const publications: { status: T; title: string; venue: string; href?: string; authors?: string; orgs?: T }[] = [
  { status: { ar: "منشور", en: "Published" }, title: "Escarpment refugia under threat: climate-driven redistribution modeling of four endemic succulent species in Saudi Arabia", venue: "BMC Ecology and Evolution, 2026", href: "https://doi.org/10.1186/s12862-026-02582-0", authors: "Al-Hashimi A, Darwish M, Al-farraj NS, Al-otaibi N, Al-otaibi A, Al-majed M, Al-amri SS, Boug A", orgs: { ar: "بالشراكة بين جامعة الملك سعود (قسم النبات والأحياء الدقيقة) والمركز الوطني لتنمية الحياة الفطرية", en: "A collaboration between King Saud University (Botany and Microbiology) and the National Center for Wildlife (NCW)" } },
  { status: { ar: "ماجستير", en: "M.Sc. thesis" }, title: "MaxEnt-based habitat suitability of five narrow-range endemic plants in Saudi Arabia", venue: "King Saud University, 2026" },
  { status: { ar: "قيد النشر", en: "In preparation" }, title: "National-scale vegetation greenness dynamics in Saudi Arabia, 2016–2025", venue: "MODIS NDVI and ERA5" },
  { status: { ar: "قيد العمل", en: "In progress" }, title: "Climate change and habitat suitability of the genus Verbascum in the Arabian Peninsula", venue: "CMIP6" },
];

export const nameNote: T = { ar: "منشوراتي باسم Al-Otaibi, A.", en: "Published as Al-Otaibi, A." };

export const experience: { period: T; role: T; org: T; points: T[] }[] = [
  {
    period: { ar: "يوليو 2026 – الآن", en: "Jul 2026 – present" },
    role: { ar: "استشاري مستقل في GIS والنمذجة البيئية", en: "Independent GIS & Environmental Modeling Consultant" },
    org: { ar: "عمل حر، الرياض", en: "Freelance, Riyadh" },
    points: [
      { ar: "استشارات في GIS والاستشعار عن بعد والنمذجة المكانية لعدة جهات في مشاريع الخرائط والتحليل البيئي.", en: "GIS, remote sensing and spatial modeling consultancy for multiple organizations." },
      { ar: "بناء طبقات بيانات وطنية بدقة 30 م وسير عمل قابل للتكرار في R وPython.", en: "National 30 m datasets and reproducible R/Python workflows." },
    ],
  },
  {
    period: { ar: "سبتمبر 2025 – مارس 2026", en: "Sep 2025 – Mar 2026" },
    role: { ar: "أخصائي بيئي", en: "Environmental Specialist" },
    org: { ar: "المركز الوطني لتنمية الحياة الفطرية", en: "National Center for Wildlife (NCW)" },
    points: [
      { ar: "قيادة مسوحات التنوع الحيوي وتصنيف النظم البيئية في المناطق المحمية.", en: "Led biodiversity surveys and ecosystem classification in protected areas." },
      { ar: "نماذج ملاءمة موائل بـ MaxEnt وخرائط QGIS، ونُشرت نتائجها في بحث محكّم عام 2026.", en: "Built MaxEnt habitat models and QGIS maps, published as a peer-reviewed article in BMC Ecology and Evolution (2026)." },
      { ar: "إعداد تقارير التنوع الأحيائي.", en: "Prepared biodiversity reports." },
      { ar: "العمل على مقترح محمية شمال غرب المدينة المنورة.", en: "Worked on a proposed protected area northwest of Madinah." },
    ],
  },
  {
    period: { ar: "أبريل – أغسطس 2025", en: "Apr – Aug 2025" },
    role: { ar: "أخصائي بيئي", en: "Environmental Specialist" },
    org: { ar: "مكتب Environmental Way للاستشارات البيئية", en: "Environmental Way Consulting Office" },
    points: [
      { ar: "إعداد وثائق تقييم الأثر البيئي وتقارير التقييم الميداني وفق متطلبات المركز الوطني للرقابة على الالتزام البيئي.", en: "Prepared EIA documents and site assessment reports in line with NCEC requirements." },
    ],
  },
];

export const award = {
  title: { ar: "أفضل 40 فريقاً من 300+، بيئة ثون 2026", en: "Top 40 of 300+, Envirothon 2026" },
  org: { ar: "صندوق البيئة، منصة ECS", en: "Environment Fund, ECS platform" },
  href: "https://environmental-card-system.vercel.app",
};

export const education: { degree: T; place: T }[] = [
  { degree: { ar: "ماجستير العلوم البيئية", en: "M.Sc. Environmental Science" }, place: { ar: "جامعة الملك سعود، بتقدير امتياز", en: "King Saud University, with Distinction" } },
  { degree: { ar: "بكالوريوس الأحياء", en: "B.Sc. Biology" }, place: { ar: "جامعة شقراء، مرتبة الشرف الثانية", en: "Shaqra University, Second-Class Honors" } },
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

export const photoCredits = "Plant photos: Abdullah Alsumairi. Landscapes: Unsplash (Rikaz Basyouni, Mustafa Ahmed, Satishaa Javali, Glenov Brankovic, M K, Ayman Mokhtar)";

export const ui = {
  nav: { maps: { ar: "الأعمال", en: "Work" }, services: { ar: "مجالات التعاون", en: "Collaboration" }, about: { ar: "عني", en: "About" }, contact: { ar: "تواصل", en: "Contact" } },
  langSwitch: { ar: "English", en: "العربية" },
  langHref: { ar: "/en/", en: "/" },
  requestConsult: { ar: "فرص التعاون", en: "Collaborate with me" },
  viewMaps: { ar: "شاهد الأعمال", en: "See the work" },
  saveContact: { ar: "حفظ الرقم", en: "Save contact" },
  downloadCv: { ar: "السيرة الذاتية", en: "CV" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  email: { ar: "إيميل", en: "Email" },
  call: { ar: "اتصال", en: "Call" },
  openMap: { ar: "تكبير", en: "Open" },
  maps: { ar: "مختارات من الأعمال", en: "Selected work" },
  services: { ar: "مجالات التعاون", en: "Areas of collaboration" },
  gallery: { ar: "معرض الخرائط", en: "Map gallery" },
  featured: { ar: "عمل مميز", en: "Featured" },
  band: { ar: "من الميدان إلى الخريطة", en: "From the field to the map" },
  skills: { ar: "المهارات", en: "Skills" },
  research: { ar: "الأبحاث", en: "Research" },
  experience: { ar: "الخبرة", en: "Experience" },
  aboutTitle: { ar: "نبذة", en: "Profile" },
  education: { ar: "التعليم", en: "Education" },
  certs: { ar: "الشهادات", en: "Certifications" },
  allCerts: { ar: "الكل", en: "All" },
  langs: { ar: "اللغات", en: "Languages" },
  contactTitle: { ar: "للتعاون", en: "Collaboration" },
  contactLine: { ar: "متاح للتعاون في مشاريع الخرائط والدراسات البيئية والأبحاث المشتركة.", en: "Available for collaboration on mapping projects, environmental studies and joint research." },
  close: { ar: "إغلاق", en: "Close" },
  prev: { ar: "السابقة", en: "Previous" },
  next: { ar: "التالية", en: "Next" },
  zoomHint: { ar: "قرّب بإصبعين", en: "Pinch to zoom" },
  resetZoom: { ar: "إعادة", en: "Reset" },
  footer: { ar: "الرياض", en: "Riyadh" },
};
