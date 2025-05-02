import { Image, Box, Text } from "@chakra-ui/react";
import styles from "./Supporter.module.css";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible";
import CardAnimation from "../Animations/CardAnimation";

function Supporter({}) {
  const bottomLogos = [
    { src: "/image/BadenCampusLogo.png",   alt: "Supporter 1"   },
    { src: "/image/Mtech.png",   alt: "Supporter 2"   },
    { src: "/image/CyberLab.png",   alt: "Supporter 3"   },
  ];


  return (
    <section id="Supporter" className="">
      <div className="spacer-large"></div>
      <div className="headlines">
        <FadeInWhenVisible>
          <h5 className="text-left">Supporter</h5>
        </FadeInWhenVisible>
      </div>

      <div className="full-height2 background-light">
      <div className={`${styles.gridContainer} full-height`}>
          {/* Top: full-fill image */}
          <FadeInWhenVisible>
          <CardAnimation>
            <Box className={styles.gridContainer}>
              
              {/* Top: one big header image */}
              <Box className={styles.topImageBox}>
                <Image
                  src="/image/SupporterImg.png"
                  alt="Bundesministerium für Wirtschaft und Klimaschutz"
                  w="90%"
                  h="90%"
                  objectFit="contain"
                />
              </Box>

              {/* Bottom: three logos sharing that same box-size */}
              <Box className={styles.bottomImagesBox}>
                {bottomLogos.map(({ src, alt }) => (
                  <Box key={src} className={styles.logoWrapper}>
                    <Image
                      src={src}
                      alt={alt}
                      
                      objectFit="contain"
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </CardAnimation>
        </FadeInWhenVisible>
        </div>
     </div>
    </section>
  );
}

export default Supporter;
