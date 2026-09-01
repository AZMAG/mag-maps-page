import TrainingMainHero from "../layout/heroes/TrainingPageHero"
import TrainingHero from "../layout/heroes/TrainingHero"
import Dates from "../layout/sections/TrainingDates"
import TrainingSignUp from "../layout/sections/TrainingSignUp"
import TrainingsInfo from "../layout/sections/TrainingsInfo"
import Testimonial from "../layout/heroes/TestimonialHero"

export default function Trainings() {
  return (
    <div id="trainings-body" className="flex grow flex-col">
      <TrainingMainHero />
      <Dates />
      <TrainingHero />
      <TrainingsInfo />
      <TrainingSignUp />
      <Testimonial />
    </div>
  )
}
