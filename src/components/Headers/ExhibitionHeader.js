import React from "react";
import YouTube from "react-youtube";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import useWindowDimensions from "components/useWindowDimensions";
import ExhibitionItems from "components/ExhibitionItems";

// reactstrap components
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Button,
  Modal,
} from "reactstrap";
// core components
const items = ExhibitionItems;

function MoreButton(props) {
  const photowidth = props.theme.photowidth ? props.theme.photowidth : 2000;
  const photoheight = props.theme.photoheight ? props.theme.photoheight : 1333;
  const { wpadding, hpadding, w, h } = useWindowDimensions(
    photowidth,
    photoheight
  );

  const Abs = styled.div`
    position: absolute;
    top: ${(props) =>
      (parseFloat(props.theme.top) / photoheight) * h + hpadding + "px"};
    left: ${(props) =>
      (parseFloat(props.theme.left) / photowidth) * w + wpadding + "px"};
    height: 15px;
    width: 15px;
    min-width: 15px;
    min-height: 15px;
  `;

  return (
    <div>
      <ThemeProvider theme={props.theme}>
        <Abs>
          <Button
            className="page-header-exhibition btn-just-icon btn-border"
            color="heeang"
            href="#pablo"
            size="lg"
            align="center"
            onClick={(e) => {
              e.preventDefault();
              props.pf(props.theme.index);
            }}
          ></Button>
        </Abs>
      </ThemeProvider>
    </div>
  );
}

function ExhibitionHeader() {
  const [scrollingLongContent, setScrollingLongContent] = React.useState(false);
  const [youtubeModalState, setyoutubeModalState] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [modalState, setModalState] = React.useState({ modalIndex: 0 });
  const { wpadding, hpadding, w, h } = useWindowDimensions();
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const Abs = styled.div`
    position: absolute;
    top: ${(props) =>
      (parseFloat(props.theme.top) / 1333) * h + hpadding + "px"};
    left: ${(props) =>
      (parseFloat(props.theme.left) / 2000) * w + wpadding + "px"};
  `;

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
    setModalState({ modalIndex: 0 });
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    setModalState({ modalIndex: 0 });
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    setModalState({ modalIndex: 0 });
  };
  const onClickButton = (index) => {
    setModalState({ modalIndex: index });
    setScrollingLongContent(true);
  };
  const onClickYoutube = (index) => {
    setyoutubeModalState(true);
  };
  return (
    <>
      <div className="header-exhibition">
        <div className="page-carousel">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={false}
          >
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
                      <img
                        src={item.difsrc}
                        className="page-header-exhibition img-container img"
                        alt=""
                      />
                    </div>

                    <div>
                      {item.hasButton === true
                        ? item.buttons.map((button) => {
                            return (
                              <MoreButton theme={button} pf={onClickButton} />
                            );
                          })
                        : item.buttons.map((button) => {
                            return (
                              <MoreButton theme={button} pf={onClickYoutube} />
                            );
                          })}
                    </div>
                  </div>
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
          <Modal
            className="modal-lg"
            isOpen={scrollingLongContent}
            toggle={() => setScrollingLongContent(false)}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {items[activeIndex].buttons[modalState.modalIndex].title}
              </h5>
            </div>
            <div className="modal-body">
              <img
                src={items[activeIndex].buttons[modalState.modalIndex].image}
                className="img-thumbnail img-responsive"
                alt=""
              />
              <p>{items[activeIndex].buttons[modalState.modalIndex].content}</p>
            </div>
          </Modal>

          <Modal
            className="modal-xl"
            isOpen={youtubeModalState}
            toggle={() => setyoutubeModalState(false)}
          >
            <div className="modal-body">
              <div class="video-container">
                <YouTube videoId="KY7ctnwmhfQ" opts={opts} />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default ExhibitionHeader;
