import React, {useEffect} from 'react';
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
  useEffect(()=>{
    if (document.documentElement.clientWidth > 500){
        window.alert('请扫描二维码使用手机体验')
        const body = document.querySelector('body')
        const img = document.createElement('img')
        img.src = 'https://i.loli.net/2020/10/04/XdLRju7Ef8Do6MF.png'
        body!.appendChild(img)
        img.style.position = 'fixed'
        img.style.left = '50%'
        img.style.top= '50%'
        img.style.transform = 'translateX(-50%) translateY(-50%)'
    }
  },[])
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
