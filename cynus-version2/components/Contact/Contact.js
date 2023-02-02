import styles from './Contact.module.css'
import EmailIcon from '@mui/icons-material/Email';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FadeInWhenVisible from '../Aminations/FadeInWhenVisible';


export default function Contact() {


    return (
        <section id="Contact">
            <h3 className='section-title align-center'>Get in touch</h3>
            <FadeInWhenVisible >
            <div className="full-height">
        <div className="grid-container flex-center">
            <div className="box1 box">
              <div className='boxitem'>
                <a href="mailto:Sphere@Sphere.com" target="_blank" rel="noopener noreferrer"> <EmailIcon sx={{ fontSize: "60px", margin: 1 }} /></a>
                <h1>info@cynus.de</h1>
              </div>
            </div>
            <div className="box2 box box1">
              <div className='boxitem'>
                <PhonelinkRingIcon sx={{ fontSize: "60px", margin: 1 }} /> <h1>coming soon...</h1>
              </div>
            </div>
            <div className="box3 box box1">
              <div className='boxitem'>
                <a href="https://www.linkedin.com/company/cynus/" target="_blank" rel="noopener noreferrer" ><LinkedInIcon sx={{ fontSize: "60px", margin: 1 }} /></a>
                <h1>Let&apos;s connect</h1></div>
            </div>
          </div>
          </div>
            </FadeInWhenVisible>
        </section>
    );
}