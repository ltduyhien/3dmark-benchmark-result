import React from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/Card.scss';

function Card({ className,collumnContent, children }) {
  return (
    <div className={`card ${className} ${collumnContent?'collumn-content':''}`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;