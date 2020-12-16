import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminPage from "./pages/AdminPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
          <Route path="/admin" component={AdminPage} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
