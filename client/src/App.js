import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";


import GameDetailPage from "./pages/GameDetailPage";




function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <div className="container">
          <Route path="/" exact component={HomePage} />
          
          <Route path = "/game/:id"
        component = { GameDetailPage } />
      </div>
     
    </BrowserRouter>
  );
}

export default App;