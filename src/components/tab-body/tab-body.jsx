import React from 'react';
import './tab-body.sass';
import ImgMediaCard from '../portfolio-content-item/portfolio-content-item';
import Grid from '@mui/material/Grid';

export default function TabBody({item}) {
  let news;
  if (item.length > 0) {
    news = item.map(info => {
      const {id, ...infoProps} = info;
      return (
        <ImgMediaCard key={id} {...infoProps}/>
      )
    });
  } else {
    news = <div style={{margin: '0 auto'}}> Данные отсутствуют </div>
  }

  return (
    <Grid container justifyContent="center">
      { news }
    </Grid>
  )
}
