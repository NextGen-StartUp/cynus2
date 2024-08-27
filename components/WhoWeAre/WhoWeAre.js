import { Image } from "@chakra-ui/react";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible.js";
import { motion } from "framer-motion";

export default function WhoWeAre({}) {
  return (
    <section id="WhoWeAre" className="OverlappEffect">
      <div className="full-height background-dark padding-top">
      <div className="spacer-large"></div>
        <div className="grid-container2 flex-center ">
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
                  At Cynus, we&apos;re a team of four founders driving our
                  product, Sphere One, forward. <br/> 
                  <br/> Delon, our CEO, leads the
                  company with a clear vision and a focus on both management and
                  hardware innovation. With his extensive experience in
                  leadership and hardware development, he ensures that our
                  technology is top-notch while keeping Cynus on track to
                  achieve our goals. <br/> 
                  <br/> Julian, our CSO, is responsible for
                  strategic software development and innovation. With a solid
                  background in mathematics and extensive programming expertise,
                  he ensures that our software solutions are cutting-edge and
                  align with our long-term vision. <br/> 
                  <br/> Ilya, another Co-Founder and
                  CFO, manages our finances and business model. His deep
                  understanding of economics and business analytics keeps our
                  operations financially sound and strategically aligned.
                  <br/> 
                  <br/> Finally, Konstantin, our technical expert and CTO, leads the
                  technical and pre-development efforts. As he completes his PhD
                  in Micro System Technologies, Konstantin&apos;s dual expertise
                  in hardware and software is crucial in bringing Sphere One to
                  life.<br/> 
                  <br/> 
                  Together, as the founders of Cynus, we&apos;re pushing
                  boundaries and shaping the future, supported by a vast network
                  of supporters and partners.
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
                  src="../../image/founders-new2.png"
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
