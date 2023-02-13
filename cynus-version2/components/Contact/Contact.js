import styles from "./Contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FadeInWhenVisible from "../Aminations/FadeInWhenVisible";
import {
  Box,
  Image,
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
import WhileHover from "../Aminations/WhileHover";
import LinkedIn from "@mui/icons-material/LinkedIn";
function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section id="Contact">
      <div className="full-height background-dark flex-center">
        <div>
          <h3>GET IN TOUCH AND BEGINN TO REVOLUTIONISE</h3>
          <h3 className="text-center">THE WAY WE USE A COMPUTER MOUSE</h3>
        </div>
        <div className="spacer-medium"></div>
        <FadeInWhenVisible>
          <div>
            <WhileHover>
              <Button className="button" onClick={onOpen}>
                Get in Touch
              </Button>
            </WhileHover>

            <Drawer onClose={onClose} isOpen={isOpen} size="xl">
              <DrawerOverlay />
              <DrawerContent className={styles.drawerContent}>
                <DrawerCloseButton
                  backgroundColor="initial"
                  color="#ccc"
                  zIndex={2}
                />
                <DrawerHeader className="text-center">
                  <h1>Contact</h1>
                </DrawerHeader>
                <DrawerBody className={styles.drawerBody}>
                  <div className="flex-row align-center">
                    <div className="text-center">
                      <h4>E-Mail</h4>
                      <a
                        href="mailto:Sphere@Sphere.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <EmailIcon
                          sx={{ fontSize: "100px", margin: 1, color: "white" }}
                        />
                      </a>
                      <h1></h1>
                    </div>

                    <div className="text-center">
                      <h4>LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/company/cynus/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon
                          sx={{ fontSize: "100px", margin: 1, color: "white" }}
                        />
                      </a>
                    </div>
                  </div>
                </DrawerBody>
                <DrawerFooter className={styles.drawerFooter}>
                  <h4>
                    "We'd love to hear from you! Whether you have a question, a
                    suggestion, or just want to say hi, our doors are always
                    open. Don't hesitate to reach out to us and we'll be happy
                    to assist in any way we can. Let's connect and make
                    something great happen together!"
                  </h4>
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
