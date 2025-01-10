export default function NavLinks() {
  const navLinks = [
    {
      id: "home",
      name: "Maps Home",
      link: "/",
      internal: true,
    },
    {
      id: "trainings",
      name: "Trainings",
      link: "/trainings",
      internal: true,
    },
    {
      id: "mag-data",
      name: "MAG Data",
      link: "https://azmag.gov/Programs/Maps-and-Data/",
      internal: false,
    },
    {
      id: "gis-portal",
      name: "Open GIS Portal",
      link: "https://geodata-azmag.opendata.arcgis.com/",
      internal: false,
    },
    // {
    //   id: "rad-info",
    //   name: "RAD Info",
    //   link: "https://azmag.gov/About-Us/Divisions/Regional-Analytics-Division/",
    //   internal: false,
    // },
  ]
  return navLinks
}
