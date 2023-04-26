import React from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/DonutChart.scss';

function DonutChart ({ percent, text, radius, evalution }){
  return (
    <div className="donut-chart">
      <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
        <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="transparent"></circle>
        <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
        <circle class="donut-segment" cx="20" cy="20" r="15.91549430918954" fill="transparent"  stroke-width="3.5" stroke-dasharray={`${percent} ${100 - percent}`}  stroke-dashoffset="25" strokeLinecap='round'></circle>
        <g class="donut-text">
          <text y="34%" transform="translate(0, 2)">
            <tspan x="50%" text-anchor="middle" class="donut-title">Your Score</tspan>   
          </text>
          <text y="55%" transform="translate(0, 2)">
            <tspan x="50%" text-anchor="middle" class="donut-percent">{text}</tspan>   
          </text>
          <text y="66%" transform="translate(0, 2)">
            <tspan x="50%" text-anchor="middle" class="donut-data">{evalution}</tspan>   
          </text>
      </g>
      </svg>
    </div>
  );
};

DonutChart.propTypes = {
  percent: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  evalution: PropTypes.string.isRequired,

};

export default DonutChart;