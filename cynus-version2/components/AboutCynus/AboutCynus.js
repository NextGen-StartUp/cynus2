import { Image } from "@chakra-ui/react"
import Link from "next/link";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Button from '@mui/material/Button';
import styles from './AboutCynus.module.css'

function AboutCynus({ }) {


  return (
      <section id="AboutCynus">
        <div className="full-height">
        <div className="grid-container flex-center">
          <div className={styles.Imgbox}>
            <Image src='../../image/darkBlueLogo.png' />
          </div>
          <div className={styles.textbox}>
          <h1>About Sphere</h1>
          <br />
          <br />
            <h3>We deliver "The smartest way to control your device" and perfect the human-application communication with our product. For the first time, the user is able to control their software application on the PC with only one input device. The intuitive use and smart features enable more efficient work and thus cost savings. On top, the high level of ergonomics contributes to the user's health.
              <br />
              <br />
              On the one hand, our product reduces the necessary HIDs that the customer needs for there tasks, and on the other hand, they are no longer dependent on the surface and position. The user gets more degrees of freedom to execute the customers job. An emotional added value is the chic design, which clearly stands out from previous HIDs, according to the motto "simple is more".
              <br />
              <br />
              It is a spherical device, which has sensors inside that make it possible to determine the position even without a base or external transmitters/sensors. The surface of the device is completely touch-sensitive and thus enables further control options. Through these many degrees of freedom, it is possible to flexibly adapt the input mechanisms to the respective applications. Due to the design and the new input possibilities, we stand out from the usual devices on the market.</h3>
          </div>
        </div>

    </div>
      </section>
  )
}

export default AboutCynus