import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import FooterWhite from "components/Footers/FooterWhite.js";

const KorExhibitions = [
  {
    title: "",
    info: [
      "2015 국민대학교 대학원 금속공예학과 졸업, 서울",
      "2013 포르츠하임 대학교 교환학생, 포르츠하임, 독일",
      "2012 국민대학교 조형대학 금속공예학과 졸업, 서울",
    ]
  },
  {
    title: "개인전",
    info: [
      "2021 매일의 도약, 학고재 아트센터, 서울",
      "2018 포착된 순간, 갤러리 아원, 서울",
    ]
  },
  {
    title: "단체전",
    info: [
      "2021 크라운 샤이니스, 갤러리 아원, 서울",
      "2021 특별기획전 <귀걸이, 과거와 현재를 꿰다>, 서울공예박물관, 서울",
      "2021 블루. 불확실한 봄, 갤러리 바움 & 카메라타 아트 스페이스, 파주",
      "2021 GUESS WHAT, Elisabeth Habig, 비엔나, 오스트리아",
      "2020 Silver Winter Seasons, 식물관PH, 서울",
      "2020 ‘순라길 예술이 되다’ - 순라길 공예페어, 서울주얼리지원센터 2관, 서울",
      "2020 Lighten Up! - 주얼릭 론도, 크래프트 온 더 힐, 서울",
      "2020 BKV-Prize 2020 for Young Applied Arts, 뮌헨, 독일",
      "2019 Our necklace guide - 주얼릭 론도, 공예트렌드페어, 서울",
      "2019 뜰에 깃들, 이유진 갤러리, 서울",
      "2019 곽동준, 김희앙 - 선물전, 갤러리 이마주, 서울 ",
      "2019 따로 또 같이, 산울림 아트 앤 크래프트, 서울",
      "2019 아날로그_디지털, 갤러리 바움, 파주",
      "2019 720 Degrees, SNAG Chicago, Adorned spaces, 시카고, 미국",
      "2019 아트마이닝 파리-레벨라시옹, 그랑 팔레, 파리, 프랑스",
      "2019 아트마이닝 밀라노, 팔라초 리타, 밀라노, 이탈리아",
      "2019 콜렉트, 한국공예∙디자인문화진흥원, 사치 갤러리, 런던, 영국",
      "2018 SOFA 아트 페어, 한국공예∙디자인문화진흥원, 네이비 피어, 시카고, 미국",
      "2018 사소한 사건들, 의외의 조합, 서울 ",
      "2018 아트마이닝 서울, DDP, 서울",
      "2018 Jewelry breeze, 515 갤러리, 광주 ",
      "2018 반지수집, 갤러리 안, 서울",
      "2018 천지만물:EVERYTHING UNDER THE SUN, 갤러리 토스트, 서울",
      "2018 -ing Creative Festival, Creative Market, 두바이, 아랍에미리트",
      "2017 김희앙 장신구, 공예트렌드페어 창작공방관, 코엑스, 서울",
      "2017 V&A Museum - 한국공예∙디자인문화진흥원 교류협력 워크숍 선정, 런던, 영국",
      "2017 Our Earring Guide, KCDF 갤러리, 서울",
      "2017 오너먼테이션, 유리지공예관, 서울",
      "2016 White Christmas, Galeria Tereza Seabra, 리스본, 포르투갈",
      "2016 주얼릭 론도, 공예트렌드페어, 코엑스, 서울, 대한민국",
      "2016 20/20, Kath Libbert Jewellery Gallery, 브래드포드, 영국",
      "2016 ART OF AURA, 텀트리 프로젝트, 대구",
      "2016 메종 & 오브제, 한국공예∙디자인문화진흥원, 파리 노르 빌팽트, 프랑스",
      "2015 김희앙 장신구, 공예트렌드페어 창작공방관, 코엑스, 서울",
      "2015 주얼릭 론도, JOYA Barcelona Art Jewellery Fair, Arts Santa Monica, 바르셀로나, 스페인",
      "2015 BKV-Prize 2015 for Young Applied Arts, 뮌헨, 독일",
      "2015 Marzee International Graduate Show, Galerie Marzee, 네이메헨, 네덜란드",
      "2015 대만 국제 금속공예 공모전, Gold Museum, 신베이, 대만",
      "2015 청년조각가 기획초대전 '북한강을 바라보며', 서호미술관, 남양주",
      "2012 위시리스트, 성곡미술관, 서울",
      "2012 알케미스츠 - 물질의 신화, KCDF 갤러리, 서울",
      "2012 80-89 감성이미지, 성곡미술관, 서울",
    ]
  },
  {
    title: "수상",
    info: [
      "2020 BKV-Prize 2020 for Young Applied Arts, Finalist, 뮌헨, 독일",
      "2015 BKV-Prize 2015 for Young Applied Arts, Finalist, 뮌헨, 독일",
      "2015 대만 국제 금속공예 공모전, Quality Award, 신베이, 대만",
      "2012 제12회 대한민국안경디자인공모전, 입선, 대구",
    ]
  },
  {
    title: "작품 소장",
    info: [
      "2020 서울공예박물관, 서울",
      "2017 푸른문화재단, 서울",
      "2016 Alliages - Legacy Award, Espace Solidor, Cagnes-sur-Mer, France",
    ]
  },
  {
    title: "수록",
    info: [
      "2020 Polymer Week #2, 체코",
      "2020 Alba Longa, Contemporary Jewelry, LUDVIG RAGE, 독일",
      "2020 월간 에세이 1월호, 한국",
      "2019 행복이 가득한 집 10월호, 한국",
      "2016 AUTOR Contemporary Jewelry Magazine #3, 루마니아",
    ]
  },
  {
    title: "강의 & 워크숍",
    info: [
      "2019-1 명지전문대학 출강, 서울",
      "2018-1 명지전문대학 출강, 서울",
      "2017 문화가 있는 날 - 공예 체험 프로그램, 유리지공예관, 서울",
      "2017  V&A-KCDF 교류협력 워크숍, V&A Museum, 런던, 영국 ",
    ]
  }
];

