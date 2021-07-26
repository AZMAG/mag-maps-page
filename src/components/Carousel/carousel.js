import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";

import "./carousel.css";

import Modal_Healthcare from "../../components/Modals/modal-healthcare";

function CarouselSec() {
  return (
    <Carousel>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-0"
            className="d-block w-100"
            src="images/carousel/main_state.jpg"
            alt="Slide Zero"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Explore the MAG Interactive Map Viewers</h1>
          <p>
            Learn how to access demographic and employer data for your
            community, the region, and throughout the state of Arizona. Training
            is available throughout the year so be sure to reserve a spot today!
          </p>
          <Button className="btn-orange" variant="primary" size="sm">
            Sign Up for Training
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-1"
            className="d-block w-100"
            src="images/carousel/main_healthcare.jpg"
            alt="Slide One"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Arizona Health Assets</h1>
          <p>
            The Arizona Health Asset Map Viewer is one of the Maricopa
            Association of Governments interactive mapping and analysis sites,
            showing selected population data, healthcare facilities, and
            COVID-19 info for the entire State of Arizona.
          </p>
          <div className="button-group">
            {Modal_Healthcare}
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-2"
            className="d-block w-100"
            src="images/carousel/main_demographic.jpg"
            alt="Slide Two"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Arizona Demographics</h1>
          <p>
            The Arizona Demographics Map Viewer is one of the Maricopa
            Association of Governments interactive mapping and analysis sites,
            showing selected population and housing data for the entire State of
            Arizona.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-3"
            className="d-block w-100"
            src="images/carousel/main_employment.jpg"
            alt="Slide Three"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Arizona Employer</h1>
          <p>
            The Arizona Employer Map Viewer is one of the Maricopa Association
            of Governments interactive mapping and analysis sites, showing
            selected statewide employer data.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-4"
            className="d-block w-100"
            src="images/carousel/main_mapLit.jpg"
            alt="Slide Four"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Read On Arizona MapLIT</h1>
          <p>
            Maricopa Association of Governments is part of Read On Arizona's
            collaborative partnership that created MapLIT, and interactive
            mapping tool as a "one stop" resource to identify key data sets
            (census, school, health, family engagement) that impact early
            literacy outcomes in communities.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-5"
            className="d-block w-100"
            src="images/carousel/main_schools-data-center.jpg"
            alt="Slide Five"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Read On Arizona Schools Data Center</h1>
          <p>
            Maricopa Association of Governments is part of Read On Arizona's
            collaborative partnership that created the Arizona Schools Data
            Center. The Arizona Schools Data Center is a tool to help users
            model and analyze school-level data, measure progress, and drive
            decisions that improve educational outcomes towards achievement of
            the Arizona Progress Meter goals.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-6"
            className="d-block w-100"
            src="images/carousel/main_recreation.jpg"
            alt="Slide Six"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Recreation</h1>
          <p>
            The Recreation viewer is one of the Maricopa Association of
            Governments interactive mapping sites, showing public parks and
            recreational opportunities that exist in the region.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-7"
            className="d-block w-100"
            src="images/carousel/main_bikeways.jpg"
            alt="Slide Seven"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Bikeways</h1>
          <p>
            The Bikeways Map Viewer is one of the Maricopa Association of
            Governments interactive mapping sites, showing locally-designated
            bicycle facilities data.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-8"
            className="d-block w-100"
            src="images/carousel/main_landuse.jpg"
            alt="Slide Eight"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Land Use Explorer</h1>
          <p>
            The Land Use Map Viewer is one of the Maricopa Association of
            Governments interactive mapping and analysis sites, showing land use
            data.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-9"
            className="d-block w-100"
            src="images/carousel/main_projections.jpg"
            alt="Slide Nine"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Projections</h1>
          <p>
            The Projections Map Viewer is one of the Maricopa Association of
            Governments interactive mapping and analysis sites, showing
            socioeconomic projections data.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-10"
            className="d-block w-100"
            src="images/carousel/main_atp.jpg"
            alt="Slide Ten"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Active Transportation Plan</h1>
          <p>
            The MAG Regional Active Transportation Plan will serve as a guide
            for investing in, improving, expanding and connecting the MAG
            region’s bicycle and pedestrian network, along with the network
            connections to the region’s transit system.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-11"
            className="d-block w-100"
            src="images/carousel/main_tip.png"
            alt="Slide Eleven"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Transportation Improvement Program</h1>
          <p>
            The MAG Transportation Improvement Program (TIP) is a five year
            schedule of specific projects to be constructed across the region.
            Explore capital improvement programs for transportation projects in
            the region.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-12"
            className="d-block w-100"
            src="images/carousel/main_urban.jpg"
            alt="Slide Twelve"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Urban Areas Explorer</h1>
          <p>
            The MAG Urban Areas Explorer is one of the Maricopa Association of
            Governments interactive mapping sites showing the differences
            between the 2000 and the 2010 Urban Areas boundaries in Arizona.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-13"
            className="d-block w-100"
            src="images/carousel/main_real-estate.jpg"
            alt="Slide Thirteen"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Phoenix Residential Real Estate</h1>
          <p>
            Explore the Phoenix Metro Residential Real Estate Map Viewer data.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
        <Container className="carousel-image" fluid>
          <img
            id="slide-14"
            className="d-block w-100"
            src="images/carousel/main_heat-relief.jpg"
            alt="Slide Fourteen"
          />
        </Container>
        <Carousel.Caption className="carousel-content">
          <h1>Heat Relief Regional Network</h1>
          <p>
            The MAG Heat Relief Map is a resource to help prevent heat-related
            and heat caused deaths among vulnerable populations.
          </p>
          <div className="button-group">
            <Button className="btn-white" variant="outline-primary" size="sm">
              About the Viewer
            </Button>
            <Button className="btn-orange" variant="primary" size="sm">
              Launch Map
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSec;
