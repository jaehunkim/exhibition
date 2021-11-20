import React from "react";

// reactstrap components

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import BlogPostHeader2 from "components/Headers/BlogPostHeader2.js";

function BlogPost() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-post");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  });
  return (
    <>
      <ColorNavbar />
      <BlogPostHeader />
      <BlogPostHeader2 />
    </>
  );
}

export default BlogPost;
