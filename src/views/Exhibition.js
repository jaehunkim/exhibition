import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import ExhibitionHeader from "components/Headers/ExhibitionHeader.js";

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
      <ColorNavbar />
      <ExhibitionHeader />
    </>
  );
}

export default Exhibition;
