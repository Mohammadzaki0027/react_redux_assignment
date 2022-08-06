import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Show from './components/Show'
import Fetch from './components/Fetch'
function App() {


  return (
    <div className="App">
      <Fetch></Fetch>
      <Show></Show>
    </div>
  )
}

export default App
