import React, { useRef } from "react"
import Header from "./components/Layout/header/Header"
import Home from "./components/Layout/pages/Home"
import Trainings from "./components/Layout/pages/Trainings"
import Footer from "./components/Layout/footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { Route, Routes } from "react-router-dom"

export default function App() {
  const containerRef = useRef()
  return (
    <div
      tag="appMain"
      className="flex h-screen w-screen flex-col overflow-x-hidden"
      ref={containerRef}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trainings" element={<Trainings />} />
      </Routes>
      <Footer />
      <ScrollToTop containerRef={containerRef} />
    </div>
  )
}
