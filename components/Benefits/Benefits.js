import { Image } from "@chakra-ui/react";
import CardAnimation from "../Animations/CardAnimation";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible";
import CardAnimationTwo from "../Animations/CardAnimationTwo";
import CardAnimationthree from "../Animations/CardAnimationthree";
import CardAnimationfour from "../Animations/CardAnimationfour";
import { useState } from "react";
import { useEffect } from 'react';

function Benefits() {
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
    <section id="benefits" className="">
      <div className="background-light">
        <FadeInWhenVisible>
          <div className="spacer-large"></div>
          <div className="headlines">
            <h5 className="">Benefits</h5>
          </div>
        </FadeInWhenVisible>
        <div className="full-height2 max-height2">
          {isMobile ? (
            <div className="card">
              <div className="card-Image">
                <Image
                  h="190px"
                  w="54%"
                  objectFit="cover"
                  src="../../image/computer-desktop.png"
                  className="align-center"
                  alt="Sign for High Ergonomics"
                />
              </div>
              <div>
                <h5>High Ergonomics</h5>
                <h6>
                  The 3D Mouse Sphere One is a round surface and location independent device.
                  These properties paired with the comprehensive touch
                  interface, through which the device adapts to the user,
                  enables new degrees of freedom in control and thus ergonomic
                  use.
                </h6>
              </div>
            </div>
          ) : (
            <CardAnimation>
              <div className="card">
                <div className="card-Image">
                  <Image
                    h="190px"
                    w="52%"
                    objectFit="cover"
                    src="../../image/computer-desktop.png"
                    className="align-center"
                    alt="Sign for High Ergonomics"
                  />
                </div>
                <div className="spacer-small"></div>
                <div>
                  <div className="spacer-medium"></div>
                  <h5>High Ergonomics</h5>
                  <div className="spacer-small"></div>
                  <h6>
                    The 3D Mouse Sphere One is a round surface and location independent
                    device. These properties paired with the comprehensive touch
                    interface, through which the device adapts to the user,
                    enables new degrees of freedom in control and thus ergonomic
                    use.
                  </h6>
                </div>
              </div>
            </CardAnimation>
          )}
          <div className="border-side full-height"></div>
          {isMobile ? (
            <div className="card">
              <div>
                <Image
                  h="190px"
                  w="54%"
                  objectFit="cover"
                  src="../../image/time-to-market.png"
                  className="align-center"
                  alt="Sign for increased Productivity"
                />
              </div>
              <div>
                <h5>Increased Productivity</h5>
                <h6>
                  With gesture control and both smart and intuitive input,
                  The 3D Mouse Sphere One increases the user&apos;s efficiency in the
                  workflow.
                </h6>
              </div>
            </div>
          ) : (
            <CardAnimationTwo>
              <div className="card">
                <div>
                  <Image
                    h="190px"
                    w="52%"
                    objectFit="cover"
                    src="../../image/time-to-market.png"
                    className="align-center"
                    alt="Sign for increased Productivity"
                  />
                </div>
                <div className="spacer-small"></div>
                <div>
                  <div className="spacer-medium"></div>
                  <h5>Increased Productivity</h5>
                  <div className="spacer-small"></div>
                  <h6>
                    With gesture control and both smart and intuitive input,
                    The 3D Mouse Sphere One increases the user&apos;s efficiency in the
                    workflow.
                  </h6>
                </div>
              </div>
            </CardAnimationTwo>
          )}

          <div className="border-side full-height"></div>

          {isMobile ? (
            <div className="card">
              <div>
                <Image
                  h="190px"
                  w="54%"
                  objectFit="cover"
                  src="../../image/multiple.png"
                  className="align-center"
                  alt="Sign to use on all devices"
                />
              </div>
              <div>
                <h5>One-For-All Computers</h5>
                <h6>
                The 3D Mouse Sphere One is a Human Interface Device (HID), which forms the
                  interface for human-PC interaction. With this standard, Sphere
                  One can be used universally as a PC mouse with many new smart
                  functions as an input device. Our intention is to replace
                  other input devices in the future as well (e.g. joystick,
                  keyboard, VR controller).
                </h6>
              </div>
            </div>
          ) : (
            <CardAnimationthree>
              <div className="card">
                <div>
                  <Image
                    h="190px"
                    w="52%"
                    objectFit="cover"
                    src="../../image/multiple.png"
                    className="align-center"
                    alt="Sign to use on all devices"
                  />
                </div>
                <div className="spacer-small"></div>
                <div>
                  <div className="spacer-medium"></div>
                  <h5>One-For-All Computers</h5>
                  <div className="spacer-small"></div>
                  <h6>
                  The 3D Mouse Sphere One is a Human Interface Device (HID), which forms
                    the interface for human-PC interaction. With this standard,
                    Sphere One can be used universally as a PC mouse with many
                    new smart functions as an input device. Our intention is to
                    replace other input devices in the future as well (e.g.
                    joystick, keyboard, VR controller).
                  </h6>
                </div>
              </div>
            </CardAnimationthree>
          )}

          <div className="border-side full-height"></div>

          {isMobile ? (
            <div className="card">
              <div>
                <Image
                  h="190px"
                  w="54%"
                  objectFit="cover"
                  src="../../image/road-sign.png"
                  className="align-center"
                  alt="Sign for More Flexibility"
                />
              </div>
              <div>
                <h5>More Flexibility</h5>
                <h6>
                The 3D Mouse Sphere One enables three-axis navigation in &quot;space&quot;
                  and is therefore ideal for 3D applications. This control can
                  be used for 2D applications without loss of quality. Sphere
                  One automatically recognizes when which scope of control is
                  required.
                </h6>
              </div>
            </div>
          ) : (
            <CardAnimationfour>
              <div className="card">
                <div>
                  <Image
                    h="190px"
                    w="52%"
                    objectFit="cover"
                    src="../../image/road-sign.png"
                    className="align-center"
                    alt="Sign for More Flexibility"
                  />
                </div>
                <div className="spacer-small"></div>
                <div>
                  <div className="spacer-medium"></div>
                  <h5>More Flexibility</h5>
                  <div className="spacer-small"></div>
                  <h6>
                  The 3D Mouse Sphere One enables three-axis navigation in
                    &quot;space&quot; and is therefore ideal for 3D
                    applications. This control can be used for 2D applications
                    without loss of quality. Sphere One automatically recognizes
                    when which scope of control is required.
                  </h6>
                </div>
              </div>
            </CardAnimationfour>
          )}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
