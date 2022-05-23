import React from "react";
import "./App.css";
import TopNav from "./Components/TopNav";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div id="App">
      <TopNav />
      <Routes></Routes>
    </div>
  );
}

export default App;
