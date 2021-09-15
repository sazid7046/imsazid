import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HeroContent from './HeroContent';
import Widget from './Widget';

const useStyles = makeStyles((theme) => ({
  root:{
    marginTop: "2rem",
    [theme.breakpoints.down('sm')]:{
      marginTop: '-1rem',
    }
  },
   widget:{
    margin: "3.5rem 0 2rem",
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <article className={classes.root}>
        <Grid container spacing={4}>
          <Grid item sm={8} xs={12} className={classes.hero}>
            <HeroContent/>
          </Grid>
          <Grid item sm={4} xs={12} className={classes.widget}>
            <Widget/>
          </Grid>
        </Grid>
      </article>
    </React.Fragment>
  )
}

export default Hero
