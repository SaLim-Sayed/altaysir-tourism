import { company } from "../lib/site-data";

const campaigns = [
  {
    image: "/campaign-hajj-generated.png",
    alt: "صورة الكعبة المشرفة وبرنامج الحج",
    tag: "الحج",
    label: "برنامج الحج",
    title: "خطوتك الأولى للحج",
    description: "تنظيم ومتابعة واضحة لتعيش مناسكك براحة واطمئنان.",
  },
  {
    image: "/campaign-umrah-generated.png",
    alt: "صورة المسجد النبوي وبرنامج العمرة",
    tag: "العمرة",
    label: "برنامج العمرة",
    title: "رحلة روحانية إلى المدينة",
    description: "برنامج عمرة مرتب بعناية من الحجز وحتى العودة بالسلامة.",
  },
];

export function CampaignsSection() {
  return (
    <section className="campaigns section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span /> من صفحتنا على فيسبوك
          </div>
          <h2>
            برامجنا المميزة
            <br />
            <em>لحج وعمرة أسهل.</em>
          </h2>
        </div>
        <a
          className="arrow-link campaign-link"
          href={company.facebookUrl}
          target="_blank"
          rel="noreferrer"
        >
          شاهد الصفحة <span>↗</span>
        </a>
      </div>
      <div className="campaign-grid">
        {campaigns.map((campaign) => (
          <article className="campaign-card" key={campaign.title}>
            <div className="campaign-media">
              <img src={campaign.image} alt={campaign.alt} />
              <span className="campaign-tag">{campaign.tag}</span>
            </div>
            <div className="campaign-caption">
              <div>
                <small>{campaign.label}</small>
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
              </div>
              <a
                href={company.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`شاهد ${campaign.title} على فيسبوك`}
              >
                ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
