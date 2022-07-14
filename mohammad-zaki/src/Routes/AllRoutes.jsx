import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Products from "./Products"
import Cart from "./Cart"
import Private from "../Components/Private"
import Logout from "../Routes/Logout"
import { useContext } from 'react'
import { Auth } from '../Context/AuthContext'
const AllRoutes = () => {
  const {isAuth}=useContext(Auth)

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Cart' element={<Cart></Cart>}></Route>

          <Route path='/Logout' element={ <Logout></Logout> }></Route> <Route path='/Login' element={<Login></Login>}></Route>
            <Route path='/Products' element={ <Products></Products> }></Route>

        </Routes>


    </div>
  )
}

export default AllRoutes