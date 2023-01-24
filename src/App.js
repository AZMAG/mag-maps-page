import React from "react";
// import ReactGA from "react-ga"
import Header from "./components/Layout/header/Header";
import Main from "./components/Layout/main/Main";
import Footer from "./components/Layout/footer/Footer";

export default function App() {
    //   const TRACKING_ID = "UA-29422512-1";
    //   ReactGA.initialize(TRACKING_ID, {
    //     debug: true,
    //     titleCase: false,
    //     gaOptions: {},
    //   });
    return (
        <div
            tag="appMain"
            className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden"
        >
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
