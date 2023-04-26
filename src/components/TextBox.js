import React from 'react';
import '../styles/scss/TextBox.scss';

function TextBox(props) {
  return (
    <div className={`textbox ${props.bigSize?'big':''} ${props.borderless?'borderless':''}`}>
      {props.bigSize?<h1>{props.value}</h1>:<div><h6>{props.title}</h6><h3>{props.value}</h3></div>}
    </div>
    
  );
}

export default TextBox;