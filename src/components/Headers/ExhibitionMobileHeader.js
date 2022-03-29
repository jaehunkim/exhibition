import React from "react";

// reactstrap components

// core components

function ExhibitionMobileHeader() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("exhibition-mobile-header");
    return function cleanup() {
      document.body.classList.remove("exhibition-mobile-header");
    };
  });
  return (
    <>
      <div
        className="page-header page-header-xxs"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/02_aboutpage/web/background02.jpg").default +
            ")",
        }}
      >
      </div>
    </>
  );
}

export default ExhibitionMobileHeader;
