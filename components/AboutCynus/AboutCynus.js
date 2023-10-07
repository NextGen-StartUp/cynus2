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
                alt="3D Mouse Cynus Logo"
                src="../../image/cynusLogo.png"
              />
            </div>
          </CardAnimation>
          <div className={styles.textbox}>
            <FadeInWhenVisible>
              <h1 className={styles.heading}>3D Mouse - Sphere</h1>
              <div className="spacer-small"></div>
            </FadeInWhenVisible>
            <div className="spacer-medium"></div>
            <FadeInWhenVisible>
              <h2 className={styles.heading}>
                <span style={{ color: "#ffffff7a", letterSpacing: "1px" }}>
                  <strong>
                    Sphere One: Revolutionary 3D Navigation for Enhanced
                    Efficiency and Ergonomics
                  </strong>
                </span>
                {/* We deliver &quot;The smartest way to control your application&quot;
                and perfect the human-device communication with our
                product, the 3D Mouse. For the first time, the user is able to
                control their software application on the PC with only one input
                device. The intuitive use and smart features enable more
                efficient work and thus cost savings. On top, the high level of
                ergonomics contributes to the user&apos;s health. */}
              </h2>
              <div className="spacer-small"></div>
              <h2>
                With Sphere One, innovation meets ergonomics, redefining 3D
                navigation. Sphere One is the input device that makes daily work
                in 3D applications more than 20% more efficient while improving
                the ergonomic work environment.
              </h2>
              <div className="spacer-small"></div>
            </FadeInWhenVisible>
            <div className="spacer-small"></div>
            <FadeInWhenVisible>
              <h2 className={styles.heading}>
                <span style={{ letterSpacing: "1px", color: "#ffffff7a" }}>
                  <strong>The Problem: Human Bottleneck in Technology</strong>
                </span>
                {/* On the one hand, our 3D Mouse reduces the necessary HIDs that the
                customer needs for their tasks, and on the other hand, they are
                no longer dependent on the surface and position. The user gets
                more degrees of freedom to execute the customer&apos;s job. An
                emotional added value is the chic design of our 3D Mouse, which
                clearly stands out from previous HIDs, according to the motto
                &quot;simple is more&quot;. */}
              </h2>
              <div className="spacer-small"></div>
              <h2>
                In a world where technological advancements are omnipresent,
                companies face a critical challenge: the shortage of qualified
                professionals. As technology becomes more powerful and complex,
                human input becomes the bottleneck. The conventional PC mouse,
                even in its wireless and ergonomic form, can no longer meet the
                demands of 3D applications. Additionally, it is bound to surface
                and orientation, limiting efficiency.
              </h2>
              <div className="spacer-small"></div>
            </FadeInWhenVisible>
            <div className="spacer-small"></div>
            <FadeInWhenVisible>
              <h2 className={styles.heading}>
                <span style={{ color: "#ffffff7a", letterSpacing: "1px" }}>
                  <strong>
                    Sphere One: The Solution - Rethinking the Mouse
                  </strong>
                </span>
              </h2>
              <div className="spacer-small"></div>
              <h2>
                Sphere One is a novelty in the world of computer input devices.
                This spherical, wireless mouse exceeds conventional mice in
                every aspect. It enables smarter, more liberated, and intuitive
                digital navigation while optimizing ergonomics.
              </h2>
              <div className="spacer-small"></div>
            </FadeInWhenVisible>
            <div className="spacer-small"></div>
            <FadeInWhenVisible>
              <h2 className={styles.heading}>
                <span style={{ color: "#ffffff7a", letterSpacing: "1px" }}>
                  <strong>Your Benefits with Sphere One</strong>
                </span>
              </h2>
              <div className="spacer-small"></div>
              <h2>
                <ul>
                  <li>
                    <span style={{ color: "#ffffff7a" }}>
                      <strong>Increased Productivity:</strong>{" "}
                    </span>
                    Accomplish tasks 20% faster and more accurately without
                    limitations.
                  </li>
                  <li>
                    <span style={{ color: "#ffffff7a" }}>
                      <strong>Cost Savings:</strong>{" "}
                    </span>
                    Forget about additional input devices or workarounds. Sphere
                    One is the comprehensive solution.
                  </li>
                  <li>
                    <span style={{ color: "#ffffff7a" }}>
                      {" "}
                      <strong>Ergonomic Health: </strong>{" "}
                    </span>
                    Reduce the risk of injuries and enhance the well-being of
                    your employees. A healthy team is a productive team.
                  </li>
                </ul>
              </h2>
            </FadeInWhenVisible>
            <div className="spacer-small"></div>
            <FadeInWhenVisible>
              <h2 className={styles.heading}>
                <span style={{ color: "#ffffff7a", letterSpacing: "1px" }}>
                  <strong>The Magic of Sphere One</strong>
                </span>
                {/* The 3D Mouse is a spherical device, which has sensors inside that make it
                possible to determine the position even without a base or
                external transmitters/sensors. The surface of the device is
                completely touch-sensitive and thus enables further control
                options. Through these many degrees of freedom, it is possible
                to flexibly adapt the input mechanisms to the respective
                applications. Due to the design and the new input possibilities,
                our 3D Mouse stands out from the usual devices on the market. */}
              </h2>
              <div className="spacer-small"></div>
              <h2>
                <ul>
                  <li>
                    <span style={{ color: "#ffffff7a" }}>
                      {" "}
                      <strong>Freedom Without Bounds:</strong>{" "}
                    </span>{" "}
                    Sphere One is independent of surface and orientation. Hold
                    the wireless device in your hand and use it in any position
                    without compromising functionality.
                  </li>
                  <li>
                    <span style={{ color: "#ffffff7a" }}>
                      <strong>3D and 2D in Perfection:</strong>{" "}
                    </span>
                    Sphere One is perfect for 3D applications like CAD or
                    multimedia, but it also seamlessly controls two-dimensional
                    applications like office tasks.
                  </li>
                  <li>
                    <span style={{ color: "#ffffff7a" }}>
                      <strong>Gestures: </strong>{" "}
                    </span>
                    Individual movements allow additional input commands
                    (shortcuts).
                  </li>
                  <li>
                    <span style={{ color: "#ffffff7a" }}>
                      <strong>Artificial Intelligence:</strong>{" "}
                    </span>
                    Sphere One operates with powerful AI, analyzing metadata and
                    verifying plausibility to minimize input errors.
                  </li>
                  <li>
                    <span style={{ color: "#ffffff7a" }}>
                      <strong>Wireless Charging:</strong>{" "}
                    </span>
                    No more cable clutter - Sphere One charges wirelessly.
                  </li>
                </ul>
              </h2>
            </FadeInWhenVisible>
            <div className="spacer-small"></div>
            <FadeInWhenVisible>
              <h2>
                Welcome to the future of 3D navigation. Welcome to Sphere One by
                Cynus - The smartest way to control your application.
              </h2>
              <div className="spacer-small"></div>
              <h2>
                <em>
                  Learn more about our technology and how it can revolutionize
                  your workflow. Contact us today.
                </em>
              </h2>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCynus;
