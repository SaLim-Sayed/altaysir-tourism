export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="التيسير للسياحة بطهطا"><img src="/facebook/logo.jpg" alt="شعار التيسير للسياحة" /><span><strong>التيسير</strong><small>للسياحة بطهطا</small></span></a>
      <nav><a href="#services">خدماتنا</a><a href="#about">عن التيسير</a><a href="#contact">تواصل معنا</a></nav>
      <a className="header-cta" href="#contact">احجز رحلتك <span>↗</span></a>
    </header>
  );
}
