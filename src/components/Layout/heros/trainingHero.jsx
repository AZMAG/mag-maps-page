import RADTrainingPhoto from "../../../images/pics/RAD_Training_1.jpg"
import TrainingButton from "../../buttons/trainingButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function TrainingHero() {
  return (
    <section className="from bg-gradient-to-b from-cyan-800 to-slate-200">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap justify-center px-4 py-4 md:justify-between lg:py-8">
        <div className="px-4 md:w-3/5">
          <h1 className="mb-4 max-w-2xl text-2xl font-extrabold leading-none tracking-tight text-slate-800 md:text-3xl xl:text-4xl">
            MAG Maps & Data Workshops
          </h1>
          <p className="mb-2 max-w-2xl text-slate-100 md:text-lg lg:mb-2 lg:text-xl">
            The three-hour training highlights two of our most popular map viewers – the Arizona
            Demographics and the Arizona Employer viewers – and introduces our wide array of
            publicly available data visualization tools and resources. We’ll cover a variety of
            topics, including:
          </p>
          <ul className="mb-4 ml-8 max-w-2xl text-slate-100 md:text-lg lg:mb-8 lg:text-xl">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              population and demographics
            </li>

            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              economy and employers
            </li>

            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              education
            </li>

            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              recreation
            </li>

            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              transportation
            </li>
          </ul>
          <div className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center font-medium text-slate-100">
            Get started
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </div>
          <TrainingButton />
        </div>
        <div className="flex items-center justify-center px-4 py-8 md:w-2/5 md:px-6 md:py-2 lg:px-12">
          <img src={RADTrainingPhoto} className="h-40 md:h-52" alt="training-photo" />
        </div>
      </div>
    </section>
  )
}
