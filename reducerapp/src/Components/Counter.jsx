import React from 'react'
import { useReducer } from 'react'
import { countreducer,incrementAction,decrementAction,incrementAction2 ,decrementAction2} from './reducer'
const Counter = () => {
    const[state,dispatch]=useReducer(countreducer,{amount:0})
  return (
    <>
    <div><h1>Bank:{state.amount}</h1></div>
    <button onClick={()=>{dispatch(incrementAction)}} >Deposit 1000</button>
    <button onClick={()=>{dispatch(decrementAction)}}  disabled={state.amount==0}>WithDrawl 1000</button>

    <button onClick={()=>{dispatch(incrementAction2)}} >Deposit 2000</button>
    <button onClick={()=>{dispatch(decrementAction2)}}  disabled={state.amount<=2000}>WithDrawl 2000</button>
    </>
  )
}

export default Counter