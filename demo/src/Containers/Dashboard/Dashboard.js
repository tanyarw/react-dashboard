import React from 'react';
import classes from './Dashboard.css';
import { Row, Col } from 'antd';
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Donut from '../../Components/Donut/Donut'
import AreaChart from '../../Components/AreaChart/AreaChart'
const dashboard = props =>{
    let topbar = <Topbar name="Sierra Brooks"></Topbar>
    let sidebar = <Sidebar></Sidebar>
    let donut = <Donut></Donut>
    let areaChart = <AreaChart></AreaChart>
    const rowStyle = {
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
      };
      const colStyle = {
        marginBottom: '16px',
      };
      const gutter = 16;
    return (
        <div>
            {topbar}
            {sidebar}
            <div class="chartsdiv">
            <Row style={rowStyle} gutter={gutter} justify="start">
            <Col md={12} xs={24} style={colStyle}>
            <div class="chart">{donut}</div></Col>
            <Col md={12} xs={24} style={colStyle}>
            <div class="chart">{areaChart}</div></Col>
            </Row>
            </div>
        </div>
    )
}

export default dashboard;