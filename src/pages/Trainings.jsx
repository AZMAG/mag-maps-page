import TrainingMainHero from "../layout/heros/trainingPageHero"
import TrainingHero from "../layout/heros/trainingHero"
import Dates from "../layout/sections/TrainingDates"
import TrainingSignUp from "../layout/sections/TrainingSignUp"
import TrainingsInfo from "../layout/sections/TrainingsInfo"
import Testimonial from "../layout/heros/testimonialHero"

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
