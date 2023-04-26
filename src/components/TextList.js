import React, { useState } from 'react';
import '../styles/scss/TextList.scss';

function TextList(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  }

  const handleMouseLeave = () => {
    setIsVisible(false);
  }
  return ( 
    <div  className={`text-list ${props.even ? 'even':''}`}>
      <h6>{props.title} {props.tooltip?<span className='hintAnchor' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>?</span>:null}</h6>
      <h6>{props.value}</h6>
      {isVisible && <div className="tooltip">An example tooltips to explain the specification</div>}
    </div>
  );
}

export default TextList;