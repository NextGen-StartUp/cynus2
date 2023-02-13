import Link from "next/link";
import Footer from "../Layout/Footer"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import styles from './Layout.module.css'
import UseScroll from "../Scrollindicator/UseScroll";



export function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
    <header className={styles.header} >
    <div className={styles.bgHeader}></div>
      <a className={styles.logo} to='/'  href='/'>{'CYNUS'}</a>
      <div className={styles.navLeftDotContainer}>
      
      <div>
        <h1>•</h1>
      </div>

      <div className={styles.animationContainer}>
         <div className={`${styles.word} ${styles.w1}`}>Harder</div>
         <div className={`${styles.word} ${styles.w2}`}>Better</div>
         <div className={`${styles.word} ${styles.w3}`}>Faster</div>
         <div className={`${styles.word} ${styles.w4}`}>Stronger</div>
         <div className={`${styles.word} ${styles.w5}`}>Cynus is the best</div>
    
      </div>
    
      
      </div>
      <nav>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li onClick={closeMobileMenu}><a href='#AboutCynus'>About</a></li>
          <li onClick={closeMobileMenu}><a  href='/#Milestones'>MileStones</a></li>
          <li onClick={closeMobileMenu}><a  href='#WhoWeAre'>WhoWeAre</a></li>
          <li onClick={closeMobileMenu}><a data-scroll href='#benefits'>Benefits</a></li>
    
          <li className="link-contact" onClick={closeMobileMenu}><Link href='/#Contact'>Contact</Link></li>
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
  )
}
function Layout(props) {
  return (
    <div className="layout">
      <NavBar />
      <div className="main-container">
        <main>{props.children}</main>
      </div>
       <Footer /> 
    </div>
  )
}
export default Layout;