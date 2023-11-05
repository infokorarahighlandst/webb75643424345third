import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Forms from "./form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<Forms />} />
        <Route path="/" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
