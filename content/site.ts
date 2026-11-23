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
  tags: [
    { ar: "محلل بيانات بيئية", en: "Environmental Data Analyst" },
    { ar: "علم البيئة النباتية", en: "Plant Ecology" },
    { ar: "استشعار عن بعد", en: "Remote Sensing" },
    { ar: "مبتكر", en: "Innovator" },
  ] as T[],
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
    { n: { ar: "خبرة عملية وميدانية", en: "Hands-on field experience" }, l: { ar: "في المحميات والتنوع الأحيائي مع NCW وNCVC وRed Sea Global ومكاتب الاستشارات البيئية", en: "in protected areas and biodiversity with NCW, NCVC, Red Sea Global and environmental consultancies" } },
  ] as { n: string | T; l: T }[],
};

export type MapImage = { src: string; caption: T; w: number; h: number };
export type Project = {
  id: string;
  title: T;
  status: T;
  line: T;
  highlight?: T;
  tools: string[];
  card: { src: string; src720: string; w: number; h: number; alt: T; aspect?: string };
  gallery: MapImage[];
  link?: { href: string; label: T };
  credit?: T;
  details?: {
    fullTitle: T;
    meta: T[];
    metrics: { value: string; label: T }[];
    sections: { title: T; body?: T; list?: { ar: string[]; en: string[] } }[];
    download?: { href: string; size: string; label: T };
    credits?: string;
  };
};

