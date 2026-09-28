import { company } from "../lib/site-data";

const campaigns = [{ image: "/facebook/campaign-hajj.jpg", alt: "حملة سجل للحج من روتانا", tag: "الحج", label: "حملة روتانا", title: "خطوتك الأولى للحج" }, { image: "/facebook/campaign-umrah.jpg", alt: "عرض عمرة روتانا للتقسيط", tag: "العمرة", label: "عرض خاص", title: "عمرة التيسير بالتقسيط" }];

export function CampaignsSection() {
  return <section className="campaigns section"><div className="section-heading"><div><div className="eyebrow"><span /> من صفحتنا على فيسبوك</div><h2>عروض وحملات<br /><em>من واقع رحلاتنا.</em></h2></div><a className="arrow-link campaign-link" href={company.facebookUrl} target="_blank" rel="noreferrer">شاهد الصفحة <span>↗</span></a></div><div className="campaign-grid">{campaigns.map((campaign) => <article className="campaign-card" key={campaign.title}><div className="campaign-media"><img src={campaign.image} alt={campaign.alt} /><span className="campaign-tag">{campaign.tag}</span></div><div className="campaign-caption"><div><small>{campaign.label}</small><h3>{campaign.title}</h3></div><a href={company.facebookUrl} target="_blank" rel="noreferrer" aria-label={`شاهد ${campaign.title} على فيسبوك`}>↗</a></div></article>)}</div></section>;
}
