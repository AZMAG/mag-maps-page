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
//   console.log(currentDate)

  const datesInfo = [
      {
          date: "11",
          month: "Feb",
          description: "Live training",
          link: "https://www.eventbrite.com/cc/2025-mag-maps-and-data-training-3921653",
          status:
              currentDate <
              new Date("2025-02-11T12:00:00").toLocaleString("en-US", options)
                  ? true
                  : false,
      },
      {
          date: "11",
          month: "Mar",
          description: "Live training",
          link: "https://www.eventbrite.com/cc/2025-mag-maps-and-data-training-3921653",
          status:
              currentDate <
              new Date("2025-03-11T12:00:00").toLocaleString("en-US", options)
                  ? true
                  : false,
      },
      {
          date: "13",
          month: "May",
          description: "Live training",
          link: "https://www.eventbrite.com/cc/2025-mag-maps-and-data-training-3921653",
          status:
              currentDate <
              new Date("2025-05-13T12:00:00").toLocaleString("en-US", options)
                  ? true
                  : false,
      },
      {
          date: "10",
          month: "Jun",
          description: "Live training",
          link: "https://www.eventbrite.com/cc/2025-mag-maps-and-data-training-3921653",
          status:
              currentDate <
              new Date("2025-06-10T12:00:00").toLocaleString("en-US", options)
                  ? true
                  : false,
      },
      {
          date: "09",
          month: "Sept",
          description: "Live training",
          link: "https://www.eventbrite.com/cc/2025-mag-maps-and-data-training-3921653",
          status:
              currentDate <
              new Date("2025-09-09T12:00:00").toLocaleString("en-US", options)
                  ? true
                  : false,
      },
      {
          date: "14",
          month: "Oct",
          description: "Live training",
          link: "https://www.eventbrite.com/cc/2025-mag-maps-and-data-training-3921653",
          status:
              currentDate <
              new Date("2025-10-14T12:00:00").toLocaleString("en-US", options)
                  ? true
                  : false,
      },
  ];
  return datesInfo
}
