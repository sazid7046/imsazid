import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { API_URL } from './../utils.js/urls';

const useStyles = makeStyles(theme =>({
  heading:{
    textAlign: 'center',
    paddingBottom: theme.spacing(2)
  },
  card: {
    maxWidth: 360,
    margin: '0 auto',
    display: 'flex',
    marginBottom: '1rem',
  },
  media: {
    width: 190,
    marginRight: theme.spacing(2)
  },
  desc:{
    width: '100%'
  }
}));
export const PopularBlog = ({slug, img, title}) => {
  const classes = useStyles();
  return (
      <React.Fragment>
        <Link to={`/blog/${slug}`} style={{textDecoration: 'none'}}>
         <Card className={classes.card} elevation={0}>
          <CardMedia
            className={classes.media}
            image={`${img.[0].url}`}
            title="Contemplative Reptile"
            />
            <div className={classes.desc}>
              <Typography variant="subtitle2" component="h2">{title}</Typography>
              <Typography variant="subtitle2" color="textSecondary">Bartłomiej Franków</Typography>
            </div>
        </Card>
        </Link>
       
      </React.Fragment>
  )
}
