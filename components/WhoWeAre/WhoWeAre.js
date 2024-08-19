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

              <div className="spacer-medium"></div>
              <FadeInWhenVisible>
                <h2>
                  By transforming the human machine interaction, Cynus pushes
                  the boundaries of how humans collaborate with devices and
                  drives performance to new levels.
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <div className="spacer-medium"></div>
                <FadeInWhenVisible>
                  <h1 className="text-center">The founders</h1>
                </FadeInWhenVisible>
                <div className="spacer-small"></div>
                <FadeInWhenVisible>
                
                  <h2 style={{ color: "#ffffff7a" }}>Daniel:</h2>

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
              </FadeInWhenVisible>
              <div className="spacer-small"></div>
              <FadeInWhenVisible>
                <h2 style={{ color: "#ffffff7a" }}>Delon:</h2>

                <h2>
                  with his many years of experience in the field of hardware
                  development and the leadership of a team of 10 people is
                  responsible for the implementation of the hardware and the
                  company&apos;s goals.
                </h2>
              </FadeInWhenVisible>
              <div className="spacer-small"></div>
              <FadeInWhenVisible>
                <h2 style={{ color: "#ffffff7a" }}>Konstantin:</h2>

                <h2>
                  Konstantin is currently finalizing his PhD in Micro System
                    Technologies. Still in the early stages of his career
                    Konstantin&apos;s interest in Software Development has led
                    him to develop outstanding software solutions on several
                    occasions. In combination with his understanding of hardware
                    Konstantin helps us bring our products to life.
                </h2>
              </FadeInWhenVisible>
              <div className="spacer-small"></div>
              <FadeInWhenVisible>
              <h2 style={{ color: "#ffffff7a", visibility: 'visible' }}>
    Julian:
  </h2>

  <h2 style={{ color: "#ffffff", visibility: 'visible' }}>
    Is responsible for the implementation of the applications on
    the computer side with his mathematical studies and his many
    years of experience in programming.
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
                  src="../../image/founders-new.png"
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
