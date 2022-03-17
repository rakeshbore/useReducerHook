import React,{useReducer} from 'react'
const initialState=0
const reducer=(state=initialState,action)=>{
      switch(action){
          case "INCREMENT":
              return state+1
              case "DECREMENT":
              return state-1>0?state-1:0
              case "RESET":
                  return initialState;
                  default:
                      return state;
      }
}
const UseReducer = () => {
    const[count,dispatch]=useReducer(reducer,initialState)
    const[countTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
    <div>
        <center>
    <div>{count}</div>
    <button onClick={()=>dispatch("INCREMENT")}>increment</button>
    <button onClick={()=>dispatch("DECREMENT")}>decrement</button>
    <button onClick={()=>dispatch("RESET")}>reset</button>
    <div>{countTwo}</div>
    <button onClick={()=>dispatchTwo("INCREMENT")}>increment</button>
    <button onClick={()=>dispatchTwo("DECREMENT")}>decrement</button>
    <button onClick={()=>dispatchTwo("RESET")}>reset</button>
    </center>
    </div>
  )
}

export default UseReducer