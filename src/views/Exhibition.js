import React from "react";
import { useMediaQuery } from "react-responsive";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import ExhibitionHeader from "components/Headers/ExhibitionHeader.js";
import ExhibitionMobile from "views/ExhibitionMobile.js";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

function Exhibition() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <div id="control-height" className="control-height"></div>
      <Desktop>
        <ColorNavbar />
        <ExhibitionHeader />
      </Desktop>
      <Mobile>
        <ExhibitionMobile />
      </Mobile>
    </>
  );
}

export default Exhibition;
