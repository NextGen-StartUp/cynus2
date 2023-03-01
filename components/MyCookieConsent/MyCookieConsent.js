import Link from "next/link";
import CookieConsent from "react-cookie-consent";

const MyCookieConsent = () => {
  return (
    <>
      <CookieConsent
        location="none"
        buttonText="ACCEPT"
        declineButtonText="DECLINE"
        cookieName="Website-Analytics"
        enableDeclineButton
        flipButtons
        style={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
        buttonStyle={{
          flexDirection: "row",
          color: "black",
          background: "white",
          borderRadius: "5px",
        }}
        declineButtonStyle={{
          background: "white",
          color: "black",
          borderRadius: "5px",
        }}
        expires={7}
        buttonWrapperClasses="flex-row align-center btnwrappercookies"
        buttonClasses="buttonCookies"
        containerClasses="cookieWrapper"
        contentClasses="max-height"
        overlay
      >
        <span style={{ fontSize: "15px" }}>
          We use Analytic cookies to collect information about how you use our
          website, in order to improve our services and enhance your user
          experience. By clicking &quot;Accept&quot;, you consent to the use of
          these cookies. <Link href="/Datenschutzerklaerung">Datenschutzerklärung</Link>
        </span>
      </CookieConsent>
    </>
  );
};

export default MyCookieConsent;
