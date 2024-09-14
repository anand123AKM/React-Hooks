import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

export default function UseEffect() {
       const initialCount = 10;
  const [count, setCount] = useState(initialCount);
const [text, setText] = useState('');

    useEffect(() => {
    setText('Welcome to Hooks: useEffect');
const timer = setTimeout(() => {
      setText('');
    }, 3000);
    return () => clearTimeout(timer); 
  }, []);

 



  return (
    <>    <div className='c'>
       <div>
              <h1><span className='useff'>{text}</span></h1>
      </div>
      <div>
 <h1 className='count' >{count}</h1>
      </div>
      <div className='d'  >
 <div className='in' onClick={()=>setCount(count+1)} >
        increment
      </div>
      </div>
    </div>
  </>
  )
}
