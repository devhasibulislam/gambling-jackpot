import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

function App() {
  return (
    <section className="App">
      <Header />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
