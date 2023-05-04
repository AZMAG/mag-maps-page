import MainHero from "../heros/mainHero"
import Cards from "../cards/Cards"
import Cards2 from "../cards/Cards2"
import TrainingHero from "../heros/trainingHero"

export default function Home() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <MainHero />
      <Cards2 />
      <TrainingHero />
    </div>
  )
}
