import MainHero from "../heros/mainHero"
import Cards from "../cards/Cards"
import TrainingHero from "../heros/trainingHero"
// import RADigestHero from "../heros/raDigestHero"
import InfoGraphicHero from "../heros/infoGraphicsHero"
import Testimonial from "../heros/testimonialHero"

export default function Home() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <MainHero />
      <Cards />
      <TrainingHero />
      <Testimonial />
      <InfoGraphicHero />
      {/* <RADigestHero /> */}
    </div>
  )
}
