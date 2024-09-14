import React from 'react'
import './App.css'
import { useReducer } from 'react'

function UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state > 0 ? state - 1 : state;
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 15)

  return (
    <>    <div className='c'>
      <div>
 <h1 className='count' >{count}</h1>
      </div>
      <div className='d'  >
 <div className='in' onClick={()=>dispatch({type:"INCREMENT"})} >
        increment
      </div>
      <div className='de' onClick={()=>dispatch({type:"DECREMENT"}) }  >
        decrement
        </div>
      </div>
    </div>
  </>
  )
}

export default UseReducer