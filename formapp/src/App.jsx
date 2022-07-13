import { useState } from "react";

import "./App.css";

function App() {
  const [userdata, setUserdata] = useState({
username:"",
gender:"",
role:"",
martial:"",
  });

  const[data,setData]=useState([])
  const handlechange = (e) => {
let {name,value}=e.target
setUserdata({...userdata,[name]:value})

  };
const handlesubmit=()=>{
  event.preventDefault()
setData([...data,userdata])
}

  return (
    <div className="App">
      <div>
        <h1>Form</h1>
      </div>
      <div>
        <form action="" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="enter your name"
            onChange={handlechange}
   name="username"
   value={userdata.username}
          />
          <br />
          <select name="gender" id="" onChange={handlechange}>
          <option>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <select name="role" id="" onChange={handlechange}>
            <option>Role</option>
            <option value="fsd">FSD</option>
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
          </select>
          <br />
          <select name="martial" id="" onChange={handlechange}>
          <option>Martial</option>
            <option value="Maried">Maried</option>
            <option value="Unmaried">Unmaried</option>
          </select>
          <br />
          <button>Submit</button>
        </form>
      </div>



    </div>
  );
}

export default App;
