import styles from './Works.module.css'
import { Image } from "@chakra-ui/react"
import FadeInWhenVisible from '../Aminations/FadeInWhenVisible.js'
import { motion } from "framer-motion";

export default function WhoWeAre({ }) {
 

    return (
        <section id="WhoWeAre" className='background-dark'>
            
            <FadeInWhenVisible>
            <div className="full-height background-dark">
        <div className="grid-container2 flex-center">
            <div className="about-info">
              <motion.div className="about-title" initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
                <div className="box">
                  <div className="flex-row">
                    <h1>Who we are</h1>
                  </div>
                  <div className='spacer-small'></div>
                  <h2>By transforming the human machine interaction, Cynus pushes the boundaries of how humans collaborate with devices and drives performance to new levels.  </h2>
                 
                  <div className='spacer-small'></div>
                  <h4>Our team consists of three founders</h4>
                  <div className='spacer-small'></div>
                  
          <h1>Delon:</h1> 

        <h2>With his deep background in electronics development, Delon is responsible for turning our ideas into working prototypes. 
        Thanks to Delon we are always able to validate our ideas quickly.</h2>
        <div className='spacer-small'></div>
        <h1>Konstantin:</h1>

          
          <h2>Konstantin is currently finalizing his PhD in Micro System Technologies. 
          Still in the early stages of his career Konstantin&apos;s interest in Software Development has led him to develop outstanding software solutions on several occasions. 
          In combination with his understanding of hardware Konstantin helps us bring our products to life. </h2>
          <div className='spacer-small'></div>
         <h1>Daniel:</h1>

          <h2>Daniel completes the skillset of our founding team and brings in the economic perspective, 
          essential to validate which product pass we should follow and how we can build a sustainable business. 
          Daniel holds a bachelor&apos;s degree in industrial engineering and a master&apos;s degree in international business, 
          specialized in entrepreneurship and SME management. </h2>

      
                </div>
              </motion.div>
            </div>
            <div className="img-container cynus-logo">
              <motion.div initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ ease: "easeOut", duration: 1.4 }}>
                <Image
                  className='sphere'
                  src='../image/Quadrat.png'
                  alt='founders'
                  title="The Founders"
                />
              </motion.div>
            </div>

          </div>
        </div>
            </FadeInWhenVisible>
        </section>
    )
}