import React, { Component } from 'react';
import classes from './AreaChart.css';
import GoogleChart from 'react-google-charts';
const AreaChart =()=>{
    const areaChart = {
        title: 'Area Chart',
        key: 'AreaChart',
        chartType: 'AreaChart',
        width:'100%',
        height:'400px',
        data: [
          ['Year', 'Current Month', 'Past Month'],
          ['7', 1000, 400],
          ['14', 1170, 460],
          ['21', 660, 1120],
          ['28', 1030, 4040],
        ],
        options: {
          legend: {
            textStyle: {
              color: '#788195',
            },
          },
          animation: {
            duration: 1000,
            easing: 'in',
            startup: true,
          },
          hAxis: {
            textStyle: {
              color: '#788195',
            },
          },
          vAxis: {
            textStyle: {
              color: '#788195',
            },
          },
          colors: ['#48A6F2', '#511E78'],
          dataOpacity: 0.6,
          tooltip: {
            textStyle: {
              color: '#788195',
            },
          },
        },
      };
    return (
              <div class="googleareachart">
                <GoogleChart {...areaChart} />
              </div>
            )
          }
export default AreaChart;