import React from 'react';
import { useFetchBlog } from './useFetchBlog';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import BlogList from './BlogList';
import PopularBlog1 from './PopularBlog1';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
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
    transform: 'translate(0, 16%)'
  }
}));

const url = `${API_URL}/blogs`;
function Blog() {
  const classes = useStyles();
  const {blog, loading} = useFetchBlog(url);
  return (
  <React.Fragment>
    <div className={classes.blog}>
        <Grid container>
          <Hidden smDown>
            <Grid item xs={12} md={2}></Grid>
          </Hidden>
        
        <Grid item xs={12} sm={12} md={6} className={classes.card}>
            {blog.map((bloglist) => {
            return (
              <>
                {loading ? 'loading...' : <BlogList key={bloglist.id} {...bloglist} />}
              </>
              )
            }
          )}

          <Grid item container sm={12} justify='space-between'>
            <Grid item sm={6}>
              <Button variant="outlined" color="secondary" size='large'  startIcon={<ArrowLeftIcon>Newer</ArrowLeftIcon>}>Newer</Button>
            </Grid>
            <Grid item sm={6} style={{textAlign: 'right'}}>
              <Button variant="contained" color="secondary" size='large' endIcon={<ArrowRightIcon>Older</ArrowRightIcon>}>Older</Button>
            </Grid>
          </Grid>

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
