import React from 'react';
import './profile-info.sass';
import avatar from '../../static/images/avatar.jpg';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function ProfileInfo() {
  return(
    <div className='profile-info'>
      <Avatar
        alt="avatar"
        src={avatar}
        sx={{ width: 200, height: 200 }}
      />
      <div className='profile-info-text'>
        <Typography variant="h3" >
          Tatiana Deeva
        </Typography>
        <Typography variant="h5" >
          front-end developer
        </Typography>
        <div className=''>
          <Typography variant="h11" className='profile-info-text-menu' >
          5 years of work experience
          </Typography>
          <Typography variant="h11" className='profile-info-text-menu' >
          10+ completed projects
          </Typography>
        </div>
      </div>

    </div>
  )
}

export default ProfileInfo;
