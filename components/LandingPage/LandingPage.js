import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import styles from './LandingPage.module.css'
import React, { useEffect, useRef } from "react";
import TextWithAnimation from "../Animations/TextWithAnimation";
import TextWithAnimationMobile from '../Animations/TextWithAnimationMobile';

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="LandingPage">

      <div className='min-height'>
        <div className={styles.borderbox}>
        <div className={styles.textBottom}>
 
        {isMobile ? (
          <>
          <TextWithAnimationMobile text=<h1 className={styles.headline1}>The smartest way to control <br />
          your device naturally </h1> delay={500} 
          />
          <TextWithAnimationMobile text=<h1 className={styles.headline2}>
          THE FIRST FULLY FLEXIBLE <br />CONFIGURABLE OPEN SPACE PC MOUSE <br /></h1> 
          delay={700} />
          </>
    ) : (
      <div>
        <TextWithAnimation text=<h1 className={styles.headline1}>The smartest way to control 
        <br /> your device naturally</h1> delay={500}
        />
        <TextWithAnimation text=<h1 className={styles.headline2}>
        THE FIRST FULLY FLEXIBLE <br />CONFIGURABLE OPEN SPACE PC MOUSE <br /></h1>
        delay={700}/>
      </div>
    )}
        </div>
       <div className={styles.videoContainer}>
        {/* <video
          className={styles.videotransition}
          
          playsInline
          muted
          alt="All the devices"
          src="../../videos/Intro_1080LL.mp4"
          ref={videoEl}
        /> */}
        <img 
          src='../../image/Mouse-Cynus.PNG'
          alt="All the devices"
          className={styles.videotransition}
        />
       </div>
       </div>
       <div className={styles.textBottom2}>
       {isMobile ? (
          <>
          <TextWithAnimationMobile text=<h1 className={styles.headline1}>The smartest way to control <br />
          your device naturally </h1> delay={500} 
          />
          <TextWithAnimationMobile text=<h1 className={styles.headline2}>
          THE FIRST FULLY FLEXIBLE <br />CONFIGURABLE OPEN SPACE PC MOUSE <br /></h1> 
          delay={700} />
          </>
    ) : (
      <div>
        <TextWithAnimation text=<h1 className={styles.headline1}>The smartest way to control 
        <br /> your device naturally</h1> delay={500}
        />
        <TextWithAnimation text=<h1 className={styles.headline2}>
        THE FIRST FULLY FLEXIBLE <br />CONFIGURABLE OPEN SPACE PC MOUSE <br /></h1>
        delay={700}/>
      </div>
    )}
       </div>
        </div>
        
    </section>
  )
}

export default LandingPage;