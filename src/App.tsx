import * as React from 'react';
import './App.css';
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';
import MainTable from './Components/MainTable';
// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <MainTable/>
        <Footer/>
        </div>
    );
  }
}

export default App;
