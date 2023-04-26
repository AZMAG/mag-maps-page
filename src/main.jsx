import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import ReactGA from "react-ga4"
import App from "./App"
import "./index.css"
import DocConfig from "./config/docConfig"

ReactGA.initialize(DocConfig.MEASUREMENT_ID, { debug: true })

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)