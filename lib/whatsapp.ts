import { company } from "./site-data";

export type WhatsAppInquiry = {
  name: string;
  phone: string;
  service: string;
};

export function createWhatsAppUrl({ name, phone, service }: WhatsAppInquiry) {
  const message = [
    "مرحباً روتانا، أريد الاستفسار عن رحلة.",
    `الاسم: ${name}`,
    `رقم الهاتف: ${phone}`,
    `الخدمة المطلوبة: ${service}`,
  ].join("\n");

  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
