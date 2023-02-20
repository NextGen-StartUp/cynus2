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
          <title>CYNUS</title>
          <meta name="description" content="CYNUS" />
          <link rel="icon" href="" />
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
