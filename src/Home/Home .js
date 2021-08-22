import React from 'react'
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import RightSide from './RightSide';
import LeftSide from './LeftSide';

const useStyles = makeStyles(theme =>({
  container:{
    height: '100vh',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]:{
      width: '95%'
    }
  },
  leftSide:{
    margin: 'auto 0',
    [theme.breakpoints.down('sm')]:{
      order: 2,
      textAlign: 'center'
    }
  },
  rightSide:{
    [theme.breakpoints.down('sm')]:{
      marginTop: '2rem'
    }
  }
}))
function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <section className={classes.section}>
        <Grid container>
          <Grid item sm={10} container className={classes.container} justify='space-around' alignItems='center'>
            <Grid item sm={5} className={classes.leftSide}>
              <LeftSide/>
            </Grid>

            <Grid item sm={5} xs={12} className={classes.rightSide}>
              <RightSide/>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </React.Fragment>
  )
}

export default Home
