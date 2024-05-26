import styles from "./Contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FadeInWhenVisible from "../Animations/FadeInWhenVisible";
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import WhileHover from "../Animations/WhileHover";
import React from "react";
import AnimatedTextCharacter from "../Animations/AnimatedTextCharacter ";

function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section id="Contact" className="OverlappSection2">
      <div className="full-height background-dark flex-center">
        <div className="padding-top2">
       
        <AnimatedTextCharacter text="GET IN TOUCH AND BEGIN TO REVOLUTIONISE" className="text-center mobile-size"/>
        <AnimatedTextCharacter text="THE WAY WE USE A COMPUTER MOUSE" delay={0.9} className="text-center mobile-size"/>
     
        </div>
        <div className="spacer-medium"></div>
        <FadeInWhenVisible>
          <div className="padding-top">
            <WhileHover>
              <Button className="button" onClick={onOpen}>
                Get in Touch
              </Button>
            </WhileHover>

            <Drawer placement="top" onClose={onClose} isOpen={isOpen} size="xl">
              <DrawerOverlay />
              <DrawerContent className={styles.drawerContent}>
                <DrawerHeader className={styles.contactheader}>
                  <h5>Contact</h5>
                </DrawerHeader>
                <DrawerCloseButton
                  className={styles.drawerCloseButton}
                  backgroundColor="initial"
                  color="black"
                  zIndex={2}
                />
                <DrawerBody className={styles.drawerBody}>
                  <h5>
                    We&apos;d love to hear from you! Whether you have a
                    question, a suggestion, or just want to say hi, our doors
                    are always open. Let&apos;s connect and make something great
                    happen together!
                  </h5>
                </DrawerBody>
                <DrawerFooter className={styles.drawerFooter}>
                  <div className="flex-row align-center">
                    <div className="text-center contact-icon-hover">
                      <h5>E-Mail</h5>
                      <a
                        href="mailto:info@cynus.de"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <EmailIcon className={styles.FooterIcon} />
                      </a>
                    </div>
                    <div className="text-center contact-icon-hover">
                      <h5>LinkedIn</h5>
                      <a
                        href="https://www.linkedin.com/company/cynus/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon className={styles.FooterIcon} />
                      </a>
                    </div>
                  </div>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

export default Contact;
