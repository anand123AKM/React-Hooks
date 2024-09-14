import React from 'react'
import './App.css'
import { useState } from 'react'

function UseState() {
   const initialCount = 10;
  const [count, setCount] = useState(initialCount);

  return (
    <>    <div className='c'>
      <div>
 <h1 className='count' >{count}</h1>
      </div>
      <div className='d'  >
 <div className='in' onClick={()=>setCount(count+1)} >
        increment
      </div>
      <div className='de' onClick={()=> count > 0 ? setCount(count-1) : setCount(0) }  >
        decrement
        </div>
      </div>
    </div>
  </>
  )
}

export default UseState 