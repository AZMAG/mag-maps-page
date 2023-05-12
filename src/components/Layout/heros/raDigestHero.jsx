import RADigestLogo from "../../../images/RADigest-icon.png"
import DocConfig from "../../../config/docConfig"

export default function MainHero() {
  return (
    <section className="">
      <div className="max-w-4xl flex container mx-auto justify-center px-4 py-6 lg:py-12">
        <div className="flex w-2/5 items-center justify-center px-4 md:px-6 lg:px-12">
          <a className="" href={DocConfig.RADigestArchived} target="_blank" rel="noreferrer">
            <img src={RADigestLogo} className="h-32 md:h-40" alt="heat-relief-logo" />
          </a>
        </div>

        <div className="flex flex-col">
          <h1 className="mb-4 flex text-4xl font-extrabold leading-none tracking-tight text-slate-800 md:text-5xl xl:text-6xl">
            RADigest
          </h1>
          <p className="mb-3 flex text-base font-light text-slate-600 md:text-lg lg:text-xl">
            The RADigest is a quarterly newsletter that highlights the latest data and map viewer
            updates from the Regional Analytics Division.
          </p>
          <div className="flex flex-row">
            <div className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-cyan-800">
              See previous issues
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
              href={DocConfig.RADigestLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-cyan-900 bg-cyan-800 px-5 py-2 text-center text-base font-medium text-slate-200 hover:bg-cyan-800/75 ">
              RADigest Archive
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
