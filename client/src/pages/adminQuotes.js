import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const Adminquote = () => {
  const [quote, setQuote] = useState("");

  async function populateQuote() {
    const req = await fetch("http://localhost:1337/api/Adminquote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
      } else {
        populateQuote();
      }
    }
  }, []);

  return (
    <div>
      <h1>
        Your quote:{" "}
        {quote || "You are not authorized to  see the admin level quotes"}
      </h1>
    </div>
  );
};

export default Adminquote;
