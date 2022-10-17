import React from 'react';
import './App.scss';
import FifthContainer from './components/FifthContainer';
import FirstContainer from './components/FirstContainer';
import Footer from './components/Footer';
import ForthContainer from './components/ForthContainer';
import Navber from './components/Navbar';
import SecondContainer from './components/SecondContainer';
import SixthContainer from './components/SixthContainer';
import ThirdContainer from './components/ThirdContainer';

function App() {
  return (
    <div className="App">
      <Navber />
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <ForthContainer />
      <FifthContainer />
      <SixthContainer />
      <Footer />
    </div>
  );
}

export default App;
