import React from 'react';
import BlogContent from './BlogContent';
import Grid from '@material-ui/core/Grid';
import { useFetchBlogContent } from './useFetchBlogContent';
import Preloader from './../components/ui/Preloader';
import { API_URL } from './../utils.js/urls';

function BlogListContent() {
  const url = `${API_URL}/blogs`;
  const {blogPost, loading} = useFetchBlogContent(url);

  if(loading){
    return <h1><Preloader/></h1>
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
    </React.Fragment>
  )
}

export default BlogListContent;