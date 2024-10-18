// rafce is the shortcut to get template in react
import React from 'react'
import Header from './header/Header' 
import Home from './home/Home'
import './index.css';
const App = () => {
  return (
      <>
        <Header />
        <main className ='main'>
        <Home />
        </main>
      </>

  );
};

export default App
