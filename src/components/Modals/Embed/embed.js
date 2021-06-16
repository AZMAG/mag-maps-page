import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import "./embed.css";

function Embed() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <a
        className="embed"
        href="/#"
        onClick={handleShow}
        title="Embed in your site"
      >
        <em>
          <FontAwesomeIcon icon={faCode} />
        </em>
      </a>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share Our Interactive Map Viewers</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <p>
              Copy and paste the codes below to embed a link to the viewers on
              your own webpage.
            </p>

            <Row className="embed-row">
              <Col lg={4}>
                <img
                  className="share-embed"
                  src="images/share/MAG-maps-share-icon.png"
                  alt=""
                />
                <InputGroup id="copy1" size="sm" className="mb-3">
                  <FormControl
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button size="sm" variant="outline-secondary">
                      Copy text
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>

              <Col lg={4}>
                <img
                  class="share-embed"
                  src="images/share/Employment-share-icon.png"
                  alt=""
                />
                <InputGroup id="copy2" size="sm" className="mb-3">
                  <FormControl
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button size="sm" variant="outline-secondary">
                      Copy text
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>

              <Col lg={4}>
                <img
                  class="share-embed"
                  src="images/share/demographics-share-icon.png"
                  alt=""
                />
                <InputGroup id="copy3" size="sm" className="mb-3">
                  <FormControl
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button size="sm" variant="outline-secondary">
                      Copy text
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>

            <Row className="embed-row">
              <Col lg={4}>
                <img
                  class="share-embed"
                  src="images/share/bikeways-share-icon.png"
                  alt=""
                />
                <InputGroup id="copy4" size="sm" className="mb-3">
                  <FormControl
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button size="sm" variant="outline-secondary">
                      Copy text
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col lg={4}>
                <img
                  class="share-embed"
                  src="images/share/recreation-share-icon.png"
                  alt=""
                />
                <InputGroup id="copy5" size="sm" className="mb-3">
                  <FormControl
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button size="sm" variant="outline-secondary">
                      Copy text
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col lg={4}>
                <img
                  class="share-embed"
                  src="images/share/MapLIT_smaller.png"
                  alt=""
                />
                <InputGroup id="copy6" size="sm" className="mb-3">
                  <FormControl
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button size="sm" variant="outline-secondary">
                      Copy text
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}

export default Embed;
