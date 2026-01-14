import DocConfig from "../../config/docConfig"

export default function InfographicButton() {
  const active = true

  return (
    <>
      {active ? (
        <a
          href={DocConfig.links.InfoGraphicLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border cursor-pointer border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 hover:bg-fuchsia-900/75 ">
          See infographics
        </a>
      ) : (
        <a
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border cursor-not-allowed border-fuchsia-900 bg-fuchsia-900 px-5 py-3 text-center text-base font-medium text-slate-100 opacity-50">
          See infographics
        </a>
      )}
    </>
  )
}
