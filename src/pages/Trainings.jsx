import TrainingMainHero from "../layout/heroes/trainingPageHero"
import TrainingHero from "../layout/heroes/trainingHero"
import Dates from "../layout/sections/TrainingDates"
import TrainingSignUp from "../layout/sections/TrainingSignUp"
import TrainingsInfo from "../layout/sections/TrainingsInfo"
import Testimonial from "../layout/heroes/testimonialHero"

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
