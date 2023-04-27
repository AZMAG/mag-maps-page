import TrainingPicComputer from "../../../images/pics/pic-training-computer.jpg"
import DocConfig from "../../../config/docConfig"

export default function TrainingPageHero() {
  return (
    <section className="from bg-gradient-to-t from-cyan-800 to-slate-200">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-slate-800 md:text-5xl xl:text-6xl">
            Trainings and Tutorials
          </h1>
          <p className="mb-6 max-w-2xl font-light text-slate-100 md:text-lg lg:mb-8 lg:text-xl">
            Learn how to access demographic and employer data for your community, the region, and
            throughout the state of Arizona.
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
          <a
            href={DocConfig.trainingLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 hover:bg-fuchsia-900/75 ">
            Sign up for Training
          </a>
        </div>
        <div className="hidden items-center justify-center lg:col-span-5 lg:mt-0 lg:flex">
          <img src={TrainingPicComputer} className="h-60" alt="training on computer" />
        </div>
      </div>
    </section>
  )
}
