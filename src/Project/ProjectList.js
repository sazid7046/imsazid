import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import { Typography } from '@material-ui/core';
import  './../components/ui/main.css';


const useStyles = makeStyles((theme) => ({
  root:{
    marginTop: '1rem',
  },
  container:{
    display: 'flex',
    justifyContent: 'center',
  },
  title:{
    fontFamily: "'Audiowide', cursive",
  },
  card:{
    marginBottom: '2rem',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]:{
      marginBottom: '1rem'
    }
  }
}));

const card = {
  image: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  title: 'Covid-19-Tracker',
  description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown, It also shows about containment zones.',
  tools: 'Reactjs + Chart.js + Material UI'
};

const card2 = {
  image: 'https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
  title: 'Canvo.io',
  description: 'Developed an E-commerce website with having a user-friendly interface. Functioning provided are searching the canvas, order the product, Information would be required while checkout.',
  tools: 'Reactjs + Nodejs + Expressjs + MongoDB + Cloudinary'
};
const card3 = {
  image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  title: 'Landing page',
  description: 'Just taking the challange from frontmentor.io, its a Mobile First Sunnyside agency landing page',
  tools: 'HTML5 + CSS3-SASS + BootStrap + Javascript'
};

const card4 = {
  image: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80',
  title: 'Tik-tok Clone',
  description: 'TikTok clone is a trending video-dubbing & video-sharing app software solution. TikTok clone is our pre-built app with several additional unique features, which makes it the first of its kind.',
  tools: 'Reactjs + RestAPI + Material UI'
};


function ProjectList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{padding: '0 12px'}}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h2' className={classes.title}>Portfolio</Typography>
            <Typography variant='body1' color="textSecondary" gutterBottom>And This is what I did in the past 4 years of my
                Engineering and also doing a blog on the latest tech.</Typography>
              <div className={classes.card}>
                <a href="https://sazid7046.github.io/Covid-19-Tracker/" rel='noreferrer' target="_blank" style={{textDecoration: 'none'}}>
                  <ProjectCard img={card.image} title={card.title} description={card.description} tool={card.tools}/>
                </a>
              </div>
            <div className={classes.card}>
              <a href="https://github.com/sazid7046/sunny-side-agency" rel='noreferrer' target="_blank" style={{textDecoration: 'none'}}>
                <ProjectCard img={card3.image} title={card3.title} description={card3.description} tool={card3.tools}/>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <a href="https://github.com/sazid7046/canvo.io" rel='noreferrer' target="_blank" style={{textDecoration: 'none'}}>
              <ProjectCard img={card2.image} title={card2.title} description={card2.description} tool={card2.tools}/>
            </a>
          </div>
          <div className={classes.card}>
             <a href="https://sazid7046.github.io/Covid-19-Tracker/" rel='noreferrer' target="_blank" style={{textDecoration: 'none'}}>
              <ProjectCard img={card4.image} title={card4.title} description={card4.description} tool={card4.tools}/>
            </a> 
          </div>
          </Grid>
        </Grid> 
      </div>
      
      
    </div>
  )
}

export default ProjectList;
