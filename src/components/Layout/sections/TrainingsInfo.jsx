import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Training1 from "../../../images/pics/pic-training-zoom.jpg"
import Training2 from "../../../images/pics/pic-training-help.jpg"
import Training3 from "../../../images/pics/pic-training-time.jpg"
import Training4 from "../../../images/pics/pic-training-office.jpg"
import Training5 from "../../../images/pics/pic-training-map.jpg"
import Training6 from "../../../images/pics/pic-training-open.jpg"
import DocConfig from "../../../config/docConfig"

export default function TrainingInfo() {
  return (
    <section tag="training-info" className="bg-slate-100">
      <div className="container mx-auto flex flex-col flex-wrap px-4">
        <section className="grid-flow-row max-w-screen-xl mx-auto grid grid-cols-12 gap-2 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="col-span-7 mr-auto place-self-center">
            <h3 className="mb-4 text-lg font-bold leading-none tracking-tight text-slate-800 md:text-2xl lg:text-3xl">
              MAG Maps & Data Workshops
            </h3>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              Training provided in a hybrid learning setting. Choose whether you would like to
              attend in person or via Zoom. Our training highlights two of our most popular map
              viewers – the Arizona Demographics and the Arizona Employer viewers – and introduces
              our wide array of publicly available data visualization tools and resources.
            </p>
          </div>
          <div className="col-span-5 mt-0 flex items-center justify-center">
            <img src={Training1} className="h-32 lg:h-60" alt="" />
          </div>
        </section>
        <section className="mx-auto grid max-w-screen-xl grid-cols-12 gap-2 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="col-span-5 mt-0 flex items-center justify-center">
            <img src={Training2} className="h-32 lg:h-60" alt="" />
          </div>
          <div className="col-span-7 mr-auto place-self-center">
            <h3 className="mb-4 text-lg font-bold leading-none tracking-tight text-slate-800 md:text-2xl lg:text-3xl">
              Participants choose the learning environment they are most comfortable in
            </h3>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              This three-hour workshop will be held in person in our MAG Regional Conference Center
              while also being livestreamed via Zoom to our online participants. We’ll cover a
              variety of topics in the following segments:
            </p>
            <ul className="ml-6 text-sm text-slate-800 lg:text-lg">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} />
                Population and Demographics
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} />
                Economy and Employers
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} />
                Economy and Employers
              </li>
            </ul>
          </div>
        </section>
        <section className="mx-auto grid max-w-screen-xl grid-cols-12 gap-2 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="col-span-7 mr-auto place-self-center">
            <h3 className="mb-4 text-lg font-bold leading-none tracking-tight text-slate-800 md:text-2xl lg:text-3xl">
              Select a date that fits your schedule
            </h3>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              Click on the Link and enroll in the session of your choice.
            </p>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              All workshops run from 9:00 a.m. to 12:00 p.m.
            </p>
            <div className="my-6 flex flex-row justify-center">
              <div className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-medium text-slate-800 lg:text-base">
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
                className="inline-flex items-center justify-center rounded-lg border border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-sm font-medium text-slate-100 hover:bg-fuchsia-900/75 lg:text-base ">
                Sign up for Training
              </a>
            </div>
          </div>
          <div className="col-span-5 mt-0 flex items-center justify-center">
            <img src={Training3} className="h-32 lg:h-60" alt="" />
          </div>
        </section>
        <section className="mx-auto grid max-w-screen-xl grid-cols-12 gap-2 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="col-span-5 mt-0 flex items-center justify-center">
            <img src={Training4} className="h-32 lg:h-60" alt="" />
          </div>
          <div className="col-span-6 mr-auto place-self-center lg:col-span-7">
            <h3 className="mb-4 text-lg font-bold leading-none tracking-tight text-slate-800 md:text-2xl lg:text-3xl">
              Select the learning environment that best suits you
            </h3>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              Only those who sign up for the online training will be given access to the Zoom link.
              Online class registrants will receive an email confirmation with a personalized link
              to the training landing page.
            </p>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              In-person class registrants will receive an email confirmation with travel directions
              to MAG offices. Parking in our underground parking garage will be validated.
            </p>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              Those participating in person will need to bring their own laptop and power cord. We
              will provide power outlets and Wi-Fi.
            </p>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              All registrants to the VIRTUAL class will be emailed the hands-on exercises before the
              workshop begins.
            </p>
          </div>
        </section>
        <section className="mx-auto grid max-w-screen-xl grid-cols-12 gap-2 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="col-span-7 mr-auto place-self-center">
            <h3 className="mb-4 text-lg font-bold leading-none tracking-tight text-slate-800 md:text-2xl lg:text-3xl">
              Come and explore MAG data resources
            </h3>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              Learn how to use the MAG map viewers to conduct searches for demographic and employer
              data, and discover other maps and data gems offered at MAG.
            </p>
          </div>
          <div className="col-span-5 mt-0 flex items-center justify-center">
            <img src={Training5} className="h-32 lg:h-60" alt="" />
          </div>
        </section>
        <section className="mx-auto grid max-w-screen-xl grid-cols-12 gap-2 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="col-span-5 mt-0 flex items-center justify-center">
            <img src={Training6} className="h-32 lg:h-60" alt="" />
          </div>
          <div className="col-span-7 mr-auto place-self-center">
            <h3 className="mb-4 text-lg font-bold leading-none tracking-tight text-slate-800 md:text-2xl lg:text-3xl">
              Training is free and open to the public
            </h3>
            <p className="mb-3 text-sm text-slate-800 md:text-base lg:text-lg">
              Training is especially helpful to anyone involved in community assessment, economic
              development, grant writing, market research, and planning, but our participants come
              from all walks of life.
            </p>
          </div>
        </section>
      </div>
    </section>
  )
}
