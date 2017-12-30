import * as React from 'react';
import './App.css';
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';
import MainTable from './Components/MainTable';
import FreeSpace from './Components/FreeSpace';
// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <MainTable/>
        <FreeSpace/>
        <Footer/>
        </div>
    );
  }
}

export default App;
