import React from "react"
import { NavLink, useMatch } from "react-router-dom"
import magLogo from "../../../images/mag-logo-black.png"
import NavLinks from "./Links"

export default function Header() {
  const links = NavLinks()

  return (
    <header className="sticky top-0 z-10 flex h-24 w-full bg-slate-50 text-slate-800">
      <section className="container mx-auto flex items-center justify-between p-4">
        <div className="flex flex-row gap-4">
          <a
            href="https://azmag.gov/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-5">
            <img className="h-10" src={magLogo} alt="MAG Power Logo" />
          </a>
          <h1 className="text-3xl font-medium">MAG Interactive Maps</h1>
        </div>
        <div className="flex">
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-slate-800 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-800 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-800 after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav id="nav-menu" className="hidden space-x-8 text-xl md:block" aria-label="nav-menu">
            <ul className="flex flex-col justify-center p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              {links.map((link, index) => {
                const match = useMatch(link.link)
                return (
                  <li>
                    <NavLink
                      key={index}
                      to={link.link}
                      target={link.internal ? "_self" : "_blank"}
                      rel="noreferrer"
                      className="block rounded p-0 py-2 text-slate-800 hover:text-cyan-800 hover:underline hover:decoration-current hover:decoration-2">
                      {link.name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className="top-68 justify-content-center animate-open-menu absolute hidden w-full origin-top flex-col bg-black text-5xl">
        <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
          {links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded p-0 py-2 text-slate-800 hover:text-cyan-800 hover:underline hover:decoration-current hover:decoration-2">
                {link.name}
              </a>
            )
          })}
        </nav>
      </section>
    </header>
  )
}
