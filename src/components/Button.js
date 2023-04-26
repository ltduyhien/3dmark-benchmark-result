import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/Button.scss';

function Button({ buttonType, label, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false);
  };

  const handleClick = () => {
    onClick();
  };

  const buttonClasses = `button ${buttonType} ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`;

  return (
    <button
      className={buttonClasses}
      // onClick={handleClick}
      // onMouseDown={handleMouseDown}
      // onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired
};

export default Button;