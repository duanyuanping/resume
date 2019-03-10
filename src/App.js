import React, { Component } from 'react';

class App extends Component {
  state = {
    num: 1,
    val: 0,
  }

  render() {
    return <div>{this.state.num}</div>
  }
}

export default App;