import { useState } from 'react';
import './App.css';
import {getMemes } from './redux/actions'
import { connect } from 'react-redux'

function App({memes,getMemes}) {
  const [memeIndex,setMemeIndex ] = useState(0)
  function changeMeme(){
    setMemeIndex(Math.floor( Math.random() * memes.length ))
  }
  return (
    <div className="App">
     {
       
       memes && memes.length ? <div>
         <p>{memes[memeIndex].name}</p>
         <img width="200px" src={memes[memeIndex].url} />
         </div> 
         : 
         null
     }
     <button onClick={()=>{ changeMeme(); getMemes()}}>MEMES</button>
    </div>
  );
}
function getState(state){
  return {
    memes: state.memes
  }
}
function changeState(dispatch){
  return {
    getMemes : dispatch(getMemes())
  }
}
export default connect(getState,changeState)(App);
