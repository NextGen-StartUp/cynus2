import Link from "next/link";
import Footer from "../Layout/Footer"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import styles from './Layout.module.css'
import Scrollindicator from "../Scrollindicator/Scrollindicator";

export function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <header className={styles.header}>
    <div className={styles.bgHeader}></div>
      <Link className={styles.logo} href='/#LandingPage'>{'CYNUS'}</Link>
      <nav >
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li onClick={closeMobileMenu}><Link href='/#AboutCynus'>About</Link></li>
          <li onClick={closeMobileMenu}><Link href='/#Milestones'>MileStones</Link></li>
          <li onClick={closeMobileMenu}><Link href='/#WhoWeAre'>WhoWeAre</Link></li>
    
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
    <Scrollindicator />
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