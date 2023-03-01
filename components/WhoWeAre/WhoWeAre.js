import { Image } from "@chakra-ui/react";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible.js";
import { motion } from "framer-motion";

export default function WhoWeAre({}) {
  return (
    <section id="WhoWeAre" className="OverlappEffect">
      <div className="full-height background-dark padding-top">
        <div className="grid-container2 flex-center ">
          <div className="about-info">
            <div className="grid-line full-height">
              <FadeInWhenVisible>
                <div className="flex-row">
                  <h1>Who we are</h1>
                </div>
              </FadeInWhenVisible>

              <div className="spacer-small"></div>
              <FadeInWhenVisible>
                <h2>
                  By transforming the human machine interaction, Cynus pushes
                  the boundaries of how humans collaborate with devices and
                  drives performance to new levels.
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <div className="spacer-small"></div>
                <h1 className="text-center">The founders</h1><h4>from the right:</h4>
                <div className="spacer-small"></div>
                <FadeInWhenVisible>
                  <h2>Delon:</h2>
                </FadeInWhenVisible>
                <h2>
                  With his deep background in electronics development, Delon is
                  responsible for turning our ideas into working prototypes.
                  Thanks to Delon we are always able to validate our ideas
                  quickly.
                </h2>
              </FadeInWhenVisible>
              <div className="spacer-small"></div>
              <FadeInWhenVisible>
                <h2>Konstantin:</h2>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <h2>
                  Konstantin is currently finalizing his PhD in Micro System
                  Technologies. Still in the early stages of his career
                  Konstantin&apos;s interest in Software Development has led him
                  to develop outstanding software solutions on several
                  occasions. In combination with his understanding of hardware
                  Konstantin helps us bring our products to life.
                </h2>{" "}
              </FadeInWhenVisible>
              <div className="spacer-small"></div>
              <FadeInWhenVisible>
                <h2>Daniel:</h2>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                {" "}
                <h2>
                  Daniel completes the skillset of our founding team and brings
                  in the economic perspective, essential to validate which
                  product pass we should follow and how we can build a
                  sustainable business. Daniel holds a bachelor&apos;s degree in
                  industrial engineering and a master&apos;s degree in
                  international business, specialized in entrepreneurship and
                  SME management.
                </h2>
              </FadeInWhenVisible>
            </div>
          </div>
          <FadeInWhenVisible>
            <div className="img-container">
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ ease: "easeOut", duration: 1.4 }}
              >
                <Image
                  className="sphere"
                  src="../../image/founders-Delon-Konstantin-Daniel.png"
                  alt="three founders Delon Konstantin Daniel"
                  title="The Founders"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
