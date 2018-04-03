import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "./components/Button";
import About from "./components/About";
import Quiz from "./components/Quiz"
import Link from "./components/Link";
import Results from "./components/Results";
import Header from "./components/Header";

const App = () =>
  <Router>
    <div> 
    <Header />
      <Link to="/">About</Link>
      <Route exact path="/" component={About} />
     
      <Link to="/quiz">Quiz</Link>
      <Route exact path="/quiz" component={Quiz} />
      
      <Link to="/results">Results</Link>
      <Route exact path="/results" component={Results} />
      
    </div>
  </Router>;

export default App;
