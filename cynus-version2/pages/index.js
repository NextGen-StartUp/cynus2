import Head from 'next/head'
import AboutCynus from '../components/AboutCynus/AboutCynus';
import Contact from '../components/Contact/Contact';
import LandingPage from '../components/LandingPage/LandingPage';
import MileStones from '../components/Milestones/Milestones';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';


export default function Home() {

  

  return (
    <div>
      <Head>
        <title>CYNUS</title>
        <meta name="description" content="CYNUS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <LandingPage />
      <div className=''>
        <div>
          <AboutCynus />
        </div>
        <div className='content'>
         <MileStones />
         <WhoWeAre />
          <Contact />
          
        </div>
      </div>
    </div>
  )
}
