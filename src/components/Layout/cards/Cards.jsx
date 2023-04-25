import React from "react"
import CardInfo from "./CardInfo"

export default function Cards() {
  const info = CardInfo()
  return (
    <section className="container mx-auto my-14 grid grid-cols-4 gap-6 px-8">
      {info.map((info, index) => (
        <div className="flex flex-col rounded-lg border border-slate-200 bg-white shadow">
          <div className="flex justify-center px-5 pt-5">
            <a key={index} href={info.link} target="_blank" rel="noreferrer">
              <img
                className="h-16 w-16 rounded-t-lg md:h-20 md:w-20 lg:h-28 lg:w-28"
                key={index}
                src={info.icon}
                alt={info.viewer}
              />
            </a>
          </div>
          <div className="p-5">
            <a key={index} href={info.link} target="_blank" rel="noreferrer">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-slate-900 lg:text-2xl">
                {info.viewer}
              </h5>
            </a>
            <p className="mb-3 font-normal text-slate-700">{info.text}</p>
          </div>
          <div className="mt-auto px-5 pb-5">
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-cyan-800 px-3 py-2 text-center text-sm font-medium text-slate-200 hover:bg-cyan-800/75">
              Launch Viewer
              <svg
                aria-hidden="true"
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
