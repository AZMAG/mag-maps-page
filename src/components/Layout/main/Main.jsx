import MainHero from "../heros/mainHero"
import Cards from "../cards/Cards"
import TrainingHero from "../heros/trainingHero"

export default function Main() {
  return (
    <div tag="main" className="flex h-full w-full grow flex-col">
      <MainHero />
      <Cards />
      <TrainingHero />
    </div>
  )
}
