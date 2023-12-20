import DocConfig from "../../config/docConfig"

export default function InfographicButton() {
  const active = true

  return (
    <>
      {active ? (
        <a
          href={DocConfig.InfoGraphicLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 hover:bg-fuchsia-900/75 ">
          See infographics
        </a>
      ) : (
        <a
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 opacity-50 cursor-not-allowed">
          See infographics
        </a>
      )}
    </>
  )
}
