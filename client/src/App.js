import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerhandler(e) {
    e.preventDefault();
    const respose = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const jsonResp = respose.json();
    console.log(jsonResp)
  }
  return (
    <div className="flex justify-center">
      <div className="content-center text-center">
        <h1 className="mb-5 font-light text-2xl">Register</h1>
        <form onSubmit={registerhandler}>
          <label htmlFor="name">Name</label>
          <div>
            <input
              type="text"
              id="name"
              className="border-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              className="border-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-md px-4 py-1 mt-5"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
