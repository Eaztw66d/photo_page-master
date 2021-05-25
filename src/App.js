import React from "react";
import "./App.css";
import Container from "./components/Container";
import Results from "./components/Results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => (
  <Router>
   <div className="app">
     <Switch>
       <Route path="/" exact component={Container} />
       <Route path="/results" component={Results}/>
       
      </Switch>
    </div>
    </Router>
  );

export default App;
