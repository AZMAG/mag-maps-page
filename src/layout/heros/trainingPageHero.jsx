import TrainingPicComputer from "../../../images/pics/pic-training-computer.jpg"
import TrainingButton from "../../components/Buttons/trainingButton"

export default function TrainingPageHero() {
  return (
    <section className="from bg-gradient-to-t from-cyan-800 to-slate-200">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap justify-center gap-y-4 px-4 py-4 md:justify-between md:gap-0 lg:py-8">
        <div className="order-2 px-4 md:order-1 md:w-3/5">
          <h1 className="mb-4 max-w-2xl text-2xl font-extrabold leading-none tracking-tight text-slate-800 md:text-3xl xl:text-4xl">
            Come and explore MAG data resources
          </h1>
          <p className="mb-6 max-w-2xl font-light text-slate-100 md:text-lg lg:mb-8 lg:text-xl">
            Learn how to access and download demographic and employer data about your community, the
            region, and the entire state of Arizona, and discover other maps and data gems offered
            by MAG’s Regional Analytics Division.
          </p>
          <div className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-slate-100">
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
        <div className="order-1 flex items-center justify-center px-4 md:order-2 md:w-2/5 md:px-6 lg:px-12">
          <img src={TrainingPicComputer} className="h-32 lg:h-60" alt="training on computer" />
        </div>
      </div>
    </section>
  )
}
