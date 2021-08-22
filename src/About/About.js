import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hero from './Hero';
import Footer from './../components/ui/Footer';

const useStyles = makeStyles((theme) => ({
  root:{
    [theme.breakpoints.down('sm')]:{
      width: '96%',
      margin: '0 auto'
    }
  },
  container:{
      width:'100%',
      margin: '0 auto'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container>
              <Grid item sm={8} className={classes.container}>
                  <Hero/>
              </Grid>
        </Grid>
      </div>
      <Footer/>
    </React.Fragment>
  );
}