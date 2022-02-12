import { GET_MEMES } from "../actions";


const initialState = {
  prueba:""
}

export default function rootReducer (state = initialState, { type, payload }){
  switch (type) {
    case GET_MEMES:
      return{
        ...state,
        memes: payload.data.memes
      }
  
    default:
      return state
  }
}