import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
// core components

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top" expand="lg" id="navbar-main">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
              Leap Of Everyday
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
            매일의 도약
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/index">
                  Explore
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Exhibition
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog-post">
                  About
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  More
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Hee-ang Kim
                  </DropdownItem>
                  <DropdownItem href="http://heeang.com/" target="_blank">
                    <i className="nc-icon nc-bank" />
                    heeang.com
                  </DropdownItem>
                  <DropdownItem href="https://www.instagram.com/heeang_kim/" target="_blank">
                    <i className="fa fa-instagram" />
                    instagram
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
