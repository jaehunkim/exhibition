import React from "react";

// reactstrap components

// core components

function BlogPostHeader() {
  let pageHeader = React.createRef();

  return (
    <section
      class="page-header-about"
      ref={pageHeader}
      style={{
        backgroundImage:
          "url(" + require("assets/img/02_aboutpage/poster1.jpg").default + ")",
      }}
    />
  );
}

export default BlogPostHeader;
