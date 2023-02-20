import React, { useEffect, useState } from "react";
import styles from './Scrollindicator.module.css'


function Scrollindicator() {


    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


return (
    <div className={styles.progressMainWrapper}>
        <div className={styles.progressMainStyle} style={{ width: `${scrollTop}%`}}>

        </div>
    </div>


    )

}

export default Scrollindicator