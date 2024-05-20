"use client"
import React, {useState} from 'react'

interface ButtonProps {
    onClick?: () => void;
    text: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({onClick, text, className}) => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if(onClick){
      onClick();
    }
  }
  return (
    <button  className={className} onClick={handleClick}>
        {text} 
    </button>
  )
}

export default Button