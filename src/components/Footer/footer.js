import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Privacy from "../Modals/privacy";
import Terms from "../Modals/terms";
import Embed from "../Modals/Embed/embed";

import "./footer.css";

import { version, date, copyright } from "../../../package.json";

function Footer() {
  return (
    <footer>
      <Container className="footer-body">
        <Row>
          <Col md={4} className="col1">
            <div>
              <h4>Contact</h4>
              <p>
                <a
                  href="https://www.azmag.gov/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maricopa Association of Governments
                </a>
                <br />
                <span>302 North 1st Avenue, Suite 200</span>
                <br />
                <span>Phoenix, Arizona 85003</span>
                <br />
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  &nbsp;(602) 254-6300
                </span>
                <br />
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp;
                  <a
                    href="https://www.azmag.gov/Contact/4788?"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Jason Howard, GIS Manager
                  </a>
                </span>
              </p>
            </div>
          </Col>
          <Col md={4} className="col2">
            <div>
              <h4>Subscribe for Updates</h4>
              <p>Subscribe to get notified of new features and page updates.</p>
              <div>
                <InputGroup
                  className="form-inline"
                  id="GD-snippet-form"
                  action="https://public.govdelivery.com/accounts/AZMAG/subscribers/qualify"
                  acceptCharset="UTF-8"
                  method="post"
                >
                  <FormControl type="hidden" name="utf8" value="&#x2713;" />
                  <FormControl
                    type="hidden"
                    name="authenticity_token"
                    value="/5yaZ/1ZgA9i/fRDmNHSwpF9Tmu1hW2wjk39z5MUYyADQvi3BzUGMU232OVdSC0m930iW9T/WeVTcUufD3th3Q=="
                  />
                  <FormControl
                    type="hidden"
                    name="topic_id"
                    id="topic_id"
                    value="AZMAG_224"
                  />
                  <FormControl
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    aria-label="Enter email"
                    required
                  />
                  <InputGroup.Append>
                    <Button
                      type="submit"
                      name="commit"
                      className="form_button"
                      size="sm"
                    >
                      Subscribe
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </div>
          </Col>
          <Col md={4} className="col3">
            <div>
              <h4>Follow Us</h4>
              <p className="social-media">
                <a
                  className="facebook track"
                  href="https://www.facebook.com/MAGRegional/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Facebook"
                >
                  <em>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </em>
                </a>
                <a
                  className="twitter track"
                  href="https://twitter.com/magregion"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Twitter"
                >
                  <em>
                    <FontAwesomeIcon icon={faTwitter} />
                  </em>
                </a>
                <a
                  className="youtube track"
                  href="https://www.youtube.com/user/MAGCommunications"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Youtube"
                >
                  <em>
                    <FontAwesomeIcon icon={faYoutube} />
                  </em>
                </a>
                <Embed />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="footer-links">
        <Row>
          <Col md={12}>
            <Nav>
              <Nav.Item>
                <Nav.Link href="http://www.azmag.gov/About-Us/About-MAG">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="releaseHistory.html">Release History</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="trainings.html">Trainings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="http://geodata-azmag.opendata.arcgis.com/">
                  Open Data
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <Container className="footer-copyright" fluid>
        <Row>
          <Col md={12}>
            <div>
              Copyright&nbsp;&copy;&nbsp;{copyright}&nbsp;
              <a
                href="https://www.azmag.gov/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Maricopa Association of Governments
              </a>
              <span>
                &nbsp;|&nbsp;v{version}&nbsp;|&nbsp;{date}&nbsp;|&nbsp;
                <Privacy />
                &nbsp;|&nbsp;
                <Terms />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
