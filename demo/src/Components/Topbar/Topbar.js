import React from 'react';
import classes from './Topbar.css';
import profileimg from '../../profileimg.PNG'

const Topbar =(props)=>{
let name= props.name;
    return (
        <nav class="topbar">
            <div class="dropdown">
                <button class="notif"><i class="fa fa-bell" aria-hidden="true"></i></button>
                <img class="profile-pic" src={profileimg}></img>
                <button class="dropbtn">{name}<i class="arrow"></i></button>
                <div class="dropdown-content">
                    <a href="/logout">Logout</a>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;