import { Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';



const PopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const isDrawerOpen = localStorage.getItem('isDrawerOpen');
    if (isDrawerOpen === 'false') {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('isDrawerOpen', 'false');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="top-drawer">
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
