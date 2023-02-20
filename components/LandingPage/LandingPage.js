import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import styles from './LandingPage.module.css'
import React, { useEffect, useRef } from "react";
import TextWithAnimation from "../Aminations/TextWithAnimation";

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

      <div className=''>
        <div className={styles.borderbox}>
        <div className={styles.textBottom}>
 
        <TextWithAnimation
         text=<h1 className={styles.headline1}>The smartest way to control 
        <br /> your device naturally</h1> delay={3500}
        />
        <TextWithAnimation text=<h1 className={styles.headline2}>
        THE FIRST FULLY FLEXIBLE <br />CONFIGURABLE OPEN SPACE PC MOUSE <br /></h1>
        delay={3700}/>
        </div>
       
        <video
          className={styles.videotransition}
          
          playsInline
          muted
          alt="All the devices"
          src="../../videos/Intro_1080LL.mp4"
          ref={videoEl}
        />
       
       </div>
       <div className={styles.textBottom2}>
       <TextWithAnimation
         text=<h1 className={styles.headline1}>The smartest way to control 
        <br /> your device naturally</h1> delay={3500}
        />
        <TextWithAnimation text=<h1 className={styles.headline2}>
        THE FIRST FULLY FLEXIBLE <br />CONFIGURABLE OPEN SPACE PC MOUSE <br /></h1>
        delay={3700}/>
       </div>
        </div>
        
    </section>
  )
}

export default LandingPage;