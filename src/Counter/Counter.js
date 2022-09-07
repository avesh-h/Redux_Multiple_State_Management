import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {counterActions} from '../redux/store'
import './Counter.css'

function Counter() {

    //In this below selector we have to prefectly find value of initial state of counter and showcounter this is example of how to handle multiplse slices on configure store in redux

    const counter = useSelector((state)=>{
        return state.counter.count
    })

    const show = useSelector((state)=>{
        return state.counter.showCount
      })

    const dispatch = useDispatch()

    
      const incHandler = () =>{
        dispatch(counterActions.increment())
      }
    
      const decHandler = () =>{
        dispatch(counterActions.decrement())
      }
    
      const resHandler = () =>{
        dispatch(counterActions.reset())
      }
    
      const increseHandler = () =>{
        dispatch(counterActions.increase(5))
      }
    
      const toggleHandler = () =>{
        dispatch(counterActions.toggle())
      }

  return (
    <div className='counter'>
        <div>
          <p>
          My counter
          </p>
        </div>
          {show && <div>Counter ={counter} </div>}
          <button onClick={incHandler}>
              inc
          </button>
          <button onClick={decHandler}>
              dec
          </button> <br />
          <button onClick={resHandler}>
              reset
          </button>
          <button onClick={increseHandler}>
              inc + 5
          </button> <br />
          <button onClick={toggleHandler}>
              show/hide
          </button>
    </div>
  )
}

export default Counter
