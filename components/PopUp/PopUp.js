import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import WhileHover from '../Animations/WhileHover';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <div className={`top-drawer ${isOpen ? 'open' : ''}`}>
    <div className="drawer-content">
      <p>Wir erheben und verarbeiten keine personenbezogenen 
      Daten von Ihnen und verwenden keine Cookies. Ihre Privatsphäre 
      ist uns wichtig.</p>
    </div>
    <div className="drawer-header">
    <WhileHover>
      <Button onClick={handleClose}>Close</Button>
      </WhileHover>
    </div>
  </div>
);
};

export default PopUp;
