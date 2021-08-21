import React from 'react';
import Typography from '@material-ui/core/Typography';
import ReactMarkDown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './../components/ui/main.css';
// import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  section:{
    margin: '2.5rem 0'
  },
  author:{
    width: '80%',
    margin: '2rem 0',
    display: 'flex',
    alignItems: 'center'
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  description: {
    marginLeft: '1rem'
  },
  smLine:{
    width: '80%',
    height: '3px',
    backgroundColor: '#777',
    margin: '3rem 0 0'
  }
}))
const BlogContent = ({id, title, author, date, readTime, avatar, img, description, content}) => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
       <Typography variant='h1' gutterBottom>{title}</Typography>
          <div>
            <ReactMarkDown children={content}/>
          </div>
          <div className={classes.smLine}></div>
            <div className={classes.author}>
              <Avatar className={classes.large}/>
              <div className={classes.description}>
                <Typography variant='subtitle1'>Written By</Typography>
                <Typography varinat="h6" gutterBottom>{author}</Typography>
                <Typography variant='subtitle1'>Anti-racism educator and author of 9 books, including White Like Me and, most recently, Dispatches from the Race War (City Lights, December 2020)</Typography>
              </div>
            </div>
          <div className={classes.smLine}></div>
    </section>
  )
}

// BlogContent.propTypes = {

// }

export default BlogContent

