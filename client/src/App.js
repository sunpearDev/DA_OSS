import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";


<<<<<<< HEAD
=======
import GameDetailPage from "./pages/GameDetailPage";

import OrderPage from "./pages/OrderPage";
>>>>>>> oder_gamedetail_page
import LibraryPage from "./pages/LibraryPage";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <div className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/library" component={LibraryPage} />
<<<<<<< HEAD
         
=======
          <Route path = "/order/:id" component = { OrderPage } />
          <Route path = "/game/:id"
        component = { GameDetailPage } />
>>>>>>> oder_gamedetail_page
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;