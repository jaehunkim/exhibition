import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";
// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import BlogPostHeader2 from "components/Headers/BlogPostHeader2.js";
import FooterWhite from "components/Footers/FooterWhite.js";

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

  function MakeCardBody(props) {
    return (
      <div>
        <CardBody padding="0">
          <div className="card-information">{props.data}</div>
        </CardBody>
      </div>
    );
  }

  let junshi_jungbo = [
    "매일의 도약_Leap of everyday",
    "김희앙 개인전 Hee-ang Kim Solo Exhibition",
    "‎",
    "일시 : 2021.11.24 (수) - 2021.12.7 (화)",
    "장소: 학고재 아트센터 1F",
    "주소 : 서울특별시 종로구 삼청로 48-4",
    "시간 : 화-일 10:00-18:00",
    "‎",
    "디자인 : 배준민",
    "작품 사진 : KC Studio",
    "번역 : 김희앙",
    "번역 검수 : 김지선",
    "도록 및 포스터 디자인 : 배준민",
    "사이트 개발 및 디자인 : 김재헌",
    "‎",
    "‎",
    "Leap of Everyday",
    "Hee-ang Kim Solo exhibition",
    "‎",
    "11.24 - 12.7 2021",
    "Hakgojae Art Center 1F",
    "Samcheong-ro 48-4, Jongno-gu, Seoul, Korea",
    "‎",
    "Design : Junmin Bae",
    "Photo : KC Studio",
    "Translation : Hee-ang Kim",
    "Editing and Proofreading : Jiseon Kim",
    "Catalog and Poster Design : Junmin Bae",
    "Web Design and Development : Jaehun Kim",
    "‎",
    "‎",
    "Copyright 2021 김희앙. All rights reserved.",
    "‎",
    "‎",
    "후원 Sponsor",
    "서울문화재단, 서울특별시",
  ];

  return (
    <>
      <ColorNavbar />
      <div class="page-header-about-cont">
        <BlogPostHeader />
        <BlogPostHeader2 />
      </div>
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-left">
                      {junshi_jungbo.map((data) => {
                        return <MakeCardBody data={data} />;
                      })}
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default BlogPost;
