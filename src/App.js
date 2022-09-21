import React, { useState } from 'react';
import Header from './components/header/Header';
import wpLogo from './assets/wp-logo.png';
import BarChart from './components/bar-chart/BarChart';
import LineGraph from './components/line-graph/LineGraph';
import Toggle from './components/toggle/Toggle';
import { SegmentData } from './data/SegmentData';
import { sortDays } from './utils/Utils';
import './components/header/header.css';

function App() {
  const [segmentData, setSegmentData] = useState({
    labels: [
      'Monday',
      'Teusday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    datasets: [
      {
        label: SegmentData[0].segmentName,
        data: [...sortDays(SegmentData)],
        backgroundColor: [
          'green',
          'yellow',
          'yellow',
          'yellow',
          'yellow',
          'red',
          'yellow',
        ],
        borderColor: ['black'],
        borderWidth: 2,
      },
    ],
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              fontSize: 70,
            },
          },
        ],
      },
    },
  });
  const [toggle, setToggle] = useState(false);

  return (
    <div
    >
      <Header className="logo" asset={wpLogo} alt="logo" />
      <Toggle toggle={toggle} setToggle={setToggle} />
      <div style={{width: '940px', marginTop: '10px'}}>
        {toggle ? (
          <LineGraph
            segmentData={segmentData}
            setSegmentData={setSegmentData}
          />
        ) : (
          <BarChart segmentData={segmentData} setSegmentData={setSegmentData} />
        )}
      </div>
    </div>
  );
}

export default App;
