export default function NavLinks() {
  const navLinks = [
    {
      name: "Maps Home",
      link: "/",
      internal: true,
    },
    {
      name: "Trainings",
      link: "/trainings",
      internal: true,
    },
    {
      name: "MAG Data",
      link: "https://azmag.gov/Programs/Maps-and-Data/",
    },
    {
      name: "Open GIS Portal",
      link: "https://geodata-azmag.opendata.arcgis.com/",
    },
    {
      name: "RAD Info",
      link: "https://azmag.gov/About-Us/Divisions/Regional-Analytics-Division/",
    },
  ]
  return navLinks
}
