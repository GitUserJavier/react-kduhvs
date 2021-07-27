import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return <div />;
  }
}

render(<App />, document.getElementById('root'));