export const projects: Project[] = [
  {
    id: "remote-sensing-3d-terrain-shada",
    title: { ar: "الاستشعار عن بعد والخرائط ثلاثية الأبعاد", en: "Remote Sensing & 3D Terrain Mapping" },
    status: { ar: "2026", en: "2026" },
    line: { ar: "بيانات أقمار صناعية وارتفاعات مفتوحة تحوّلت إلى خرائط علمية ثنائية الأبعاد ومناظر ثلاثية الأبعاد من أربع زوايا لدعم القرار وتخطيط المسوحات الميدانية.", en: "Open satellite and elevation data turned into 2D scientific maps and four-direction 3D views that support decisions and field survey planning." },
    highlight: { ar: "12 خريطة و44 منظرًا ثلاثي الأبعاد", en: "12 maps, 44 3D views" },
    tools: ["Sentinel-2", "Copernicus DEM", "QGIS", "Python", "Blender"],
    card: { src: "/projects/remote-sensing-3d-terrain-shada/cover.webp", src720: "/projects/remote-sensing-3d-terrain-shada/cover-800.webp", w: 1600, h: 724, alt: { ar: "مجسم ثلاثي الأبعاد لمحمية جبل شدا الأعلى مغطى بصورة Sentinel-2 بألوان طبيعية", en: "3D model of Jabal Shada al-A'la Reserve draped with Sentinel-2 true-colour imagery" }, aspect: "aspect-[16/9]" },
    gallery: [
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-poster.webp", w: 1400, h: 1674, caption: { ar: "ملصق ثلاثي الأبعاد: الألوان الطبيعية والغطاء الأرضي والخضرة", en: "3D poster — true colour, land cover and vegetation greenness" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-views-slope.webp", w: 1800, h: 1306, caption: { ar: "الانحدار من أربع زوايا: المناطق الشديدة لتخطيط وصول آمن", en: "Slope from four directions — steep zones for safe access planning" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-views-aspect.webp", w: 1800, h: 1306, caption: { ar: "اتجاه المنحدرات: أيها يواجه الشمال أو الشرق أو الجنوب أو الغرب", en: "Aspect — which slopes face north, east, south or west" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-views-elevation.webp", w: 1800, h: 1306, caption: { ar: "الارتفاع من 447 إلى 2,148 م من أربع زوايا", en: "Elevation 447–2,148 m from four directions" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-views-ndvi.webp", w: 1800, h: 1306, caption: { ar: "NDVI: الغطاء النباتي يتركز على كتلة الجبل وعلى امتداد الأودية", en: "NDVI — vegetation concentrates on the massif and along wadis" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-views-change.webp", w: 1800, h: 1306, caption: { ar: "التغير 2018→2026: مواقع ذات أولوية للتحقق الميداني", en: "Change 2018→2026 — hotspots for ground verification" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-views-drainage.webp", w: 1800, h: 1306, caption: { ar: "التصريف المحسوب: الأودية كطرق وصول وممرات", en: "Modelled drainage — wadis as access routes and corridors" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-views-landcover.webp", w: 1800, h: 1306, caption: { ar: "الغطاء الأرضي (مرجع 2021)", en: "Land cover (2021 reference)" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-views-contours.webp", w: 1800, h: 1306, caption: { ar: "كنتور كل 50 م على التضاريس ثلاثية الأبعاد", en: "Contours every 50 m on the 3D terrain" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-views-truecolour.webp", w: 1800, h: 1306, caption: { ar: "ألوان طبيعية، Sentinel-2، 24 سبتمبر 2026", en: "True colour, Sentinel-2, 24 Sep 2026" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/3d-all-maps-contact-sheet.webp", w: 1800, h: 1742, caption: { ar: "كل الخرائط ثلاثية الأبعاد: نظرة عامة", en: "All maps in 3D — overview" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/map-elevation.webp", w: 1800, h: 1272, caption: { ar: "الارتفاع والتظليل", en: "Elevation and shaded relief" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/map-slope.webp", w: 1800, h: 1272, caption: { ar: "الانحدار (درجات)", en: "Slope (degrees)" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/map-ndvi.webp", w: 1800, h: 1272, caption: { ar: "NDVI: 24 سبتمبر 2026", en: "NDVI — 24 Sep 2026" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/map-landcover.webp", w: 1800, h: 1272, caption: { ar: "الغطاء الأرضي (2021)", en: "Land cover (2021)" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/map-change.webp", w: 1800, h: 1272, caption: { ar: "تغير الغطاء النباتي 2018→2026", en: "Vegetation change 2018→2026" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/map-drainage.webp", w: 1800, h: 1272, caption: { ar: "التصريف المحتمل (محسوب)", en: "Potential drainage (modelled)" } },
      { src: "/projects/remote-sensing-3d-terrain-shada/map-truecolour.webp", w: 1800, h: 1272, caption: { ar: "ألوان طبيعية، Sentinel-2", en: "True colour, Sentinel-2" } },
    ],
    details: {
      fullTitle: { ar: "الاستشعار عن بعد والخرائط ثلاثية الأبعاد لدعم القرار والمسوحات الميدانية — محمية جبل شدا الأعلى", en: "Remote Sensing & 3D Terrain Mapping for Field Survey Planning — Jabal Shada al-A'la Reserve" },
      meta: [{ ar: "الاستشعار عن بعد", en: "Remote Sensing" }, { ar: "منطقة الباحة، المملكة العربية السعودية", en: "Al-Baha Region, Saudi Arabia" }, { ar: "محلل منفرد: جمع البيانات والمعالجة والإخراج الخرائطي والتمثيل ثلاثي الأبعاد", en: "Sole analyst: data acquisition, processing, cartography and 3D visualization" }],
      metrics: [
        { value: "12", label: { ar: "منتجاً خرائطياً", en: "map products" } },
        { value: "44", label: { ar: "منظراً ثلاثي الأبعاد (11 خريطة × 4 اتجاهات)", en: "3D views (11 maps × 4 directions)" } },
        { value: "26", label: { ar: "صفحة في الأطلس مع المنهج والحدود", en: "page atlas with methods and limits" } },
        { value: "37%", label: { ar: "من المحمية بانحدار أكبر من 30°", en: "of the reserve on slopes > 30°" } },
        { value: "≈4 m", label: { ar: "تطابق الصورة مع التضاريس", en: "image–terrain co-registration" } },
      ],
      sections: [
        { title: { ar: "نظرة عامة", en: "Overview" }, body: { ar: "مسار عمل قابل لإعادة التطبيق مبني في QGIS وPython، مع إظهار ثلاثي الأبعاد مبرمج في Blender. طُبّق أولاً على محمية جبل شدا الأعلى (77.7 كم²، فئة IUCN الثانية)، وينتج خرائط التضاريس والغطاء النباتي والغطاء الأرضي والتغير والتصريف، ثم يحوّل كل خريطة إلى مجسم ثلاثي الأبعاد يُرى من الشمال والشرق والجنوب والغرب.", en: "A reproducible remote-sensing workflow built in QGIS and Python, with 3D rendering scripted in Blender. Piloted on Jabal Shada al-A'la Reserve (77.7 km², IUCN II), it produces terrain, vegetation, land-cover, change and drainage maps, then renders every map as a 3D terrain model seen from north, east, south and west." } },
        { title: { ar: "التحدي", en: "Challenge" }, body: { ar: "المحميات الجبلية صعبة القراءة على الخرائط المسطحة: الجروف الحادة والأودية العميقة واتجاه المنحدرات تؤثر بقوة على الغطاء النباتي وسهولة الوصول والسلامة، ومع ذلك تخطط الفرق الميدانية غالباً من خرائط ثنائية الأبعاد.", en: "Mountain reserves are hard to read on flat maps: steep escarpments, deep wadis and slope orientation strongly shape vegetation, access and safety, yet field teams usually plan from 2D maps." } },
        { title: { ar: "المنهج", en: "Approach" }, list: { ar: ["جمع بيانات مفتوحة: نموذج الارتفاع Copernicus DEM GLO-30، وصور Sentinel-2 L2A (24 سبتمبر 2026 و21 سبتمبر 2018 في نفس الموسم)، وESA WorldCover 2021.", "اختيار مشاهد خالية من السحب بقياس السحب والظلال داخل منطقة الدراسة نفسها (0.0%)، وليس من بيانات المشهد العامة.", "اشتقاق الارتفاع والانحدار والاتجاه والكنتور وNDVI وSAVI وNDMI والغطاء الأرضي وتغير الغطاء النباتي وشبكة تصريف محسوبة.", "إخراج خرائط A4 جاهزة للطباعة (300 dpi) بمفاتيح ومقياس رسم وشمال حقيقي وخريطة موقع وحدود علمية معلنة.", "تمثيل كل خريطة ثلاثياً من أربع زوايا في Blender، مع اتجاهات N/E/S/W محسوبة من الإحداثيات الحقيقية."], en: ["Acquired open data: Copernicus DEM GLO-30, Sentinel-2 L2A (24 Sep 2026 and 21 Sep 2018, same season) and ESA WorldCover 2021.", "Selected cloud-free scenes by measuring cloud and shadow inside the study area itself (0.0%), not tile-level metadata.", "Derived elevation, slope, aspect, contours, NDVI, SAVI, NDMI, land cover, vegetation change and a modelled drainage network.", "Produced print-ready A4 maps (300 dpi) with legends, scale, true north, locator and stated limitations.", "Rendered every map in 3D from four directions with Blender, with N/E/S/W labels projected from real coordinates."] } },
        { title: { ar: "لماذا ثلاثي الأبعاد للميدان", en: "Why 3D for the field" }, list: { ar: ["يكشف ما تخفيه الخريطة المسطحة: حوالي 37% من المحمية بانحدار أكبر من 30°، وهذا مهم لسلامة الوصول وتصميم المسح.", "يساعد في توزيع مواقع العينات والمقاطع عبر تدرجات الغطاء النباتي ونطاقات الارتفاع والمنحدرات الشمالية والجنوبية.", "يوضح مسارات الأودية والمجاري، وهي دليل عملي لطرق الوصول والممرات النباتية.", "يحدد مناطق التغير بين 2018 و2026 كأولويات للتحقق الميداني."], en: ["Reveals terrain that a flat map hides — about 37% of the reserve lies on slopes steeper than 30°, which matters for safe access and survey design.", "Helps place survey plots and transects across vegetation gradients, elevation bands and north- vs south-facing slopes.", "Shows where wadis and modelled channels run — a practical guide to access routes and vegetated corridors.", "Flags 2018–2026 change hotspots as priority sites for ground verification."] } },
        { title: { ar: "أبرز النتائج", en: "Key findings" }, list: { ar: ["الارتفاع من 447 إلى 2,148 م (فرق 1,701 م)، ومتوسط الانحدار 25.8°.", "الغطاء الأرضي 2021: شجيرات 40%، وأرض جرداء أو نبات متفرق 37%، وأعشاب 22%، وغطاء شجري 0.8%.", "الخضرة تزيد مع الارتفاع: NDVI حوالي 0.15 تحت 1,000 م، وحوالي 0.25 بين 1,250 و1,500 م.", "بين 2018 و2026 (نفس الموسم): زيادة قابلة للرصد في NDVI على 19% من المحمية، وانخفاض على 12%، ولا تغير قابل للرصد على 69% (عتبة ±0.05 من ضجيج مقاس)."], en: ["Elevation 447–2,148 m (1,701 m relief); mean slope 25.8°.", "Land cover 2021: shrubland 40%, bare/sparse vegetation 37%, grassland 22%, tree cover 0.8%.", "Vegetation greenness rises with elevation, from NDVI ≈ 0.15 below 1,000 m to ≈ 0.25 at 1,250–1,500 m.", "2018→2026 (same season): detectable NDVI increase on 19% of the reserve, decrease on 12%, no detectable change on 69% (threshold ±0.05 from measured noise)."] } },
        { title: { ar: "المعايير العلمية", en: "Scientific standards" }, body: { ar: "مصادر بيانات موثقة؛ نموذج الارتفاع مُتحقق منه مقابل Copernicus GLO-30 الرسمي (RMSE 0.49 م)؛ تطابق الصورة مع التضاريس بحدود 4 م مُتحقق منه؛ التغير يُعلن فقط فوق عتبة ضجيج مقاسة؛ المبالغة الرأسية (×1.5) معلنة على كل منظر ثلاثي الأبعاد؛ وكل خطوة معالجة مسجّلة بفحوص PASS/WARNING/FAIL.", en: "Documented data provenance; DEM validated against official Copernicus GLO-30 (RMSE 0.49 m); ≈4 m image–terrain co-registration verified by phase correlation; change reported only above a measured noise threshold; vertical exaggeration (×1.5) stated on every 3D view; every processing step logged with PASS/WARNING/FAIL checks." } },
        { title: { ar: "حدود الدراسة", en: "Limitations" }, body: { ar: "مؤشرات NDVI وSAVI وNDMI مؤشرات طيفية وليست أنواعاً نباتية أو كتلة حيوية؛ خريطة التغير تقارن تاريخين ولا تنسب أسباباً؛ والتصريف شبكة محتملة محسوبة وليست أودية مسوحة أو خطر سيول.", en: "NDVI/SAVI/NDMI are spectral indicators, not species or biomass; the change map compares two dates and does not attribute causes; drainage is a modelled potential network, not surveyed wadis or flood risk." } },
      ],
      download: { href: "/projects/remote-sensing-3d-terrain-shada/atlas-jabal-shada-2d-3d.pdf", size: "5.3 MB", label: { ar: "تحميل أطلس الخرائط (PDF، 26 صفحة)", en: "Download the map atlas (PDF, 26 pages)" } },
      credits: "Contains modified Copernicus Sentinel data 2018, 2026. Copernicus DEM GLO-30 \u00a9 DLR e.V. 2010\u20132014 and \u00a9 Airbus Defence and Space GmbH 2014\u20132018, provided under COPERNICUS by the EU and ESA. ESA WorldCover 2021 v200 (CC BY 4.0). Natural Earth (public domain).",
    },
  },
  {
    id: "remote-sensing-3d-terrain-tuwaiq",
    title: { ar: "طويق: خرائط ثلاثية الأبعاد لتضاريس منخفضة", en: "Tuwaiq — Low-Relief 3D Terrain Mapping" },
    status: { ar: "2026", en: "2026" },
    line: { ar: "نفس مسار العمل القابل لإعادة التطبيق على منطقة واسعة ومنبسطة: 3,931 كم² بخرائط ثنائية الأبعاد ومناظر ثلاثية الأبعاد من أربع زوايا، مع ضبط العرض الثلاثي لتظهر الحافّات والأودية الخفيفة بوضوح.", en: "The same reproducible workflow applied to a large, gentle landscape: 3,931 km² mapped in 2D and rendered in 3D from four directions, with the 3D view tuned so subtle escarpments and wadis become readable." },
    highlight: { ar: "3,931 كم² و44 منظرًا ثلاثي الأبعاد", en: "3,931 km², 44 3D views" },
    tools: ["Sentinel-2", "Copernicus DEM", "QGIS", "Python", "Blender"],
    card: { src: "/projects/remote-sensing-3d-terrain-tuwaiq/cover.webp", src720: "/projects/remote-sensing-3d-terrain-tuwaiq/cover-800.webp", w: 1390, h: 464, alt: { ar: "مجسم ثلاثي الأبعاد لمنطقة دراسة طويق مغطى بصورة Sentinel-2 بألوان طبيعية، من منظر الجنوب", en: "3D model of the Tuwaiq study area draped with Sentinel-2 true-colour imagery, seen from the south" }, aspect: "aspect-[16/9]" },
    gallery: [
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-poster.webp", w: 1400, h: 1240, caption: { ar: "ملصق ثلاثي الأبعاد: الألوان الطبيعية والغطاء الأرضي والخضرة", en: "3D poster — true colour, land cover and vegetation greenness" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-elevation.webp", w: 1800, h: 1114, caption: { ar: "الارتفاع من 610 إلى 1,034 م من أربع زوايا (×10)", en: "Elevation 610–1,034 m from four directions (×10)" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-slope.webp", w: 1800, h: 1114, caption: { ar: "الانحدار: أين تمتد واجهات الحافّات", en: "Slope — where the escarpment faces run" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-aspect.webp", w: 1800, h: 1114, caption: { ar: "اتجاه المنحدرات: الاتجاهات مُتحقق منها على التضاريس", en: "Aspect — direction labels verified on the terrain" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-drainage.webp", w: 1800, h: 1114, caption: { ar: "التصريف المحسوب: أين يتركز الجريان", en: "Modelled drainage — where runoff concentrates" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-ndvi.webp", w: 1800, h: 1114, caption: { ar: "NDVI: بقع خضراء متفرقة في منطقة جافة", en: "NDVI — sparse green patches in a dry landscape" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-change.webp", w: 1800, h: 1114, caption: { ar: "التغير 2018→2026: مواقع للتحقق الميداني", en: "Change 2018→2026 — sites for ground verification" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-landcover.webp", w: 1800, h: 1114, caption: { ar: "الغطاء الأرضي (مرجع 2021)", en: "Land cover (2021 reference)" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-contours.webp", w: 1800, h: 1114, caption: { ar: "كنتور كل 50 م على التضاريس ثلاثية الأبعاد", en: "Contours every 50 m on the 3D terrain" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-truecolour.webp", w: 1800, h: 1114, caption: { ar: "ألوان طبيعية، Sentinel-2، 25 مارس 2026", en: "True colour, Sentinel-2, 25 Mar 2026" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-all-maps-contact-sheet.webp", w: 1800, h: 1489, caption: { ar: "كل الخرائط ثلاثية الأبعاد: نظرة عامة", en: "All maps in 3D — overview" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/map-elevation.webp", w: 1800, h: 1272, caption: { ar: "الارتفاع والتظليل", en: "Elevation and shaded relief" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/map-slope.webp", w: 1800, h: 1272, caption: { ar: "الانحدار (درجات)", en: "Slope (degrees)" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/map-ndvi.webp", w: 1800, h: 1272, caption: { ar: "NDVI: 25 مارس 2026", en: "NDVI — 25 Mar 2026" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/map-landcover.webp", w: 1800, h: 1272, caption: { ar: "الغطاء الأرضي (2021)", en: "Land cover (2021)" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/map-change.webp", w: 1800, h: 1272, caption: { ar: "تغير الغطاء النباتي 2018→2026", en: "Vegetation change 2018→2026" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/map-drainage.webp", w: 1800, h: 1272, caption: { ar: "التصريف المحتمل (محسوب)", en: "Potential drainage (modelled)" } },
      { src: "/projects/remote-sensing-3d-terrain-tuwaiq/map-truecolour.webp", w: 1800, h: 1272, caption: { ar: "ألوان طبيعية، Sentinel-2", en: "True colour, Sentinel-2" } },
    ],
    details: {
      fullTitle: { ar: "تضاريس منخفضة بثلاثة أبعاد: الاستشعار عن بعد لدعم القرار والمسوحات الميدانية — طويق، منطقة الرياض", en: "Low-Relief Terrain in 3D: Remote Sensing for Field Survey Planning — Tuwaiq, Riyadh Region" },
      meta: [{ ar: "الاستشعار عن بعد", en: "Remote Sensing" }, { ar: "منطقة الرياض، المملكة العربية السعودية", en: "Riyadh Region, Saudi Arabia" }, { ar: "محلل منفرد: جمع البيانات والمعالجة والإخراج الخرائطي والتمثيل ثلاثي الأبعاد", en: "Sole analyst: data acquisition, processing, cartography and 3D visualization" }],
      metrics: [
        { value: "3,931 km²", label: { ar: "مساحة منطقة الدراسة", en: "study area mapped" } },
        { value: "12", label: { ar: "منتجاً خرائطياً", en: "map products" } },
        { value: "44", label: { ar: "منظراً ثلاثي الأبعاد (11 خريطة × 4 اتجاهات)", en: "3D views (11 maps × 4 directions)" } },
        { value: "×10", label: { ar: "مبالغة رأسية معلنة لفرق ارتفاع 424 م", en: "stated vertical exaggeration for a 424 m relief" } },
        { value: "72%", label: { ar: "من المنطقة بانحدار أقل من 5°", en: "of the area on slopes below 5°" } },
      ],
      sections: [
        { title: { ar: "نظرة عامة", en: "Overview" }, body: { ar: "تطبيق ثانٍ لمسار عملي في الاستشعار عن بعد (QGIS + Python + Blender) الذي بنيته أولاً على جبل شدا الأعلى. طويق حالة معاكسة: منطقة واسعة (3,931 كم²) ومعظمها منبسط، وفرق الارتفاع فيها 424 م فقط. أنتج المسار خرائط التضاريس والغطاء النباتي والغطاء الأرضي والتغير والتصريف، وملف PDF جاهز للطباعة لكل خريطة، ومناظر ثلاثية الأبعاد من الشمال والشرق والجنوب والغرب.", en: "A second application of my QGIS + Python + Blender remote-sensing workflow, first built on Jabal Shada al-A'la. Tuwaiq is the opposite case: a large (3,931 km²), mostly gentle landscape where relief is only 424 m. The workflow produced terrain, vegetation, land-cover, change and drainage maps, one print-ready PDF per map, and 3D views from north, east, south and west." } },
        { title: { ar: "التحدي", en: "Challenge" }, body: { ar: "في التضاريس المنخفضة يبدو العرض الثلاثي العادي مسطحاً، فتختفي الحافّات والأودية وانكسارات المنحدرات، مع أنها تتحكم في الوصول والتصريف وأماكن بقاء الغطاء النباتي. كان المطلوب ضبط العرض الثلاثي ليُقرأ بوضوح دون إخفاء أنه مُبالغ فيه.", en: "In low-relief terrain a standard 3D view looks flat: escarpments, wadis and slope breaks disappear, yet they still control access, drainage and where vegetation persists. The 3D settings had to make subtle terrain readable without hiding that it is exaggerated." } },
        { title: { ar: "المنهج", en: "Approach" }, list: { ar: ["بيانات مفتوحة: نموذج الارتفاع Copernicus DEM GLO-30، وصور Sentinel-2 L2A (25 مارس 2026 و22 مارس 2018 في نفس الموسم)، وESA WorldCover 2021.", "اختيار المشاهد بقياس السحب والظلال داخل منطقة الدراسة نفسها (≤0.001% بكسلات غير صالحة)، مع تجميع Sentinel-2 إلى 20 م لاتساع المنطقة.", "اشتقاق الارتفاع والانحدار والاتجاه والكنتور وNDVI وSAVI وNDMI والغطاء الأرضي وتغير الغطاء النباتي 2018–2026 وشبكة تصريف محسوبة (عتبة 5 كم²).", "ضبط العرض الثلاثي للتضاريس المنخفضة: مبالغة رأسية ×10، وكاميرا منخفضة (20°)، وإضاءة عرض منخفضة (20°)، وتنعيم للعرض فقط، وكلها معلنة على كل منظر.", "ملف PDF بمقاس A3 لكل خريطة (خريطة ثنائية الأبعاد + صفحة المناظر الأربعة) مع أطلس كامل."], en: ["Open data: Copernicus DEM GLO-30, Sentinel-2 L2A (25 Mar 2026 and 22 Mar 2018, same season) and ESA WorldCover 2021.", "Scene choice by cloud and shadow measured inside the study area (≤0.001% invalid pixels); Sentinel-2 aggregated to 20 m for this large area.", "Derived elevation, slope, aspect, contours, NDVI, SAVI, NDMI, land cover, 2018–2026 vegetation change and a modelled drainage network (5 km² channel threshold).", "3D tuned for low relief: ×10 vertical exaggeration, low camera (20°) and low display light (20°), display-only mesh smoothing — all stated on every view.", "One A3 PDF per map (2D layout + 3D four-view page) and a full atlas."] } },
        { title: { ar: "لماذا ثلاثي الأبعاد للميدان", en: "Why 3D for the field" }, list: { ar: ["يجعل الحافّات مقروءة: حوالي 1% فقط من المنطقة أشد من 30°، والمناظر الثلاثية توضح أين تمتد هذه الواجهات بالضبط، وهذا مهم لتحديد طرق وصول آمنة.", "نموذج التصريف (حوالي 1,615 كم من المجاري المحتملة داخل الحدود) يوضح أين يتركز الجريان، وهي ممرات محتملة للغطاء النباتي وخطوط وصول طبيعية.", "البقع النباتية الصغيرة (غطاء شجري 0.4%) تبرز أمام الأرض الجرداء، مما يساعد في توجيه مواقع العينات في منطقة 96% منها جرداء أو بنبات متفرق.", "مواقع التغير 2018–2026 (زيادة قابلة للرصد 1.8%، وانخفاض 0.9%) تعطي قائمة قصيرة لمواقع التحقق الميداني."], en: ["Makes the escarpments readable: only ~1% of the area is steeper than 30°, and the 3D views show exactly where those faces run — key for safe access routes.", "The drainage model (≈1,615 km of potential channels inside the boundary) shows where runoff concentrates — likely corridors for vegetation and natural access lines.", "Small vegetated patches (tree cover 0.4%) stand out against bare ground, helping target plots in a landscape that is 96% bare or sparsely vegetated.", "2018–2026 change hotspots (1.8% detectable increase, 0.9% decrease) give a short list of sites for ground verification."] } },
        { title: { ar: "أبرز النتائج", en: "Key findings" }, list: { ar: ["الارتفاع من 610 إلى 1,034 م (فرق 424 م)، ومتوسط الانحدار 5.0°، و71.6% من المنطقة بانحدار أقل من 5°.", "الغطاء الأرضي 2021: أرض جرداء أو نبات متفرق 96.3%، ومناطق عمرانية 2.6%، وزراعية 0.5%، وغطاء شجري 0.4%، وشجيرات 0.2%.", "الخضرة منخفضة عموماً (وسيط NDVI 0.071 في مارس 2026)، ومتوسط NDVI لفئة الغطاء الشجري 0.50.", "بين 2018 و2026 (نفس الموسم): زيادة قابلة للرصد في NDVI على 1.8% من المنطقة، وانخفاض على 0.9%، ولا تغير قابل للرصد على 97.4% (عتبة ±0.05 من ضجيج مقاس). وبكسلات الغطاء الشجري فيها زيادة قابلة للرصد على 62.8% من مساحتها."], en: ["Elevation 610–1,034 m (424 m relief); mean slope 5.0°, 71.6% of the area below 5°.", "Land cover 2021: bare/sparse vegetation 96.3%, built-up 2.6%, cropland 0.5%, tree cover 0.4%, shrubland 0.2%.", "Vegetation greenness is low overall (median NDVI 0.071 in March 2026); WorldCover tree cover has mean NDVI 0.50.", "2018→2026 (same season): detectable NDVI increase on 1.8% of the area, decrease on 0.9%, no detectable change on 97.4% (threshold ±0.05 from measured noise). Tree-cover pixels show a detectable increase on 62.8% of their area."] } },
        { title: { ar: "المعايير العلمية", en: "Scientific standards" }, body: { ar: "مصادر بيانات موثقة؛ نموذج الارتفاع مُتحقق منه مقابل Copernicus GLO-30 الرسمي (RMSE 0.10 م)؛ تطابق الصورة مع التضاريس مُتحقق منه بالارتباط الطوري (1.7 م و0.7 م)؛ التغير يُعلن فقط فوق عتبة ضجيج مقاسة (σ = 0.0074 من 17.4 مليون بكسل ثابت)؛ اتجاهات المناظر الثلاثية محسوبة من الإحداثيات الحقيقية ومختبرة؛ المبالغة الرأسية والتنعيم معلنان على كل منظر؛ وكل خطوة مسجّلة بفحوص PASS/WARNING/FAIL.", en: "Documented data provenance; DEM checked against official Copernicus GLO-30 (RMSE 0.10 m); image–terrain co-registration verified by phase correlation (1.7 m and 0.7 m); change reported only above a measured noise threshold (σ = 0.0074 from 17.4 million invariant pixels); 3D direction labels computed from real coordinates and self-tested; vertical exaggeration and display smoothing stated on every 3D view; every step logged with PASS/WARNING/FAIL checks." } },
        { title: { ar: "حدود الدراسة", en: "Limitations" }, body: { ar: "حدود منطقة الدراسة محددة من قبلي وليست الحدود الرسمية. المبالغة الرأسية ×10 للوضوح فقط. مؤشرات NDVI وSAVI وNDMI طيفية وليست أنواعاً نباتية أو كتلة حيوية؛ خريطة التغير تقارن تاريخين ولا تنسب أسباباً؛ والتصريف شبكة محتملة محسوبة من نموذج 30 م وليست أودية مسوحة أو خطر سيول.", en: "Study-area boundary defined by the author — not the official boundary. ×10 vertical exaggeration is for readability only. NDVI/SAVI/NDMI are spectral indicators, not species or biomass; the change map compares two dates and does not attribute causes; drainage is a modelled potential network (30 m DSM), not surveyed wadis or flood risk." } },
      ],
      download: { href: "/projects/remote-sensing-3d-terrain-tuwaiq/atlas-tuwaiq-2d-3d.pdf", size: "5.8 MB", label: { ar: "تحميل أطلس الخرائط (PDF، 23 صفحة)", en: "Download the map atlas (PDF, 23 pages)" } },
      credits: "Contains modified Copernicus Sentinel data 2018, 2026. Copernicus DEM GLO-30 © DLR e.V. 2010–2014 and © Airbus Defence and Space GmbH 2014–2018, provided under COPERNICUS by the EU and ESA. ESA WorldCover 2021 v200 (CC BY 4.0).",
    },
  },
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
    id: "native-by-region",
    title: { ar: "محلي في محله", en: "Native by Region" },
    status: { ar: "مقترح تحت الدراسة", en: "Proposal under review" },
    line: {
      ar: "مرجع لاختيار النباتات المحلية المناسبة لكل منطقة، مبني على وحدات المشهد الطبيعي والمجتمعات النباتية، يغني مشاريع التشجير والتنسيق وإعادة التأهيل عن تكرار دراسات اختيار النباتات لكل مشروع.",
      en: "A reference for choosing the right native plants for each region, built on landscape units and plant communities, so greening, landscaping and rehabilitation projects no longer repeat plant-selection studies each time.",
    },
    tools: ["Landscape units", "Plant communities", "R", "QGIS"],
    card: { src: "/maps/native-identity.webp", src720: "/maps/native-identity-720.webp", w: 924, h: 693, alt: { ar: "شعار المشروع ونبات الصبار في موطنه", en: "Project identity with aloe in its native habitat" } },
    gallery: [
      { src: "/maps/native-identity.webp", w: 924, h: 693, caption: { ar: "هوية المشروع", en: "Project identity" } },
      { src: "/maps/native-riyadh-full.webp", w: 2417, h: 2400, caption: { ar: "منطقة الرياض: وحدات المشهد الطبيعي", en: "Riyadh region: landscape units" } },
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
  { group: { ar: "التمثيل ثلاثي الأبعاد", en: "3D visualization" }, tools: ["Blender (Cycles)", "GDAL", "NumPy", "Matplotlib"], usedIn: { ar: "جبل شدا وطويق ثلاثي الأبعاد", en: "Jabal Shada and Tuwaiq 3D" } },
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
    period: { ar: "نوفمبر 2026 – الآن", en: "Nov 2026 – present" },
    role: { ar: "مطوّر قاعدة بيانات نباتية (تطوعي)", en: "Botanical Database Developer (Volunteer)" },
    org: { ar: "المركز الوطني لتنمية الغطاء النباتي ومكافحة التصحر، الرياض", en: "National Center for Vegetation Cover Development and Combating Desertification (NCVC), Riyadh" },
    points: [
      { ar: "تطوير لوحة تفاعلية لإدارة البيانات النباتية وعرضها واستكشافها.", en: "Developed an interactive dashboard for managing, visualizing and exploring botanical data." },
      { ar: "معالجة البيانات النباتية وتنقيحها وتوحيدها، ومطابقة الأسماء العلمية مع المراجع التصنيفية المعتمدة.", en: "Processed, cleaned and standardized botanical datasets, aligning scientific names with recognized taxonomic references." },
      { ar: "مراجعة المراجع والكتب والأوصاف التاريخية للأنواع ورقمنتها، وتحويل مواقع النباتات الموثقة إلى بيانات مكانية للتحليل ورسم الخرائط.", en: "Reviewed and digitized botanical literature and historical species descriptions, turning documented plant locations into geospatial data." },
    ],
  },
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

export const photoCredits = "Cover and closing: dragon's blood trees, Socotra, by Andrew Svk (Unsplash). Field and plants: Abdullah Alsumairi. Landscapes: Unsplash (Rikaz Basyouni, Mustafa Ahmed, Satishaa Javali, Glenov Brankovic, M K, Ayman Mokhtar)";

export const ui = {
  nav: { maps: { ar: "الأعمال", en: "Work" }, services: { ar: "مجالات التعاون", en: "Collaboration" }, about: { ar: "عني", en: "About" }, contact: { ar: "تواصل", en: "Contact" } },
  langSwitch: { ar: "English", en: "العربية" },
  langHref: { ar: "/en/", en: "/" },
  available: { ar: "متاح للتعاون", en: "Open to collaboration" },
  fieldBadge: { ar: "من الميدان", en: "In the field" },
  mapsBadge: { ar: "خريطة منجزة", en: "maps produced" },
  paperBadge: { ar: "بحث منشور 2026", en: "Published 2026" },
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
  atlas: { ar: "PORTFOLIO", en: "PORTFOLIO" },
  layers: { ar: "الطبقات", en: "Layers" },
  mapsWord: { ar: "خرائط", en: "maps" },
  details: { ar: "تفاصيل المشروع", en: "Project details" },
  dataCredits: { ar: "مصادر البيانات", en: "Data credits" },
  expSkills: { ar: "الخبرة والمهارات", en: "Experience & skills" },
  researchCerts: { ar: "الأبحاث والشهادات", en: "Research & certifications" },
  thanks: { ar: "شكرًا", en: "Thank you" },
  menu: { ar: "القائمة", en: "Menu" },
  backTop: { ar: "إلى الأعلى", en: "Back to top" },
  skip: { ar: "انتقل إلى المحتوى", en: "Skip to content" },
  all: { ar: "الكل", en: "All" },
  showAll: { ar: "عرض كل الخرائط", en: "Show all maps" },
  showLess: { ar: "عرض أقل", en: "Show less" },
};
