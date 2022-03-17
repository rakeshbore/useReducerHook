import React from 'react'
import { useContext } from 'react'
import { ContextReducer } from './Parent'
const Chield3 = () => {
    const ParentContext=useContext(ContextReducer)
  return (
      <div>
    <div>Chield3</div>
    <div>{ParentContext.CountState}</div>
    <button onClick={()=>ParentContext.CountDispatch("INCREMENT")}>increment</button>
    <button onClick={()=>ParentContext.CountDispatch("DECREMENT")}>decrement</button>
    <button onClick={()=>ParentContext.CountDispatch("RESET")}>reset</button>
    </div>
  )
}

export default Chield3