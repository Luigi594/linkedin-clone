import React, { forwardRef } from 'react';
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import InputOption from './InputOption';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

// I changed the function as an arrow function, because is more easier
// to manipulate with the animation I'm gonna be using

// I put the ref parameter and property because it needs to be there
// I'm saying this component is gonna have the animation
const Post = forwardRef(({ name, description, message, photoURL}, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className="post_header">
        <Avatar className="post_avatar" src={photoURL}>{name[0]}</Avatar>

        <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
          <p>{message}</p>
      </div>

      <div className="post_buttons">
          <InputOption Icon={ThumbUpOffAltOutlinedIcon} title="Like" color="gray" />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  )
})

export default Post
