import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
import { BrowserRouter as Router,
  Route,
  IndexRoute,
  IndexLink,
  hashHistory,
  Link } from 'react-router-dom';

ReactDOM.render(
  <App />,
  document.getElementById('root'));

