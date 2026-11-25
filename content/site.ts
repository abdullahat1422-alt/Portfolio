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
    id: "imam-abdulrahman-reserve",
    title: { ar: "محمية الإمام عبدالرحمن بن فيصل", en: "Imam Abdulrahman bin Faisal Reserve" },
    status: { ar: "2026", en: "2026" },
    line: { ar: "لا توجد حدود رقمية منشورة للمحمية، فأعدت بناء حدودها التقريبية من صورة الخريطة الرسمية مع قياس دقتها (±547 م عند 68%)، ثم بنيت أطلس خط أساس بيئي من 12 خريطة ثنائية وثلاثية الأبعاد، كله من بيانات مفتوحة وبرمجيات Python.", en: "The reserve had no public digital boundary, so I rebuilt an approximate one from the official map image with a measured uncertainty (±547 m at 68%), then built a 12-map ecological baseline atlas in 2D and 3D, entirely from open data and scripted Python." },
    highlight: { ar: "4,323.8 كم² · 12 خريطة", en: "4,323.8 km² · 12 maps" },
    tools: ["Sentinel-2", "Copernicus DEM", "Python", "GDAL", "OpenCV", "Blender"],
    credit: { ar: "حدود تقريبية أعيد بناؤها من خريطة الهيئة الملكية لمدينة الرياض، وليست الحدود الرسمية، ولا تُستخدم لأغراض قانونية أو مساحية أو تنظيمية. شبكة التصريف منمذجة وليست مسوحة.", en: "Approximate boundary reconstructed from the RCRC official map — not the official boundary; not for legal, cadastral or regulatory use. Modelled drainage is not surveyed." },
    card: { src: "/projects/imam-abdulrahman-reserve/cover-3d-overview.webp", src720: "/projects/imam-abdulrahman-reserve/cover-3d-overview.webp", w: 2000, h: 1287, alt: { ar: "منظر ثلاثي الأبعاد شامل: الألوان الطبيعية والغطاء الأرضي وNDVI على نفس التضاريس، محمية الإمام عبدالرحمن بن فيصل", en: "3D overview: true colour, land cover and NDVI on the same terrain — Imam Abdulrahman bin Faisal Reserve" }, aspect: "aspect-[14/9]" },
    gallery: [
      { src: "/projects/imam-abdulrahman-reserve/cover-3d-overview.webp", w: 2000, h: 1287, caption: { ar: "منظر ثلاثي الأبعاد شامل: الألوان الطبيعية والغطاء الأرضي وNDVI على نفس التضاريس", en: "3D overview: true colour, land cover and NDVI on the same terrain" } },
      { src: "/projects/imam-abdulrahman-reserve/boundary/01-location.webp", w: 1800, h: 1273, caption: { ar: "حدود · الموقع في منطقة الرياض", en: "Boundary · Location in the Riyadh Region" } },
      { src: "/projects/imam-abdulrahman-reserve/boundary/02-reconstructed-boundary.webp", w: 1800, h: 1273, caption: { ar: "حدود · الحدود المعاد بناؤها", en: "Boundary · Reconstructed boundary" } },
      { src: "/projects/imam-abdulrahman-reserve/boundary/03-official-vs-reconstructed.webp", w: 1800, h: 1273, caption: { ar: "حدود · الخريطة الرسمية مقابل الحدود المعاد بناؤها", en: "Boundary · Official map vs reconstructed boundary" } },
      { src: "/projects/imam-abdulrahman-reserve/boundary/04-control-points.webp", w: 1800, h: 1273, caption: { ar: "حدود · نقاط الضبط الأرضي ونقاط التحقق", en: "Boundary · Ground-control and check points" } },
      { src: "/projects/imam-abdulrahman-reserve/boundary/05-uncertainty.webp", w: 1800, h: 1273, caption: { ar: "حدود · نطاقات عدم اليقين الموضعي (68% / 95%)", en: "Boundary · Positional uncertainty bands (68% / 95%)" } },
      { src: "/projects/imam-abdulrahman-reserve/boundary/06-satellite-overview.webp", w: 1800, h: 1273, caption: { ar: "حدود · نظرة عامة من الأقمار الصناعية", en: "Boundary · Satellite overview" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m01-true-colour.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M01 الألوان الطبيعية (Sentinel-2، نوفمبر 2026)", en: "2D · M01 True colour (Sentinel-2, Nov 2026)" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m03-elevation-hillshade.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M03 الارتفاع مع التظليل (Copernicus DEM GLO-30)", en: "2D · M03 Elevation with hillshade (Copernicus DEM GLO-30)" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m04-slope-classes.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M04 فئات الانحدار", en: "2D · M04 Slope classes" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m05-aspect.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M05 اتجاه السفوح", en: "2D · M05 Aspect" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m06-contours.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M06 خطوط الكنتور (50 م، ورئيسية كل 250 م)", en: "2D · M06 Contours (50 m, 250 m index)" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m07-ndvi.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M07 مؤشر NDVI (نوفمبر 2026)", en: "2D · M07 NDVI (Nov 2026)" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m08-savi.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M08 مؤشر SAVI (L = 0.5)", en: "2D · M08 SAVI (L = 0.5)" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m09-ndmi.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M09 مؤشر NDMI (الرطوبة)", en: "2D · M09 NDMI (moisture index)" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m10-land-cover.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M10 الغطاء الأرضي (ESA WorldCover 2021)", en: "2D · M10 Land cover (ESA WorldCover 2021)" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m11-vegetation-change.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M11 تغيّر الغطاء النباتي 2019→2026 (ΔNDVI مصحّح)", en: "2D · M11 Vegetation change 2019→2026 (bias-corrected ΔNDVI)" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-2d/m12-drainage.webp", w: 1800, h: 1272, caption: { ar: "ثنائي الأبعاد · M12 شبكة التصريف المنمذجة فوق الألوان الطبيعية", en: "2D · M12 Modelled drainage over true colour" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m01-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M01 الألوان الطبيعية (Sentinel-2، نوفمبر 2026) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M01 True colour (Sentinel-2, Nov 2026) — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m01-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M01 الألوان الطبيعية (Sentinel-2، نوفمبر 2026) — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M01 True colour (Sentinel-2, Nov 2026) — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m03-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M03 الارتفاع مع التظليل (Copernicus DEM GLO-30) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M03 Elevation with hillshade (Copernicus DEM GLO-30) — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m03-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M03 الارتفاع مع التظليل (Copernicus DEM GLO-30) — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M03 Elevation with hillshade (Copernicus DEM GLO-30) — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m04-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M04 فئات الانحدار — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M04 Slope classes — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m04-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M04 فئات الانحدار — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M04 Slope classes — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m05-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M05 اتجاه السفوح — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M05 Aspect — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m05-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M05 اتجاه السفوح — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M05 Aspect — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m06-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M06 خطوط الكنتور (50 م، ورئيسية كل 250 م) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M06 Contours (50 m, 250 m index) — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m06-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M06 خطوط الكنتور (50 م، ورئيسية كل 250 م) — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M06 Contours (50 m, 250 m index) — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m07-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M07 مؤشر NDVI (نوفمبر 2026) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M07 NDVI (Nov 2026) — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m07-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M07 مؤشر NDVI (نوفمبر 2026) — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M07 NDVI (Nov 2026) — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m08-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M08 مؤشر SAVI (L = 0.5) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M08 SAVI (L = 0.5) — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m08-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M08 مؤشر SAVI (L = 0.5) — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M08 SAVI (L = 0.5) — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m09-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M09 مؤشر NDMI (الرطوبة) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M09 NDMI (moisture index) — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m09-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M09 مؤشر NDMI (الرطوبة) — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M09 NDMI (moisture index) — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m10-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M10 الغطاء الأرضي (ESA WorldCover 2021) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M10 Land cover (ESA WorldCover 2021) — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m10-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M10 الغطاء الأرضي (ESA WorldCover 2021) — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M10 Land cover (ESA WorldCover 2021) — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m11-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M11 تغيّر الغطاء النباتي 2019→2026 (ΔNDVI مصحّح) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M11 Vegetation change 2019→2026 (bias-corrected ΔNDVI) — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m11-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M11 تغيّر الغطاء النباتي 2019→2026 (ΔNDVI مصحّح) — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M11 Vegetation change 2019→2026 (bias-corrected ΔNDVI) — 3D views from east & west" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m12-3d-p1.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M12 شبكة التصريف المنمذجة فوق الألوان الطبيعية — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "3D · M12 Modelled drainage over true colour — 3D views from north & south" } },
      { src: "/projects/imam-abdulrahman-reserve/maps-3d/m12-3d-p2.webp", w: 1800, h: 1273, caption: { ar: "ثلاثي الأبعاد · M12 شبكة التصريف المنمذجة فوق الألوان الطبيعية — مناظر ثلاثية الأبعاد من الشرق والغرب", en: "3D · M12 Modelled drainage over true colour — 3D views from east & west" } },
    ],
    details: {
      fullTitle: { ar: "محمية الإمام عبدالرحمن بن فيصل — إعادة بناء الحدود وأطلس خط الأساس البيئي", en: "Imam Abdulrahman bin Faisal Reserve — Boundary Reconstruction & Ecological Baseline Atlas" },
      meta: [{ ar: "GIS · الاستشعار عن بعد · نمذجة التضاريس والهيدرولوجيا · الخرائط ثلاثية الأبعاد", en: "GIS · Remote sensing · Terrain & hydrological modelling · 3D cartography" }, { ar: "منطقة الرياض (ضرما / المزاحمية)", en: "Riyadh Region, Saudi Arabia (Dhurma / Al-Muzahimiyah)" }, { ar: "استشاري GIS واستشعار عن بعد (محلل منفرد)", en: "GIS & remote-sensing consultant (sole analyst)" }],
      metrics: [
        { value: "4,323.8", label: { ar: "كم² المساحة المعاد بناؤها (الرسمية 4,310، +0.32%)", en: "km² reconstructed area (official 4,310, +0.32%)" } },
        { value: "±547 m", label: { ar: "عدم اليقين الموضعي عند 68% (±1,073 م عند 95%)", en: "positional uncertainty at 68% (±1,073 m at 95%)" } },
        { value: "12", label: { ar: "خريطة خط أساس بيئي ثنائية وثلاثية الأبعاد", en: "baseline maps in 2D and 3D" } },
        { value: "3,710 km", label: { ar: "قنوات تصريف منمذجة", en: "of modelled channels" } },
        { value: "44/44", label: { ar: "اختبار ذاتي لاتجاهات المناظر ثلاثية الأبعاد", en: "3D direction self-tests passed" } },
      ],
      sections: [
        { title: { ar: "نظرة عامة", en: "Summary" }, body: { ar: "لم تكن للمحمية حدود رقمية منشورة، وكل المتاح صورة خريطة رسمية. أعدت بناء حدود تقريبية من تلك الصورة وقست دقتها، وفوقها أنتجت أطلس خط أساس بيئي من 12 خريطة: صور الأقمار الصناعية، والتضاريس، ومؤشرات الغطاء النباتي، والغطاء الأرضي، وتغيّر الغطاء النباتي خلال سبع سنوات، وشبكة التصريف المنمذجة، وكل خريطة ثنائية الأبعاد ومع مناظر ثلاثية الأبعاد من أربعة اتجاهات. سير العمل كله ببيانات مفتوحة وبرمجيات Python، وكل رقم على الخرائط يمكن تتبعه إلى خطوة معالجة موثقة.", en: "The reserve had no public digital boundary. Only an official map image was available. I rebuilt an approximate boundary from that image and measured how accurate it is. On top of it I produced a 12-map ecological baseline atlas, from satellite imagery, terrain, vegetation indices, land cover, seven-year vegetation change and modelled drainage, with every map in 2D and in four-direction 3D views. The whole workflow uses open data and scripted Python, and every figure on the maps can be traced back to a logged processing step." } },
        { title: { ar: "المشكلة", en: "The problem" }, list: {
          ar: ["الخريطة الرسمية من الهيئة الملكية لمدينة الرياض تعرض المحمية كصورة منسّقة بدون إحداثيات.", "كانت هناك حاجة لطبقة GIS قابلة للاستخدام في التخطيط وأعمال خط الأساس، مع بيان صادق لعدم اليقين الموضعي.", "كان يجب أن يكون خط الأساس قابلاً لإعادة الإنتاج من بيانات مجانية ومفتوحة الترخيص فقط."],
          en: ["The official RCRC map shows the reserve as a styled image with no coordinates.", "A usable GIS layer was needed for planning and baseline work, with an honest statement of positional uncertainty.", "The baseline had to be reproducible from free, openly licensed data only."],
        } },
        { title: { ar: "الجزء الأول: إعادة بناء الحدود", en: "Part A: boundary reconstruction" }, list: {
          ar: ["إرجاع جغرافي للخريطة الرسمية بنظام ضبط هجين: 18 تطابقاً تضاريسياً (مطابقة ألوان الخريطة مع ارتفاعات Copernicus بالارتباط المتقاطع المعياري) و3 تطابقات تقاطع طرق، بنموذج تحويل أفيني.", "استخراج خط الحدود بطريقتين مستقلتين (خط مركزي من قناع لوني، وتتبع حلقات الهيكل) والمقارنة بينهما، وأقصى فرق كان 117 م.", "ميزانية عدم يقين كاملة (الإرجاع الجغرافي، وعرض الخط، والترقيم)، مع نقاط تحقق مستقلة واختبار الاستبعاد الواحد وإعادة المعاينة وحساسية اختيار التحويل.", "تسليم الحدود بصيغ KMZ وKML وGeoJSON وGeoPackage، مع نطاقات عدم يقين 68% و95%."],
          en: ["Georeferenced the official map with a hybrid control scheme: 18 terrain matches (map tint matched against Copernicus elevation by normalised cross-correlation) plus 3 road-junction matches, fitted with an affine model.", "Extracted the boundary line two independent ways (a colour-mask centreline and a skeleton-cycle trace) and cross-checked them. The maximum difference was 117 m.", "Ran a full uncertainty budget (georeferencing, line width, digitisation), with independent checkpoints, leave-one-out testing, bootstrap resampling and sensitivity to the choice of transform.", "Delivered the boundary as KMZ, KML, GeoJSON and GeoPackage, with 68% and 95% uncertainty bands."],
        } },
        { title: { ar: "الجزء الثاني: خط الأساس البيئي من 12 خريطة", en: "Part B: 12-map ecological baseline" }, list: {
          ar: ["صور Sentinel-2 L2A لنوفمبر 2026 مع خط أساس نوفمبر 2019، باختيار المشاهد بترتيب آلي حسب الغيوم ومطابقة التاريخين مكانياً.", "منتجات التضاريس من Copernicus DEM GLO-30: الارتفاع، وفئات الانحدار، واتجاه السفوح، وخطوط الكنتور، وتظليل متعدد الاتجاهات.", "مؤشرات الغطاء النباتي NDVI وSAVI وNDMI.", "الغطاء الأرضي من ESA WorldCover 2021.", "رصد التغيّر بـΔNDVI مصحّح للانحياز ومعايَر على معالم ثابتة.", "نموذج هيدرولوجي: معالجة المنخفضات، وتدفق D8، وتراكم الجريان، وترتيب Strahler. القنوات التي تعبر منخفضات كثبان مملوءة مُعلَّمة كمعرّضة للخطأ، والقنوات المنمذجة تم التحقق منها مقابل الأودية المسماة في OpenStreetMap.", "تمثيل ثلاثي الأبعاد في Blender على كتلة مقصوصة بشكل المحمية: مناظر متعامدة من الشمال والشرق والجنوب والغرب بمقياس موحد، مع اختبارات ذاتية آلية لكل تسمية اتجاه."],
          en: ["Sentinel-2 L2A imagery for November 2026, with a November 2019 baseline. Scenes were selected by scripted cloud ranking and the two dates were co-registered.", "Terrain products from Copernicus DEM GLO-30: elevation, slope classes, aspect, contours and multi-direction hillshade.", "Vegetation indices NDVI, SAVI and NDMI.", "ESA WorldCover 2021 land cover.", "Bias-corrected ΔNDVI change detection, normalised on pseudo-invariant features.", "Hydrological model: priority-flood depression handling, D8 flow, flow accumulation and Strahler ordering. Channels crossing filled dune depressions are flagged as artefact-prone, and the modelled channels were validated against named wadis in OpenStreetMap.", "3D rendering in Blender on a slab cut to the reserve's shape: orthographic views from N, E, S and W, all at one common scale, with automated self-tests that check every direction label."],
        } },
        { title: { ar: "أبرز النتائج", en: "Key results" }, list: {
          ar: ["المساحة المعاد بناؤها 4,323.8 كم² (الرقم الرسمي 4,310 كم²، +0.32%)، والمحيط 410.3 كم.", "خطأ نقاط التحقق RMSE 654 م، وعدم اليقين ±547 م (68%) / ±1,073 م (95%)، بدرجة ثقة متوسطة.", "التضاريس داخل المحمية 650 م (434–1,084 م فوق سطح البحر)، و72.8% من المساحة بانحدار أقل من 5°.", "الغطاء الأرضي: 95.3% أرض جرداء أو غطاء نباتي متناثر، و2.2% أراضٍ زراعية، و1.5% مناطق عمرانية.", "تغيّر الغطاء النباتي 2019→2026: زيادة 3.19% (13,783 هكتار)، ونقص 2.04% (8,825 هكتار)، و94.8% مستقر.", "قنوات منمذجة بطول 3,710 كم، وكثافة تصريف 0.86 كم/كم²، وأعلى رتبة Strahler 6.", "التحقق من القنوات (الوسيط من أودية OSM): حنيفة 26 م، والأوسط 26 م، ونساح 128 م."],
          en: ["Reconstructed area 4,323.8 km² (official figure 4,310 km², +0.32%); perimeter 410.3 km.", "Georeferencing checkpoint RMSE 654 m; positional uncertainty ±547 m (68%) / ±1,073 m (95%), confidence moderate.", "Relief inside the reserve 650 m (434–1,084 m a.s.l.); 72.8% of the terrain has slope under 5°.", "Land cover (WorldCover 2021): 95.3% bare / sparse vegetation, 2.2% cropland, 1.5% built-up.", "Vegetation change 2019→2026: 3.19% increase (13,783 ha), 2.04% decrease (8,825 ha), 94.8% stable.", "3,710 km of modelled channels, drainage density 0.86 km/km², max Strahler order 6.", "Channel validation (median offset from OSM wadis): Hanifa 26 m · Al-Awsat 26 m · Nisah 128 m."],
        } },
        { title: { ar: "المخرجات (غير منشورة)", en: "Deliverables (not public)" }, body: { ar: "حزمة الحدود (KMZ وGeoJSON وGeoPackage ونطاقات عدم اليقين وتقرير التحقق)، وست خرائط للحدود، و11 خريطة موضوعية ثنائية الأبعاد (A3)، و22 صفحة مناظر ثلاثية الأبعاد مع ملصق شامل، وسجلات معالجة وتقرير فني لكل مرحلة. الصور المعروضة هنا معاينات بعلامة مائية للعرض فقط.", en: "Boundary package (KMZ, GeoJSON, GeoPackage, uncertainty bands and validation report), six boundary maps, 11 thematic 2D maps (A3) and 22 pages of 3D views plus a 3D overview poster, and processing logs and a technical report for each phase. The images shown here are watermarked, view-only previews." } },
        { title: { ar: "إخلاء مسؤولية", en: "Disclaimer" }, body: { ar: "حدود تقريبية أعيد بناؤها من خريطة الهيئة الملكية لمدينة الرياض، وليست الحدود الرسمية، ولا تُستخدم لأغراض قانونية أو مساحية أو تنظيمية. شبكة التصريف منمذجة وليست مسوحة.", en: "Approximate boundary reconstructed from the RCRC official map. It is not the official boundary and is not for legal, cadastral or regulatory use. The modelled drainage is not surveyed." } },
      ],
      credits: "Contains modified Copernicus Sentinel data 2019, 2026. Copernicus DEM GLO-30 © DLR e.V. 2010–2014 and © Airbus Defence and Space GmbH 2014–2018, provided under COPERNICUS by the EU and ESA. ESA WorldCover 2021 v200 (CC BY 4.0). OpenStreetMap contributors (ODbL). Boundary source: RCRC official map.",
    },
  },
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
      credits: "Contains modified Copernicus Sentinel data 2018, 2026. Copernicus DEM GLO-30 © DLR e.V. 2010–2014 and © Airbus Defence and Space GmbH 2014–2018, provided under COPERNICUS by the EU and ESA. ESA WorldCover 2021 v200 (CC BY 4.0).",
    },
  },
  {
    id: "riyadh-rainfall-dynamics",
    title: { ar: "ديناميكيات الأمطار في منطقة الرياض (⁦1981–2025⁩)", en: "Riyadh Rainfall Dynamics (1981–2025)" },
    status: { ar: "2026 · تطبيق مباشر", en: "2026 · Live app" },
    line: {
      ar: "خريطة ثلاثية الأبعاد تفاعلية لأمطار منطقة الرياض على مدى 45 عاماً، مبنية من 540 شبكة شهرية لبيانات الأمطار (أقمار صناعية ومحطات)، مع عرض سنوي وفصلي.",
      en: "An interactive 3D map of 45 years of rainfall across the Riyadh Region, built from 540 monthly satellite-and-station rainfall grids, with yearly and seasonal views.",
    },
    highlight: { ar: "1,629 سداسياً · 45 عاماً", en: "1,629 hexagons · 45 years" },
    tools: ["CHIRPS v3", "Python", "H3", "deck.gl", "Next.js", "TypeScript"],
    link: { href: "https://riyadh-rainfall-dynamics.vercel.app", label: { ar: "افتح التطبيق المباشر", en: "Open the live app" } },
    card: { src: "/projects/riyadh-rainfall-dynamics/hero_desktop_en_1997.webp", src720: "/projects/riyadh-rainfall-dynamics/hero-800.webp", w: 1600, h: 1000, alt: { ar: "خريطة سداسيات ثلاثية الأبعاد لمنطقة الرياض تعرض أمطار عام 1997؛ الأعمدة الزرقاء الطويلة تمثل مناطق أرطب بكثير من معدلها للفترة ⁦1991–2020⁩.", en: "3D hexagon map of the Riyadh Region showing annual rainfall in 1997; tall blue columns mark areas much wetter than their 1991–2020 normal." }, aspect: "aspect-[16/10]" },
    gallery: [
      { src: "/projects/riyadh-rainfall-dynamics/hero_desktop_en_1997.webp", w: 1600, h: 1000, caption: { ar: "العرض السنوي، 1997 (الواجهة الإنجليزية)", en: "Annual view, 1997 (English interface)" } },
      { src: "/projects/riyadh-rainfall-dynamics/desktop_ar_winter_2018.webp", w: 1600, h: 1000, caption: { ar: "الواجهة العربية: شتاء 2018 (ديسمبر 2017 – فبراير 2018)", en: "Arabic interface: winter 2018 (Dec 2017 – Feb 2018)" } },
      { src: "/projects/riyadh-rainfall-dynamics/desktop_en_spring_1997_cell.webp", w: 1600, h: 1000, caption: { ar: "عرض الربيع مع سداسي محدد وسجله على 45 عاماً", en: "Spring view with a selected hexagon and its 45-year history" } },
      { src: "/projects/riyadh-rainfall-dynamics/mobile_en_2016.webp", w: 780, h: 1688, caption: { ar: "تصميم الجوال، الواجهة الإنجليزية (2016)", en: "Phone layout, English (2016)" } },
      { src: "/projects/riyadh-rainfall-dynamics/mobile_ar_1997.webp", w: 780, h: 1688, caption: { ar: "تصميم الجوال، الواجهة العربية (1997)", en: "Phone layout, Arabic (1997)" } },
    ],
    details: {
      fullTitle: { ar: "ديناميكيات الأمطار في منطقة الرياض (⁦1981–2025⁩)", en: "Riyadh Rainfall Dynamics (1981–2025)" },
      meta: [
        { ar: "بيانات المناخ · GIS والتحليل المكاني · تمثيل بيانات تفاعلي ثلاثي الأبعاد", en: "Climate data · GIS / spatial analysis · Interactive 3D data visualization" },
        { ar: "نوفمبر 2026", en: "November 2026" },
        { ar: "المؤلف الوحيد: مسار البيانات، والتحليل المكاني، وضمان الجودة، وتصميم الويب وتطويره", en: "Sole author: data pipeline, spatial analysis, quality assurance, web design and development" },
      ],
      metrics: [
        { value: "45", label: { ar: "عاماً (⁦1981–2025⁩)", en: "years (1981–2025)" } },
        { value: "540", label: { ar: "شبكة أمطار شهرية", en: "monthly rainfall grids" } },
        { value: "1,629", label: { ar: "سداسي H3", en: "H3 hexagons" } },
        { value: "375,553", label: { ar: "كم² مساحة المنطقة", en: "km² region area" } },
        { value: "11/11", label: { ar: "فحص جودة آلي ناجح", en: "automated QA checks passing" } },
      ],
      sections: [
        { title: { ar: "الفكرة", en: "Overview" }, body: { ar: "يرتفع كل سداسي على الخريطة بمقدار مطره، ويصبح أزرق حين تكون السنة أو الفصل أرطب من معدله للفترة ⁦1991–2020⁩، وبنياً حين يكون أجف. يتضمن التطبيق عرض الشتاء والربيع والصيف والخريف، وحركة سلسة بين السنوات، ودعماً كاملاً للعربية والإنجليزية.", en: "Each hexagon on the map rises with its rainfall and turns blue when a year or season is wetter than its own 1991–2020 normal, brown when drier. Includes winter, spring, summer and autumn views, smooth year-to-year animation, and full Arabic/English support." } },
        { title: { ar: "السؤال", en: "The question" }, body: { ar: "كيف تغيّرت الأمطار عبر منطقة الرياض الإدارية كاملة (وليس المدينة فقط) خلال 45 عاماً، وأي المناطق والفصول كانت أرطب أو أجف من المعتاد؟", en: "How has rainfall changed across the whole Riyadh Administrative Region (not just the city) over 45 years, and which areas and seasons were wetter or drier than normal?" } },
        { title: { ar: "البيانات", en: "The data" }, body: { ar: "أمطار CHIRPS الإصدار 3.0 الشهرية النهائية (مركز Climate Hazards، جامعة كاليفورنيا سانتا باربرا؛ شبكة بدقة 5 كم تقريباً) من يناير 1981 إلى ديسمبر 2025: 540 ملفاً شهرياً، كل ملف موثّق برابط مصدره ورمز التحقق، ولا تُستخدم البيانات الأولية أبداً. منطقة الدراسة هي مضلع geoBoundaries ADM1 لمنطقة الرياض (SA-01، بمساحة 375,553 كم²).", en: "CHIRPS v3.0 final monthly rainfall (Climate Hazards Center, UC Santa Barbara; about 5 km grid) for January 1981 to December 2025: 540 monthly files. Every file is logged with its source URL and checksum, and preliminary data is never used. The study area is the geoBoundaries ADM1 polygon for the Riyadh Region (ISO 3166-2 SA-01, 375,553 km²)." } },
        { title: { ar: "المنهج", en: "Method" }, list: {
          ar: ["المجموع السنوي لكل خلية هو مجموع القيم الشهرية الاثنتي عشرة، والخلية الناقصة في أي شهر تُعامل كقيمة مفقودة وليس صفراً.", "1,629 سداسي H3 (الدقة 5، نحو 253 كم² لكل سداسي) تغطي المنطقة، وسداسيات الأطراف مقصوصة بدقة على الحدود.", "قيمة كل سداسي متوسط موزون بالمساحة للخلايا داخله، محسوب في إسقاط متساوي المساحة (EPSG:6933).", "الانحراف يُقاس مقابل معدل كل سداسي نفسه للفترة ⁦1991–2020⁩ (الفترة المعيارية للمنظمة العالمية للأرصاد الجوية).", "الأرقام الإقليمية متوسطات موزونة بالمساحة، وليست مجموع الملليمترات عبر السداسيات.", "الفصول: الشتاء ديسمبر–فبراير (يُنسب لسنة يناير، ⁦1982–2025⁩)، والربيع مارس–مايو، والصيف يونيو–أغسطس، والخريف سبتمبر–نوفمبر، ولكل فصل معدله الخاص. وحين يقل المعدل الفصلي عن 10 مم (أغلب الصيف) لا تُعرض النسب المئوية لأنها غير ذات معنى."],
          en: ["Annual totals per pixel are the sum of the 12 monthly values. A pixel missing in any month is treated as missing, never as zero.", "1,629 H3 hexagons (resolution 5, about 253 km² each) cover the region. Edge hexagons are clipped exactly to the boundary.", "Each hexagon's value is an area-weighted mean of the pixels inside it, computed in an equal-area projection (EPSG:6933).", "Anomalies are measured against each hexagon's own 1991–2020 normal (the WMO standard period).", "Regional figures are area-weighted means, never sums of millimetres across hexagons.", "Seasons: winter = December–February (labelled by the January year, 1982–2025), spring = March–May, summer = June–August, autumn = September–November. Each season has its own normal. Where a seasonal normal is under 10 mm (almost all of summer), percentages are suppressed as not meaningful."],
        } },
        { title: { ar: "ضمان الجودة", en: "Quality assurance" }, list: {
          ar: ["540 طبقة شهرية نهائية بالضبط، مع رموز التحقق.", "لا فجوات ولا تكرار في شبكة السداسيات.", "إعادة اشتقاق المجاميع السنوية بشكل مستقل من البيانات الشهرية.", "إعادة حساب سداسيات وسنوات عشوائية بأوزان مساحة جيوديسية (تطابق ضمن 0.001 مم).", "متوسط الانحراف للفترة ⁦1991–2020⁩ يساوي صفراً.", "المجاميع الفصلية تتطابق تماماً مع المجاميع السنوية.", "قيم ملفات الويب تطابق الجداول الرئيسية."],
          en: ["Exactly 540 final monthly layers, with checksums.", "No gaps or double-counting in the hexagon grid.", "Annual sums re-derived independently from the monthly data.", "Random hexagon-years recomputed independently with geodesic area weights (agreement within 0.001 mm).", "The 1991–2020 mean anomaly equal to zero.", "Seasonal totals reconciling exactly with annual totals.", "Delivered web values matching the master tables."],
        } },
        { title: { ar: "المنتج", en: "The product" }, list: {
          ar: ["أعمدة سداسية منفصلة بتضاريس واضحة، والارتفاع = الأمطار (بحد أقصى 400 مم للرسم فقط، والقيمة الحقيقية تظهر دائماً).", "فئات ألوان ثابتة للانحراف عن المعدل.", "خط زمني سداسي لـ45 عاماً مع تشغيل وخمس سرعات وسحب للتنقل.", "تبديل بين العرض السنوي والشتاء والربيع والصيف والخريف مع أشهر كل فصل.", "بوصلة تتبع دوران الخريطة، ولوحة لكل سداسي بسجله على 45 عاماً.", "روابط قابلة للمشاركة، وواجهة عربية (من اليمين لليسار) وإنجليزية، وتصميم خاص بالجوال، وخيار لتقليل الحركة."],
          en: ["Separate hexagonal columns with clear relief, height = rainfall (capped at 400 mm for drawing only; the true value is always shown).", "Fixed colour classes for the departure from normal.", "A hexagon timeline (45 years) with play, five speeds and drag-to-scrub.", "A switch between annual, winter, spring, summer and autumn, showing each season's months.", "A compass that follows the map rotation, and a cell panel with the cell's own 45-year history.", "Shareable links, Arabic (RTL) and English, a dedicated phone layout, and a reduced-motion option."],
        } },
        { title: { ar: "الهندسة البرمجية", en: "Engineering" }, body: { ar: "حركة مستمرة تعتمد على ساعة سنوات كسرية. تُعاد رسم الخريطة ومؤشر التشغيل فقط في كل إطار، دون حجز ذاكرة لكل إطار ودون انتقاء عبر المعالج الرسومي أثناء تحريك الخريطة، فيعمل التطبيق بسلاسة على الحواسيب والجوالات.", en: "Continuous animation driven by a fractional-year clock. Only the map and the playhead re-render per frame, with no per-frame memory allocation and no GPU picking while the map moves. The result plays smoothly on laptops and phones." } },
        { title: { ar: "حدود الدراسة", en: "Limitations" }, body: { ar: "تدمج CHIRPS تقديرات الأقمار الصناعية مع سجلات محطات متفرقة، فهي تقديرات وليست قراءات مقاييس مطر. التفاصيل المكانية الحقيقية هي شبكة المصدر بدقة 5 كم تقريباً. الحدود مجموعة بيانات مفتوحة حديثة ثابتة لكل السنوات. الألوان تعرض الانحراف عن المعدل، وليست شدة جفاف أو خطر سيول، والارتفاعات ليست عمق ماء.", en: "CHIRPS blends satellite estimates with sparse station records, so these are estimates, not gauge readings. The real spatial detail is the ~5 km source grid. The boundary is a modern open dataset held fixed for all years. Colours show departures from normal, not drought severity or flood hazard. Heights are not water depth." } },
      ],
      credits: "Rainfall: CHIRPS v3.0 final monthly, Climate Hazards Center, UC Santa Barbara, CC BY 4.0 (Climate Hazards Center, CHIRPS v3, Scientific Data, 2026). Boundary: geoBoundaries gbOpen SAU ADM1 (OpenStreetMap / Wambacher), ODbL 1.0. Normal period: WMO standard 1991–2020.",
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
  { thumb: "/projects/imam-abdulrahman-reserve/thumb-cover-3d-overview.webp", full: "/projects/imam-abdulrahman-reserve/cover-3d-overview.webp", w: 2000, h: 1287, tw: 720, th: 720, caption: { ar: "منظر ثلاثي الأبعاد شامل: الألوان الطبيعية والغطاء الأرضي وNDVI على نفس التضاريس", en: "3D overview: true colour, land cover and NDVI on the same terrain" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-3d/thumb-m01-3d-p1.webp", full: "/projects/imam-abdulrahman-reserve/maps-3d/m01-3d-p1.webp", w: 1800, h: 1273, tw: 720, th: 720, caption: { ar: "M01 الألوان الطبيعية (Sentinel-2، نوفمبر 2026) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "M01 True colour (Sentinel-2, Nov 2026) — 3D views from north & south" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-3d/thumb-m03-3d-p1.webp", full: "/projects/imam-abdulrahman-reserve/maps-3d/m03-3d-p1.webp", w: 1800, h: 1273, tw: 720, th: 720, caption: { ar: "M03 الارتفاع مع التظليل (Copernicus DEM GLO-30) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "M03 Elevation with hillshade (Copernicus DEM GLO-30) — 3D views from north & south" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-3d/thumb-m04-3d-p1.webp", full: "/projects/imam-abdulrahman-reserve/maps-3d/m04-3d-p1.webp", w: 1800, h: 1273, tw: 720, th: 720, caption: { ar: "M04 فئات الانحدار — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "M04 Slope classes — 3D views from north & south" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-3d/thumb-m07-3d-p1.webp", full: "/projects/imam-abdulrahman-reserve/maps-3d/m07-3d-p1.webp", w: 1800, h: 1273, tw: 720, th: 720, caption: { ar: "M07 مؤشر NDVI (نوفمبر 2026) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "M07 NDVI (Nov 2026) — 3D views from north & south" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-3d/thumb-m10-3d-p1.webp", full: "/projects/imam-abdulrahman-reserve/maps-3d/m10-3d-p1.webp", w: 1800, h: 1273, tw: 720, th: 720, caption: { ar: "M10 الغطاء الأرضي (ESA WorldCover 2021) — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "M10 Land cover (ESA WorldCover 2021) — 3D views from north & south" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-3d/thumb-m12-3d-p1.webp", full: "/projects/imam-abdulrahman-reserve/maps-3d/m12-3d-p1.webp", w: 1800, h: 1273, tw: 720, th: 720, caption: { ar: "M12 شبكة التصريف المنمذجة فوق الألوان الطبيعية — مناظر ثلاثية الأبعاد من الشمال والجنوب", en: "M12 Modelled drainage over true colour — 3D views from north & south" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/remote-sensing-3d-terrain-shada/thumb-3d-poster.webp", full: "/projects/remote-sensing-3d-terrain-shada/3d-poster.webp", w: 1400, h: 1674, tw: 720, th: 720, caption: { ar: "ملصق ثلاثي الأبعاد: الألوان الطبيعية والغطاء الأرضي والخضرة", en: "3D poster — true colour, land cover and vegetation greenness" }, from: { ar: "شدا ثلاثي الأبعاد", en: "Shada 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-shada/thumb-3d-views-elevation.webp", full: "/projects/remote-sensing-3d-terrain-shada/3d-views-elevation.webp", w: 1800, h: 1306, tw: 720, th: 720, caption: { ar: "الارتفاع من 447 إلى 2,148 م من أربع زوايا", en: "Elevation 447–2,148 m from four directions" }, from: { ar: "شدا ثلاثي الأبعاد", en: "Shada 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-shada/thumb-3d-views-slope.webp", full: "/projects/remote-sensing-3d-terrain-shada/3d-views-slope.webp", w: 1800, h: 1306, tw: 720, th: 720, caption: { ar: "الانحدار من أربع زوايا: المناطق الشديدة لتخطيط وصول آمن", en: "Slope from four directions — steep zones for safe access planning" }, from: { ar: "شدا ثلاثي الأبعاد", en: "Shada 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-shada/thumb-3d-views-ndvi.webp", full: "/projects/remote-sensing-3d-terrain-shada/3d-views-ndvi.webp", w: 1800, h: 1306, tw: 720, th: 720, caption: { ar: "NDVI: الغطاء النباتي يتركز على كتلة الجبل وعلى امتداد الأودية", en: "NDVI — vegetation concentrates on the massif and along wadis" }, from: { ar: "شدا ثلاثي الأبعاد", en: "Shada 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-shada/thumb-3d-views-drainage.webp", full: "/projects/remote-sensing-3d-terrain-shada/3d-views-drainage.webp", w: 1800, h: 1306, tw: 720, th: 720, caption: { ar: "التصريف المحسوب: الأودية كطرق وصول وممرات", en: "Modelled drainage — wadis as access routes and corridors" }, from: { ar: "شدا ثلاثي الأبعاد", en: "Shada 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-tuwaiq/thumb-3d-poster.webp", full: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-poster.webp", w: 1400, h: 1240, tw: 720, th: 720, caption: { ar: "ملصق ثلاثي الأبعاد: الألوان الطبيعية والغطاء الأرضي والخضرة", en: "3D poster — true colour, land cover and vegetation greenness" }, from: { ar: "طويق ثلاثي الأبعاد", en: "Tuwaiq 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-tuwaiq/thumb-3d-views-elevation.webp", full: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-elevation.webp", w: 1800, h: 1114, tw: 720, th: 720, caption: { ar: "الارتفاع من 610 إلى 1,034 م من أربع زوايا (×10)", en: "Elevation 610–1,034 m from four directions (×10)" }, from: { ar: "طويق ثلاثي الأبعاد", en: "Tuwaiq 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-tuwaiq/thumb-3d-views-slope.webp", full: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-slope.webp", w: 1800, h: 1114, tw: 720, th: 720, caption: { ar: "الانحدار: أين تمتد واجهات الحافّات", en: "Slope — where the escarpment faces run" }, from: { ar: "طويق ثلاثي الأبعاد", en: "Tuwaiq 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-tuwaiq/thumb-3d-views-ndvi.webp", full: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-ndvi.webp", w: 1800, h: 1114, tw: 720, th: 720, caption: { ar: "NDVI: بقع خضراء متفرقة في منطقة جافة", en: "NDVI — sparse green patches in a dry landscape" }, from: { ar: "طويق ثلاثي الأبعاد", en: "Tuwaiq 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-tuwaiq/thumb-3d-views-drainage.webp", full: "/projects/remote-sensing-3d-terrain-tuwaiq/3d-views-drainage.webp", w: 1800, h: 1114, tw: 720, th: 720, caption: { ar: "التصريف المحسوب: أين يتركز الجريان", en: "Modelled drainage — where runoff concentrates" }, from: { ar: "طويق ثلاثي الأبعاد", en: "Tuwaiq 3D" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m01-true-colour.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m01-true-colour.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M01 الألوان الطبيعية (Sentinel-2، نوفمبر 2026)", en: "M01 True colour (Sentinel-2, Nov 2026)" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m03-elevation-hillshade.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m03-elevation-hillshade.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M03 الارتفاع مع التظليل (Copernicus DEM GLO-30)", en: "M03 Elevation with hillshade (Copernicus DEM GLO-30)" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m04-slope-classes.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m04-slope-classes.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M04 فئات الانحدار", en: "M04 Slope classes" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m05-aspect.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m05-aspect.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M05 اتجاه السفوح", en: "M05 Aspect" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m06-contours.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m06-contours.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M06 خطوط الكنتور (50 م، ورئيسية كل 250 م)", en: "M06 Contours (50 m, 250 m index)" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m07-ndvi.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m07-ndvi.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M07 مؤشر NDVI (نوفمبر 2026)", en: "M07 NDVI (Nov 2026)" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m08-savi.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m08-savi.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M08 مؤشر SAVI (L = 0.5)", en: "M08 SAVI (L = 0.5)" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m09-ndmi.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m09-ndmi.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M09 مؤشر NDMI (الرطوبة)", en: "M09 NDMI (moisture index)" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m10-land-cover.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m10-land-cover.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M10 الغطاء الأرضي (ESA WorldCover 2021)", en: "M10 Land cover (ESA WorldCover 2021)" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m11-vegetation-change.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m11-vegetation-change.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M11 تغيّر الغطاء النباتي 2019→2026 (ΔNDVI مصحّح)", en: "M11 Vegetation change 2019→2026 (bias-corrected ΔNDVI)" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/maps-2d/thumb-m12-drainage.webp", full: "/projects/imam-abdulrahman-reserve/maps-2d/m12-drainage.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "M12 شبكة التصريف المنمذجة فوق الألوان الطبيعية", en: "M12 Modelled drainage over true colour" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/boundary/thumb-02-reconstructed-boundary.webp", full: "/projects/imam-abdulrahman-reserve/boundary/02-reconstructed-boundary.webp", w: 1800, h: 1273, tw: 720, th: 720, caption: { ar: "الحدود المعاد بناؤها", en: "Reconstructed boundary" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/imam-abdulrahman-reserve/boundary/thumb-05-uncertainty.webp", full: "/projects/imam-abdulrahman-reserve/boundary/05-uncertainty.webp", w: 1800, h: 1273, tw: 720, th: 720, caption: { ar: "نطاقات عدم اليقين الموضعي (68% / 95%)", en: "Positional uncertainty bands (68% / 95%)" }, from: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman" } },
  { thumb: "/projects/remote-sensing-3d-terrain-shada/thumb-map-truecolour.webp", full: "/projects/remote-sensing-3d-terrain-shada/map-truecolour.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "ألوان طبيعية، Sentinel-2", en: "True colour, Sentinel-2" }, from: { ar: "شدا ثلاثي الأبعاد", en: "Shada 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-shada/thumb-map-elevation.webp", full: "/projects/remote-sensing-3d-terrain-shada/map-elevation.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "الارتفاع والتظليل", en: "Elevation and shaded relief" }, from: { ar: "شدا ثلاثي الأبعاد", en: "Shada 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-shada/thumb-map-landcover.webp", full: "/projects/remote-sensing-3d-terrain-shada/map-landcover.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "الغطاء الأرضي (2021)", en: "Land cover (2021)" }, from: { ar: "شدا ثلاثي الأبعاد", en: "Shada 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-shada/thumb-map-ndvi.webp", full: "/projects/remote-sensing-3d-terrain-shada/map-ndvi.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "NDVI: 24 سبتمبر 2026", en: "NDVI — 24 Sep 2026" }, from: { ar: "شدا ثلاثي الأبعاد", en: "Shada 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-tuwaiq/thumb-map-truecolour.webp", full: "/projects/remote-sensing-3d-terrain-tuwaiq/map-truecolour.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "ألوان طبيعية، Sentinel-2", en: "True colour, Sentinel-2" }, from: { ar: "طويق ثلاثي الأبعاد", en: "Tuwaiq 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-tuwaiq/thumb-map-slope.webp", full: "/projects/remote-sensing-3d-terrain-tuwaiq/map-slope.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "الانحدار (درجات)", en: "Slope (degrees)" }, from: { ar: "طويق ثلاثي الأبعاد", en: "Tuwaiq 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-tuwaiq/thumb-map-change.webp", full: "/projects/remote-sensing-3d-terrain-tuwaiq/map-change.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "تغير الغطاء النباتي 2018→2026", en: "Vegetation change 2018→2026" }, from: { ar: "طويق ثلاثي الأبعاد", en: "Tuwaiq 3D" } },
  { thumb: "/projects/remote-sensing-3d-terrain-tuwaiq/thumb-map-drainage.webp", full: "/projects/remote-sensing-3d-terrain-tuwaiq/map-drainage.webp", w: 1800, h: 1272, tw: 720, th: 720, caption: { ar: "التصريف المحتمل (محسوب)", en: "Potential drainage (modelled)" }, from: { ar: "طويق ثلاثي الأبعاد", en: "Tuwaiq 3D" } },
  { thumb: "/maps/g-tuwaiq-h02.webp", full: "/maps/tuwaiq-h02.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "شبكة الأودية ورتب Strahler", en: "Wadi network and Strahler order" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-shada-conf.webp", full: "/maps/shada-confidence.webp", w: 3000, h: 2057, tw: 720, th: 741, caption: { ar: "الثقة في خريطة المجتمعات النباتية", en: "Confidence of the community map" }, from: { ar: "جبل شدا", en: "Jabal Shada" } },
  { thumb: "/maps/g-tuwaiq-e01.webp", full: "/maps/tuwaiq-e01.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "وحدات الموائل المحتملة", en: "Potential habitat units" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-tuwaiq-v03b.webp", full: "/maps/tuwaiq-v03b.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "اتجاه الاخضرار 2001–2026", en: "Greenness trend 2001–2026" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-shada-elev.webp", full: "/maps/shada-elevation.webp", w: 1826, h: 2420, tw: 720, th: 716, caption: { ar: "أحزمة الارتفاع في جبل شدا", en: "Jabal Shada elevation strata" }, from: { ar: "جبل شدا", en: "Jabal Shada" } },
  { thumb: "/maps/g-tuwaiq-h05.webp", full: "/maps/tuwaiq-h05.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "مورفومترية الأحواض", en: "Basin morphometry" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-shada-units.webp", full: "/maps/shada-units.webp", w: 3000, h: 2250, tw: 720, th: 581, caption: { ar: "وحدات نباتية استكشافية", en: "Exploratory vegetation units" }, from: { ar: "جبل شدا", en: "Jabal Shada" } },
  { thumb: "/maps/g-tuwaiq-h04.webp", full: "/maps/tuwaiq-h04.webp", w: 3000, h: 2120, tw: 720, th: 673, caption: { ar: "تقاطعات الأودية مع الطرق", en: "Wadi-road crossings and dams" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-catchment.webp", full: "/maps/tuwaiq-catchment.webp", w: 1344, h: 1080, tw: 720, th: 579, caption: { ar: "الحوض المغذي لمحمية طويق", en: "Catchment feeding the Tuwaiq Reserve" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-wadis.webp", full: "/maps/tuwaiq-wadis.webp", w: 1320, h: 1170, tw: 720, th: 638, caption: { ar: "الأودية والأحواض المغلقة قرب ضرما", en: "Wadis and closed basins near Duruma" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-greenness.webp", full: "/maps/tuwaiq-greenness.webp", w: 1582, h: 1402, tw: 720, th: 638, caption: { ar: "التعافي والتراجع في طويق", en: "Recovery and decline at Tuwaiq" }, from: { ar: "طويق", en: "Tuwaiq" } },
  { thumb: "/maps/g-summary.webp", full: "/maps/tuwaiq-summary.webp", w: 1582, h: 1402, tw: 720, th: 638, caption: { ar: "ملخص نتائج طويق", en: "Tuwaiq summary map" }, from: { ar: "طويق", en: "Tuwaiq" } },
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
  { group: { ar: "GIS والاستشعار عن بعد", en: "GIS and remote sensing" }, tools: ["QGIS", "Google Earth Engine", "Sentinel-2", "MODIS", "STAC (Earth Search)"], usedIn: { ar: "طويق، محمية الإمام عبدالرحمن", en: "Tuwaiq, Imam Abdulrahman Reserve" } },
  { group: { ar: "التمثيل ثلاثي الأبعاد", en: "3D visualization" }, tools: ["Blender (Cycles)", "GDAL", "NumPy", "Matplotlib"], usedIn: { ar: "جبل شدا وطويق ثلاثي الأبعاد", en: "Jabal Shada and Tuwaiq 3D" } },
  { group: { ar: "بيانات المناخ والشبكات المكانية", en: "Climate data and spatial grids" }, tools: ["CHIRPS v3", "H3 hexagons", "EPSG:6933 equal-area", "WMO 1991–2020 normals"], usedIn: { ar: "أمطار الرياض", en: "Riyadh rainfall" }, href: "https://riyadh-rainfall-dynamics.vercel.app" },
  { group: { ar: "الإرجاع الجغرافي وتقدير الدقة", en: "Georeferencing and accuracy" }, tools: ["Affine georeferencing", "NCC terrain matching", "Uncertainty budget", "Bootstrap / leave-one-out"], usedIn: { ar: "محمية الإمام عبدالرحمن", en: "Imam Abdulrahman Reserve" } },
  { group: { ar: "التضاريس والهيدرولوجيا", en: "Terrain and hydrology" }, tools: ["Geomorphons", "TPI", "HAND", "Flow routing", "D8 / Strahler"], usedIn: { ar: "محمية الإمام عبدالرحمن، طويق", en: "Imam Abdulrahman Reserve, Tuwaiq" } },
  { group: { ar: "نمذجة الأنواع والمناخ", en: "Species and climate modeling" }, tools: ["MaxEnt", "CMIP6", "WorldClim", "CHELSA"], usedIn: { ar: "ملاجئ الحافات", en: "Escarpment refugia" } },
  { group: { ar: "البرمجة والإحصاء", en: "Programming and statistics" }, tools: ["R", "Python", "Linux / Bash", "GeoPandas", "rasterio", "SciPy", "scikit-image", "OpenCV", "Numba", "pandas / Parquet", "pytest", "Mann–Kendall", "Theil–Sen"], usedIn: { ar: "كل المشاريع", en: "All projects" } },
  { group: { ar: "الميدان", en: "Fieldwork" }, tools: ["مسوحات التنوع الحيوي|Biodiversity surveys", "الدرون (GACA)|Drone (GACA)"], usedIn: { ar: "الحياة الفطرية", en: "NCW" } },
  { group: { ar: "الامتثال البيئي", en: "Compliance" }, tools: ["EIA", "NCEC", "ISO 14001", "ISO 45001"], usedIn: { ar: "Environmental Way", en: "Environmental Way" } },
  { group: { ar: "الويب", en: "Web" }, tools: ["Next.js", "React", "TypeScript", "deck.gl (WebGL)", "Vercel"], usedIn: { ar: "نباتات المملكة، أمطار الرياض", en: "Saudi Native Flora, Riyadh rainfall" }, href: "https://saudi-native-flora.netlify.app/" },
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
  { name: { ar: "أساسيات البرمجة بلغة Python", en: "Python Programming Essentials" }, issuer: "Rice University · Coursera" },
  { name: { ar: "مدخل عملي لأوامر Linux وكتابة سكربتات Shell", en: "Hands-on Introduction to Linux Commands and Shell Scripting" }, issuer: "IBM" },
  { name: { ar: "المهارات الأساسية في المعلوماتية الحيوية", en: "Fundamental Skills in Bioinformatics" }, issuer: "KAUST · Coursera" },
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
