import React from 'react'
import "./button.css"

const Button = ({name,icon, onClick,bg, bPad, color, bRad}) => {
  return (
    <button className='button-styled' style={{
        background:bg,
        padding: bPad,
        borderRadius:bRad,
        color:color


    }} onClick={onClick}>
        {icon}
        {name}
    </button>
  )
}

export default Button