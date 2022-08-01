import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import FantacyCenter from "../Pages/Fan"
import Criclytics from "../Pages/Criclyts"
import Schedule from "../Pages/Schedule"
import News from "../Pages/News"
import Video from "../Pages/Video"
import Player from "../Pages/Player"
import Home from '../Pages/Home'

const Allroutes = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
            <Route path='/FantacyCenter' element={<FantacyCenter></FantacyCenter>}></Route>
         <Route path='/Criclytics' element={<Criclytics></Criclytics>}></Route>
            <Route path='/Schedule' element={<Schedule></Schedule>}></Route>
            <Route path='/News' element={<News></News>}></Route>
            <Route path='/Video' element={<Video></Video>}></Route>
            <Route path='/Player' element={<Player></Player>}></Route> 
    </Routes>
    
    </>
  )
}

export default Allroutes