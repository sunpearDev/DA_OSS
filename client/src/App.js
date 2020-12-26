import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";


import GameDetailPage from "./pages/GameDetailPage";

import OrderPage from "./pages/OrderPage";
import LibraryPage from "./pages/LibraryPage";

import AdminPage from "./pages/AdminPage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <div className="container">

          <Route path="/" exact component={HomePage} />
          <Route path="/library" component={LibraryPage} />
         
          <Route path = "/order/:id" component = { OrderPage } />
          <Route path = "/game/:id" component = { GameDetailPage } />
			
          <Route path="/admin" component={AdminPage} />
	<Route path="/login" component={LoginPage} />
 	
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;