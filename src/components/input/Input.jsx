import React from 'react'
import "./input.scss"

const Input = ({title, placeholder, type, value, onChange, id, htmlFor}) => {

  return (
    <div className="flex-column">
        <label htmlFor={htmlFor} className="text-[1.1rem] font-bold ml-2">{title}</label>
        <input 
        id={id}
        type={type} 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange}
        className="custom-input"/>
    </div>
  )
}

export default Input
