"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StackCards.scss";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    category: "AI SOLUTIONS",
    title: "AI-Powered\nAnalytics Platform",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    buttons: ["Explore More", "EXP"],
  },
  {
    category: "WORKSHOPS",
    title: "Innovation Sprint\nWorkshop",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    buttons: ["Explore More", "EXP"],
  },
  {
    category: "CONSULTING",
    title: "Digital Transformation\nStrategy",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop",
    buttons: ["Explore More", "EXP"],
  },
];

const StackCards = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      // Cards 2-4 start hidden below the viewport
      cards.forEach((card, i) => {
        if (i > 0) {
          gsap.set(card, { yPercent: 100 });
        }
      });

      // Create a timeline pinned to the section, driven by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${cards.length * window.innerHeight}`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      // For each card after the first: animate it up from below
      // and simultaneously scale/dim the previous card
      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(card, {
          yPercent: 0,
          duration: 1,
          ease: "none",
        });

        // Scale down and dim the card behind
        tl.to(
          cards[i - 1].querySelector(".stack-card-inner"),
          {
            scale: 0.93,
            borderRadius: "24px",
            filter: "brightness(0.5)",
            duration: 1,
            ease: "none",
          },
          "<",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stack-cards-section" ref={sectionRef}>
      <div className="stack-cards-container" ref={containerRef}>
        {cardsData.map((card, idx) => (
          <div
            key={idx}
            className="stack-card"
            ref={(el) => (cardsRef.current[idx] = el)}
            style={{ zIndex: idx + 1 }}
          >
            <div className="stack-card-inner">
              <img
                src={card.image}
                alt={card.title}
                className="stack-card-image"
                loading="eager"
              />
              <div className="stack-card-overlay" />
              <div className="stack-card-content">
                <span className="stack-card-category">{card.category}</span>
                <h3 className="stack-card-title">
                  {card.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < card.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <div className="stack-card-buttons">
                  {card.buttons.map((btn, i) => (
                    <button key={i} className="stack-card-btn">
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackCards;
