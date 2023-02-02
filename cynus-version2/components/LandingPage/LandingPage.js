import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import styles from './LandingPage.module.css'
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion"
import FadeInWhenVisible from '../Aminations/FadeInWhenVisible';
import FadeIn from '../Aminations/FadeIn';

function LandingPage() {
  const { elementInView } = useContext(DataContext)

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);



  return (
    <section id="LandingPage">

      
        <div className={styles.borderbox}>
        <div className={styles.textBottom}>
        {/* <motion.div 
        animate={{ x: [50, 0] }}
        transition={{ duration: 1.2 }}> */}
        <h1 className={styles.headline1}>The smartest way to control <br /> your device naturally </h1>
        {/* </motion.div>
        <motion.div 
        animate={{ x: [100, 0] }}
        transition={{ duration: 0.2 }}> */}
        <h1 className={styles.headline2}>THE FIRST FULLY FLEXIBLE <br />CONFIGURABLE OPEN SPACE PC MOUSE <br /> </h1>
        {/* </motion.div> */}
        </div>
        <video
          className={styles.videotransition}
          style={{ maxWidth: "100%", width: "70%", margin: "0 auto" }}
          playsInline
          muted
          alt="All the devices"
          src="../../videos/Intro_1080LL.mp4"
          ref={videoEl}
        />
       
        
        </div>
      
    </section>
  )
}

export default LandingPage;