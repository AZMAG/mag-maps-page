import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

import Cards from "../layout/cards/Cards";
import InfoGraphicHero from "../layout/heros/infoGraphicsHero";
import BikeMapHero from "../layout/heros/BikeMapHero";
import HeatReliefHero from "../layout/heros/heatReliefHero";

export default function Home() {
  return (
    <>
      <Header />
      <div tag="main-body" className="flex grow flex-col">
        <HeatReliefHero />
        {/* <BikeMapHero /> */}
        <Cards />
        <InfoGraphicHero />

      </div>
      <Footer />
    </>
  );
}
