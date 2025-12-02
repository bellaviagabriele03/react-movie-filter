import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import movieArray from './assets/data.js';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {

  
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
