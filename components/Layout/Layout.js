import Link from "next/link";
import Footer from "../Layout/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import UseScroll from "../Scrollindicator/UseScroll";
import { useRouter } from 'next/router';
import RoundLink from '../RoundLink/RoundLink';

export function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <header className={styles.header}>
        <div className={styles.bgHeader}></div>
        <Link
          className={styles.logo}
          data-link-alt="Landing Page"
          href="/#LandingPage"
        >
          {"CYNUS"}
        </Link>
        <div className={styles.navLeftDotContainer}>
          <div id="nav-bar-dot">
            <h1>•</h1>
          </div>
          <div id="navbar-text" className={styles.animationContainer}>
            <div className={`${styles.word} ${styles.w1}`}>Open space</div>
            <div className={`${styles.word} ${styles.w2}`}>Intuitive</div>
            <div className={`${styles.word} ${styles.w3}`}>Fully flexible</div>
            <div className={`${styles.word} ${styles.w4}`}>20% faster</div>
            <div className={`${styles.word} ${styles.w5}`}>Works on air</div>
            <div className={`${styles.word} ${styles.w6}`}>Wireless</div>
            <div className={`${styles.word} ${styles.w7}`}>Ergonomical</div>
            <div className={`${styles.word} ${styles.w8}`}>3D Mouse</div>
          </div>
        </div>
        <nav className={styles.navHover}>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li onClick={closeMobileMenu}><Link href="/#AboutCynus" data-link-alt="About"><span>About</span></Link></li>
            <li onClick={closeMobileMenu}><Link href="/#Milestones" data-link-alt="MileStones"><span>MileStones</span></Link></li>
            <li onClick={closeMobileMenu}><Link href="/#WhoWeAre" data-link-alt="Who We Are"><span>Who We Are</span></Link></li>
            <li onClick={closeMobileMenu}><Link href="/#benefits" data-link-alt="Benefits"><span>Benefits</span></Link></li>
            <li className="link-contact" onClick={closeMobileMenu}><Link href="/#Contact" data-link-alt="Contact"><span>Contact</span></Link></li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseIcon className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </nav>
      </header>
      <UseScroll />
    </>
  );
}
function Layout(props) {
  return (
    <div className="layout">
      <NavBar />
      <div className="main-container">
        {/* <RoundLink /> */}
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
