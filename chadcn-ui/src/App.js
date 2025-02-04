// src/App.js
import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <ProfileCard />
    </div>
  );
};

export default App;
