"use client";

import React from "react";
import { motion } from "framer-motion";
import "./ImageBoxes.scss";

const floatLeft = {
  y: [0, -12, 0, 8, 0],
  rotate: [-2, -1, -3, -1.5, -2],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const floatRight = {
  y: [0, 10, 0, -10, 0],
  rotate: [2, 3, 1.5, 2.5, 2],
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const ImageBoxes = () => {
  return (
    <section className="image-boxes-section">
      {/* Decorative star/asterisk */}
      <div className="image-boxes-star">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 0L42.5 37.5L80 40L42.5 42.5L40 80L37.5 42.5L0 40L37.5 37.5L40 0Z"
            fill="#1a1a1a"
          />
          <path
            d="M40 10L41.5 38.5L70 40L41.5 41.5L40 70L38.5 41.5L10 40L38.5 38.5L40 10Z"
            fill="#1a1a1a"
          />
        </svg>
      </div>

      <div className="image-boxes-layout">
        {/* Small left image - floating animation */}
        <motion.div
          className="image-box image-box--small-left"
          animate={floatLeft}
        >
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=500&fit=crop"
            alt="Team collaboration"
            loading="lazy"
          />
        </motion.div>

        {/* Large center image */}
        <div className="image-box image-box--large">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop"
            alt="Innovation technology"
            loading="lazy"
          />
        </div>

        {/* Small right image - floating animation */}
        <motion.div
          className="image-box image-box--small-right"
          animate={floatRight}
        >
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=500&fit=crop"
            alt="Digital workspace"
            loading="lazy"
          />
        </motion.div>

        {/* Tiny bottom-right card */}
        <div className="image-box image-box--tiny">
          <div className="image-box-card">
            <span className="image-box-card-label">seen on screen</span>
            <p className="image-box-card-title">
              Unlock The
              <br />
              atomX Innovation
            </p>
            <div className="image-box-card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBoxes;
