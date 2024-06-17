import React from 'react'

const Button = ({onClickHandler, value, title}) => {
  return (
    <button onClick={onClickHandler} value={value} className={`px-4 py-1 border text-base hover:bg-blue hover: hover:text-white`}>
       {title} 
    </button>
  )
}

export default Button