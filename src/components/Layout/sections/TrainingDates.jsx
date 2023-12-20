import DateInfo from "../../../config/trainingDatesInfo"
import DocConfig from "../../../config/docConfig"

export default function TrainingDates() {
  const info = DateInfo()
  const active =
    "flex w-20 flex-col items-center justify-center rounded-l-lg bg-cyan-800 text-slate-100"
  const inActive =
    "flex w-20 flex-col items-center justify-center rounded-l-lg bg-cyan-800/50 text-slate-100 cursor-not-allowed"

  const active2 = "flex flex-col justify-center p-6 text-cyan-800"
  const inActive2 = "flex flex-col justify-center p-6 text-cyan-800/50 cursor-not-allowed"

  return (
    <section tag="trainings-dates" className="flex flex-col bg-slate-100 px-4 py-10">
      <div className="container mx-auto mb-8 flex flex-col justify-center px-4 text-center">
        <h1 className="text-2xl font-bold leading-none tracking-tight text-slate-800 md:text-3xl">
          Live trainings for 2024 are scheduled for:
        </h1>
        <p className="text-red-600">Registration is not yet available. Please check back soon!</p>
      </div>

      <div className="grid-col-1 mx-auto grid grid-flow-row justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-2">
        {info.map((item, index) => {
          return (
            <a
              key={index}
              className=""
              href={item.status ? null : DocConfig.trainingLink}
              target="_blank"
              rel="noreferrer">
              <div className="flex h-24 w-72 transform rounded-lg bg-white drop-shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl lg:h-32 lg:w-96">
                <div className={item.status ? inActive : active}>
                  <h1 className="text-3xl font-bold">{item.date}</h1>
                  <h2 className="text-xl font-semibold">{item.month}</h2>
                </div>
                <div className={item.status ? inActive2 : active2}>
                  <h5 className="text-xl font-semibold ">{item.description}</h5>
                  <h4 className="text-sm font-medium lg:text-lg">Virtual or in-person</h4>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
