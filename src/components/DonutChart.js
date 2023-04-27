import React from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/DonutChart.scss';

function DonutChart ({ percent, text, evalution }){
  return (
    <div className="donut-chart">
      <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
        <circle className="donut-hole" cx="20" cy="20" r="15.5" fill="transparent"></circle>
        <circle className="donut-ring" cx="20" cy="20" r="15.5" fill="transparent" strokeWidth="3.5"></circle>
        <circle className="donut-segment" cx="20" cy="20" r="15.5" fill="transparent"  strokeWidth="3.5" strokeDasharray={`${percent} ${100 - percent}`}  strokeDashoffset="25" strokeLinecap='round'></circle>
        <g className="donut-text">
          <text y="32%" transform="translate(0, 2)">
            <tspan x="50%" textAnchor="middle" className="donut-title">Your Score</tspan>   
          </text>
          <text y="52%" transform="translate(0, 2)">
            <tspan x="50%" textAnchor="middle" className="donut-score">{text}</tspan>   
          </text>
          <text y="64%" transform="translate(0, 2)">
            <tspan x="50%" textAnchor="middle" className="donut-subtitle">{evalution}</tspan>   
          </text>
      </g>
      </svg>
    </div>
  );
};

DonutChart.propTypes = {
  percent: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  evalution: PropTypes.string.isRequired,

};

export default DonutChart;