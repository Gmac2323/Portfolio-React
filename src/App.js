import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/index.js";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() { 
  return (
    <BrowserRouter>
      <div>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </div>
    </BrowserRouter>
  );
}

export default App;
