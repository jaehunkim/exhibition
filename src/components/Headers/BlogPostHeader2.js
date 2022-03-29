import React from "react";

// reactstrap components

// core components

function BlogPostHeader2() {
  return (
    <section
      className="page-header-about"
      style={{
        backgroundImage:
          "url(" + require("assets/img/02_aboutpage/web/poster02.jpg").default + ")",
      }}
    />
  );
}

export default BlogPostHeader2;
