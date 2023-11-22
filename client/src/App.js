// App.js
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Login } from "./components";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth"; // Import getAuth
import { useNavigate } from "react-router-dom";

const App = () => {
  const firebaseAuth = getAuth(app);

  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true");

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
      }
    }, (error) => {
      console.error("Firebase Authentication error:", error);
    });
  }, [firebaseAuth]);

  return (
    <div className="w-screen h-screen bg-primary-700 flex justify-center items-center">
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
