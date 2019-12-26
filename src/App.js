import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import "./App.css";
import Header from './components/header';
import Footer from './components/footer';
import Findcaterer from './components/Findcaterer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Findcaterer/>
      <hr></hr>
      <Footer/>
    </div>
  );
}


export default App;
