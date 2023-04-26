import React, { useRef } from "react"
import Header from "./components/Layout/header/Header"
import Body from "./components/Layout/body/Body"
import Footer from "./components/Layout/footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

export default function App() {
  //   const TRACKING_ID = "UA-29422512-1";
  //   ReactGA.initialize(TRACKING_ID, {
  //     debug: true,
  //     titleCase: false,
  //     gaOptions: {},
  //   });
  const containerRef = useRef()
  return (
    <div
      tag="appMain"
      className="flex h-screen w-screen flex-col overflow-x-hidden"
      ref={containerRef}>
      <Header />
      <Body />
      <Footer />
      <ScrollToTop containerRef={containerRef} />
    </div>
  )
}
