import React from 'react';
import "./SideBar.css";
import Avatar from '@mui/material/Avatar';

function SideBar() {

    const recentItem = (topic) => (

        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    
    const image = "https://img.fotocommunity.com/atardecer-en-rojo-395fc532-aa0e-44a2-8be5-ef78d84eafaa.jpg?width=1000";

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src={image} alt="" />
            <Avatar className="sidebar_avatar"/>
            <h2>Luis Martínez</h2>
            <h4>luishnlacho@gmail.com</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">1,024</p>
            </div>

            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">780</p>    
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('React Js')}
            {recentItem('Programming')}
            {recentItem('Design')}
            {recentItem('Full Stack')}
        </div>
    </div>
  )
}

export default SideBar
