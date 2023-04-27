import React from 'react';
import {Line} from '@ant-design/plots';
import '../styles/scss/LineChart.scss';

function LineChart(props) {
  return (
    <div className={`line-chart`}>
      <Line {...props.config} />
    </div>
    
  );
}

export default LineChart;