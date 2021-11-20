import React from "react";
// reactstrap components

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import FooterBlack from "components/Footers/FooterBlack.js";
// sections for this page
import SectionHeader from "./sections-sections/SectionHeader.js";

function Sections() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("section-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    // this function is used to make the right bullets list
    // (the bellow <nav id="cd-vertical-nav">)
    // active when changeing the section on scroll
    const updateView = () => {
      var contentSections = document.getElementsByClassName("cd-section");
      
    };

    window.addEventListener("scroll", updateView);
    return function cleanup() {
      document.body.classList.remove("section-page");
      window.removeEventListener("scroll", updateView);
    };
  });
  return (
    <>
      <WhiteNavbar />
      <div className="section-space" />
      <SectionHeader />
      <FooterBlack />
    </>
  );
}

export default Sections;
