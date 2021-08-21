import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hero from './Hero';
import Footer from './../components/ui/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container:{
      width:'100%',
      margin: '0 auto'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
            <Grid item sm={8}className={classes.container}>
                <Hero/>
            </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}