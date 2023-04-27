import React from 'react';
import '../styles/scss/TextBox.scss';

function TextBox(props) {
  return (
    <div className={`textbox ${props.bigSize?'big':''} ${props.borderless?'borderless':''} ${props.orange?'orange':''}`}>
      {props.bigSize?<h2>{props.value}</h2>:<div><h6>{props.title}</h6><h3>{props.value}</h3></div>}
    </div>
    
  );
}

export default TextBox;