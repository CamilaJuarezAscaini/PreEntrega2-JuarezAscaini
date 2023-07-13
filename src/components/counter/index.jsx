import './styles.css'
import { useState } from 'react';

const Counter = () => {
// { counter, onDecrementCounter, onIncrementCounter, isValidCounter }
  const [counter, setCounter] = useState(0);
    const isValidCounter = counter > 0;

    const onIncrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const onDecrementCounter = () => {
        if (!isValidCounter) return;
        setCounter((prevCounter) => prevCounter - 1);
    }

  return (
    <div className='counterContainer'>
      <button type='button' className='counterButton' onClick={onDecrementCounter} disabled={!isValidCounter}> - </button>
      <h1 className='counterText'>{counter}</h1>
      <button type='button' className='counterButton' onClick={onIncrementCounter}> + </button>
    </div>
  )
}

export default Counter;