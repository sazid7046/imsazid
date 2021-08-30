import React, {useState} from 'react';
import { useFetchBlog } from './useFetchBlog';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Button} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import BlogList from './BlogList';
import CustomPagination from './CustomPagination';
import PopularBlog1 from './PopularBlog1';
import Footer from './../components/ui/Footer';
import { API_URL } from './../utils.js/urls';

const useStyles = makeStyles(theme => ({
  blog:{
    [theme.breakpoints.down('md')]:{
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
    top: '-4rem'
  },
  sticky:{
    position: 'relative',
    transform: 'translate(0, 20%)'
  }
}));

const url = `${API_URL}/blogs`;
function Blog() {
  const classes = useStyles();
  const {blog, loading} = useFetchBlog(url);

  const [showPerPage, setShowPerPage] = useState(2);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  }); 

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
  <React.Fragment>
    <div className={classes.blog}>
        <Grid container>
          <Hidden smDown>
            <Grid item xs={12} md={2}></Grid>
          </Hidden>
        
        <Grid item xs={12} sm={12} md={6} className={classes.card}>
            {blog.slice(pagination.start, pagination.end).map((bloglist) => {
            return (
              <>
                {loading ? 'loading...' : <BlogList key={bloglist.id} {...bloglist} />}
              </>
              )
            }
          )}

           <CustomPagination 
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={blog.length}/>

        </Grid>
        <Grid item xs={12} md={4} className={classes.sticky}>
          <Hidden smDown> 
              <div className={classes.rightBlog}>
                <Typography variant="h6" gutterBottom align='center'>Most Popular</Typography>
                <PopularBlog1/>
              </div>
          </Hidden>
        </Grid>
      </Grid>
      </div>
    <Footer/>
  </React.Fragment>
  )
}

export default Blog;
