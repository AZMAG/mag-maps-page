import DocConfig from "../../config/docConfig"

export default function RaDigestButton() {
  const active = true
  return (
    <>
      {active ? (
        <a
          href={DocConfig.links.RADigestLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-cyan-900 bg-cyan-800 px-5 py-2 text-center text-base font-medium text-slate-100 hover:bg-cyan-800/75">
          RADigest Archive
        </a>
      ) : (
        <a
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-cyan-900 bg-cyan-800 px-5 py-2 text-center text-base font-medium text-slate-100 hover:bg-cyan-800/75 opacity-50 cursor-not-allowed">
          RADigest Archive
        </a>
      )}
    </>
  )
}
