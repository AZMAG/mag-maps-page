import DocConfig from "../../config/docConfig"

export default function TrainingButton() {

    const active = false

  return (
    <>
      {active ? (
        <a
          href={DocConfig.trainingLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 hover:bg-fuchsia-900/75">
          Sign up for Training
        </a>
      ) : (
        <a
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 opacity-50 cursor-not-allowed">
          Sign up for Training
        </a>
      )}
    </>
  )
}
