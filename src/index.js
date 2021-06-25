import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
// import Profile from './components/Profile'


const routing = (
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path='/' component={App} />
        {/* <Route path='/:slug' component={Profile} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </React.StrictMode>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))