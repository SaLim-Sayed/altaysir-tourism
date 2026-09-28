"use client";

import { useEffect, useState } from "react";

const slides = [
  { image: "/hero-slider-flight.png", eyebrow: "التيسير للسياحة · طهطا", title: "رحلتك تبدأ", accent: "من هنا.", description: "سياحة خارجية، حج وعمرة، حجوزات فنادق، تذاكر طيران وتأشيرات — بخبرة واهتمام من أول مكالمة." },
  { image: "/campaign-hajj-generated.png", eyebrow: "برنامج الحج", title: "خطوتك الأولى", accent: "نحو الحج.", description: "تنظيم ومتابعة واضحة لتعيش مناسكك براحة واطمئنان، من أول حجز وحتى العودة بالسلامة." },
  { image: "/campaign-umrah-generated.png", eyebrow: "برنامج العمرة", title: "رحلة روحانية", accent: "تبدأ صح.", description: "برنامج عمرة مرتب بعناية، مع خدمة واضحة ومتابعة مستمرة في كل خطوة." },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  function changeSlide(direction: number) {
    setActiveIndex((index) => (index + direction + slides.length) % slides.length);
  }

  return (
    <section className="hero hero-slider" id="top" aria-label="عروض وخدمات التيسير للسياحة">
      {slides.map((slide, index) => <div className={`hero-slide-image ${index === activeIndex ? "is-active" : ""}`} key={slide.image} style={{ backgroundImage: `url("${slide.image}")` }} aria-hidden={index !== activeIndex} />)}
      <div className="hero-overlay" />
      <div className="hero-copy"><div key={activeSlide.title} className="hero-content-transition"><div className="eyebrow light"><span /> {activeSlide.eyebrow}</div>
        <h1>{activeSlide.title}<br /><em>{activeSlide.accent}</em></h1>
        <p>{activeSlide.description}</p>
        <div className="hero-actions"><a className="button button-gold" href="#contact">تحدث معنا الآن <span>↗</span></a><a className="text-link" href="#services">اكتشف خدماتنا <span>↓</span></a></div>
      </div></div>
      <div className="hero-note"><span className="note-line" /> <span>سافر مطمئنًا</span></div><div className="hero-logo"><img src="/facebook/logo.jpg" alt="" /></div>
      <div className="hero-slider-controls"><button type="button" onClick={() => changeSlide(1)} aria-label="الشريحة التالية">←</button><div className="hero-dots">{slides.map((slide, index) => <button type="button" className={index === activeIndex ? "is-active" : ""} key={slide.image} onClick={() => setActiveIndex(index)} aria-label={`الشريحة ${index + 1}`} />)}</div><button type="button" onClick={() => changeSlide(-1)} aria-label="الشريحة السابقة">→</button></div>
    </section>
  );
}
