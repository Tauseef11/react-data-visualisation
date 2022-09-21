import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';

export default function BarChart({ segmentData }) {
  return (
    <div>
      <Bar data={segmentData} />
    </div>
  );
}

BarChart.propTypes = {
  segmentData: PropTypes.object,
};
