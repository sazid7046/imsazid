import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BlogContent from './BlogContent';
import Grid from '@material-ui/core/Grid';
import { useFetchBlogContent } from './useFetchBlogContent';
import Footer from '../components/ui/Footer';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Preloader from '../components/ui/Preloader';
import { API_URL } from './../utils.js/urls';


const useStyles = makeStyles((theme) => ({
  preloader:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh'
  },
  social:{
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '40vh',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'row',
      height: 0,
      marginTop: '1rem'
    }
  },
  fb_links:{
    transform: 'scale(1.7)',
    color: '#4267B2'
  },
  tw_links:{
    transform: 'scale(1.7)',
    color: '#1DA1F2'
  },
  lkdn_links:{
    transform: 'scale(1.7)',
    color:  '#0077b5'
  },
  title:{
    marginBottom: '3rem'
  }
}));

function BlogListContent() {
  const url = `${API_URL}/blogs`;
  const classes = useStyles();
  const {loading, blogPost} = useFetchBlogContent(url);

  if(loading){
    return (
      <div className={classes.preloader}>
          <Preloader/>
    </div>
    )
  }
  if(!blogPost){
    return <h1>No Blog To Display</h1>
  }
  return (
    <React.Fragment>
     <div style={{ padding: 16 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3} className={classes.social}>
          <FacebookIcon className={classes.fb_links}/>
          <TwitterIcon className={classes.tw_links}/>
          <LinkedInIcon className={classes.lkdn_links}/>
        </Grid>
        <Grid item xs={12} sm={7}>
          <BlogContent {...blogPost}/>
        </Grid>
      </Grid>
     </div>
     <Footer/>
    </React.Fragment>
  )
}

export default BlogListContent;