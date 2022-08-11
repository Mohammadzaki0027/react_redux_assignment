//Write the ActionCreator functions here

import * as types from "./actionType"
import axios from "axios"
const getdata=()=>(dispatch)=>{
  
 dispatch({type:types.GET_WATCHES_DATA_REQUEST})
axios.get(`http://localhost:8080/watches`).then((r)=>{
  console.log(r.data)
    dispatch({type:types.GET_WATCHES_DATA_SUCCESS,payload:r.data})
    }).catch((err)=>{
        console.log(err)
        // dispatch({type:types.GET_WATCHES_DATA_FAILURE})
    })


}

export {getdata}
