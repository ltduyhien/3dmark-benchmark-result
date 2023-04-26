import React from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/Space.scss';

function Space(props) {
  const { size } = props;
  
  const getSizeClassName = () => {
    switch (size) {
      case 'small':
        return 'space-s';
      case 'medium':
        return 'space-m';
      case 'large':
        return 'space-l';
      case 'xlarge':
      return 'space-xl';
      default:
        return '';
    }
  };
  
  const sizeClassName = getSizeClassName();
  
  return <div className={`${sizeClassName} space`}></div>;
}

Space.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
};

export default Space;