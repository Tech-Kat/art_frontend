// src/MorphText.js
import React, { useEffect, useRef } from 'react';
import "../CSS/MorphText.css"

const MorphText = () => {
    const eltsRef = useRef({
        text1: null,
        text2: null,
      });
    
      const texts = [
        "Creative",
        "Unique",
        "Inspiring",
        "Artistic",
        "Visionary",
        "Luminous",
        "Expressive",
      ];
    
      let textIndex = texts.length - 1;
      let time = new Date();
      let morph = 0;
      let cooldown = 0.25;
    
      const doMorph = () => {
        morph -= cooldown;
        cooldown = 0;
    
        let fraction = morph / 1;
    
        if (fraction > 1) {
          cooldown = 0.25;
          fraction = 1;
        }
    
        setMorph(fraction);
      }
    
      const setMorph = (fraction) => {
        eltsRef.current.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        eltsRef.current.text2.style.opacity = `${Math.pow(fraction, 0.6) * 100}%`;
    
        fraction = 1 - fraction;
        eltsRef.current.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        eltsRef.current.text1.style.opacity = `${Math.pow(fraction, 0.6) * 100}%`;
    
        eltsRef.current.text1.textContent = texts[textIndex % texts.length];
        eltsRef.current.text2.textContent = texts[(textIndex + 1) % texts.length];
      }
    
      const doCooldown = () => {
        morph = 0;
    
        eltsRef.current.text2.style.filter = "";
        eltsRef.current.text2.style.opacity = "100%";
    
        eltsRef.current.text1.style.filter = "";
        eltsRef.current.text1.style.opacity = "0%";
      }
    
      const animate = () => {
        requestAnimationFrame(animate);
    
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;
    
        cooldown -= dt;
    
        if (cooldown <= 0) {
          if (shouldIncrementIndex) {
            textIndex++;
          }
    
          doMorph();
        } else {
          doCooldown();
        }
      }
    
      useEffect(() => {
        animate(); // Start the animation when the component mounts
      }, []);
    
      return (
        <div id="container">
          <span ref={(el) => (eltsRef.current.text1 = el)} id="text1"></span>
          <span ref={(el) => (eltsRef.current.text2 = el)} id="text2"></span>
        </div>
      );
};

export default MorphText;
