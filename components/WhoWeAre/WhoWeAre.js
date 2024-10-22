import { Image } from "@chakra-ui/react";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible.js";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from './WhoWeAre.module.css';

export default function WhoWeAre({}) {
  const [highlighted, setHighlighted] = useState(null);

  const handleMouseEnter = (index) => {
    setHighlighted(index);
  };

  const handleMouseLeave = () => {
    setHighlighted(null);
  };

  return (
    <section id="WhoWeAre" className={styles.OverlappEffect}>
      <div className={`full-height background-dark padding-top ${styles.paddingTop}`}>
        <div className="spacer-large"></div>
        <div className="grid-container2 flex-center">
          <div className="about-info">
            <div className="grid-line full-height padding-about">
              <FadeInWhenVisible>
                <div className="flex-row">
                  <h1>Who we are</h1>
                </div>
              </FadeInWhenVisible>

              <div className="spacer-medium"></div>
              <FadeInWhenVisible>
                <h2>
                  At Cynus, we&apos;re a team of four founders driving our product, Sphere One, forward.
                </h2>
                <h2 className={highlighted === 0 ? styles.highlight : ""}>
                  <br /> Delon, our CEO, leads the company with a clear vision and a focus on both management and hardware innovation. With his extensive experience in leadership and hardware development, he ensures that our technology is top-notch while keeping Cynus on track to achieve our goals. <br />
                </h2>
                <h2 className={highlighted === 1 ? styles.highlight : ""}>
                  <br /> Julian, our CSO, is responsible for strategic software development and innovation. With a solid background in mathematics and extensive programming expertise, he ensures that our software solutions are cutting-edge and align with our long-term vision. <br />
                </h2>
                <h2 className={highlighted === 2 ? styles.highlight : ""}>
                  <br /> Ilya, another Co-Founder and CFO, manages our finances and business model. His deep understanding of economics and business analytics keeps our operations financially sound and strategically aligned.
                  <br />
                </h2>
                <h2 className={highlighted === 3 ? styles.highlight : ""}>
                  <br /> Finally, Konstantin, our technical expert and CTO, leads the technical and pre-development efforts. As he completes his PhD in Micro System Technologies, Konstantin&apos;s dual expertise in hardware and software is crucial in bringing Sphere One to life.
                  <br />
                </h2>
                <h2>
                  <br /> Together, as the founders of Cynus, we&apos;re pushing boundaries and shaping the future, supported by a vast network of supporters and partners.
                </h2>
              </FadeInWhenVisible>
            </div>
          </div>
          <FadeInWhenVisible>
            <div className="img-container" style={{ position: "relative" }}>
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ ease: "easeOut", duration: 1.4 }}
              >
                <Image
                  className="sphere"
                  src="../../image/founders-new2.png"
                  alt="four founders Delon, Julian, Ilya, Konstantin"
                  title="The Founders"
                  placeholder="blur"
                />
                {/* Overlay areas for hovering */}
                <div
                  className={`${styles.overlayArea} ${styles.pulsingCircle}`}
                  style={{
                    position: "absolute",
                    top: "46%",
                    left: "23%",
                    width: "4%",
                    height: "3%",
                    cursor: "pointer",
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={styles.tooltip}>Delon</span>
                </div>
                <div
                  className={`${styles.overlayArea} ${styles.pulsingCircle}`}
                  style={{
                    position: "absolute",
                    top: "29%",
                    left: "37%",
                    width: "4%",
                    height: "3%",
                    cursor: "pointer",
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={styles.tooltip}>Julian</span>
                </div>
                <div
                  className={`${styles.overlayArea} ${styles.pulsingCircle}`}
                  style={{
                    position: "absolute",
                    top: "26%",
                    left: "61%",
                    width: "4%",
                    height: "3%",
                    cursor: "pointer",
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={styles.tooltip}>Ilya</span>
                </div>
                <div
                  className={`${styles.overlayArea} ${styles.pulsingCircle}`}
                  style={{
                    position: "absolute",
                    top: "48%",
                    left: "58%",
                    width: "4%",
                    height: "3%",
                    cursor: "pointer",
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={styles.tooltip}>Konstantin</span>
                </div>
              </motion.div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
