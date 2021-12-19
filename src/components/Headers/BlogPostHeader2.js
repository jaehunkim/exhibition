import React from "react";

// reactstrap components

// core components

function BlogPostHeader2() {

  return (
    <>
      <div
        className="page-header-about "
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/02_aboutpage/poster2.jpg").default +
            ")",
        }}
      >
      </div>
    </>
  );
}

export default BlogPostHeader2;