const Exhibitions = [
  {
    title: "Education",
    info: [
      "2015 M.F.A. Metalwork & Jewelry, Kookmin University, Seoul, Korea",
      "2013 Exchange Student Program, Pforzheim University, Pforzheim, Germany",
      "2012 B.F.A. Metalwork & Jewelry, Kookmin University, Seoul, Korea",
    ]
  },
  {
    title: "Solo Exhibition",
    info: [
      "2021 Leap of everyday, Hakgojae Art Center, Seoul, Korea",
      "2018 Captured moments, Gallery Ahwon, Seoul, Korea",
    ]
  },
  {
    title: "Group Exhibitions",
    info: [
      "2021 Crown Shyness, Gallery Ahwon, Seoul, Korea",
      "2021 Special exhibition, <Earrings, Connecting the Past and Present>, Seoul Museum of Craft Art, Seoul, Korea",
      "2021 Blue. An Uncertain Spring, Gallery Baum & Camerata Art Space, Paju, Korea",
      "2021 GUESS WHAT, Elisabeth Habig, Vienna, Austria",
      "2020 Silver Winter Seasons, Sikmulgwan PH, Seoul",
      "2020 Sulla-gil craft fair, Space42, Seoul",
      "2020 Lighten Up! - Jewelric rond, Crafts on the hill, Seoul",
      "2020 BKV-Prize 2020 for Young Applied Arts, Munich, Germany",
      "2019 Our necklace guide - Jewelric rondo, Craft trend fair, Seoul",
      "2019 Nest in a garden, Lee Eugean Gallery, Seoul",
      "2019 Kwak donjon, Kim hee-ang - ‘Gift’, Gallery Imazoo, Seoul ",
      "2019 Alone or Together, Sanwoollim Art & Craft, Seoul",
      "2019 Analog_ Digital, Gallery Baum, Paju",
      "2019 720 Degrees, SNAG Chicago, Adorned spaces, Chicago, USA",
      "2019 Artmining Paris-Revelations, Grand palais, Paris, France",
      "2019 Artmining Milano, Palazzo Litta, Milano, Italy",
      "2019 COLLECT, Korea Craft & Design Foundation , Saatchi gallery, London, UK",
      "2018 SOFA Art Fair, Korea Craft & Design Foundation , Navy Pier, Chicago, USA",
      "2018 A little matter, Gallery OOOJH, Seoul, Korea",
      "2018 Artmining Seoul, DDP, Seoul, Korea ",
      "2018 Jewelry breeze, 515 Gallery, Gwangju, Korea",
      "2018 Ring Ring Ring, Gallery An, Seoul, Korea",
      "2018 EVERYTHING UNDER THE SUN, Gallery toast, Seoul, Korea",
      "2018 -ing Creative Festival, Creative Market, Dubai, UAE",
      "2017 Hee-ang Kim Jewelry, Craft Trend Fair, COEX, Seoul, Korea",
      "2017 Participated in V&A-KCDF International Maker's Workshop, V&A Museum, London, UK",
      "2017 Our Earring Guide, KCDF Gallery, Seoul, Korea",
      "2017 Ornamentation, Yoolizzy Craft Museum, Seoul, Korea",
      "2016 White Christmas, Galeria Tereza Seabra, Lisbon, Portugal",
      "2016 Jewelric Rondo, Craft Trend Fair, COEX, Seoul, Korea ",
      "2016 20/20, Kath Libbert Jewellery Gallery, Bradford, UK",
      "2016 ART OF AURA, Tumtree Project, Daegu, Korea",
      "2016 Maison & Object, Korea Craft & Design Foundation, Paris Nord Villepinte, France",
      "2015 Hee-ang Kim Jewelry, Craft Trend Fair, COEX, Seoul, Korea",
      "2015 JOYA Barcelona Art Jewellery Fair, Arts Santa Monica, Barcelona, Spain",
      "2015 BKV-PRIZE 2015 For Young Applied Arts, Munich, Germany",
      "2015 Marzee International Graduate Show, Galerie Marzee, Nijmegen, Netherlands",
      "2015 Taiwan International Metal Crafts Competition, Gold Museum, New Taipei City, Taiwan",
      "2015 Art and Ecology, Seoho museum of art, Namyangju, Korea",
      "2012 Wishlist, Sungkok Art Museum, Seoul, Korea",
      "2012 Alchemists- Mythology of Material, KCDF Gallery, Seoul, Korea",
      "2012 80-90 sensitive image, Sungkok Art Museum, Seoul, Korea",
    ]
  },
  {
    title: "Awards",
    info: [
      "2020 BKV-PRIZE 2020 For Young Applied Arts, Finalist, Munich, Germany",
      "2015 BKV-PRIZE 2015 For Young Applied Arts, Finalist, Munich, Germany",
      "2015 Taiwan International Metal Craft Competition, Quality Award, New Taipei City, Taiwan",
      "2012 The 12th Korea Eyewear Design Competition, Selected, Daegu, korea",
    ]
  },
  {
    title: "Collections",
    info: [
      "2020 Seoul Museum of Craft Art, Seoul, Korea",
      "2017 Pureun Culture Foundation, Seoul, Korea",
      "2016 Alliages - Legacy Award, Espace Solidor, Cagnes-sur-Mer, France",
    ]
  },
  {
    title: "Publication",
    info: [
      "2020 Polymer Week #2",
      "2020 Alba Longa, Contemporary Jewelry, LUDVIG RAGE, Germany",
      "2020 Monthly Essay January issue, Korea",
      "2019 <Homeliving & Style> October issue",
      "2016 AUTOR Contemporary Jewelry Magazine #3",
    ]
  },
  {
    title: "Lecture & Workshop",
    info: [
      "2019-1 Lecturer at Myongji College, Seoul, Korea",
      "2018-1 Lecturer at Myongji College, Seoul, Korea",
      "2017 Participated in V&A-KCDF International Maker’s Workshop, V&A Museum, London, UK",
      "2017 Lecture for ‘Culture day’ Polymer clay class at the Yoolizzy Craft Museum, Seoul, Korea",
    ]
  }
];

function ProfilePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <ProfilePageHeader />
      <div className="wrapper">
        <div className="profile-content section">
          <Container>
            <Row>
              <div className="profile-picture">
                <div
                  className="fileinput fileinput-new"
                  data-provides="fileinput"
                >
                  <div className="fileinput-new img-no-padding">
                    <img
                      alt="..."
                      src={
                        require("assets/img/03_profile/profile.jpg").default
                      }
                    />
                  </div>
                  <div className="name">
                    <h4 className="title text-center">
                      김희앙, Hee-ang Kim <br />
                      <small>Jeweller </small><br />
                      <small>siculala@naver.com, @heeang_kim </small>
                    </h4>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <Card className="card-blog card-exhibition">
                  {KorExhibitions.map((obj) => {
                    return (
                      <CardBody>
                        <CardTitle tag="h3">
                          {obj.title}
                        </CardTitle>
                        {obj.info.map((line) => {
                          return (
                            <div className="exhibition-description">
                              <p>{line}</p>
                            </div>
                          );
                        })}
                      </CardBody>
                    );
                  })}
                </Card>
                <Card className="card-blog card-exhibition">
                  {Exhibitions.map((obj) => {
                    return (
                      <CardBody>
                        <CardTitle tag="h3">
                          {obj.title}
                        </CardTitle>
                        {obj.info.map((line) => {
                          return (
                            <div className="exhibition-description">
                              <p>{line}</p>
                            </div>
                          );
                        })}
                      </CardBody>
                    );
                  })}
                </Card>
              </Col>
            </Row>
            <br />
          </Container>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default ProfilePage;
