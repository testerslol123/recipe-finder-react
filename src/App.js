import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Nav from './Nav';
import HomePage from './HomePage';
import About from './About';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
      </Router>
    </div>
  )

}

export default App;