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
            require("assets/img/03_profile/Bloom-and-Wither-1_Hee-ang-Kim_resize.jpeg").default +
            ")",
        }}
      >
      </div>
    </>
  );
}

export default ProfilePageHeader;
