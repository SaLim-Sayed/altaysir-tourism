import { services } from "../lib/site-data";

export function ServicesSection() {
  return <section className="services section" id="services"><div className="section-heading"><div><div className="eyebrow"><span /> خدماتنا</div><h2>كل اللي تحتاجه<br /><em>في مكان واحد.</em></h2></div><p>خطط، احجز، وسافر — وإحنا نهتم بالتفاصيل.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span className="service-number">{service.number}</span><span className="service-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`استفسار عن ${service.title}`}>↗</a></article>)}</div></section>;
}
