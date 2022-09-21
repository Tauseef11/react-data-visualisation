import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';

export default function LineGraph({ segmentData }) {
  return (
    <div>
      <Line data={segmentData} />
    </div>
  );
}

LineGraph.propTypes = {
  segmentData: PropTypes.object,
};
