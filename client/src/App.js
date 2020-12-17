import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";


import LibraryPage from "./pages/LibraryPage";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <div className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/library" component={LibraryPage} />
         
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
