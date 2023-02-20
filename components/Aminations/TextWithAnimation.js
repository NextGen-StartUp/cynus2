import React, { useState } from "react";

const TextWithAnimation = ({ text, delay }) => {
  const [showText, setShowText] = useState(false);

  setTimeout(() => {
    setShowText(true);
  }, delay);

  return (
    <div
      className="text-container"
      style={{
        opacity: showText ? 1 : 0,
        transform: `translateX(${showText ? 0 : 50}px)`,
        transition: "all 1.5s ease-in-out"
      }}
    >
      {text}
    </div>
  );
};

export default TextWithAnimation;
