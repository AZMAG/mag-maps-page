import DateInfo from "../../../config/trainingDatesInfo"

export default function TrainingDates() {
  const info = DateInfo()
  const inActive =
    "flex w-20 flex-col items-center justify-center rounded-l-lg bg-cyan-800/50 text-slate-100"
  const active =
    "flex w-20 flex-col items-center justify-center rounded-l-lg bg-cyan-800 text-slate-100"
  return (
    <section tag="trainings-dates" className="flex flex-col bg-slate-100 px-4 py-10">
      <div className="container mx-auto px-4 mb-8 flex justify-center ">
        <h1 className="text-2xl font-bold leading-none tracking-tight text-slate-800 md:text-3xl">
          Workshops for 2023 are scheduled for:
        </h1>
      </div>

      <div className="mx-auto grid grid-flow-row md:grid-cols-2 lg:grid-cols-2 grid-col-1 justify-items-center gap-8">
        {info.map((item, index) => {
          return (
            <div
              key={index}
              className="flex lg:h-32 lg:w-96 w-72 h-24 transform rounded-lg bg-white drop-shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl">
              <div className={item.status ? inActive : active}>
                <h1 className="text-3xl font-bold">{item.date}</h1>
                <h2 className="text-xl font-semibold">{item.month}</h2>
              </div>
              <div className="flex grow flex-col justify-center p-6">
                <h5 className="mb-2 text-xl font-medium text-neutral-800">{item.description}</h5>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
