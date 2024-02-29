// Ausschreibung.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Image } from "@chakra-ui/react";

function Ausschreibung() {
  const router = useRouter();

  useEffect(() => {
    const { asPath } = router;
    const lowercasePath = asPath.toLowerCase();

    if (lowercasePath === '/ausschreibung') {
      // Redirect to the correct path
      router.replace('/Ausschreibung');
    }
  }, [router]);

  return (
    <div className="full-height2 align-left">
      <div className="div-box">
        <div className="spacer-medium"></div>
        <h1>AUSSCHREIBUNG</h1>
        <div className="spacer-small"></div>
        <div>
          <Image
            objectFit="cover"
            src="../../image/Ausschreibung.PNG"
            className="align-center"
            alt="Ausschreibung"
          />
        </div>
        <div className="spacer-medium"></div>
        <div className="spacer-medium"></div>
      </div>
    </div>
  );
}

export default Ausschreibung;
