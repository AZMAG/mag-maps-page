export default function TrainingDatesInfo() {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "America/Phoenix",
  }
  const currentDate = new Date().toLocaleString("en-US", options)
  console.log(currentDate)

  const datesInfo = [
    {
      date: "22",
      month: "Feb",
      description: "Live training",
      link: "https://azmag-gov.zoom.us/webinar/register/WN_82opnlViRB-K1OtxvHFoXA#/registration",
      status:
        currentDate < new Date("2024-02-22T12:00:00").toLocaleString("en-US", options)
          ? true
          : false,
    },
    {
      date: "28",
      month: "Mar",
      description: "Live training",
      link: "https://azmag-gov.zoom.us/webinar/register/WN_VBNNJ3xTSAOFHpNljKIMLA#/registration",
      status:
        currentDate < new Date("2024-03-21T12:00:00").toLocaleString("en-US", options)
          ? true
          : false,
    },
    {
      date: "25",
      month: "Apr",
      description: "Live training",
      link: "https://azmag-gov.zoom.us/webinar/register/WN_RrEOjSLvTEapQl0h2snVuA#/registration",
      status:
        currentDate < new Date("2024-04-25T12:00:00").toLocaleString("en-US", options)
          ? true
          : false,
    },
    {
      date: "22",
      month: "Aug",
      description: "Live training",
      link: "https://azmag-gov.zoom.us/webinar/register/WN_YtTwS9NhQoOg59nsMJXCCQ#/registration",
      status:
        currentDate < new Date("2024-08-22T12:00:00").toLocaleString("en-US", options)
          ? true
          : false,
    },
    {
      date: "19",
      month: "Sept",
      description: "Live training",
      link: "https://azmag-gov.zoom.us/webinar/register/WN_7inPuHh6QW6fAEJ3NBERqQ#/registration",
      status:
        currentDate < new Date("2024-09-19T12:00:00").toLocaleString("en-US", options)
          ? true
          : false,
    },
    {
      date: "24",
      month: "Oct",
      description: "Live training",
      link: "https://azmag-gov.zoom.us/webinar/register/WN_lrEytVzhQ6eh4xRj-kFwBA#/registration",
      status:
        currentDate < new Date("2024-10-24T12:00:00").toLocaleString("en-US", options)
          ? true
          : false,
    },
  ]
  return datesInfo
}
