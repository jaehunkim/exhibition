import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

function Index() {
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
      <ColorNavbar />
      <IndexHeader />
    </>
  );
}

export default Index;
