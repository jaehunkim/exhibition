import React from "react";

// reactstrap components

// core components

function BlogPostHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header-about"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/02_aboutpage/darkposter.jpg").default +
            ")",
        }}
      >
      </div>
    </>
  );
}

export default BlogPostHeader;
