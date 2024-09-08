import React from 'react'

const Button = ({text, className, type, onClick}) => {

  return (
    <button type={type} 
    className={`mx-2 my-2 px-6 py-2 text-yellow rounded-[2rem] hover:bg-blue focus:outline-none font-jaldi font-bold tracking-[.05em] ${className}`}onClick={onClick}>{text}</button>
    
  );
};

export default Button

