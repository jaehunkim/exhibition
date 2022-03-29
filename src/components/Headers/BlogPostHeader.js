import React from "react";

// reactstrap components

// core components

function BlogPostHeader() {
  let pageHeader = React.createRef();

  return (
    <section
      className="page-header-about"
      ref={pageHeader}
      style={{
        backgroundImage:
          "url(" + require("assets/img/02_aboutpage/web/poster01.jpg").default + ")",
      }}
    />
  );
}

export default BlogPostHeader;
