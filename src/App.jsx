import React, { useRef } from "react"
import Header from "./components/Layout/header/Header"
import Home from "./components/Layout/pages/Home"
import Trainings from "./components/Layout/pages/Trainings"
import Footer from "./components/Layout/footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import DocConfig from "./config/docConfig";


export default function App() {
    // Google Analytics
    if (process.env.NODE_ENV === "production") {
        // This code will only run in production
        const MEASUREMENT_ID = DocConfig.MEASUREMENT_ID;
        ReactGA.initialize(MEASUREMENT_ID, {
            debug: false,
            titleCase: false,
            gaOptions: {},
        });
    } else {
        console.log("Development Mode");
    }
    const containerRef = useRef();
    // const isProduction = import.meta.env.PROD;
    //   const basename = isProduction ? "/maps/test/map" : ""
    return (
        <BrowserRouter>
            <div
                tag="appMain"
                className="flex h-screen w-screen flex-col overflow-x-hidden scroll-smooth"
                ref={containerRef}
            >
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
    );
}
