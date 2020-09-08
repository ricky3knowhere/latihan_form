import React from 'react';
import './style.scss'
import './App.css';

import Post from './components/pages/Post'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Create from "./components/pages/Create";
import SinglePost from './components/pages/SinglePost'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route exact path="/" children="Home"/>
          <Route exact path="/post" component={Post}/>
          <Route path="/post/new" component={Create}/>
          <Route path="/post/:id">
              <SinglePost />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
