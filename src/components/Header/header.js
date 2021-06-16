import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  faEnvelope,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./header.css";

function Header() {
  return (
    <Navbar>
      <Container>
        <div className="navbar-header">
          <Button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#magNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Button>
          <Navbar.Brand href="https://www.azmag.gov/">
            <img
              className="img-responsive"
              src="images/logos/MAG-logo.png"
              alt="MAG Logo"
            />
          </Navbar.Brand>
        </div>
        <div className="collapse navbar-collapse" id="magNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a className="navLink track" href="index.html">
                Maps Home
              </a>
            </li>
            <li>
              <a className="navLink track" href="trainings.html">
                Trainings
              </a>
            </li>
            <li>
              <a
                className="navLink track"
                href="https://geodata-azmag.opendata.arcgis.com/"
              >
                Open Data
              </a>
            </li>
            <li>
              <a
                className="navLink track"
                href="https://www.azmag.gov/About-Us/About-MAG"
              >
                About
              </a>
            </li>
            <li className="navLink shareButton track">
              <Button data-target="#shareBox">
                <FontAwesomeIcon icon={faShareAlt} />
              </Button>
            </li>
            <div id="shareBox">
              <h5>Share this page!</h5>
              <div className="shareLinks">
                <ul>
                  <li>
                    <a
                      id="EMshareButton"
                      href="mailto:?subject=MAG Mapping Center&amp;body=%0A%0ACheck out this website.%0A%0AMAG Mapping Center - #MAGmaps%0Ahttps://maps.azmag.gov/"
                      title="MAG|Mapping Center"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </li>
                  <li>
                    <a id="FBshareButton" href="/#" title="Share on Facebook">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a id="TWshareButton" href="/#" title="Share on Twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a id="INshareButton" href="/#" title="Share on LinkedIn">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li>
                    <a
                      id="embedShareButton"
                      href="/#"
                      data-toggle="modal"
                      data-target="#embedModal"
                      title="Embed in your site"
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
