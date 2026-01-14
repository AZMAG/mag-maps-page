import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faUsers } from "@fortawesome/free-solid-svg-icons"
import Training1 from "../../../images/pics/pic-training-zoom.jpg"
import Training2 from "../../../images/pics/pic-training-help.jpg"
import Training3 from "../../../images/pics/pic-training-time.jpg"
import Training4 from "../../../images/pics/pic-training-office.jpg"
import Training5 from "../../../images/pics/pic-training-map.jpg"
import Training6 from "../../../images/pics/pic-training-open.jpg"
import TrainingButton from "../../components/Buttons/trainingButton"

export default function TrainingInfo() {
  return (
    <section tag="training-info" className="bg-slate-100 text-slate-800">
      <section className="container mx-auto flex max-w-screen-xl flex-col flex-wrap items-center justify-center px-4 py-4 md:flex-row lg:py-8">
        <div className="order-1 flex basis-2/5 items-center justify-center">
          <img src={Training1} className="h-32 lg:h-60" alt="" />
        </div>
        <div className="order-2 flex basis-3/5 flex-col place-content-center p-4 md:order-1">
          <h2 className="mb-4 text-lg font-bold leading-none tracking-tight md:text-2xl xl:text-3xl">
            Select a date and format that fits your needs
          </h2>
          <p className="mb-3 text-sm md:text-base lg:text-lg">
            Our live in-person training is held in our MAG Regional Conference Center while also
            being live streamed via Zoom to our online participants.
          </p>

          <h5 className="mb-1 text-xl font-bold">In-person attendees</h5>
          <p className="mb-3 text-sm md:text-base lg:text-lg">
            need to bring their own laptops. They will be given a printed copy of the hands-on
            exercises. Parking in our underground parking garage will be validated.
          </p>
          <h5 className="mb-1 text-xl font-bold">Online registrants</h5>
          <p className="mb-3 text-sm md:text-base lg:text-lg">
            will be emailed the hands-on exercises prior to the beginning of the workshop.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex max-w-screen-xl flex-col flex-wrap items-center justify-center px-4 py-4 md:flex-row lg:py-8">
        <div className="order-2 flex basis-3/5 flex-col place-content-center p-4">
          <h2 className="mb-4 text-lg font-bold leading-none tracking-tight text-slate-800 md:text-2xl xl:text-3xl">
            Workshops are free and open to the public
          </h2>
          <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
            Our maps and data training may be especially helpful to anyone involved in community
            assessment, economic development, grant writing, market research, and planning, but our
            participants come from all walks of life.
          </p>
        </div>
        <div className="order-1 flex basis-2/5 items-center justify-center md:order-2">
          <img src={Training2} className="h-32 lg:h-60" alt="" />
        </div>
      </section>

    </section>
  )
}
