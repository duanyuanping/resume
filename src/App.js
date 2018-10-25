import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="g-wrap">
          <Header />
          <Body></Body>
        </div>
      </Fragment>
    );
  }
}

export default App;
