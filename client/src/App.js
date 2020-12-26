import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BrowserPage from "./pages/BrowserPage"

import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
	   <Route path="/browser" component={BrowserPage} />
         
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
