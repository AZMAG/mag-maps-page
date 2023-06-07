import DocConfig from "../../../config/docConfig"

export default function TrainingHero() {
  return (
    <section className="from bg-gradient-to-b from-cyan-800 to-slate-200">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap justify-center px-4 py-4 md:justify-between lg:py-9">
        <div className="px-4 md:w-3/5">
          <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight text-slate-800 md:text-4xl xl:text-5xl">
            Trainings
          </h1>
          <p className="mb-2 max-w-2xl text-slate-100 md:text-lg lg:mb-8 lg:text-xl">
            Learn how to access demographic and employer data for your community, the region, and
            throughout the state of Arizona.
          </p>
          <p className="mb-2 max-w-2xl text-slate-100 md:text-lg lg:mb-8 lg:text-xl">
            Training is available throughout the year so be sure to reserve a spot today!
          </p>
          <div className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center font-medium text-slate-800">
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
        <div className="flex items-center justify-center px-4 py-8 md:w-2/5 md:px-6 md:py-2 lg:px-12">
          <iframe
            className="h-56 w-96 lg:h-80 lg:w-[34rem]"
            src="https://www.youtube.com/embed/NJxUMxsuFTk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            rel="noreferrer"
            allowFullScreen=""
            title="speed up your search video"></iframe>
        </div>
      </div>
    </section>
  )
}
