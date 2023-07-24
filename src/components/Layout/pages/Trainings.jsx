import TrainingMainHero from "../heros/trainingPageHero"
import TrainingHero from "../heros/trainingHero"
import Dates from "../sections/TrainingDates"
import TrainingSignUp from "../sections/TrainingSignUp"
import TrainingsInfo from "../sections/TrainingsInfo"
import Testimonial from "../heros/testimonialHero"

export default function Trainings() {
  return (
    <div tag="trainings-body" className="flex grow flex-col">
      <TrainingMainHero />
      <Dates />
      <TrainingHero />
      <TrainingsInfo />
      <TrainingSignUp />
      <Testimonial />
    </div>
  )
}
