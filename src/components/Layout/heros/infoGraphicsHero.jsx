import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartColumn } from "@fortawesome/free-solid-svg-icons"
import InfographicButton from "../../buttons/infographicsButton"

export default function InfoGraphicsHero() {
  return (
    <section className="from bg-gradient-to-l from-cyan-800 to-slate-200">
      <div className="container mx-auto flex flex-row flex-wrap justify-around px-4 py-4 lg:py-8">
        <div className="flex items-center justify-center px-8">
          <FontAwesomeIcon
            icon={faChartColumn}
            className="text-7xl text-cyan-800 lg:text-8xl xl:text-9xl"
          />
        </div>
        <div className="flex flex-col justify-center p-4">
          <h1 className="mb-4 max-w-2xl text-2xl font-extrabold leading-none tracking-tight text-slate-800 md:text-3xl xl:text-4xl">
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
            <InfographicButton />
          </div>
        </div>
      </div>
    </section>
  )
}
