import React, { Component } from 'react'
import ForeignExchange from './components/ForeignExchange'
import './App.scss'
import './scss/additional.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ForeignExchange/>
      </div>
    );
  }
}

export default App
