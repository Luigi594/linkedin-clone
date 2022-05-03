import React from 'react';
import "./HeaderOptions.css";
import Avatar from '@mui/material/Avatar';

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className="headerOption_icon"/>}

      {/** if I past an avatar, then render the component Avatar */}
      {avatar && (
        <Avatar className='headerOption_icon' src={avatar}/>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOptions
