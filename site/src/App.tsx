import React from 'react';
import './style/global.css';
import HomePage from './componentes/homePage';
import AboutMe from './componentes/aboutMe';
import WorkPage from './componentes/workPage';

function App() {
  return (
    <>
      <HomePage/>
      <AboutMe/>
      <WorkPage/>
    </>
  );
}

export default App;
