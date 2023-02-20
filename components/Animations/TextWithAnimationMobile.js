import React, { useState } from "react";
import { motion } from "framer-motion"
const TextWithAnimationMobile = ({ text, delay }) => {
  const [showText, setShowText] = useState(false);

  setTimeout(() => {
    setShowText(true);
  }, delay);

  return (
    <motion.div
      className="text-container"
      style={{
        opacity: showText ? 1 : 0,
        transform: `translateX(${showText ? 0 : 5}px)`,
        transition: "all 1.5s ease-in-out"
      }}
    >
      {text}
    </motion.div>
  );
};

export default TextWithAnimationMobile;