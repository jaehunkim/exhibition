import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import BlogPostHeader2 from "components/Headers/BlogPostHeader2.js"
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
  let data = "서로 얽히고 설켜 자라나는 형태의 아름다움에 매료되어,버섯에 처음 호기심을 가지게 되었다. 좁은 공간을 비집고 자라나는 버섯의 군집은 ‘증식의 이미지’를 주제로 하여 장신구를 만들 영감을 주었다. 그리고 자연에서 버섯의 생장과 역할에 대해 알아가면서 더욱더 깊은 흥미를 느끼게 되었다. 인간이 알아채지 못할 만큼 우리는 균류와 가까이에 밀접해 있다. 한발 한발 내딛는 땅속에도 버섯의 뿌리라고도 볼 수 있는 균사체가 상상도 못 할 범위로 넓게 퍼져있다. 아직도 과학적으로 밝혀지지 않은 부분이 많은 미지의 존재인 버섯은 여전히 내 작품에서 큰 존재감을 가지고 있다. 그 특성들은 장신구 작가가 되고 나서부터 끊임없이 내 작품의 모티브가 되고 있다.";
  let data2 = "이전에 겪어보지 못했던 상황들의 연속으로 많은 사람의 생활이 변했다. 이제는 점점 적응해가는 분위기이지만 아마도 개개인에게 저마다 다른 변화나 흔적을 남겼을 거라 짐작된다. 나 자신도 많은 변화가 있었다. 부정적 혹은 긍정적이라고 결론지을 수 없는 일들 속에서 창작하며 스스로 재미를 찾기 위해서 전에 해오던 것과 다른 시도를 해보았다.";
  let data3 = "이번 전시에는 앞뒷면이 함께 보이는 재구성된 형태의 버섯이나, 구체적 형태에서 벗어나 단순하면서 대칭이 되는 형태들을 만들어보았다. 그리고 플라스틱, 합성수지와 같이 반투명한 재료를 같이 사용하면서 작품 형태를 이루는 ‘레이어’ 자체도 변화를 주었다. 도구의 개입을 최소화해서 이전보다 레이어들이 더 두껍고, 손으로 빚은 자유로운 형태가 되었다. 이 레이어들이 모여 이룬 형태가 이전 작업과는 또 다르게 보였으면 한다.";
  let data4 = "새로운 방향으로 나아가려는 하루하루의 작은 시도들은 비록 소소하고 화려하지 않을지 모른다. 한 걸음을 내딛는 것이 어렵지만 매일 조금씩 나아가고 시간이 지나 결과물이 쌓인다면 그다음에는 새로운 방향으로 전진해가기가 더 쉬워지지 않을까 생각한다. 보는 사람들에게 내 작품이 이전과는 또 다르게 조금 더 새롭게 느껴지길 바라는 바다.";
  let data5 = "2021년 가을, 김희앙";
  return (
    <>
      <ColorNavbar />
      <BlogPostHeader />
      <BlogPostHeader2 />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <div className="article">
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <Card className="card-blog card-plain text-left">
                      <CardBody>
                        <div className="card-description">
                        {data}
                        </div>
                      </CardBody>
                      <CardBody>
                        <div className="card-description">
                        {data2}
                        </div>
                      </CardBody>
                      <CardBody>
                        <div className="card-description">
                        {data3}
                        </div>
                      </CardBody>
                      <CardBody>
                        <div className="card-description">
                        {data4}
                        </div>
                      </CardBody>
                      <CardBody>
                        <div className="card-description">
                        {data5}
                        </div>
                      </CardBody>
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
