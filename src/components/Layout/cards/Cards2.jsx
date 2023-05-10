import React from "react"
import CardInfo from "./CardInfo"

export default function Cards() {
  const info = CardInfo()
  return (
    <section className="container mx-auto my-8 grid cursor-pointer grid-cols-5 gap-6 px-4">
      {info.map((info, index) => (
        <div
          key={index}
          className="group flex transform flex-col rounded-lg border border-slate-200 bg-white shadow-md transition duration-150 hover:scale-105 hover:shadow-2xl">
          <div
            role="tooltip"
            className="pointer-events-none absolute inset-x-0 z-10 rounded-lg bg-cyan-800/80 px-3 py-3 text-center text-sm text-slate-200 opacity-0 transition duration-150 ease-in-out group-hover:opacity-100">
            {info.text}
            {/* <svg
              className="absolute left-0 top-full h-2 w-full text-cyan-800"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xml:space="preserve">
              <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
            </svg> */}
          </div>

          <div className="flex justify-center px-3 pt-3">
            <a href={info.link} target="_blank" rel="noreferrer">
              <img
                className="h-14 w-14 rounded-t-lg md:h-16 md:w-16 lg:h-20 lg:w-20"
                src={info.icon}
                alt={info.viewer}
              />
            </a>
          </div>
          <div className="p-2">
            <a href={info.link} target="_blank" rel="noreferrer">
              <h5 className="text-center text-sm font-bold tracking-tight text-cyan-800 lg:text-lg">
                {info.viewer}
              </h5>
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
