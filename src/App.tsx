import React from 'react';
import Home from './view/Home';
import Money from './view/Money';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {NotFound} from './view/NotFound';

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
          <Route  path="/*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App
