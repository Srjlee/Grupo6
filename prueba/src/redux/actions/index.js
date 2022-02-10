import axios from 'axios'
export const GET_MEMES = "GET_MEMES"



export function getMemes(){
  return (dispatch)=>{
    axios.get("https://api.imgflip.com/get_memes")
    .then((response)=>{
      dispatch({
        type:GET_MEMES,
        payload:response.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
}