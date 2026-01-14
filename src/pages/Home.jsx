import HeatReliefHero from "../layout/heros/heatReliefHero"
import Cards from "../layout/cards/Cards"
// import TrainingHero from "../heros/trainingHero"
import InfoGraphicHero from "../layout/heros/infoGraphicsHero"
// import Testimonial from "../heros/testimonialHero"
import BikeMapHero from "../layout/heros/BikeMapHero"

export default function Home() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      {/* <HeatReliefHero /> */}
      <BikeMapHero />
      <Cards />
      {/* <TrainingHero /> */}
      {/* <Testimonial /> */}
      <InfoGraphicHero />
    </div>
  )
}
