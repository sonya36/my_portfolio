// rafce is the shortcut to get template in react
import React from 'react'
import Header from './header/Header' 
import Home from './home/Home'
import About from './about/About'
import Skills from './skills/ Skills'
import Qualification from './qualification/Qualification'
import './index.css';
const App = () => {
  return (
      <>
        <Header />
        <main className ='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        </main>
      </>

  );
};

export default App
