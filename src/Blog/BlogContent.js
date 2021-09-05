import React from 'react';
import Typography from '@material-ui/core/Typography';
import ReactMarkDown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import './../components/ui/main.css';

const useStyles = makeStyles(theme => ({
  root:{
    width: '95%',
    margin: '2.5rem auto'
  }
}))
const BlogContent = ({title, content}) => {
  const classes = useStyles()
  return (
    <section className={classes.root}>
       <Typography variant='h1' gutterBottom>{title}</Typography>
       <div className='markdown'>
         <ReactMarkDown children={content}/>
       </div>
          
    </section>
  )
}

export default BlogContent

