import React, {useState} from 'react';
import { useFetchBlog } from './useFetchBlog';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import BlogList from './BlogList';
import CustomPagination from './CustomPagination';
import PopularBlog1 from './PopularBlog1';
import { API_URL } from './../utils.js/urls';
import Preloader from './../components/ui/Preloader'

const useStyles = makeStyles(theme => ({
  blog:{
    [theme.breakpoints.down('sm')]:{
      width: '95%',
      margin: '1rem auto'
    }
  },
  card:{
    margin: '3rem 0',
    [theme.breakpoints.down('sm')]:{
      margin: '0.25rem 0'
    }
  },
  rightBlog:{
    position: 'sticky',
    top: '-7rem'
  },
  sticky:{
    position: 'relative',
    transform: 'translate(0, 16%)'
  }
}));

const url = `${API_URL}/blogs`;
function Blog() {
  const classes = useStyles();
  const {blog, loading} = useFetchBlog(url);

  const showPerPage = 2;
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  }); 

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  if(loading){
    return <h1><Preloader/></h1>
  }
  if(!blog){
    return <h1>No Blog To Display</h1>
  }

  return (
  <React.Fragment>
    <div className={classes.blog}>
        <Grid container justify='flex-end'>
        <Grid item xs={12} md={6} className={classes.card}>
            {blog.slice(pagination.start, pagination.end).map((bloglist, index) => {
            return (
              <>
                {loading ? 'loading' : <BlogList key={index} {...bloglist} />}
              </>
              )
            }
          )}

           <CustomPagination 
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={blog.length}/>
        </Grid>

        <Grid item sm={4} xs={12} className={classes.sticky}>
            <Hidden smDown> 
                <div className={classes.rightBlog}>
                  <Typography variant="h6" gutterBottom align='center'>Most Popular</Typography>
                  <PopularBlog1/>
                </div>
            </Hidden>
          </Grid>
       
      </Grid>
      </div>
  </React.Fragment>
  )
}

export default Blog;
