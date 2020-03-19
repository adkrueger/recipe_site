import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <head className="App-header"></head>
      <body>
        <NavBar />
        <Home />
      </body>
    </div>
  );
}

export default App;
