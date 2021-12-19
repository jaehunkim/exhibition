import React from "react";

// reactstrap components

// core components

function BlogPostHeader() {
  let pageHeader = React.createRef();

  return (
    <>
      <div
        className="page-header-about"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/02_aboutpage/poster1.jpg").default +
            ")",
        }}
      >
      </div>
    </>
  );
}

export default BlogPostHeader;
