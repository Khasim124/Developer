import React from 'react'

function Button({ count, type, label, updateVal }) {
  const setCount = () => {
    if (type === 'inc')
      count++;
    else
      count--;
    updateVal(count);
  }
  return (
    <div>
      <button onClick={() => setCount()}>{label}</button>
    </div>
  )
}

export default Button;
