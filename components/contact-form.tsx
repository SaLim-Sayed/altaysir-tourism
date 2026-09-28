"use client";

import { FormEvent, useState } from "react";
import { createWhatsAppUrl } from "../lib/whatsapp";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "غير محددة").trim();

    window.open(createWhatsAppUrl({ name, phone, service }), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="contact-form">
        <div className="success">
          <span>✓</span>
          <h3>تم تجهيز رسالتك</h3>
          <p>تم فتح واتساب بالبيانات التي أدخلتها. اضغط إرسال داخل واتساب لإتمام الطلب.</p>
          <button type="button" className="form-link" onClick={() => setSent(false)}>إرسال استفسار جديد</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="contact-form">
      <div className="form-heading"><strong>ابدأ استفسارك</strong><span>املأ البيانات وسنفتح واتساب برسالتك مباشرة.</span></div>
      <label>الاسم<input required name="name" placeholder="اكتب اسمك" /></label>
      <label>رقم الهاتف<input required name="phone" placeholder="010 ..." /></label>
      <label>محتاج مساعدة في إيه؟<select required name="service" defaultValue=""><option value="" disabled>اختار الخدمة</option><option>الحج والعمرة</option><option>تذاكر الطيران</option><option>حجز الفنادق</option><option>التأشيرات</option></select></label>
      <button className="button button-gold" type="submit">إرسال عبر واتساب <span>↗</span></button>
    </form>
  );
}
