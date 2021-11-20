import React from "react";

// reactstrap components

// core components

function BlogPostHeader() {

  return (
    <>
      <div
        className="page-header-about"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/02_aboutpage/poster.jpg").default +
            ")",
        }}
      >
      </div>
    </>
  );
}

export default BlogPostHeader;
