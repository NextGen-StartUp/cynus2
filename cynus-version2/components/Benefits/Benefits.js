import { Button, Image } from "@chakra-ui/react"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { motion } from "framer-motion"
import Link from "next/link"
import FadeInWhenVisible from "../Aminations/FadeInWhenVisible"



function Benefits() {

    return (
        <section id="benefits">
        <div className="box">
       <FadeInWhenVisible>
        <div className="full-width">
          <div className="flex-row">
            <div className="cynus-logo">
              <motion.div initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
                <Image
                  className='sphere'
                  src='../image/darkBlueLogo.png'
                  alt='Sphere'
                  title="Sphere"
                />
              </motion.div>
            </div>

            <div className="about-info">
              <motion.div className="about-title" initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
                <div className="box">
                  <div className="flex-row">
                    <h1>About Sphere</h1>
                  </div>
                  <br />
                  <h2>We deliver &quot;The smartest way to control your device&quot; and perfect the human-application communication with our product. For the first time, the user is able to control their software application on the PC with only one input device. The intuitive use and smart features enable more efficient work and thus cost savings. On top, the high level of ergonomics contributes to the user&apos;s health.</h2>
                    <br />
                    <h2>On the one hand, our product reduces the necessary HIDs that the customer needs for there tasks, and on the other hand, they are no longer dependent on the surface and position. The user gets more degrees of freedom to execute the customers job. An emotional added value is the chic design, which clearly stands out from previous HIDs, according to the motto &quot;simple is more&quot;.
                      </h2>
                    <br />
                    <h2>It is a spherical device, which has sensors inside that make it possible to determine the position even without a base or external transmitters/sensors. The surface of the device is completely touch-sensitive and thus enables further control options. Through these many degrees of freedom, it is possible to flexibly adapt the input mechanisms to the respective applications. Due to the design and the new input possibilities, we stand out from the usual devices on the market.
                    </h2>
                    <br />
                  <div className="about-buttons">
                    <Link href='#Contact'><Button variant="contained" sx={{ fontSize: '16px', fontWeight: 'bolder', backgroundColor: '#1848e7', '&:hover': { backgroundColor: '#c6c9d2', color: '#1848e7' } }}><KeyboardDoubleArrowDownIcon />&nbsp; Get in touch</Button></Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
      <div className="flex-row">
        <h1>Benefits</h1>
      </div>
      <div className="container flex-row">
  <div className="card">
    <div className="imgBx">
      <Image 
      src="../image/sitting-on-a-chair.png" 
      alt="better-ergonomics"
      />
    </div>
    <div className="contentBx">
      <h2>High Ergonomics</h2>
      <div className="size">
        <h3>Sphere One is a round surface and location independent device. These properties paired
with the comprehensive touch interface, through which the device adapts to the user,
enables new degrees of freedom in control and thus ergonomic use.
</h3>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="imgBx">
      <Image 
      src="../image/time-to-market.png" 
      alt="increase-productivity"
      />
    </div>
    <div className="contentBx">
      <h2>Increased Productivity</h2>
      <div className="size">
        <h3>With gesture control and both smart and intuitive input, Sphere One increases the user&apos;s
efficiency in the workflow.

</h3>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="imgBx">
      <Image 
      src="../image/multiple.png" 
      alt="multiple-computers"
      />
    </div>
    <div className="contentBx">
      <h2>One-For-All Computers</h2>
      <div className="size">
        <h3>Sphere One is a Human Interface Device (HID), which forms the interface for human-PC
interaction. With this standard, Sphere One can be used universally as a PC mouse with many
new smart functions as an input device. Our intention is to replace other input
devices in the future as well (e.g. joystick, keyboard, VR controller).

</h3>
      </div>
    </div>
  </div>

  <div className="card">
    <div className="imgBx">
      <Image 
      src="../image/road-sign.png" 
      alt="road-sign"
      />
    </div>
    <div className="contentBx">
      <h2>More Flexibility</h2>
      <div className="size">
        <h3>Sphere One enables three-axis navigation in &quot;space&quot; and is therefore ideal for 3D
applications. This control can be used for 2D applications without loss of quality. Sphere One
automatically recognizes when which scope of control is required.

</h3>
      </div>
    </div>
  </div>

</div>

</FadeInWhenVisible>
        </div>
        </section>
    )
}

export default Benefits