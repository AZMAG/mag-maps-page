import React, { useState } from "react";
import { Row, Nav, Button, Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faTwitter,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";

// import "./sharebox.css";

function ShareBox() {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  return (
    <>
      <Nav.Link className="shareButton" href="index.html">
        <Button onClick={toggleShow}>
          <FontAwesomeIcon icon={faShareAlt} size="lg" />
          <ShareBox />
        </Button>
      </Nav.Link>

      <Toast show={show} onClose={toggleShow}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </>
  );
}

export default ShareBox;
