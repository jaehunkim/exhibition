import React from "react";

// reactstrap components

// core components

function ArtistNoteHeader() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div
        className="page-header page-header-xxs"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/02_aboutpage/background02.jpg").default +
            ")",
        }}
      >
      </div>
    </>
  );
}

export default ArtistNoteHeader;
