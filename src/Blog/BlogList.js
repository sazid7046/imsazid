import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { API_URL } from './../utils.js/urls';

const useStyles = makeStyles(theme => ({
  root:{
    marginBottom: '2.25rem',
    height: '14rem',
    [theme.breakpoints.down('sm')]:{
      height: 'auto'
    }
  },
  cardActionArea:{
    display: 'flex',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column'
    }
  },
  media:{
    width: "100%",
    maxWidth: 400,
    marginRight: '1rem',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]:{
      maxWidth: '100%',
      height: '180'
    }
  },
  cardDescription:{
    width: '100%', 
    paddingRight: '0.4rem',
    [theme.breakpoints.down('sm')]:{
      width: '94%',
      margin: '0 auto'
    }
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  avatar:{
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]:{
      paddingBottom: '12px'
    }
  },
  author:{
    width:'96%',
    margin: '0 auto',
    paddingLeft: '0.6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

const BlogList = ({slug, category, title, author, date, readTime, img, desc, avatar}) => {
   const classes = useStyles();
   const readMore = false
  return (
    <React.Fragment>
      <Card className={classes.root} elevation={1}>
        <div className={classes.cardActionArea}>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            image={`${API_URL}${img.formats.thumbnail.url}`}
            title="image"
          />
           <Link to={`/blog/${slug}`} style={{textDecoration: 'none'}}>
            <div className={classes.cardDescription}>
              <Button variant="contained" disabled style={{margin: '0.5rem 0'}}>#Machine Learning</Button>
              <Typography variant="h6" gutterBottom color="textPrimary">{title}</Typography>
              <Typography variant="body2">{readMore?desc:`${desc.substring(0, 180)}...`}</Typography>
              <div className={classes.avatar}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className={classes.author}>

                  <div>
                    <Typography variant="subtitle1" color='textSecondary'>Author</Typography>
                    <Typography variant="subtitle2" color='textPrimary'>Sazid Khan</Typography>
                  </div>
                  
                  <div className={classes.date}>
                    <Typography color='secondary' variant="subtitle2">{date}</Typography>
                  </div>
                </div>
              </div>
            </div>
           </Link>
        </div>
    </Card>
    </React.Fragment>
  )
}
export default BlogList;