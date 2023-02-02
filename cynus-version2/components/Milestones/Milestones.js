
import FadeInWhenVisible from "../Aminations/FadeInWhenVisible"
import Link from "next/link";
import { Image } from "@chakra-ui/react"
import styles from './Milestones.module.css'

function MileStones({ }) {



  return (
    <section id="Milestones">
      <h3 className='section-title'>Milestones</h3>
      <FadeInWhenVisible>
      <div className="full-height">
        <div className="grid-container flex-center">

        <div className="card">
          <div className="card__content">
            <div className="card__front">
              <div className="card__border">
              <Image
                  className='BadenCampusLogo'
                  src='../image/BadenCampusLogo.png'
                  alt='founders'
                  title="The Founders" 
              />
                <p className="card__subtitle">details </p>
              </div>
            </div>
            <div className={styles.Cardbody}>
              <p className={styles.Cardbody}>
              Startup Accelerator: <br />
              We were able to qualify and participate in the Accelerator Program at BadenCampus among many other startups.</p>
                <Link href='https://badencampus.de/' variant="contained" sx={{ fontSize: '50px', fontWeight: 'bolder', backgroundColor: '#1848e7', '&:hover': { backgroundColor: '#c6c9d2', color: '#1848e7' } }}>Visit</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
            <div className="card__front">
              <div className="card__border">
              <Image
                  className='BadenCampusLogo'
                  src='../image/PfiffikusLogo.png'
                  alt='Pfiffikus-Logo'
                  title="The Founders" 
              />
              <br />
              <br />
              <br />
                <p className={styles.Cardbody}>details</p>
              </div>
              
            </div>
            <div className={styles.Cardbody}>
              <p className={styles.Cardbody}>By participating in the Pfiffikus competition at the University of Freiburg, we qualified for the 3rd place and could not only prevail against other StartUp but also won a prize money for us.</p>
              <Link href='https://www.freiburg-pfiffikus.de/' variant="contained" sx={{ fontWeight: 'bolder', backgroundColor: '#1848e7', '&:hover': { backgroundColor: '#c6c9d2', color: '#1848e7' } }}>Visit</Link>
            </div>
          </div>
        </div>


        </div>
      </div>
      </FadeInWhenVisible>
    </section>
  )
}

export default MileStones
