import ArizonaDemographics from "../../../images/card-icons/icon-arizona-demographics.png"
import ArizonaEmployer from "../../../images/card-icons/icon-arizona-employer.png"
import HeatReliefLogo from "../../../images/card-icons/icon-heat-relief-network.png"
import ReadOnMapLIT from "../../../images/card-icons/icon-readon-maplit.png"
import ReadOnSchools from "../../../images/card-icons/icon-readon-schools-data-center.png"
import Recreation from "../../../images/card-icons/icon-recreation.png"
import Bikeways from "../../../images/card-icons/icon-bikeways.png"
import LandUseExplorer from "../../../images/card-icons/icon-landuse-explorer.png"
import Projections from "../../../images/card-icons/icon-projections.png"
import Luke56FW from "../../../images/card-icons/icon-luke-56fw.png"
import ATP from "../../../images/card-icons/icon-atp.png"
import TIP from "../../../images/card-icons/icon-tip.png"
import Urban from "../../../images/card-icons/icon-urban.png"

export default function CardInfo() {
  const cardInfo = [
    {
      sort: 1,
      active: true,
      viewer: "Arizona Demographics",
      icon: ArizonaDemographics,
      link: "https://geo.azmag.gov/maps/azdemographics/",
      text: "View selected population and housing data for Arizona.",
      tags: ["statewide", "demographics", "census", "ACS"],
      type: "statewide",
    },
    {
      sort: 2,
      active: true,
      viewer: "Arizona Employer",
      icon: ArizonaEmployer,
      link: "https://geo.azmag.gov/maps/azemployer/",
      text: "View selected employer data for Arizona.",
      tags: ["statewide", "employment", "NAICS"],
      type: "statewide",
    },
    {
      sort: 3,
      active: true,
      viewer: "Read On Arizona MapLIT",
      icon: ReadOnMapLIT,
      link: "https://readonarizona.org/data-tools/maplit/",
      text: "A resource to identify key data sets that impact early literacy outcomes.",
      tags: ["statewide", "education", "literacy", "schools"],
      type: "statewide",
    },
    {
      sort: 4,
      active: true,
      viewer: "Read On Arizona Schools Data Center",
      icon: ReadOnSchools,
      link: "https://readonarizona.org/data-tools/arizona-schools-data-center/",
      text: "A tool to help analyze data and drive decisions to improve educational outcomes.",
      tags: ["statewide", "education", "schools"],
      type: "statewide",
    },
    {
      sort: 5,
      active: true,
      viewer: "Parks and Recreation",
      icon: Recreation,
      link: "https://recreation.azmag.gov/",
      text: "A resource to help find parks, trails, and other recreational facilities.",
      tags: ["parks", "recreation", "bikeways", "regional"],
      type: "regional",
    },
    {
      sort: 6,
      active: true,
      viewer: "Bikeways",
      icon: Bikeways,
      link: "https://geo.azmag.gov/maps/bikemap/",
      text: "Find existing, locally-designated bicycle facilities in the region.",
      tags: ["bikeways", "regional"],
      type: "regional",
    },
    {
      sort: 7,
      active: true,
      viewer: "Land Use Explorer",
      icon: LandUseExplorer,
      link: "https://geo.azmag.gov/maps/landuse/",
      text: "View land use and development data for all of Maricopa and Pinal counties.",
      tags: ["land use", "regional"],
      type: "regional",
    },
    {
      sort: 8,
      active: true,
      viewer: "Long-Range Projections",
      icon: Projections,
      link: "https://geo.azmag.gov/maps/projections/",
      text: "View selected socioeconomic projection data for all of Maricopa and Pinal counties.",
      tags: ["regional", "projections", "demographics", "census", "ACS"],
      type: "regional",
    },
    {
      sort: 13,
      active: true,
      viewer: "Heat Relief Network",
      icon: HeatReliefLogo,
      link: "https://hrn.azmag.gov/",
      text: "A resource to help prevent heat-related and heat caused deaths among vulnerable populations.",
      tags: ["regional", "heat", "health", "safety"],
      type: "regional",
    },
    {
      sort: 9,
      active: true,
      viewer: "Luke Air Force Base Mission Critical",
      icon: Luke56FW,
      link: "https://geo.azmag.gov/maps/lukeafb/",
      text: "Workforce, transportation, education and recreation in the West Valley.",
      tags: ["regional", "transportation", "economic development"],
      type: "regional",
    },
    {
      sort: 10,
      active: true,
      viewer: "Active Transportation Plan",
      icon: ATP,
      link: "https://geo.azmag.gov/ActiveMap/",
      text: "View or submit comments for Active Transportation projects in the Greater Phoenix area.",
      tags: ["regional", "transportation"],
      type: "regional",
    },
    {
      sort: 11,
      active: true,
      viewer: "Transportation Improvement Program",
      icon: TIP,
      link: "https://geo.azmag.gov/maps/tip/",
      text: "Explore capital improvement programs for transportation projects in the region.",
      tags: ["regional", "transportation"],
      type: "regional",
    },
    {
      sort: 12,
      active: true,
      viewer: "Urban Areas Explorer",
      icon: Urban,
      link: "https://bit.ly/AZUrbanAreas",
      text: "View urban areas for the state of Arizona from Census years 2020 and 2010, as well as current FHWA smoothed urbanized areas.",
      tags: ["urban", "census", "ACS", "boundaries"],
      type: "statewide",
    },
  ]
  return cardInfo
}
