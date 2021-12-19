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
    key: 0,
    src:
      "url(" +
      require("assets/img/01_exhibition/camera/ex_03_right02.jpg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/camera/ex_03_right02.jpg").default,
    altText: "",
    caption: "",
    buttons: [
      {
        index: 0,
        top: 812.9,
        left: 361.74,
        title: "포자들 4 Spores 4",
        image: require("assets/img/01_exhibition/items/08_Spores 4_Hee-ang Kim.jpg").default,
        content: "목걸이 Necklace⎜길이 Length 88cm⎜레진, 유리 구슬, 정은 Resin, Glass beads, Sterling Silver⎜2021",
      },
      {
        index: 1,
        top: 827.76,
        left: 984.09,
        title: "포자들 2 Spores 2",
        image: require("assets/img/01_exhibition/items/08_Spore 2 Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜6x7.8x4.5cm⎜나무, 레진, 플로킹 파우더, 정은 Wood, Resin, Flocking powder, Sterling Silver⎜2021",
      },
      {
        index: 2,
        top: 656.47,
        left: 1034.07,
        title: "포자들 1 Spores 1",
        image: require("assets/img/01_exhibition/items/08_Spore 1_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜6.5x8.8x4.6cm⎜나무, 레진, 플로킹 파우더, 정은 Wood, Resin, Flocking powder, Sterling Silver⎜2021",
      },
      {
        index: 3,
        top: 737.67,
        left: 1108.93,
        title: "포자들 3 Spores 3",
        image: require("assets/img/01_exhibition/items/08_Spore 3_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜5.5x8.2x5.3cm⎜나무, 레진, 폴리머 클레이, 아크릴 페인트, 정은 Wood, Resin, Polymer clay, Acrylic paint, Sterling silver⎜2021",
      },
      {
        index: 4,
        top: 790.41,
        left: 1670.76,
        title: "재구성된 형태 6 Re-form 6",
        image: require("assets/img/01_exhibition/items/08_Re-form 6_Hee-ang Kim.jpg").default,
        content: "목걸이 Necklace⎜9.4x13.2x2.8cm, 길이 Length 56cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      }
    ]
  },
  {
    key: 1,
    src:
      "url(" +
      require("assets/img/01_exhibition/camera/ex_03_right01.jpg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/camera/ex_03_right01.jpg").default,
    altText: "",
    caption: "",
    buttons: [
      {
        index: 0,
        top: 830.7,
        left: 299.05,
        title: "Wavy 3",
        image: require("assets/img/01_exhibition/items/07_Wavy 3_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜9.2x10x4.8cm⎜석분점토, 정은, 아크릴 페인트 Stone clay, Sterling silver, Acrylic paint⎜2021",
      },
      {
        index: 1,
        top: 692.88,
        left: 414.95,
        title: "Wavy 1",
        image: require("assets/img/01_exhibition/items/07_Wavy 1 _Hee-ang Kim.jpg").default,
        content: "귀걸이 Earrings⎜3.8x3.8x1.6cm, 3.4x3.4x1.4cm⎜정은, 폴리머클레이, 아크릴 페인트 Sterling silver, Polymer clay, Acrylic paint⎜2021",
      },
      {
        index: 2,
        top: 842.85,
        left: 1009.12,
        title: "재구성된 형태 3 Re-form 3",
        image: require("assets/img/01_exhibition/items/07_Re-form 3_Hee-ang Kim.jpg").default,
        content: "목걸이 Necklace⎜4.4x7.6x3cm, 길이 Length 86cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트, 레진, 실리콘 끈 Polymer clay, Stone clay, Sterling silver, Acrylic paint, Resin, Silicone string⎜2021",
      },
      {
        index: 3,
        top: 778.49,
        left: 1684.08,
        title: "Wavy 2",
        image: require("assets/img/01_exhibition/items/07_Wavy 2 _Hee-ang Kim.jpg").default,
        content: "목걸이 Necklace⎜길이 Length 52cm⎜정은, 폴리머클레이, 아크릴 페인트 Sterling silver, Polymer clay, Acrylic paint⎜2021",
      }
    ]
  },
  {
    key: 2,
    src:
      "url(" +
      require("assets/img/01_exhibition/camera/ex_02_back04.jpg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/camera/ex_02_back04.jpg").default,
    altText: "",
    caption: "",
    buttons: [
      {
        index: 0,
        top: 400.38,
        left: 714.5,
        photowidth: 1429,
        photoheight: 1705,
        title: "",
        image: require("assets/img/01_exhibition/items/04_Wavy 4_Hee-ang Kim.jpg").default,
        content: "",
      },
    ]
  },
  {
    key: 3,
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
        top: 673.23,
        left: 329.39,
        title: "피고 지다 11 Bloom and Wither 9",
        image: require("assets/img/01_exhibition/items/05_Bloom and Wither 9_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜10.1x15.2x6.4cm⎜정은에 착색, 석분점토, 레진, 아크릴 페인트 Sterling silver, Stone clay, Resin, Acrylic paint⎜2019",
      },
      {
        index: 1,
        top: 804.63,
        left: 436.18,
        title: "피고 지다 11 Bloom and Wither 11",
        image: require("assets/img/01_exhibition/items/05_Bloom and Wither 11_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜정은, 석분점토, 레진, 엠보싱 파우더 Sterling silver, Stone clay, Resin, Embossing powder⎜2019",
      },
      {
        index: 2,
        top: 801.61,
        left: 952.56,
        title: "피어나다 7 Blooming 7",
        image: require("assets/img/01_exhibition/items/05_Blooming 7_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜10.2x12.1x4.5cm⎜정은, 석분점토, 폴리머 클레이 Sterling silver, Stone clay, Polymer clay⎜2019",
      },
      {
        index: 3,
        top: 664.78,
        left: 1043.47,
        title: "재구성된 형태 2 Re-form 2",
        image: require("assets/img/01_exhibition/items/05_Heart brooch_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜5.1x7x3.2cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      },
      {
        index: 4,
        top: 767.82,
        left: 1564.13,
        title: "시작점 Starting point",
        image: require("assets/img/01_exhibition/items/05_Starting point_Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜7.4x11.6x4.5cm⎜폴리머클레이, 석분점토, 아크릴 물감, 정은 Polymer clay, Stone clay, Acrylic paint, Sterling silver⎜2021",
      },
      {
        index: 5,
        top: 686.62,
        left: 1653.88,
        title: "재구성된 형태 1 Re-form 1",
        image: require("assets/img/01_exhibition/items/05_Re-form 1 _Hee-ang Kim.jpg").default,
        content: "브로치 Brooch⎜7.2x6.5x4.5cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      }
    ]
  },
  {
    key: 4,
    src:
      "url(" +
      require("assets/img/01_exhibition/camera/ex_02_back03.jpg").default +
      ")",
    difsrc: require("assets/img/01_exhibition/camera/ex_02_back03.jpg").default,
    altText: "",
    caption: "",
    buttons: [
      {
        index: 0,
        photowidth: 1429,
        photoheight: 2000,
        top: 1306.38,
        left: 714.5,
        title: "Wavy 4",
        image: require("assets/img/01_exhibition/items/04_Wavy 4_Hee-ang Kim.jpg").default,
        content: "귀걸이 Earrings⎜5.7x8.3x3, 4.8x8.7x3cm⎜폴리머 클레이, 레진, 황동, 정은, 금도금 Polymer clay, Resin, Brass, Sterling silver, Gold plated⎜2021",
      },
    ]
  },
  {
    key: 5,
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
        image: require("assets/img/01_exhibition/items/05_Bloom and Wither 9_Hee-ang Kim.jpg").default,
        content: "귀걸이 Earrings⎜5.7x8.3x3, 4.8x8.7x3cm⎜폴리머 클레이, 레진, 황동, 정은, 금도금 Polymer clay, Resin, Brass, Sterling silver, Gold plated⎜2021",
      },
    ]
  },
  {
    key: 6,
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
        top: 757.96,
        left: 462.89,
        title: "피어나는 순간 The first buds",
        image: require("assets/img/01_exhibition/items/02_The first buds_Hee-ang Kim.jpg").default,
        content: "귀걸이 Earrings⎜5.7x8.3x3, 4.8x8.7x3cm⎜폴리머 클레이, 레진, 황동, 정은, 금도금 Polymer clay, Resin, Brass, Sterling silver, Gold plated⎜2021",
      },
      {
        index: 1,
        top: 860.96,
        left: 1554,
        title: "재구성된 형태 5 Re-form 5",
        image: require("assets/img/01_exhibition/items/02_Re-form 5_Hee-ang Kim.jpg").default,
        content: "목걸이 Necklace⎜10.3x8.7x3.8cm, 길이 Length 56cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트 Polymer clay, Stone clay, Sterling silver, Acrylic paint⎜2021",
      },
    ]
  },
  {
    key: 7,
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
        top: 864.97,
        left: 469.95,
        title: "재구성된 형태 4 Re-form 4",
        image: require("assets/img/01_exhibition/items/01_Re-form-4_Hee-ang-Kim.jpg").default,
        content: "목걸이 Necklace⎜9x10.4x4cm, Length 68cm⎜폴리머클레이, 석분점토,정은, 아크릴 페인트, 레진 Polymer clay, Stone clay, Sterling silver, Acrylic paint, Resin⎜2021",
      },
      {
        index: 1,
        top: 667,
        left: 1485,
        title: "군집 9 Cluster 9",
        image: require("assets/img/01_exhibition/items/01_Cluster-9_Hee-ang-Kim.jpg").default,
        content: "브로치 Brooch⎜9x12x3.5cm⎜폴리머클레이, 아크릴 물감, 정은, 알루미늄, Polymer clay, Acrylic paint, Sterling silver, Aluminium⎜2018",
      },
      {
        index: 2,
        top: 844.9,
        left: 1630,
        title: "군집 17 Cluster 17",
        image: require("assets/img/01_exhibition/items/01_Cluster-17_Hee-ang-Kim.jpg").default,
        content: "브로치 Brooch⎜7.2x9.8x2.2cm⎜폴리머클레이, 아크릴 물감, 정은, Polymer clay, Acrylic paint, Sterling silver⎜2020",
      }
    ]
  },
];



function MoreButton(props) {
  const photowidth = props.theme.photowidth ? props.theme.photowidth : 2000;
  const photoheight = props.theme.photoheight ? props.theme.photoheight : 1333;
  const { wpadding, hpadding, w, h } = useWindowDimensions(photowidth, photoheight);

  const Abs = styled.div`
  position: absolute;
  top: ${props => (parseFloat(props.theme.top) / photoheight * h + hpadding) + "px"};
  left: ${props => (parseFloat(props.theme.left) / photowidth * w + wpadding) + "px"};
  height: 15px;
  width: 15px;
  min-width: 15px;
  min-height: 15px;
  z-index: 10;
  color: blue;
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
          >

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
