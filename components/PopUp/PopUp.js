import { Button } from '@chakra-ui/react';
import { useState } from 'react';

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
      <Button onClick={handleClose}>Close</Button>
    </div>
  </div>
);
};

export default PopUp;
