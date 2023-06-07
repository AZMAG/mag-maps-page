import React from "react"
import CardInfo from "./CardInfo"

export default function Cards() {
  const data = CardInfo()
  const statewide =
    "m-0.5 inline-flex items-center rounded-md bg-fuchsia-900 px-2 py-1 text-xs font-medium text-slate-100 ring-1 ring-inset ring-gray-500/10"
  const regional =
    "m-0.5 inline-flex items-center rounded-md bg-cyan-800 px-2 py-1 text-xs font-medium text-slate-100 ring-1 ring-inset ring-gray-500/10"

  return (
    <section className="container mx-auto my-8 grid max-w-screen-xl cursor-pointer grid-cols-2 gap-6 px-12 md:grid-cols-3 md:px-6 lg:grid-cols-5 lg:px-4">
      {data.map((i, index) =>
        i.active ? (
          <div
            key={index}
            className="group flex transform flex-col rounded-lg border border-slate-200 bg-white shadow-md transition duration-150 hover:scale-105 hover:shadow-2xl">
            <div
              role="tooltip"
              className="pointer-events-none absolute inset-x-0 z-10 rounded-lg bg-cyan-800/80 px-3 py-3 text-center text-sm text-slate-200 opacity-0 transition duration-150 ease-in-out group-hover:opacity-100">
              {i.text}
            </div>

            <div className="flex flex-row justify-end">
              <span key={index} className={i.type == "statewide" ? statewide : regional}>
                {i.type}
              </span>
            </div>
            <div className="flex justify-center px-3 pt-3">
              <a href={i.link} target="_blank" rel="noreferrer">
                <img className="h-14 rounded-t-lg md:h-16 lg:h-20" src={i.icon} alt={i.viewer} />
              </a>
            </div>
            <div className="p-2">
              <a href={i.link} target="_blank" rel="noreferrer">
                <h5 className="text-center text-sm font-bold tracking-tight text-cyan-800 lg:text-lg">
                  {i.viewer}
                </h5>
              </a>
            </div>
          </div>
        ) : null,
      )}
    </section>
  )
}
