import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/MainPage";

class App extends Component {

  render() {
    return (
      <Router basename={window.location.pathname || ''}>
        <Route exact path="/" element={ <Main /> } />
      </Router>
    );
  }
}

export default App;