import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default function SocialMedia() {
  const socialInfo = [
    {
      name: "Facebook",
      icon: faFacebook,
      link: "https://www.facebook.com/MAGRegional/",
    },
    {
      name: "Twitter",
      icon: faTwitter,
      link: "https://twitter.com/magregion",
    },
    {
      name: "Youtube",
      icon: faYoutube,
      link: "https://www.youtube.com/user/MAGCommunications",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      link: "https://www.instagram.com/mag_regional/",
    },
    {
      name: "Linkedin",
      icon: faLinkedin,
      link: "https://www.linkedin.com/company/maricopa-association-of-governments/mycompany/",
    },
  ]
  return socialInfo
}
