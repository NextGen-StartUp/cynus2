import { Image } from "@chakra-ui/react";
import styles from "./Milestones.module.css";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible";
import CardAnimation from "../Animations/CardAnimation";
import CardAnimationTwo from "../Animations/CardAnimationTwo";
import { useEffect, useState, useRef } from "react";

function MileStones({}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="Milestones" className="">
    <div className="spacer-large"></div>
      <div className="headlines">
        <FadeInWhenVisible>
          <h5 className="text-left">Milestones</h5>
        </FadeInWhenVisible>
      </div>

      <div className="full-height2 background-light">
        {isMobile ? (
          <div className="card">
            <div className="card-Img">
              <Image
                objectFit="cover"
                src="../../image/BadenCampusLogo.png"
                className={styles.MilestonesImg}
                alt="Baden Campus Logo"
              />
            </div>
            <div>
              <h6>
                Startup Accelerator: We were able to qualify and participate in
                the Accelerator Program at BadenCampus among many other
                startups.
              </h6>
            </div>
            <div className="spacer-small"></div>
          </div>
        ) : (
          <CardAnimation>
            <div className="card">
              <div className="card-Img">
                <Image
                  objectFit="cover"
                  src="../../image/BadenCampusLogo.png"
                  className={styles.MilestonesImg}
                  alt="Baden Campus Logo"
                />
              </div>
              <div className="spacer-small"></div>
              <div>
                <h5></h5>
                <div className="spacer-small"></div>
                <h6>
                  Startup Accelerator: We were able to qualify and participate
                  in the Accelerator Program at BadenCampus among many other
                  startups.
                </h6>
              </div>
            </div>
          </CardAnimation>
        )}
        <CardAnimationTwo>
          <div className="border-side full-height"></div>
        </CardAnimationTwo>

        {isMobile ? (
          <div className="card">
            <div className="card-Img">
              <Image
                objectFit="cover"
                src="../../image/PfiffikusLogo.png"
                className={styles.MilestonesImg}
                alt="Pfiffikus Logo"
              />
            </div>
            <div>
              <h5></h5>
              <h6>
                By participating in the Pfiffikus competition at the University
                of Freiburg, we qualified for third place against other StartUps.
              </h6>
            </div>
          </div>
        ) : (
          <CardAnimationTwo>
            <div className="card">
              <div className="card-Img">
                <div className="spacer-small"></div>
                <div className="spacer-small"></div>
                <Image
                  objectFit="cover"
                  src="../../image/PfiffikusLogo.png"
                  className={styles.MilestonesImg}
                  alt="Pfiffikus Logo"
                />
              </div>
              <div className="spacer-small"></div>
              <div className="spacer-small"></div>
              <div>
                <h5></h5>
                <div className="spacer-small"></div>
                <h6>
                By participating in the Pfiffikus competition at the University
                of Freiburg, we qualified for third place against other StartUps.
                </h6>
              </div>
            </div>
          </CardAnimationTwo>
        )}
      </div>
    </section>
  );
}

export default MileStones;
