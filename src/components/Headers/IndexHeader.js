import React from "react";

// reactstrap components
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselIndicators,
} from "reactstrap";
// core components
const items = [
  {
    src:
      "url(" +
      require("assets/img/00_explore/0329/ex_view.jpg").default +
      ")",
    altText: "",
    caption: "",
  },
  {
    src:
      "url(" +
      require("assets/img/00_explore/0329/ex_view_2.jpg").default +
      ")",
    altText: "",
    caption: "",
  },
  {
    src:
      "url(" +
      require("assets/img/00_explore/0329/ex_view_3.jpg").default +
      ")",
    altText: "",
    caption: "",
  },
  {
    src:
      "url(" +
      require("assets/img/00_explore/0329/ex_view_4.jpg").default +
      ")",
    altText: "",
    caption: "",
  },
];

function IndexHeader() {
  // carousel - header 3
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="header-3">
        <div className="page-carousel">
          <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={10000}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map((item) => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <div
                    className="page-header-explore"
                    style={{ backgroundImage: item.src }}
                  >
                    {/* <div className="filter" /> */}
                    <div className="content-center">{item.content}</div>
                  </div>
                  <CarouselCaption
                    captionText={item.caption}
                    captionHeader=""
                  />
                </CarouselItem>
              );
            })}
            <a
              className="left carousel-control carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <span className="fa fa-angle-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <span className="fa fa-angle-right" />
              <span className="sr-only">Next</span>
            </a>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
