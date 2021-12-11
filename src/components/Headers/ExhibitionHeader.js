import React from "react";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";

// reactstrap components
import {
  Carousel,
  CarouselItem,
  CarouselCaption,
  CarouselIndicators,
  Button,
  Modal,
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
    theme: {
      top: "100px",
      left: "100px"
    }
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
    theme: {
      top: "100px",
      left: "100px"
    }
  }
];

const example01map = {
  name: "example01map",
  areas: [
    { name: "1", shape: "poly", coords: [513, 1161, 513, 1501, 1093, 1501, 1093, 1161], preFillColor: "green", fillColor: "blue" },
  ]
};

const Abs = styled.div`
  position: absolute;
  top: ${props => props.theme.top};
  left: ${props => props.theme.left};
`;

function ExhibitionHeader() {
  const [scrollingLongContent, setScrollingLongContent] = React.useState(false);
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
  const onClickButton = (index) => {
    setScrollingLongContent(true);
  }
  return (
    <>
      <div className="header-exhibition">
        <div className="page-carousel">
          <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={false}>
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
                    className="page-header-exhibition content-center"
                    //style={{ backgroundImage: item.src }}
                  >
                    <div className="page-header-exhibition img-container">
                      <img src={ item.difsrc } className="page-header-exhibition img-container img"/>
                    </div>

                    <ThemeProvider theme={ item.theme }> 
                      <Abs>
                        <Button
                          className="page-header-exhibition btn-just-icon btn-border"
                          color="reddit"
                          href="#pablo"
                          size="lg"
                          onClick={(e) => { e.preventDefault(); onClickButton(0); }}
                        >
                          <i class="fa fa-plus"></i>
                        </Button>
                      </Abs>
                    </ThemeProvider>
                  </div>

                  {/*
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
          <Modal className="modal-lg" isOpen={scrollingLongContent} toggle={() => setScrollingLongContent(false)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
            </div>
            <div className="modal-body">
              <img src={require("assets/img/01_exhibition/right02.jpeg").default} className="img-thumbnail img-responsive"/>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default ExhibitionHeader;
