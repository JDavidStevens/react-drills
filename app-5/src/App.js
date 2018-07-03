import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://www.yamaha.com/en/about/history/logo/images/thum_1998_02.gif"}>
      </div>
    );
  }
}

export default App;
