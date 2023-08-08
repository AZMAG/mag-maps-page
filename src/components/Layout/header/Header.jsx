import React, { useState } from "react"
import { NavLink, useMatch } from "react-router-dom"
import magLogo from "../../../images/mag-logo-black.png"
import NavLinks from "./Links"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  const links = NavLinks()

  return (
    <header className="sticky top-0 z-10 flex h-24 w-full bg-slate-50 text-slate-800">
      <section className="container mx-auto flex items-center justify-between p-4">
        <div className="flex flex-row items-center gap-4">
          <a
            href="https://azmag.gov/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-5">
            <img className="h-7 md:h-8 lg:h-10" src={magLogo} alt="MAG Power Logo" />
          </a>
          <h1 className="text-sm font-semibold leading-none tracking-tight md:text-lg lg:text-2xl">
            MAG Interactive Maps
          </h1>
        </div>
        <div className="flex">
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggleMobileMenu}>
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-slate-800 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-800 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-800 after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav
            id="nav-menu"
            className="hidden space-x-6 text-xl md:block"
            aria-label="nav-menu">
            <ul className="mt-0 flex flex-row items-center justify-center p-2 text-sm font-semibold md:space-x-2 lg:space-x-6">
              {links.map((link, index) => {
                const match = useMatch(link.link)
                return (
                  <li key={index} className="text-center">
                    <NavLink
                      id={link.id}
                      to={link.link}
                      target={link.internal ? "_self" : "_blank"}
                      rel="noreferrer"
                      className="flex rounded p-0 py-2 hover:text-cyan-800 hover:underline hover:decoration-fuchsia-900 hover:decoration-2">
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
        className={`${
          mobileMenuOpen ? "animate-open-menu" : "hidden"
        } fixed w-48 top-0 mt-16 right-4 flex-col bg-cyan-800 text-lg text-slate-50 md:hidden`}>
        <nav className="flex flex-col px-4 py-6" aria-label="mobile-menu">
          {links.map((link, index) => {
            return (
              <NavLink
                id={link.id}
                key={index}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded p-0 py-2 hover:text-slate-400 hover:underline hover:decoration-fuchsia-900">
                {link.name}
              </NavLink>
            )
          })}
        </nav>
      </section>
    </header>
  )
}
