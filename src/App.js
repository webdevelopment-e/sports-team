import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
  <div className="App">

        
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/team/:teamId">
        <TeamDetail></TeamDetail>
        </Route>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  </div>

  );
}

export default App;
