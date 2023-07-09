import './styles.css'
/* eslint-disable react/prop-types */
const Counter = ({ counter, onDecrementCounter, onIncrementCounter, isValidCounter }) => {


  return (
    <div className='counterContainer'>
      <button type='button' className='counterButton' onClick={onDecrementCounter} disabled={!isValidCounter}> - </button>
      <h1 className='counterText'>{counter}</h1>
      <button type='button' className='counterButton' onClick={onIncrementCounter}> + </button>
    </div>
  )
}

export default Counter;