import TrainingMainHero from "../heros/trainingPageHero"
import Dates from "../sections/TrainingDates"

export default function Trainings() {
  return (
    <div tag="trainings-body" className="flex grow flex-col">
      <TrainingMainHero />
      <Dates />
    </div>
  )
}
