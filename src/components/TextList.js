import React from 'react';
import '../styles/scss/TextList.scss';

function TextList(props) {
  return ( 
    <div className={`text-list ${props.even ? 'even':''}`}>
      <h6>{props.title}</h6>
      <h6>{props.value}</h6>
    </div>
  );
}

export default TextList;