import React from 'react';
import './CSS/Button.css';

const Button = (props) => {
  return (
    <>
        {console.log("btn name = ",props.text)}
        <button className={props.class} onClick={props.handleFunction}>{props.text}</button>
    </>
  )
}

export default Button;