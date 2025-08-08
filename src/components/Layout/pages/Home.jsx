import HeatReliefHero from "../heros/heatReliefHero"
import Cards from "../cards/Cards"
// import TrainingHero from "../heros/trainingHero"
import InfoGraphicHero from "../heros/infoGraphicsHero"
// import Testimonial from "../heros/testimonialHero"
import BikeMapHero from "../heros/BikeMapHero"

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
