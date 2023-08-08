import { Image } from "@chakra-ui/react";
import styles from "./AboutCynus.module.css";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible";
import CardAnimation from "../Animations/CardAnimation";

function AboutCynus({}) {
  return (
    <section id="AboutCynus">
      <div className="background-dark padding-top">
        <div className="spacer-large"></div>
        <div className="grid-container flex-center full-height">
          <CardAnimation>
            <div className={styles.Imgbox}>
              <Image
                alt="3D Maus Cynus Logo"
                src="../../image/CynusLogo.png"
              />
            </div>
          </CardAnimation>
          <div className={styles.textbox}>
            <FadeInWhenVisible>
              <h1>3D Maus - Sphere</h1>
            </FadeInWhenVisible>
            <div className="spacer-medium"></div>
            <FadeInWhenVisible>
              <h2>
                {/* We deliver &quot;The smartest way to control your device&quot;
                and perfect the human-application communication with our
                product. For the first time, the user is able to control their
                software application on the PC with only one input device. The
                intuitive use and smart features enable more efficient work and
                thus cost savings. On top, the high level of ergonomics
                contributes to the user&apos;s health. */}
                We deliver &quot;The smartest way to control your device&quot;
                and perfect the human-application communication with our
                product, the 3D Maus. For the first time, the user is able to
                control their software application on the PC with only one input
                device. The intuitive use and smart features enable more
                efficient work and thus cost savings. On top, the high level of
                ergonomics contributes to the user&apos;s health.
              </h2>
            </FadeInWhenVisible>
            <div className="spacer-small"></div>
            <FadeInWhenVisible>
              <h2>
                {/* On the one hand, our product reduces the necessary HIDs that the
                customer needs for there tasks, and on the other hand, they are
                no longer dependent on the surface and position. The user gets
                more degrees of freedom to execute the customers job. An
                emotional added value is the chic design, which clearly stands
                out from previous HIDs, according to the motto &quot;simple is
                more&quot;. */}
                On the one hand, our 3D Maus reduces the necessary HIDs that the
                customer needs for their tasks, and on the other hand, they are
                no longer dependent on the surface and position. The user gets
                more degrees of freedom to execute the customer&apos;s job. An
                emotional added value is the chic design of our 3D Maus, which
                clearly stands out from previous HIDs, according to the motto
                &quot;simple is more&quot;.
              </h2>
            </FadeInWhenVisible>
            <div className="spacer-small"></div>
            <FadeInWhenVisible>
              <h2>
                {/* It is a spherical device, which has sensors inside that make it
                possible to determine the position even without a base or
                external transmitters/sensors. The surface of the device is
                completely touch-sensitive and thus enables further control
                options. Through these many degrees of freedom, it is possible
                to flexibly adapt the input mechanisms to the respective
                applications. Due to the design and the new input possibilities,
                we stand out from the usual devices on the market.
                The 3D Maus is a spherical device, which has sensors inside that make it */}
                possible to determine the position even without a base or
                external transmitters/sensors. The surface of the device is
                completely touch-sensitive and thus enables further control
                options. Through these many degrees of freedom, it is possible
                to flexibly adapt the input mechanisms to the respective
                applications. Due to the design and the new input possibilities,
                our 3D Maus stands out from the usual devices on the market.
              </h2>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCynus;
