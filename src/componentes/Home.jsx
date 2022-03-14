import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {ExcelAJSON} from '../prueba';



export default function Home() {
  

  return (
    <div>
        <h1>HOME</h1>
        <Link to="/">
        <button>Volver</button>
        </Link>
    </div>
  )
}
