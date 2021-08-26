import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

const useStyle = makeStyles(theme => ({
  root:{
    display: 'flex',
    alignItems: 'center',
    height: '90vh',
    [theme.breakpoints.down('sm')]:{
      height: '100vh',
      marginBottom:'1rem'
    }
  },
  homeLeft:{
    [theme.breakpoints.down('sm')]:{
      order: 2,
      textAlign: 'center'
    }
  },
  homeRight:{
    display: 'flex',
    justify:'center',
    [theme.breakpoints.down('sm')]:{
      
    }
  }
}))

function Hero() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container justify='space-evenly' alignItems='center'>
        <Grid item sm={4} xs={12} className={classes.homeLeft}>
          <HomeLeft/>
        </Grid>
        <Grid item sm={4} xs={12}className={classes.homeRight}>
          <HomeRight/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Hero
