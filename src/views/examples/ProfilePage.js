import React from "react";
import styled from 'styled-components';

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
    title:  "Solo Exhibition",
    info: [
      "2018 Captured moments, Gallery Ahwon, Seoul, Korea"
    ]
  },
  {
    title: "Group Exhibitions",
    info: [
      [
        "2020",
        "Lighten Up! – Jewelric rond, Crafts on the hill, Seoul",
        "BKV-Prize 2020 for Young Applied Arts, Munich, Germany",
      ],
      [
        "2019 ",
        "Our necklace guide – Jewelric rondo, Craft trend fair, Seoul",
        "Nest in a garden, Lee Eugean Gallery, Seoul",
        "Alone or Together, Sanwoollim Art & Craft, Seoul",
        "Analog_ Digital, Gallery Baum, Paju",
        "720 Degrees, SNAG Chicago, Adorned spaces, Chicago, USA",
        "Artmining Paris-Revelations, Grand palais, Paris, France",
        "Artmining Milano, Palazzo Litta, Milano, Italy",
        "COLLECT, Korea Craft & Design Foundation , Saatchi gallery, London, UK",
      ],
      [
        "2018 ",
        "SOFA Art Fair, Korea Craft & Design Foundation , Navy Pier, Chicago, USA",
        "A little matter, Gallery OOOJH, Seoul, Korea",
        "Artmining Seoul, DDP, Seoul, Korea",
        "Jewelry breeze, 515 Gallery, Gwangju, Korea",
        "Ring Ring Ring, Gallery An, Seoul, Korea",
        "EVERYTHING UNDER THE SUN, Gallery toast, Seoul, Korea",
        "-ing Creative Festival, Creative Market, Dubai, UAE",
      ],
      [
        "2017 ",
        "Hee-ang Kim Jewelry, Craft Trend Fair, COEX, Seoul, Korea",
        "Participated in V&A-KCDF International Maker’s Workshop, V&A Museum, London, UK",
        "Our Earring Guide, KCDF Gallery, Seoul, Korea",
        "Ornamentation, Yoolizzy Craft Museum, Seoul, Korea",
      ],
      [
        "2016  ",
        "White Christmas, Galeria Tereza Seabra, Lisbon, Portugal",
        "Jewelric Rondo, Craft Trend Fair, COEX, Seoul, Korea",
        "20/20, Kath Libbert Jewellery Gallery, Bradford, UK",
        "ART OF AURA, Tumtree Project, Daegu, Korea",
        "Maison & Object, Korea Craft & Design Foundation, Paris Nord Villepinte, France",
      ],
      [
        "2015 ",
        "Hee-ang Kim Jewelry, Craft Trend Fair, COEX, Seoul, Korea",
        "JOYA Barcelona Art Jewellery Fair, Arts Santa Monica, Barcelona, Spain",
        "BKV-PRIZE 2015 For Young Applied Arts, Munich, Germany",
        "Marzee International Graduate Show, Galerie Marzee, Nijmegen, Netherlands",
        "Taiwan International Metal Crafts Competition, Gold Museum, New Taipei City, Taiwan",
        "Art and Ecology, Seoho museum of art, Namyangju, Korea",
      ],
      [
        "2014 ",
        "Graduate Thesis Exhibition, Chohyung Gallery, Kookmin University, Seoul, Korea",
      ],
      [
        "2012 ",
        "ONE-OFF, Craft Trend Fair, COEX, Seoul, Korea",
        "Wishlist, Sungkok Art Museum, Seoul, Korea",
        "Alchemists- Mythology of Material, KCDF Gallery, Seoul, Korea",
        "80-90 sensitive image, Sungkok Art Museum, Seoul, Korea",
      ],
      [
        "2011 ",
        "ONE-OFF, Seoul Design Festival, COEX, Seoul, Korea",
        "Beautiful Object – Graduation Exhibition, Dongduk Art Gallery, Seoul, Korea",
      ]
    ].map((obj)=>{
      return obj.map(str => <p>{str}</p>);
    })
  },
  {
    title: "Awards & Collections",
    info: [
      "2020 BKV-PRIZE 2020 For Young Applied Arts, Finalist, Munich, Germany",
      "2016 Alliages – Legacy Award, Permanent Collection, Espace Solidor, Cagnes-sur-Mer, France",
      "2015 BKV-PRIZE 2015 For Young Applied Arts, Finalist, Munich, Germany",
      "2015 Taiwan International Metal Craft Competition, Quality Award, New Taipei City, Taiwan",
      "2012 The 12th Korea Eyewear Design Competition, Selected, Daegu, korea",
    ]
  },
  {
    title: "Publication",
    info: [
      "2020 Polymer Week #2",
      "2019 <Homeliving & Style> October issue",
      "2016 AUTOR Contemporary Jewelry Magazine #3",
    ]
  },
  {
    title: "Lecture & Workshop",
    info: [
      "2018-1, 2019-1 Lecturer at Myongji College, Seoul, Korea",
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
                      <small>Jeweller</small>
                    </h4>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
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
