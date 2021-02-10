import React, { Component } from 'react';
import classes from './Donut.css';
import GoogleChart from 'react-google-charts';
const Donut =()=>{
    const DonutChart = {
  title: 'Donut Chart',
  key: 'DonutChart',
  chartType: 'PieChart',
  width:'100%',
  height:'400px',
  data: [
    ['Device', 'Users'],
    ['Desktop', 20],
    ['Tablet', 5],
    ['Mobile', 2],
  ],
  options: {
    title: 'Users by Device',
    titleTextStyle: {
      color: '#788195',
    },
    legend: {
      textStyle: {
        color: '#788195',
      },
    },
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: '#ffffff',
    },
    is3D: true,
    colors: ['#9678AE', '#F99FB4', '#C8E4FB', '#01C0C8', '#ffbf00'],
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
  },
}
    return (
              <div class="googledonutchart">
                <GoogleChart {...DonutChart} />
              </div>
            )
          }
export default Donut;