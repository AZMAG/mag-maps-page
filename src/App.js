import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import Header from "./components/Header/header";
import CarouselSec from "./components/Carousel/carousel";
import TrainingHero from "./components/TrainingHero/trainingHero";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CarouselSec />
      <TrainingHero />
      <Footer></Footer>
    </div>
  );
}

export default App;
