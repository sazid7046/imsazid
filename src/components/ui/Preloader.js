import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
  preloader:{
    height: '95vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]:{
      height: 'calc(90vh-4rem)'
    }
  }
}))

export default function CircularIndeterminate() {
  const classes = useStyle();
  return (
    <div className={classes.preloader}>
      <CircularProgress color="secondary" />
    </div>
      
  );
}