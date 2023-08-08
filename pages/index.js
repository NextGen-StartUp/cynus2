import Head from "next/head";
import AboutCynus from "../components/AboutCynus/AboutCynus";
import Benefits from "../components/Benefits/Benefits";
import Contact from "../components/Contact/Contact";
import LandingPage from "../components/LandingPage/LandingPage";
import MileStones from "../components/Milestones/Milestones";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";


export default function Home() {



  return (
    <>
      <div className="background-dark">
        <Head>
          <title>CYNUS 3D Mouse- Fully Flexible Configurable PC Mouse for Increased Productivity</title>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="CYNUS 3D Mouse: THE FIRST FULLY FLEXIBLE CONFIGURABLE OPEN SPACE PC MOUSE"/>
          <meta name="keywords" content="3D Maus, 3D Mouse, HID, Computermaus, High Ergonomics, Increased Productivity, One-For-All Computers, Flexibility"/>
          <meta name="author" content="Delon Wagner"/>
          <meta property="og:image" content="../public/image/darkBlueLogo.png" />
          <meta property="og:url" content="https://cynus.de" />
          <link rel="icon" href="/favicon-16x16.png" />
        </Head>
        <LandingPage />
        <AboutCynus />
      </div>
      <MileStones />
      <WhoWeAre />
      <Benefits />
      <Contact />
    </>
  );
}
