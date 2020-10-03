import React from 'react';
import Home from './view/Home';
import Money from './view/Money';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {NotFound} from './view/NotFound';
import {TagList} from './view/Money/tagList/TagList';
import {TagDetail} from './view/Money/tagList/TagDetail';
import {Statistics} from './view/Statistics';

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
          <Route exact path="/Money/TagList">
            <TagList/>
          </Route>
          <Route exact path="/Money/TagList/:id">
            <TagDetail/>
          </Route>
          <Route exact path="/Statistics">
            <Statistics/>
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
