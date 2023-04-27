import TrainingMainHero from "../heros/trainingPageHero"
import Dates from "../sections/TrainingDates"
import TrainingSignUp from "../sections/TrainingSignUp"
import TrainingsInfo from "../sections/TrainingsInfo"

export default function Trainings() {
  return (
    <div tag="trainings-body" className="flex grow flex-col">
      <TrainingMainHero />
      <Dates />
      <TrainingSignUp />
      <TrainingsInfo />
      <TrainingSignUp />
    </div>
  )
}
