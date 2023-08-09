import DocConfig from "../../../config/docConfig"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import PrivacyModal from "../../Modals/privacy/PrivacyModal"
import TermsModal from "../../Modals/terms/TermsModal"
import LegalModal from "../../Modals/legal/LegalModal"
import SocialMedia from "./SocialMedia"

export default function Footer() {
  const social = SocialMedia()
  return (
    <footer tag="footer" className="bg-slate-200 text-cyan-800">
      <div className="flex flex-col flex-wrap container mx-auto pt-9">
        <section className="grid grid-cols-1 justify-items-center gap-8 md:gap-10 lg:gap-16 md:grid-cols-3 mx-8">
          <div tag="contact-info" className="text-left text-sm">
            <h3 className="mb-2 mt-0 text-lg font-semibold leading-tight">Contact</h3>
            <a
              href="https://www.azmag.gov/"
              rel="noopener noreferrer"
              target="_blank"
              className="font-semibold hover:text-cyan-800/75 hover:underline">
              Maricopa Association of Governments
            </a>
            <br />
            <span>302 North 1st Avenue, Suite 200</span>
            <br />
            <span>Phoenix, Arizona 85003</span>
            <br />
            <span>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;(602) 254-6300
            </span>
            <br />
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp;
              <a
                href="https://www.azmag.gov/Contact/4788?"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-cyan-800/75 hover:underline">
                Jason Howard, GIS Manager
              </a>
            </span>
          </div>
          <div className="text-center">
            <h3 className="mb-2 mt-0 text-lg font-semibold leading-tight">Subscribe for Updates</h3>
            <p className="mb-1 text-sm">
              Subscribe to get notified of new features and page updates.
            </p>
            <form
              className="flex flex-row"
              id="GD-snippet-form"
              action="https://public.govdelivery.com/accounts/AZMAG/subscribers/qualify"
              target="_blank"
              acceptCharset="UTF-8"
              method="post">
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input
                type="hidden"
                name="authenticity_token"
                value="/5yaZ/1ZgA9i/fRDmNHSwpF9Tmu1hW2wjk39z5MUYyADQvi3BzUGMU232OVdSC0m930iW9T/WeVTcUufD3th3Q=="
              />
              <input type="hidden" name="topic_id" id="topic_id" value="AZMAG_224" />
              <div className="relative grow">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block w-full rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <button
                type="submit"
                name="commit"
                className="bg-cyan-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-800/75">
                Subscribe
              </button>
            </form>
          </div>
          <div tag="social-media" className="flex space-x-4">
            {social.map((item, index) => {
              return (
                <a
                  className="text-3xl hover:text-cyan-800/75"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={item.name}
                  key={index}>
                  <em>
                    <FontAwesomeIcon icon={item.icon} />
                  </em>
                </a>
              )
            })}
          </div>
        </section>
        <section className="container mx-auto my-11 flex flex-row flex-wrap justify-center px-4 text-center text-xs">
          <div className="flex gap-1">
            <span>Copyright</span>
            <span>&copy;</span>
            <span>{DocConfig.copyright}</span>
            <a
              href={DocConfig.magLink}
              className="font-medium hover:text-cyan-800/75 hover:underline"
              target="_blank"
              rel="noreferrer">
              Maricopa Association of Governments
            </a>
          </div>
          <ul className="flex list-none justify-center divide-x divide-cyan-800 md:order-2">
            <li className="px-2">{DocConfig.version}</li>
            <li className="px-2">{DocConfig.date}</li>
            <li className="px-2">
              <PrivacyModal />
            </li>
            <li className="px-2">
              <TermsModal />
            </li>
            <li className="px-2">
              <LegalModal />
            </li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
