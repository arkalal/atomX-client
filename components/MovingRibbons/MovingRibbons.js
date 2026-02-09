import React from "react";
import "./MovingRibbons.scss";

const ribbonData = [
  {
    direction: "right",
    colorClass: "ribbon--blue",
    items: [
      { type: "text", content: "AI" },
      { type: "image", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop" },
      { type: "text", content: "ROBOTICS" },
      { type: "image", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop" },
      { type: "text", content: "INNOVATION" },
      { type: "image", src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&h=300&fit=crop" },
      { type: "text", content: "QUANTUM" },
      { type: "image", src: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=300&h=300&fit=crop" },
    ],
  },
  {
    direction: "left",
    colorClass: "ribbon--lavender",
    items: [
      { type: "text", content: "BLOCKCHAIN" },
      { type: "image", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop" },
      { type: "text", content: "CLOUD" },
      { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop" },
      { type: "text", content: "DESIGN" },
      { type: "image", src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=300&fit=crop" },
      { type: "text", content: "WEB3" },
      { type: "image", src: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=300&h=300&fit=crop" },
    ],
  },
  {
    direction: "right",
    colorClass: "ribbon--coral",
    items: [
      { type: "text", content: "STRATEGY" },
      { type: "image", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop" },
      { type: "text", content: "GROWTH" },
      { type: "image", src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=300&fit=crop" },
      { type: "text", content: "IMPACT" },
      { type: "image", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=300&fit=crop" },
      { type: "text", content: "SCALE" },
      { type: "image", src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=300&fit=crop" },
    ],
  },
];

const MovingRibbons = () => {
  return (
    <section className="ribbons-section">
      {ribbonData.map((ribbon, idx) => (
        <div
          key={idx}
          className={`ribbon ${ribbon.colorClass} ribbon--${ribbon.direction}`}
        >
          <div className="ribbon-track">
            {/* Render items twice for seamless loop */}
            {[...ribbon.items, ...ribbon.items].map((item, i) =>
              item.type === "text" ? (
                <span key={i} className="ribbon-text">
                  {item.content}
                </span>
              ) : (
                <div key={i} className="ribbon-image">
                  <img src={item.src} alt="" loading="lazy" />
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MovingRibbons;
