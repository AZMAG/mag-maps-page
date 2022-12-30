import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// import "./modals.css";

function Modal_Healthcare() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        className="btn-white"
        variant="outline-primary"
        size="sm"
        data-toggle="modal"
        data-target="#modalHealthcare"
        onClick={handleShow}
      >
        About the Viewer
      </Button>

      <Modal.Dialog size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Arizona Health Assets</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="lead">
            <img
              class="modal-icon img-responsive"
              src="images/viewer-icons/icon_mag_health.png"
              alt="MAG Healthcare Logo"
            />
            The Arizona Health Assets Map Viewer is one of the Maricopa Association of Governments
            interactive mapping and analysis sites, showing selected statewide health assets and
            population data.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Modal_Healthcare;
