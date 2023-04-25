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
      viewer: "Arizona Demographics",
      icon: ArizonaDemographics,
      link: "https://geo.azmag.gov/maps/azdemographics/",
      text: "View selected population and housing data for the entire State of Arizona.",
    },
    {
      sort: 2,
      viewer: "Arizona Employer",
      icon: ArizonaEmployer,
      link: "https://geo.azmag.gov/maps/azemployer/",
      text: "View selected employer data for the entire State of Arizona.",
    },
    {
      sort: 3,
      viewer: "Read On Arizona MapLIT",
      icon: ReadOnMapLIT,
      link: "http://geo.azmag.gov/maps/readonaz/",
      text: "A resource to identify key data sets that impact early literacy outcomes.",
    },
    {
      sort: 4,
      viewer: "Read On Arizona Schools Data Center",
      icon: ReadOnSchools,
      link: "https://geo.azmag.gov/schoolsdatacenter/",
      text: "A tool to help analyze data and drive decisions to improve educational outcomes.",
    },
    {
      sort: 5,
      viewer: "Recreation",
      icon: Recreation,
      link: "https://recreation.azmag.gov/",
      text: "A resource to help find parks, trails, and other recreational facilities.",
    },
    {
      sort: 6,
      viewer: "Bikeways",
      icon: Bikeways,
      link: "https://geo.azmag.gov/maps/bikemap/",
      text: "Find existing, locally-designated bicycle facilities in the region.",
    },
    {
      sort: 7,
      viewer: "Land Use Explorer",
      icon: LandUseExplorer,
      link: "https://geo.azmag.gov/maps/landuse/",
      text: "View land use and development data for all of Maricopa and Pinal County.",
    },
    {
      sort: 8,
      viewer: "Projections",
      icon: Projections,
      link: "https://geo.azmag.gov/maps/projections/",
      text: "View selected socioeconomic projection data for all of Maricopa and Pinal County.",
    },
    {
      sort: 9,
      viewer: "Luke Air Force Base Mission Critical",
      icon: Luke56FW,
      link: "https://geo.azmag.gov/maps/lukeafb/",
      text: "Workforce, transportation, education and recreation in the West Valley.",
    },
    {
      sort: 10,
      viewer: "Active Transportation Plan",
      icon: ATP,
      link: "https://geo.azmag.gov/ActiveMap/",
      text: "View the interactive comments map for the MAG Active Transportation Plan.",
    },
    {
      sort: 11,
      viewer: "Transportation Improvement Program",
      icon: TIP,
      link: "https://geo.azmag.gov/maps/tip/",
      text: "Explore capital improvement programs for transportation projects in the region.",
    },
    {
      sort: 12,
      viewer: "Urban Areas Explorer",
      icon: Urban,
      link: "https://arcg.is/18bWXq",
      text: "Explore the differences in Arizona urban area boundaries between 2000 and 2010.",
    },
    {
      sort: 13,
      viewer: "Heat Relief Network",
      icon: HeatReliefLogo,
      link: "https://hrn.azmag.gov/",
      text: "A resource to help prevent heat-related and heat caused deaths among vulnerable populations.",
    },
  ]
  return cardInfo
}
