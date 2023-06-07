import HeatReliefLogo from "../../../images/card-icons/icon-heat-relief-network.png"

export default function MainHero() {
  return (
    <section className="from bg-gradient-to-r from-cyan-800 to-slate-200">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap justify-center gap-y-4 px-4 py-4 md:justify-between md:gap-0 lg:py-9">
        <div className="order-2 px-4 lg:px-0 md:order-1 md:w-3/5">
          <div className="mb-4 w-40 bg-fuchsia-900 px-4 py-2 font-bold text-fuchsia-100">
            In The Spotlight
          </div>
          <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight text-slate-800 md:text-4xl xl:text-5xl">
            Heat Relief Network
          </h1>
          <p className="mb-2 max-w-2xl text-base text-slate-100 md:mb-6 md:text-lg lg:mb-8 lg:text-xl">
            The Heat Relief Network, a network of partners providing cooling centers, hydration
            stations, and water donation sites throughout the Valley with the goal of preventing
            heat-related illnesses and deaths among vulnerable populations.
          </p>
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
          <a
            href="https://hrn.azmag.gov/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-cyan-900 bg-cyan-800 px-5 py-2 text-center text-base font-medium text-slate-100 hover:bg-cyan-800/75 ">
            Launch Viewer
          </a>
        </div>
        <div className="order-1 flex items-center justify-center px-4 md:order-2 md:w-2/5 md:px-6 lg:px-12">
          <img src={HeatReliefLogo} className="h-32 md:h-40 lg:h-60" alt="heat-relief-logo" />
        </div>
      </div>
    </section>
  )
}
