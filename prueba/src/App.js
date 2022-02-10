import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {getMemes } from './redux/actions'
import { connect } from 'react-redux'

function App({memes,getMemes}) {
  console.log(memes) 
  return (
    <div className="App">
     {
       
       memes && memes.length ? <p>{memes[0].name}</p> : null
     }
     <button onClick={getMemes}>MEMES</button>
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
