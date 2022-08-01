import "./App.css";
import React, { Component } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage";

class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={ <Main /> } />
        </Routes>
      </Router>
    );
  }
}

export default App;