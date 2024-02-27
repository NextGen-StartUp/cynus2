import Link from "next/link";
import { Image } from "@chakra-ui/react";


function Ausschreibung() {
  return (
    <div className="full-height2 align-left">
      <div className="div-box">
      <div className="spacer-medium"></div>
        <h1>AUSSCHREIBUNG</h1>
        <div className="spacer-small"></div>
        <div>
          

          <Image
                objectFit="cover"
                src="../../image/Ausschreibung.png"
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
