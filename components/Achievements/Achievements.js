import { Image, Box, List, ListItem, Text } from "@chakra-ui/react";
import styles from "./Achievements.module.css";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible";
import CardAnimation from "../Animations/CardAnimation";

export default function Achievements() {
  const items = [
    {
      year: "2025:",
      text: "BMWK Gründerpreis+ Winner of the most highly endowed category with prize money of €32,000",
    },
    {
      year: "2024:",
      text: "Cyberone Hightech Award Finalist in the Industrial Tech category",
    },
    {
      year: "2023:",
      text: "Spark by Founders Club Freiburg Winner of the Scalability Award, sponsored by the Black Forest Business Angels",
    },
    {
      year: "2022:",
      text: "Pfiffikus Gründerpreis 3rd Place at the University of Freiburg",
    },
  ];

  return (
    <section id="Achievements">
      <div className="padding-top">
        <div className="spacer-large" />
         <FadeInWhenVisible>
                 <div className="headlines">
                   <h5 className="">Achievements</h5>
                 </div>
               </FadeInWhenVisible>
        <div className={`${styles["grid-container"]} full-height`}>
          
          {/* Left: logos */}
          <CardAnimation>
            <Box className={styles.Imgbox}>
              {/* Full‐height Gründerpreis */}
              <Box className={styles.logoColumn}>
                <Image
                  src="/image/gruendungspreis.png"
                  alt="BMWK Gründerpreis+"
                  objectFit="contain"
                />
              </Box>
              {/* Three smaller logos */}
              <Box className={styles.logoColumn}>
                <Image
                  src="/image/FoundersClub.png"
                  alt="Founders Club Freiburg"
                  objectFit="contain"
                />
                <Image
                  src="/image/PfiffikusLogo.png"
                  alt="Gründerideenpreis Pfiffikus"
                  objectFit="contain"
                />
                <Image
                  src="/image/CyberOne.png"
                  alt="CyberOne Hightech Award"
                  objectFit="contain"
                />
              </Box>
            </Box>
          </CardAnimation>

          {/* Right: text */}
          <Box className={styles.textbox}>
            <FadeInWhenVisible>
              <Text as="h6" fontSize="4xl" fontWeight="bold" mt={4} textAlign="center">
                We&apos;re proud to have been recognized with multiple awards over the years!
              </Text>

              {/* Chakra List wrapper fixes the ListItem error */}
              <List
                as="ul"
                spacing={4}
                mt={4}
                textAlign="left"
                display="inline-block"
                fontSize="xl"
                >
                {items.map(({ year, text }) => (
                    <FadeInWhenVisible  key={year}>
                  <ListItem>
                    <Text as="span" fontWeight="bold">
                      {year}
                    </Text>{" "}
                    {text}
                  </ListItem>
                </FadeInWhenVisible>
                ))}
              </List>
            </FadeInWhenVisible>
          </Box>
        </div>
      </div>
    </section>
  );
}
