import React from 'react';
import MainSection from './components/sections/MainSection';
import Services from './components/sections/Services';
import NavBar from './components/sections/Navbar';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <NavBar />
      <MainSection />
      <Services />
      <Contact />
      <section style={{ height: '20vh' }}>
        <h1>Another section</h1>
      </section>
    </>
  );
}

export default App;