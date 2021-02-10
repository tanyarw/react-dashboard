import React from 'react';
import classes from './Dashboard.css';
import { Row, Col } from 'antd';
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Donut from '../../Components/Donut/Donut'
import AreaChart from '../../Components/AreaChart/AreaChart'
import Card from '../../Components/Card/Card'
const dashboard = props =>{
    let topbar = <Topbar name="Sierra Brooks"></Topbar>
    let sidebar = <Sidebar></Sidebar>
    let donut = <Donut></Donut>
    let areaChart = <AreaChart></AreaChart>
    
    const cardData = [
        {
            type: "POSTS",
            number: "2,390",
            percent: "4.7%"
        },
        {
            type: "PAGES",
            number: "182",
            percent: "4.7%"
        },
        {
            type: "COMMENTS",
            number: "8,147",
            percent: "4.7%"
        },
        {
            type: "NEW CUSTOMERS",
            number: "29",
            percent: "4.7%"
        },
        {
            type: "SUBSCRIBERS",
            number: "17,281",
            percent: "4.7%"
        },
    ]

    let card = cardData.map(event=>(
        <Card 
            type = {event.type}
            number = {event.number}
            percent = {event.percent}
        />
    ))

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
            <div class="section">
                <h4>DASHBOARD</h4>
                <h1>Blog Overiew</h1><br/>
                <div class="carddiv">
                {card}
                </div>
            </div> 
            <div class="chartsdiv">            
            <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={12} xs={24} style={colStyle}>
                    <div class="chart">
                        <h3>Users Overview</h3>
                        <hr/><br/>
                        {areaChart}
                    </div>
                </Col>
                
                <Col md={12} xs={24} style={colStyle}>
                    <div class="chart">
                        <h3>Users by Device</h3>
                        <hr/><br/>
                        {donut}
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default dashboard;