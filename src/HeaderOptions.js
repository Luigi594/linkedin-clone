import React from 'react';
import "./HeaderOptions.css";
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOptions({ avatar, Icon, title, onClick }) {

  // grabing the information of the user from redux
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className="headerOption_icon"/>}

      {/** if I past an avatar, then render the component Avatar */}
      {avatar && (
        <Avatar className='headerOption_icon' src={user?.photoURL}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOptions
