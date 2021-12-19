import React from "react";

// reactstrap components

// core components

function ProfilePageHeader() {
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
        className="page-header page-header-xs"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/02_aboutpage/background01.jpg").default +
            ")",
        }}
      >
      </div>
    </>
  );
}

export default ProfilePageHeader;
