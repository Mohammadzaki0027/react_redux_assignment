import * as types from "./actionTypes"
import axios from"axios"

const getmusic=(param)=>dispatch=>{

 dispatch({type:types.MusicRequest})
 setTimeout(()=>{

     return axios.get(`http://localhost:8080/albums`,param).then((r)=>{
     
     return dispatch({type:types.MusicSucess,payload:r.data})
     }).catch((err)=>{
        return dispatch({type:types.MusicFailure})
         console.log(err)
     })
 },800)
}


const editmusic=(param,id)=>(dispatch)=>{
console.log(id,param);
    dispatch({type:types.EditRequest})
  
   
        return axios.patch(`http://localhost:8080/albums/${id}`,param).then((r)=>{
        console.log(r.data);
        return dispatch({type:types.EditSucess,payload:r.data})
        }).catch((err)=>{
           return dispatch({type:types.EditFailure})
            console.log(err)
        })
 
   }

export {getmusic,editmusic}
