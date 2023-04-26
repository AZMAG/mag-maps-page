import DocConfig from "../../../config/docConfig"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"
import PrivacyModal from "../../Modals/privacy/PrivacyModal"
import TermsModal from "../../Modals/terms/TermsModal"
import LegalModal from "../../Modals/legal/LegalModal"

export default function Footer() {
  return (
    <footer
      tag="footer"
      className="mt-auto flex-col flex-wrap items-center justify-center space-x-6 bg-slate-200 text-center text-slate-800">
      <section className="container mx-auto flex flex-row justify-between">
        <div tag="contact-info" className="">
          <a href="https://www.azmag.gov/" rel="noopener noreferrer" target="_blank">
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
            <a href="https://www.azmag.gov/Contact/4788?" rel="noopener noreferrer" target="_blank">
              Jason Howard, GIS Manager
            </a>
          </span>
        </div>
        <div className=""></div>
        <div tag="social-media" className="">
          <a
            className="facebook track"
            href="https://www.facebook.com/MAGRegional/"
            rel="noopener noreferrer"
            target="_blank"
            title="Facebook">
            <em>
              <FontAwesomeIcon icon={faFacebook} />
            </em>
          </a>
          <a
            className="twitter track"
            href="https://twitter.com/magregion"
            rel="noopener noreferrer"
            target="_blank"
            title="Twitter">
            <em>
              <FontAwesomeIcon icon={faTwitter} />
            </em>
          </a>
          <a
            className="youtube track"
            href="https://www.youtube.com/user/MAGCommunications"
            rel="noopener noreferrer"
            target="_blank"
            title="Youtube">
            <em>
              <FontAwesomeIcon icon={faYoutube} />
            </em>
          </a>
        </div>
      </section>
      <section className="container mx-auto my-11 flex flex-row justify-center text-center text-xs">
        <div className="flex gap-1">
          <span>Copyright</span>
          <span>&copy;</span>
          <span>{DocConfig.copyright}</span>
          <a
            href={DocConfig.magLink}
            className="font-medium text-slate-800 hover:underline"
            target="_blank"
            rel="noreferrer">
            Maricopa Association of Governments
          </a>
        </div>
        <ul className="flex list-none justify-center divide-x divide-slate-800 md:order-2">
          <li className="px-2">{DocConfig.version}</li>
          <li className="px-2">{DocConfig.date}</li>
          <li className="px-2 text-slate-800">
            <PrivacyModal />
          </li>
          <li className="px-2 text-slate-800">
            <TermsModal />
          </li>
          <li className="px-2 text-slate-800">
            <LegalModal />
          </li>
        </ul>
      </section>
    </footer>
  )
}
