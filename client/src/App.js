import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
          
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
