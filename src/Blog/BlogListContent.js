import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlogContent from './BlogContent';
import Grid from '@material-ui/core/Grid';
import { useFetchBlogContent } from './useFetchBlogContent';
import Footer from '../components/ui/Footer';
import Preloader from '../components/ui/Preloader';
import { API_URL } from './../utils.js/urls';


const useStyles = makeStyles((theme) => ({
  preloader:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh'
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
      <Grid container justify='center'>
        <Grid item sm={6} xs={12}>
          <BlogContent {...blogPost}/>
        </Grid>
      </Grid>
     <Footer/>
    </React.Fragment>
  )
}

export default BlogListContent;