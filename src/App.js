import React from "react";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
