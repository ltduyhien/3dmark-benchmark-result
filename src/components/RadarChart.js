import React from 'react';
import {Radar} from '@ant-design/plots';
import '../styles/scss/RadarChart.scss';

function RadarChart(props) {
  return (
    <div className={`radar-chart`}>
      <Radar {...props.config} />
    </div>
    
  );
}

export default RadarChart;