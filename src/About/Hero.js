import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HeroContent from './HeroContent';
import Widget from './Widget';

const useStyles = makeStyles((theme) => ({
  root:{
    margin: '4rem 0',
    [theme.breakpoints.down('sm')]:{
      marginTop: '0rem'
    }
  },
  hero:{
    width: '100%', 
    margin: '0 auto'
  },
  widget:{
    width: '100%', 
    margin: '0 auto'
  }
}));

function Hero() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <article className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={11} className={classes.hero}>
          <HeroContent/>
        </Grid>
        <Grid item sm={4} xs={11} className={classes.widget}>
          <Widget/>
        </Grid>
      </Grid>
      </article>
    </React.Fragment>
  )
}

export default Hero
