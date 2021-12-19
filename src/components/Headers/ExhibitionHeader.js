import React from "react";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from 'react';
import useWindowDimensions from "components/useWindowDimensions";

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
      require("assets/img/01_exhibition/camera/ex_01_left01.jpg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/camera/ex_01_left01.jpg").default,
    altText: "",
    caption: "",
    buttons: [
      {
        index: 0,
        top: 850,
        left: 451,
        title: "재구성된 형태 4 Re-form 4",
        image: require("assets/img/01_exhibition/items/01_Re-form-4_Hee-ang-Kim.jpg").default,
        content: "목걸이 Necklace⎜9x10.4x4cm, Length 68cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트, 레진 Polymer clay, Stone clay, Sterling silver, Acrylic paint, Resin⎜2021",
      },
      {
        index: 1,
        top: 650,
        left: 1460,
        title: "군집 9 Cluster 9",
        image: require("assets/img/01_exhibition/items/01_Cluster-9_Hee-ang-Kim.jpg").default,
        content: "브로치 Brooch⎜9x12x3.5cm⎜폴리머클레이, 아크릴 물감, 정은, 알루미늄, Polymer clay, Acrylic paint, Sterling silver, Aluminium⎜2018",
      },
      {
        index: 2,
        top: 830,
        left: 1605,
        title: "군집 17 Cluster 17",
        image: require("assets/img/01_exhibition/items/01_Cluster-17_Hee-ang-Kim.jpg").default,
        content: "브로치 Brooch⎜7.2x9.8x2.2cm⎜폴리머클레이, 아크릴 물감, 정은, Polymer clay, Acrylic paint, Sterling silver⎜2020",
      }
    ]
  },
  {
    key: 2,
    src:
      "url(" +
      require("assets/img/01_exhibition/camera/ex_01_left02.jpg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/camera/ex_01_left02.jpg").default,
    altText: "",
    caption: "",
    buttons: [
      {
        index: 0,
        top: 740,
        left: 435,
        title: "피어나는 순간 The first buds",
        image: require("assets/img/01_exhibition/items/02_The first buds_Hee-ang Kim.jpg").default,
        content: "귀걸이 Earrings⎜5.7x8.3x3, 4.8x8.7x3cm⎜폴리머 클레이, 레진, 황동, 정은, 금도금 Polymer clay, Resin, Brass, Sterling silver, Gold plated⎜2021",
      },
      {
        index: 1,
        top: 835,
        left: 1525,
        title: "재구성된 형태 5 Re-form 5",
        image: require("assets/img/01_exhibition/items/02_Re-form 5_Hee-ang Kim.jpg").default,
        content: "목걸이 Necklace⎜10.3x8.7x3.8cm, 길이 Length 56cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      },
    ]
  },
  {
    key: 3,
    src:
      "url(" +
      require("assets/img/01_exhibition/camera/ex_02_back02.jpg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/camera/ex_02_back02.jpg").default,
    altText: "",
    caption: "",
    buttons: [
      {
        index: 0,
        top: -5000,
        left: -5000,
        title: "피어나는 순간 The first buds",
        image: require("assets/img/01_exhibition/items/03_Bloom and Wither 9_Hee-ang Kim.jpg").default,
        content: "귀걸이 Earrings⎜5.7x8.3x3, 4.8x8.7x3cm⎜폴리머 클레이, 레진, 황동, 정은, 금도금 Polymer clay, Resin, Brass, Sterling silver, Gold plated⎜2021",
      },
    ]
  },
  {
    key: 4,
    src:
      "url(" +
      require("assets/img/01_exhibition/camera/ex_02_back01.jpg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/camera/ex_02_back01.jpg").default,
    altText: "",
    caption: "",
    buttons: [
      {
        index: 0,
        top: 643,
        left: 315,
        title: "피고 지다 11 Bloom and Wither 9",
        image: require("assets/img/01_exhibition/items/03_Bloom and Wither 9_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜10.1x15.2x6.4cm⎜정은에 착색, 석분점토, 레진, 아크릴 페인트 Sterling silver, Stone clay, Resin, Acrylic paint⎜2019",
      },
      {
        index: 1,
        top: 773,
        left: 418,
        title: "피고 지다 11 Bloom and Wither 11",
        image: require("assets/img/01_exhibition/items/03_Bloom and Wither 11_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜정은, 석분점토, 레진, 엠보싱 파우더 Sterling silver, Stone clay, Resin, Embossing powder⎜2019",
      },
      {
        index: 2,
        top: 760,
        left: 935,
        title: "피어나다 7 Blooming 7",
        image: require("assets/img/01_exhibition/items/03_Blooming 7_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜10.2x12.1x4.5cm⎜정은, 석분점토, 폴리머 클레이 Sterling silver, Stone clay, Polymer clay⎜2019",
      },
      {
        index: 3,
        top: 635,
        left: 1028,
        title: "재구성된 형태 2 Re-form 2",
        image: require("assets/img/01_exhibition/items/03_Heart brooch_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜5.1x7x3.2cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      },
      {
        index: 4,
        top: 735,
        left: 1548,
        title: "시작점 Starting point",
        image: require("assets/img/01_exhibition/items/03_Starting point_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜7.4x11.6x4.5cm⎜폴리머클레이, 석분점토, 아크릴 물감, 정은 Polymer clay, Stone clay, Acrylic paint, Sterling silver⎜2021",
      },
      {
        index: 5,
        top: 650,
        left: 1640,
        title: "재구성된 형태 1 Re-form 1",
        image: require("assets/img/01_exhibition/items/03_Re-form 1 _Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜7.2x6.5x4.5cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      }
    ]
  },
  {
    key: 4,
    src:
      "url(" +
      require("assets/img/01_exhibition/camera/ex_02_back02.jpg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/camera/ex_02_back02.jpg").default,
    altText: "",
    caption: "",
    buttons: [
      {
        index: 0,
        top: 643,
        left: 305,
        title: "피어나는 순간 The first buds",
        image: require("assets/img/01_exhibition/items/03_Bloom and Wither 9_Hee-ang Kim.jpg").default,
        content: "귀걸이 Earrings⎜5.7x8.3x3, 4.8x8.7x3cm⎜폴리머 클레이, 레진, 황동, 정은, 금도금 Polymer clay, Resin, Brass, Sterling silver, Gold plated⎜2021",
      },
      {
        index: 1,
        top: 773,
        left: 412,
        title: "재구성된 형태 5 Re-form 5",
        image: require("assets/img/01_exhibition/items/03_Bloom and Wither 11_Hee-ang Kim.jpg").default,
        content: "목걸이 Necklace⎜10.3x8.7x3.8cm, 길이 Length 56cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      },
      {
        index: 2,
        top: 760,
        left: 930,
        title: "피어나는 순간 The first buds",
        image: require("assets/img/01_exhibition/items/03_Blooming 7_Hee-ang Kim.jpg").default,
        content: "귀걸이 Earrings⎜5.7x8.3x3, 4.8x8.7x3cm⎜폴리머 클레이, 레진, 황동, 정은, 금도금 Polymer clay, Resin, Brass, Sterling silver, Gold plated⎜2021",
      },
      {
        index: 3,
        top: 635,
        left: 1017,
        title: "재구성된 형태 5 Re-form 5",
        image: require("assets/img/01_exhibition/items/03_Heart brooch_Hee-ang Kim.jpg").default,
        content: "목걸이 Necklace⎜10.3x8.7x3.8cm, 길이 Length 56cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      },
      {
        index: 4,
        top: 735,
        left: 1545,
        title: "피어나는 순간 The first buds",
        image: require("assets/img/01_exhibition/items/03_Starting point_Hee-ang Kim.jpg").default,
        content: "귀걸이 Earrings⎜5.7x8.3x3, 4.8x8.7x3cm⎜폴리머 클레이, 레진, 황동, 정은, 금도금 Polymer clay, Resin, Brass, Sterling silver, Gold plated⎜2021",
      },
      {
        index: 5,
        top: 650,
        left: 1627,
        title: "재구성된 형태 5 Re-form 5",
        image: require("assets/img/01_exhibition/items/03_Re-form 1 _Hee-ang Kim.jpg").default,
        content: "목걸이 Necklace⎜10.3x8.7x3.8cm, 길이 Length 56cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      }
    ]
  }
];



function MoreButton(props) {
  const { wpadding, hpadding, w, h } = useWindowDimensions();

  const Abs = styled.div`
  position: absolute;
  top: ${props => (parseFloat(props.theme.top) / 1333 * h + hpadding) + "px"};
  left: ${props => (parseFloat(props.theme.left) / 2000 * w + wpadding) + "px"};
`;

  return (
    <div>
      <ThemeProvider theme={props.theme}>
        <Abs>
          <Button
            className="page-header-exhibition btn-just-icon btn-border"
            color="reddit"
            href="#pablo"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              props.pf(props.theme.index);
            }}
          >
            <i class="fa fa-plus"></i>
          </Button>
        </Abs>
      </ThemeProvider>
    </div>
  )
}

function ExhibitionHeader() {
  const [scrollingLongContent, setScrollingLongContent] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [modalState, setModalState] = React.useState({ modalIndex: 0 });
  const { wpadding, hpadding, w, h } = useWindowDimensions();

  const Abs = styled.div`
  position: absolute;
  top: ${props => (parseFloat(props.theme.top) / 1333 * h + hpadding) + "px"};
  left: ${props => (parseFloat(props.theme.left) / 2000 * w + wpadding) + "px"};
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
                      <img src={item.difsrc} className="page-header-exhibition img-container img" alt="" />
                    </div>

                    {item.buttons.map((button) => {
                      return (<MoreButton theme={button} pf={onClickButton} />);
                    })}
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
          <Modal className="modal-lg" isOpen={scrollingLongContent} toggle={() => setScrollingLongContent(false)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {items[activeIndex].buttons[modalState.modalIndex].title}
              </h5>
            </div>
            <div className="modal-body">
              <img src={items[activeIndex].buttons[modalState.modalIndex].image} className="img-thumbnail img-responsive" alt="" />
              <p>
                {items[activeIndex].buttons[modalState.modalIndex].content}
              </p>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default ExhibitionHeader;
