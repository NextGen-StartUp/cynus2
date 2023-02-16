import { Image } from "@chakra-ui/react";
import styles from "./Milestones.module.css";
import FadeInWhenVisible from "../Aminations/FadeInWhenVisible";
import CardAnimation from "../Aminations/CardAnimation";
import CardAnimationTwo from "../Aminations/CardAnimationTwo";

function MileStones({}) {
  return (
    <section id="Milestones" className="OverlappEffect">
   <div className="spacer-medium"></div>
   <div className="spacer-medium"></div>
   <div className="spacer-small"></div>
      <div className="headlines">
        <FadeInWhenVisible>
          <h5 className="text-left">Milestones</h5>
        </FadeInWhenVisible>
      </div>

      <div className="full-height2 background-light">
        <CardAnimation>
          <div className="card">
            <div className="card-Img">
              <Image
                h="130px"
                w="100%"
                objectFit="cover"
                src="../../image/BadenCampusLogo.png"
                className={styles.MilestonesImg}
              />
            </div>
            <div className="spacer-small"></div>
            <div>
              <h5></h5>
              <div className="spacer-small"></div>
              <h6>
              Startup Accelerator: We were able to qualify and participate in the Accelerator
                Program at BadenCampus among many other startups.
              </h6>
            </div>
          </div>
        </CardAnimation>
        <CardAnimationTwo>
        <div className="border-side full-height"></div>
        </CardAnimationTwo>
        <CardAnimationTwo>
          <div className="card">
            <div className="card-Img">
              <Image
                h="124px"
                w="100%"
                objectFit="cover"
                src="../../image/PfiffikusLogo.png"
                className={styles.MilestonesImg}
              />
            </div>
            <div className="spacer-small"></div>
            <div>
              <h5></h5>
              <div className="spacer-small"></div>
              <h6>
                By participating in the Pfiffikus competition at the University
                of Freiburg, we qualified for the 3rd place and could not only
                prevail against other StartUp but also won a prize money for us.
              </h6>
            </div>
          </div>
        </CardAnimationTwo>
      </div>
     
    </section>
  );
}

export default MileStones;
