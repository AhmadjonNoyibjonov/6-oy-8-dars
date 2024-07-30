import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Home from "./pages/Home/index"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
