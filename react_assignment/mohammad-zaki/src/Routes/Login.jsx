import React from 'react'
import { useContext } from 'react'
import {Auth,AuthProvider} from "../Context/AuthContext"
import Navigate, { useNavigate } from "react-router-dom"
const Login = () => {
  const[logindata,setLogindata]=React.useState({
    username:"",
    password:"",
  })
const {isAuth,login,logout}=useContext(Auth)
  let backendname="zaki"
  let backendpassword="zaki"

const navigate=useNavigate()
console.log(isAuth);
  const handlechange=(e)=>{
let{name,value}=e.target
setLogindata({...logindata,[name]:value})

  }
const handlesubmit=(e)=>{
e.preventDefault()
if(logindata.username===backendname&&logindata.password===backendpassword)
{
login()
navigate("/Products");
}
else{
  alert("please enter right password/username")
}


}


    return (
    <div>
      {!isAuth?<form action="" onSubmit={handlesubmit}>
    <div>

<input type="text"  placeholder='enter username' name='username' onChange={handlechange} value={logindata.username}/>
<br />
<input type="password" placeholder='enter password' name='password' onChange={handlechange}

value={logindata.password}
/>
<br />
<input type="submit" />
<br />

    </div>
</form>:"You have sucessfully Login"}



    </div>
  )
}

export default Login