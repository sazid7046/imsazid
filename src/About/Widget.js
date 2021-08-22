import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import PopularBlog1 from './../Blog/PopularBlog1';

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(theme => ({
  title:{
    fontFamily: "'Rubik', sans-serif",
    fontWeight: 600,
    fontSize: '26px',
    letterSpacing: '0.5px',
    lineHeight: 1.1,
    margin: '20px 0'
  },
  formControl:{
    width: '100%',
    margin: '1.75rem auto',
    borderRadius: '6px',
  },
  button: {
    width: '100%',
    padding: theme.spacing(1),
    fontSize: '18px',
    backgroundColor: '#00A088',
    color: '#ffffff',
    letterSpacing: '1px',
    marginBottom: '0.75rem'
  },
  smline:{
    height: '3px',
    backgroundColor: '#000',
    marginTop: '4rem',
  },
  social_link:{
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem'
  },
  lkdn_links:{
    transform: 'scale(1.7)',
    color:  '#0077b5'
  },
  In_links:{
    transform: 'scale(1.7)',
    color:  '#0077b5'
  },
  fb_links:{
    transform: 'scale(1.7)',
    color: '#4267B2'
  },
  tw_links:{
    transform: 'scale(1.7)',
    color: '#1DA1F2'
  },
  heading2:{
    fontWeight: 700,
    letterSpacing: '0.6px',
  },
  description:{
    color: '#000',
    fontSize: '16px',
    fontWeight: 400,
  }
}))
function Widget() {
  const classes = useStyles();
  const [name, setName] = React.useState('youname@email.com');

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <section className={classes.root}>
      <div className={classes.newsletter}>
        <Typography className={classes.title}>Want to learn web devlopment?</Typography>
        <Typography variant='subtitle1'>Sign up to get emails about new posts and other info.     Unsubscribe anytime.</Typography>
        <form noValidate autoComplete="off" className={classes.form}>
          <FormControl variant="outlined" className={classes.formControl}>
            <OutlinedInput value={name} onChange={handleChange} label="Name" />
          </FormControl>
          <Button variant="outlined" size="large" className={classes.button}>GET UPDATES</Button>
        </form>
        <Typography variant='body1' component='p'>Learn more at our @privacy-policy.</Typography>
      </div>
      <div className={classes.resource}>
        <div className={classes.smline}></div>
        <Typography className={classes.title}>Resources</Typography>
        <PopularBlog1/>
      </div>
      <div className={classes.social}>
        <div className={classes.smline}></div>
        <Typography className={classes.title} gutterBottom>Follow Us</Typography>
        <div className={classes.social_link}>
          <LinkedInIcon className={classes.lkdn_links}/>
          <InstagramIcon className={classes.In_links}/>
          <TwitterIcon className={classes.tw_links}/>
          <FacebookIcon className={classes.fb_links}/>
        </div>
        <Typography variant="body1" className={classes.heading2} gutterBottom>AFFILIATE DISCLAIMER</Typography>
        <Typography className={classes.description} gutterBottom>I participate in various affiliate programs and my content contains affiliate links. If you purchase through those links, I may receive a commission from the seller, at no cost to yourself. It's one way you can support this site!</Typography>
        <Typography className={classes.description}>As an Amazon Associate I earn from qualifying purchases. I only recommend products that I personally know and believe are helpful to my readers.</Typography>

      </div>
      
    </section>
  )
}

export default Widget;
