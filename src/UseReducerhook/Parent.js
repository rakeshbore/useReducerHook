import React from 'react'
import { useReducer } from 'react'
import Chield1 from './Chield1'
import Chield2 from './Chield2'
import Chield3 from './Chield3'
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
export const ContextReducer = React.createContext()
const Parent = () => {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
 <ContextReducer.Provider value={{CountState:count,CountDispatch:dispatch}}>
     <center>
     
     <Chield1/>
     <Chield2/>
     <Chield3/>
     </center>
 </ContextReducer.Provider>
    </div>
  )
}

export default Parent