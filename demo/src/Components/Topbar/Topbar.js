import React from 'react';
import classes from './Topbar.css';

const Topbar =(props)=>{
let name= props.name;
    return (
        <nav class="topbar">
            <div class="dropdown">
                <button class="dropbtn">{name}<i class="arrow"></i></button>
                <div class="dropdown-content">
                    <a href="/logout">Logout</a>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;