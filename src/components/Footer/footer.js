import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Privacy from "../Modals/privacy";
import Terms from "../Modals/terms";

import "./footer.css";

import { version, date, copyright } from "../../../package.json";

function Footer() {
  return (
    <footer>
      <container>
        <div className="footer-body">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact</h4>
              <p>
                <a
                  href="https://www.azmag.gov/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maricopa Association of Governments
                </a>
                <br />
                <span>302 North 1st Avenue, Suite 200</span>
                <br />
                <span>Phoenix, Arizona 85003</span>
                <br />
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  &nbsp;(602) 254-6300
                </span>
                <br />
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp;
                  <a
                    href="https://www.azmag.gov/Contact/4788?"
                    // onClick="openNewWindow(this); return false"
                  >
                    Jason Howard, GIS Manager
                  </a>
                </span>
              </p>
            </div>
            <div className="col-md-5">
              <h4>Subscribe for Updates</h4>
              <p>Subscribe to get notified of new features and page updates.</p>
              <form
                className="subscribeForm form-inline"
                id="GD-snippet-form"
                action="https://public.govdelivery.com/accounts/AZMAG/subscribers/qualify"
                acceptCharset="UTF-8"
                method="post"
              >
                <input name="utf8" type="hidden" value="&#x2713;" />
                <input
                  type="hidden"
                  name="authenticity_token"
                  value="/5yaZ/1ZgA9i/fRDmNHSwpF9Tmu1hW2wjk39z5MUYyADQvi3BzUGMU232OVdSC0m930iW9T/WeVTcUufD3th3Q=="
                />
                <input
                  type="hidden"
                  name="topic_id"
                  id="topic_id"
                  value="AZMAG_224"
                />
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <button type="submit" name="commit" className="form_button">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-md-3">
              <h4>Follow Us</h4>
              <p className="social-media">
                <a
                  className="facebook track"
                  href="https://www.facebook.com/MAGRegional/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Facebook"
                >
                  <em>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </em>
                </a>
                <a
                  className="twitter track"
                  href="https://twitter.com/magregion"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Twitter"
                >
                  <em>
                    <FontAwesomeIcon icon={faTwitter} />
                  </em>
                </a>
                <a
                  className="youtube track"
                  href="https://www.youtube.com/user/MAGCommunications"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Youtube"
                >
                  <em>
                    <FontAwesomeIcon icon={faYoutube} />
                  </em>
                </a>
                <a
                  className="embed modal-anchor track"
                  data-toggle="modal"
                  data-target="#embedModal"
                  title="Embed in your site"
                >
                  <em>
                    <FontAwesomeIcon icon={faCode} />
                  </em>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a
                className="track"
                href="http://www.azmag.gov/About-Us/About-MAG"
              >
                About
              </a>
            </li>
            <li>
              <a className="track" href="releaseHistory.html">
                Release History
              </a>
            </li>
            <li>
              <a className="track" href="trainings.html">
                Trainings
              </a>
            </li>
            <li>
              <a
                className="track"
                href="http://geodata-azmag.opendata.arcgis.com/"
              >
                Open Data
              </a>
            </li>
          </ul>
        </div>

        <div className="copyrightTerms">
          <p>
            Copyright&nbsp;&copy;&nbsp;{copyright}&nbsp;
            <a
              href="https://www.azmag.gov/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Maricopa Association of Governments
            </a>
            <span>
              &nbsp;|&nbsp;v{version}&nbsp;|&nbsp;{date}&nbsp;|&nbsp;
              <Privacy />
              &nbsp;|&nbsp;
              <Terms />
            </span>
          </p>
        </div>
      </container>
    </footer>
  );
}

export default Footer;
