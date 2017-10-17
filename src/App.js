import React, { Component } from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import './styles/App.css';


const getClass = () => {
  // computation here
  return 'blue';
}

const formatText = (text) => {
  return 'xX' + text.toUpperCase() + 'Xx';
}

class App extends Component {

  render() {
    const someCondition = true;

    return (
      <div>
        <h2 className={someCondition ? 'red': 'blue'}>Hello {formatText('cmsc100')}</h2>
        <h2 className={getClass()}>Hello World!</h2>
      </div>
    );
  }
}

export default App;
