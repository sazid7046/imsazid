import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import name from './../assets/name.png';
import play from './../assets/play.png';
import leftImg from './../assets/rightSplash.png';

const useStyles = makeStyles(theme => ({
  container:{
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    
  },
  smline:{
    width: '42px',
    height: '3px',
    backgroundColor: '#000',
    marginBottom: '0.4rem'
  },
  intro:{
    fontWeight: 700,
  },
  logo:{
    maxWidth: '350px'
  },
  caption:{
    textTransform: 'uppercase',
    letterSpacing: '6px',
    fontWeight: 600,
    opacity: '0.7',
    color: '#dadada',
    marginTop: '1rem'
  },
  work:{
    marginTop: '0.75rem',
    display: 'flex',
    alignItems: 'center'
  },
  play:{
    maxWidth: '52px'
  },
  workProfile:{
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    fontWeight: 700,
    marginLeft: '7px',
   
  },
  contactUs:{
    position: 'absolute',
    bottom: 30,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]:{
      bottom: 0
    }
  },
  contact:{
    textTransform: 'uppercase',
    letterSpacing: '9px',
    color: '#000000',
    fontWeight: 700
  },
  email:{
    color: '#04c2c7'
  },
  phone:{
    color: '#04c2c7'
  },
  leftImg:{
    maxWidth: '180px',
    position: 'absolute',
    left: 0,
    bottom: 0
  },
}))

export default function LeftSide() {
  const classes = useStyles()
  return (
    <section>
      <div className={classes.smline}></div>
              <Typography gutterBottom variant='h5' className={classes.intro}>Hello, I am 👋</Typography>
              <img className={classes.logo} src={name} alt='sazid khan'/>
              <Typography variant='subtitle2' className={classes.caption}>a developer from <span style={{color: 'rgba(82, 184, 218)'}}>India.</span></Typography>

              <div className={classes.work}>
                <img className={classes.play} src={play} alt='see my work'/>
                <Typography className={classes.workProfile}>see my work profile</Typography>
              </div>

              <Hidden smDown>
                <div className={classes.leftImg}><img src={leftImg} alt='star' /></div>  
                <div className={classes.contactUs}>
                  <Typography variant='subtitle2' gutterBottom className={classes.contact}>contact me</Typography>
                  <Typography variant='caption'>Email: <span className={classes.email}>Sazid7046@gmail.com</span></Typography>
                  <Typography variant='caption'>Contact: <span className={classes.phone}>(+91) 8287321504</span></Typography>
                </div>
              </Hidden>
    </section>
  )
}



 