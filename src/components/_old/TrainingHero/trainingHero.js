/*Video and training info section on homepage*/
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// import "./trainingHero.css";

function TrainingHero() {
  return (
    <div id="trainingHero">
      <Container>
        <Row>
          <Col md={7}>
            <div className="vid-container embed-responsive">
              <iframe
                title="MAG Speed Up Your Search"
                src="https://www.youtube.com/embed/NJxUMxsuFTk"
                width="560"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col md={5} className="trainingText">
            <div>
              <h2>Trainings and Tutorials</h2>
              <p>
                Learn how to access demographic and employer data for your community, the region,
                and throughout the state of Arizona.
              </p>
              <p>Training is available throughout the year so be sure to reserve a spot today!</p>
              <Button className="btn-one form_button" href="trainings.html">
                Sign Up for Training
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrainingHero;
