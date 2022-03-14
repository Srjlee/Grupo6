import './App.css';
import Nav from './componentes/Nav';
import { Routes, Route} from 'react-router-dom';

import Home from './componentes/Home';
import {  useState } from 'react';



function App() {
  

  return (
    <div className="App">      
      <Routes>
        <Route path='/' element={<Nav/>}/>
        <Route path='/home' element={<Home/>}/>

      </Routes>

    </div>
  );
}

export default App;
