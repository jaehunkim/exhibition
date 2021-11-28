import React from "react";
import ImageMapper from 'react-image-mapper';

// reactstrap components
import {
  Label,
  Input,
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselIndicators,
  Button,
} from "reactstrap";
// core components
const items = [
  {
    key: 1,
    src:
      "url(" +
      require("assets/img/01_exhibition/right02.jpeg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/right02.jpeg").default,
    altText: "",
    caption: "",
  },
  {
    key: 2,
    src:
      "url(" +
      require("assets/img/01_exhibition/right04.jpeg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/right04.jpeg").default,
    altText: "",
    caption: "",
  }
];

const example01map = {
  name: "example01map",
  areas: [
    { name: "1", shape: "poly", coords: [513, 1161, 513, 1501, 1093, 1501, 1093, 1161], preFillColor: "green", fillColor: "blue" },
  ]
};

function ExhibitionHeader() {
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
      <div className="header-exhibition">
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
                    className="page-header"
                    style={{ backgroundImage: item.src }}
                  >
                      <div
                        className="btn-carousel btn-link mr-1"
                        color="dribbble"
                        href="#pablo"
                        onClick={(e) => { e.preventDefault(); previous(); }}
                        role="button"
                      >
                        <i className="fa fa-plus-circle" aria-hidden="true"></i> 
                        <span className="sr-only">Previous</span>
                      </div>
                  </div>

                  

                  {/* <Button className="btn-just-icon btn-link mr-1" color="dribbble"
                    href="#pablo"
                    onClick={(e) => { e.preventDefault(); previous(); }}>
                    <i className="fa fa-dribbble"></i>
                  </Button>
                  <CarouselCaption
                    captionText={item.caption}
                    captionHeader=""
                  /> */}
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

export default ExhibitionHeader;
