import React from 'react'
import { useContext } from 'react'
import { Auth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
const Private = ({children}) => {

  const{isAuth}=useContext(Auth)
  console.log("privatepage",isAuth)
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children

}

export default Private