import React from "react";

import Navbar from "./components/Navbar/Navbar.component";
import FeaturedMenu from "./components/FeaturedMenu/FeaturedMenu.component";
import About from "./components/About/About.component";
import CentralMenu from "./components/CentralMenu/CentralMenu.component";
import Team from "./components/Team/Team.component";
import Form from "./components/Form/Form.component";
import Footer from "./components/Footer/Footer.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FeaturedMenu></FeaturedMenu>
      <About>Hello World</About>
      <CentralMenu />
      <Team />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
