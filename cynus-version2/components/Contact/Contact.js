import styles from './Contact.module.css'
import EmailIcon from '@mui/icons-material/Email';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FadeInWhenVisible from '../Aminations/FadeInWhenVisible';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

export default function Contact() {


    return (
        <section id="Contact">
            <div className='full-height background-dark flex-center'>
              <div className={styles.contact}>
                <h3>GET IN TOUCH AND BEGINN TO REVOLUTIONISE</h3>
                        <h3 className='text-center'>THE WAY WE USE A COMPUTER MOUSE</h3>
              </div>
              <div className='spacer-medium'></div>
                <div>
                  <Button className='button'>Get in Touch</Button>
                </div>
            </div>
        </section>
    );
}


