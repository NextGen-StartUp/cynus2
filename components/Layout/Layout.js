import Link from "next/link";
import Footer from "../Layout/Footer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import styles from "./Layout.module.css";
import UseScroll from "../Scrollindicator/UseScroll";
import PopUp from "../PopUp/PopUp";

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
          href="#LandingPage"
        >
          {"CYNUS"}
        </Link>
        <div className={styles.navLeftDotContainer}>
          <div id="nav-bar-dot">
            <h1>•</h1>
          </div>
          <div id="navbar-dot" className={styles.animationContainer}>
            <div className={`${styles.word} ${styles.w1}`}>Harder</div>
            <div className={`${styles.word} ${styles.w2}`}>Better</div>
            <div className={`${styles.word} ${styles.w3}`}>Faster</div>
            <div className={`${styles.word} ${styles.w4}`}>Stronger</div>
            <div className={`${styles.word} ${styles.w5}`}>Cynus</div>
          </div>
        </div>
        <nav className={styles.navHover}>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li onClick={closeMobileMenu}>
              <Link href="/#AboutCynus" data-link-alt="About">
                <span>About</span>
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link href="/#Milestones" data-link-alt="MileStones">
                <span>MileStones</span>
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link href="/#WhoWeAre" data-link-alt="WhoWeAre">
                <span>WhoWeAre</span>
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link href="/#benefits" data-link-alt="Benefits">
                <span>Benefits</span>
              </Link>
            </li>
            <li className="link-contact" onClick={closeMobileMenu}>
              <Link href="#Contact" data-link-alt="Contact">
                <span>Contact</span>
              </Link>
            </li>
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
      <PopUp />
      <div className="main-container">
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
