import React, { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
    if (res.user) {
      localStorage.setItem("token", res.user);
      alert("login successfull");
      window.location.href = '/protectedQuotes'
    }else{
      alert("Please check your credentials!!")
    }
  };
  return (
    <div className="flex justify-center">
      <div className="content-center text-center">
        <h1 className="mb-5 font-light text-2xl">Login</h1>
        <form onSubmit={(e) => LoginHandler(e)}>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 focus:outline-blue-100"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              className="border-2 focus:outline-blue-100"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-md px-4 py-1 mt-5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
