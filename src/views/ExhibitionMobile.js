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
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import ColorNavbar from "components/Navbars/ColorNavbar";
import ExhibitionItems from "components/ExhibitionItems";

function DetailedItem(props) {
  return (
    <Card className="card-blog">
      <div className="card-image">
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
          <img alt="..." className="img" src={props.singleitem.image} />
        </a>
      </div>
      <CardBody>
        <br />
        <CardTitle tag="h3">{props.singleitem.title}</CardTitle>
        <hr />
        <div className="card-description">{props.singleitem.content}</div>
        <br />
      </CardBody>
    </Card>
  );
}

function EachItem(props) {
  return (
    <div className="article">
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <Card className="card-blog card-plain text-center">
            <div className="emobile-image">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="img img-raised"
                  src={props.info.difsrc}
                />
              </a>
            </div>
            <br />

            {props.info.buttons.map((singleitem) => {
              return <DetailedItem singleitem={singleitem} />;
            })}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function ExhibitionMobile() {
  const [page, setPage] = React.useState(1);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("exhibition-mobile");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("exhibition-mobile");
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ColorNavbar />
      <div className="section-exhibition">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center title" md="6" />
          </Row>
          <nav aria-label="Page navigation example">
            <Pagination
              className="pagination justify-content-center"
              listclassName="justify-content-center"
            >
              {ExhibitionItems.map((item) => {
                return (
                  <PaginationItem key={item.key} active={item.key == page - 1}>
                    <PaginationLink
                      className="btn-just-icon btn-heeang"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(item.key + 1);
                      }}
                    ></PaginationLink>
                  </PaginationItem>
                );
              })}
            </Pagination>
          </nav>
          {/* {ExhibitionItems.map((info) => {
                return <EachItem info={info} />;
              })} */}

          <EachItem info={ExhibitionItems[page - 1]} />
          <Button color="neutral" type="button" onClick={scrollToTop}>
            Top
          </Button>
        </Container>
      </div>
    </>
  );
}

export default ExhibitionMobile;
