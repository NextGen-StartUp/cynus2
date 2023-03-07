import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text, delay = 0 }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + delay},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween", duration: 0.5
        // damping: 12,
        // stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 40,
      y: 0,
      transition: {
        type: "tween", duration: 0.5
        // damping: 12,
        // stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ 
        overflow: "hidden", 
        display: "flex", 
        color: "white", 
        justifyContent: "center",
        }}
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}
        style={{ fontSize: "clamp(1.1rem, 3vw, 3rem)", // default font size
            // set different font sizes based on screen width
            "@media screen and (min-width: 600px)": {
              fontSize: "clamp(2rem, 4vw, 4rem)",
            },
            "@media screen and (min-width: 900px)": {
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
            },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;