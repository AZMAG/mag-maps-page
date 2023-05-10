import React, { useRef } from "react"
import Header from "./components/Layout/header/Header"
import Home from "./components/Layout/pages/Home"
import Trainings from "./components/Layout/pages/Trainings"
import Footer from "./components/Layout/footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

export default function App() {
  const containerRef = useRef()
  const isProduction = import.meta.env.PROD
  const basename = isProduction ? "/maps/test/map" : ""
  return (
    <BrowserRouter basename={basename}>
      <div
        tag="appMain"
        className="flex h-screen w-screen flex-col overflow-x-hidden"
        ref={containerRef}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/trainings" element={<Trainings />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <ScrollToTop containerRef={containerRef} />
      </div>
    </BrowserRouter>
  )
}
