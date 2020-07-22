import React from 'react';
import MainSection from './components/sections/MainSection';
import Services from './components/sections/Services';
import NavBar from './components/sections/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <MainSection />
      <Services />
    </>
  );
}

export default App;