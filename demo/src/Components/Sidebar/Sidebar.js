import React from 'react';
import classes from './Sidebar.css';

const Sidebar =()=>{

    return (
        <div class="sidebar">
            <nav class="sidenav">
            <ul class="sidebar-list" >
                <li class="logo">Shards Dashboard</li>
                <li class="sidebar-item">
                    <a href="/dashboard">
                        <i class="fa fa-pencil" aria-hidden="true"></i> Blog Dashboard
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="/posts">
                        <i class="fa fa-columns" aria-hidden="true"></i> Blog Posts
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="/newpost">
                        <i class="fa fa-file-text" aria-hidden="true"></i> Add New Post
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="/forms">
                    <i class="fa fa-bars" aria-hidden="true"></i> Forms And Components
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="/tables">
                        <i class="fa fa-table" aria-hidden="true"></i> Tables
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="/profile">
                    <i class="fa fa-user" aria-hidden="true"></i> User Profile
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="/errors">
                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Errors
                    </a>
                </li>
            </ul>
            </nav>
        </div> 
    )
}


export default Sidebar;