import React, { Component } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to guscrawford.com</h1>
        </header>
        <h2>React Refresh</h2>
        <h3>September 1, 2018</h3>
        <p className="App-intro">
          Just because I never even got started keeping a real blog of my work and challenges; I've decided to refresh my site using React (just because it's simple, popular, and I've probably oversaturated myself with Angular by this point)
        </p>
        <p>
          A lot of activity over the last couple months publishing packages and working to develop some test frameworks for different contexts which should generate some points for me to talk about in the upcoming future!
        </p>
      </div>
    );
  }
}

export default App;
