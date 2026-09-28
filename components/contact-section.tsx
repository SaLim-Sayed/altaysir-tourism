import { ContactForm } from "./contact-form";
import { company } from "../lib/site-data";

export function ContactSection() {
  return <section className="contact section" id="contact"><div className="contact-copy"><div className="eyebrow light"><span /> تواصل معنا</div><h2>جاهز<br /><em>تسافر؟</em></h2><p>اتصل بينا أو ابعتلنا تفاصيل رحلتك، وفريق روتانا هيرد عليك.</p><div className="contact-details"><a href={`tel:${company.mainPhone}`}><small>الخط الرئيسي</small><span className="number" dir="ltr">011 47714364</span></a><a href={`tel:${company.reservationsPhone}`}><small>حجوزات واستفسارات</small><span className="number" dir="ltr">012 27376043</span></a><a href={company.facebookUrl} target="_blank" rel="noreferrer"><small>العنوان</small>طهطا · برج المطاحن<br />الدور الثاني · شقة <span className="number" dir="ltr">26</span></a></div></div><ContactForm /></section>;
}
