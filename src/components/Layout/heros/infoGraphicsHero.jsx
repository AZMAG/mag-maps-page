import DocConfig from "../../../config/docConfig"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartColumn } from "@fortawesome/free-solid-svg-icons"

export default function TrainingHero() {
  return (
    <section className="from bg-gradient-to-r from-cyan-800 to-slate-200">
      <div className="container mx-auto flex flex-row justify-around flex-wrap px-4 py-6 lg:py-12">
        <div className="flex items-center justify-center px-8">
          <FontAwesomeIcon
            icon={faChartColumn}
            className="text-7xl text-slate-100 lg:text-8xl xl:text-9xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-slate-800 md:text-4xl xl:text-5xl">
            Infographics, Maps, and Reports
          </h1>
          <p className="mb-2 max-w-2xl font-light text-slate-100 md:text-lg lg:mb-8 lg:text-xl">
            Pre-made infographics, maps, and reports on topics including commute patterns,
            homelessness, foreign direct investment, population estimates, and distressed housing.
          </p>
          <div className="">
            <div className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-slate-100">
            Find out more
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
            href={DocConfig.InfoGraphicLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 hover:bg-fuchsia-900/75 ">
            See infographics
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}
