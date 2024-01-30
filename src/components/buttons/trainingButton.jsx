import DocConfig from "../../config/docConfig"

export default function TrainingButton() {

    const active = true

  return (
    <>
      {active ? (
        <a
          href="https://maps.azmag.gov/trainings#training-dates"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 hover:bg-fuchsia-900/75">
          Sign up for Training
        </a>
      ) : (
        <a
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 opacity-50 cursor-not-allowed">
          Sign up for Training
        </a>
      )}
    </>
  )
}
