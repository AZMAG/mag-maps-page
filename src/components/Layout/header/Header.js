import React from "react";
import magLogo from "../../../images/mag-logo-black.png";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 flex h-24 w-full bg-slate-50 text-slate-700">
            <section className="container mx-auto flex items-center justify-between p-4">
                <div className="flex flex-row gap-4">
                    <a
                        href="https://azmag.gov/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-x-5"
                    >
                        <img
                            className="h-10"
                            src={magLogo}
                            alt="MAG Power Logo"
                        />
                    </a>
                    <h1 className="text-3xl font-medium">
                        MAG Interactive Maps
                    </h1>
                </div>
                <div className="flex">
                    <button
                        id="hamburger-button"
                        className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
                    >
                        <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-slate-700 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-700 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-700 after:transition-all after:duration-500 after:content-['']"></div>
                    </button>
                    <nav
                        className="hidden space-x-8 text-xl md:block"
                        aria-label="main"
                    >
                        <ul className="flex flex-col justify-center p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium ">
                            <li>
                                <a
                                    href="https://maps.azmag.gov/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block rounded p-0 py-2 text-slate-700 hover:text-blue-700 hover:underline hover:decoration-current hover:decoration-2"
                                >
                                    Maps Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://azmag.gov/Programs/Maps-and-Data/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block rounded p-0 py-2 text-slate-700 hover:text-blue-700 hover:underline hover:decoration-current hover:decoration-2"
                                >
                                    MAG Data
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://geodata-azmag.opendata.arcgis.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block rounded p-0 py-2 text-slate-700 hover:text-blue-700 hover:underline hover:decoration-current hover:decoration-2"
                                >
                                    Open GIS Portal
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://azmag.gov/About-Us/Divisions/Regional-Analytics-Division/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block rounded p-0 py-2 text-slate-700 hover:text-blue-700 hover:underline hover:decoration-current hover:decoration-2"
                                >
                                    RAD Info
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section
                id="mobile-menu"
                className="top-68 justify-content-center animate-open-menu absolute hidden w-full origin-top flex-col bg-black text-5xl"
            >
                <nav
                    className="flex min-h-screen flex-col items-center py-8"
                    aria-label="mobile"
                >
                    <a
                        href="https://maps.azmag.gov/"
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded p-0 py-2 text-slate-700 hover:text-blue-700 hover:underline hover:decoration-current hover:decoration-2"
                    >
                        Maps Home
                    </a>

                    <a
                        href="https://azmag.gov/Programs/Maps-and-Data/"
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded p-0 py-2 text-slate-700 hover:text-blue-700 hover:underline hover:decoration-current hover:decoration-2"
                    >
                        MAG Data
                    </a>

                    <a
                        href="https://geodata-azmag.opendata.arcgis.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded p-0 py-2 text-slate-700 hover:text-blue-700 hover:underline hover:decoration-current hover:decoration-2"
                    >
                        Open GIS Portal
                    </a>

                    <a
                        href="https://azmag.gov/About-Us/Divisions/Regional-Analytics-Division/"
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded p-0 py-2 text-slate-700 hover:text-blue-700 hover:underline hover:decoration-current hover:decoration-2"
                    >
                        RAD Info
                    </a>
                </nav>
            </section>
        </header>
    );
}
