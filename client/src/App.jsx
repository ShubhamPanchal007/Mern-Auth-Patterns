import "./App.css";
import React from "react";
import Login from "./forms/Login.js";
import Register from "./forms/Register.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/protectedRoute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/anyProtectedRoute" element={<ProtectedRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
