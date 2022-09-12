import "./App.css";
import React from "react";
import Login from "./forms/Login.js";
import Register from "./forms/Register.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quotes from "./pages/quotes.js";
import AdminQuotes from "./pages/adminQuotes.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/protectedQuotes" element={<Quotes />} />
          <Route path="/protectedAdminQuotes" element={<AdminQuotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
