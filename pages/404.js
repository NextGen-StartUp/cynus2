import Link from "next/link";

function NotFound() {
  return (
    <div className="full-height2 align-left">
      <div className="div-box">
        <div className="spacer-samll"></div>
        <div className="spacer-large"></div>
        <div className="spacer-large"></div>
        <div>
          <h1>404 | Page Not Found</h1>
        </div>
        <div className="spacer-medium"></div>
        <div className="full-height2 align-left">
          <Link className="" data-link-alt="Landing Page" href="/#LandingPage">
            <h5>Go back</h5>
          </Link>
        </div>
        <div className="spacer-medium"></div>
        <div className="spacer-large"></div>
        <div className="spacer-large"></div>
        <div className="spacer-large"></div>
      </div>
    </div>
  );
}

export default NotFound;
