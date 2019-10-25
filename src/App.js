import React from 'react';
import './css/App.css';
import NavBar from './navBar';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
        <NavBar />
      </div>
    )
  }
}

export default App;
