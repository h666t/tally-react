import React from 'react';
import Home from './view/Home';
import Money from './view/Money';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App:React.FC = ()=>{
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Money">
            <Money/>
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App
