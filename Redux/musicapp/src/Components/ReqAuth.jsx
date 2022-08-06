import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const ReqAuth = ({children}) => {
  const Authenicate=useSelector((store)=>store.Authreducer)
  const loaction=useLocation()

  if(!Authenicate.isAuth) 
  {
    return <Navigate to="/Login" state={{from:loaction}}
    replace/>
  }
  
  return children
    
  
}

export default ReqAuth