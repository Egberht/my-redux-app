import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../app/store'
import { increment, decrement } from './counterSlice'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>−</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter
