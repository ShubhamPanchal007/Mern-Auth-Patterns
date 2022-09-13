import React from "react";

function Logout() {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.href = '/login'
  };
  return (
    <section>
      {localStorage.getItem("token") ? (
        <button className="p-4" onClick={() => logoutHandler()}>
          Logout
        </button>
      ) : (
        <button>
          <a href="/login">Login</a>
        </button>
      )}
    </section>
  );
}

export default Logout;
