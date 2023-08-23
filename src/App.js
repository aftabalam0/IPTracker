import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
function App() {

   
  return (
      <div className="App">
        <div className='title'>
          <h1>IP Address Tracker</h1>
        </div>
          <Hero />
        <Footer/>
    </div>
  );
}

export default App;
