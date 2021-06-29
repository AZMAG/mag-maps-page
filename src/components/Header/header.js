import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// import ShareBox from "../Modals/ShareBox/sharebox";

import "./header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="https://www.azmag.gov/">
          <img
            className="img-responsive"
            src="images/logos/MAG-logo.png"
            alt="MAG Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="magNavbar">
          <Nav>
            <Nav.Link href="index.html">Maps Home</Nav.Link>
            <Nav.Link href="trainings.html">Trainings</Nav.Link>
            <Nav.Link href="https://geodata-azmag.opendata.arcgis.com/">
              Open Data
            </Nav.Link>
            <Nav.Link href="https://www.azmag.gov/About-Us/About-MAG">
              About
            </Nav.Link>
            {/* <ShareBox /> */}
            {/* <Nav.Link className="shareButton" href="index.html">
              <Button data-target="#shareBox">
                <FontAwesomeIcon icon={faShareAlt} size="lg" />
                <ShareBox />
              </Button>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
