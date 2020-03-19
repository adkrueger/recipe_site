import React from "react";
import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <body>
        <NavBar />
        <Home />
      </body>
    </div>
  );
}

export default App;
