/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterWhite() {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <Row>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , Hee-ang Kim
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterWhite;
