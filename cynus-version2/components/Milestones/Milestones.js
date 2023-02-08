
import { Image, StylesProvider } from "@chakra-ui/react"
import FadeInWhenVisible from "../Aminations/FadeInWhenVisible"
import styles from './Milestones.module.css'

function MileStones({ }) {



  return (
    <section id="Milestones">
      <FadeInWhenVisible>
      <div className='headlines'>
      <h5 className='text-left'>Milestones</h5>
      </div>
        <div className="full-height2 background-light">
          <div className="card">
            <div>
                <Image h='130px' w='100%' objectFit='cover' src="../../image/BadenCampusLogo.png" className={styles.MilestonesImg}/>
            </div>
            <div className="spacer-small"></div>
            <div>
              <h5 >High Ergonomics</h5>
              <div className="spacer-small"></div>
              <h6>Startup Accelerator: <br />
              We were able to qualify and participate in the Accelerator 
              Program at BadenCampus among many other startups.
              </h6>
            </div>
          </div>
          
          <div className="border-side full-height"></div>
          
          <div className="card">
            <div >
                <Image h='130px' w='100%' objectFit='cover' src="../../image/PfiffikusLogo.png" className={styles.MilestonesImg}/>
            </div>
            <div className="spacer-small"></div>
            <div>
              <h5>High Ergonomics1</h5>
              <div className="spacer-small"></div>
              <h6>
              By participating in the Pfiffikus competition at the University 
              of Freiburg, we qualified for the 3rd place and could not 
              only prevail against other StartUp but also won a prize money for us.
              </h6>
            </div>
          </div>



        </div>

      </FadeInWhenVisible>
    </section>
  )
}

export default MileStones
