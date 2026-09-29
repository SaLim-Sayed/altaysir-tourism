export type Service = {
  number: string;
  title: string;
  text: string;
  icon: string;
};

export const company = {
  name: "التيسير للسياحة بطهطا (روتانا انترناشيونال تورز)",
  siteUrl: "https://altaysir-tourism.vercel.app",
  facebookUrl: "https://www.facebook.com/Rotanainternathionaltours",
  whatsappNumber: "201147714364",
  mainPhone: "01147714364",
  reservationsPhone: "01227376043",
  address: "طهطا · برج المطاحن · الدور الثاني · شقة 26",
};

export const services: Service[] = [
  { number: "01", title: "الحج والعمرة", text: "نرتب رحلتك الإيمانية باهتمام، من أول خطوة وحتى العودة بالسلامة.", icon: "✦" },
  { number: "02", title: "تذاكر الطيران", text: "حجوزات طيران مناسبة لوجهتك وميزانيتك مع متابعة مستمرة.", icon: "↗" },
  { number: "03", title: "حجز الفنادق", text: "اختيارات إقامة مريحة قريبة من الأماكن التي تهمك.", icon: "⌂" },
  { number: "04", title: "التأشيرات", text: "مساعدة واضحة في إجراءات التأشيرات وتجهيز المستندات.", icon: "◎" },
];
