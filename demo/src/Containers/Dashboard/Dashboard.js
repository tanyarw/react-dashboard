import React from 'react';
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
const dashboard = props =>{
    let topbar = <Topbar name="Sierra Brooks"></Topbar>
    let sidebar = <Sidebar></Sidebar>
    return (
        <div>
            {topbar}
            {sidebar}
        </div>
    )
}

export default dashboard;