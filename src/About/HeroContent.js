import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import HeroImg from './../assets/HeroImg.JPG'

const useStyles = makeStyles(theme => ({
  root:{
    marginTop: '3rem'
  },
  title:{
    ontFamily: "'Rubik', sans-serif",
    fontWeight: 500,
    letterSpacing: '0.5px',
    marginBottom: '2rem'
  },
  figure:{
    textAlign: 'center',
    maxWidth: '100%',
    height: 'auto'
  },
  alignLeft:{
    float: 'left',
    margin: '.5rem 1rem .5rem 0rem'
  },
  heroImg:{
    size: 'clamp(251px, 100vw, 251px)',
    width:"251px",
    height:"300px"
  },
  paragraph:{
    // fontSize: '18px',
    fontFamily: "'Rubik', sans-serif",
    lineHeight: '1.3',
    marginBottom: '1rem'
  }
}))

function HeroContent() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography variant="h2" className={classes.title}>About</Typography>
      <div className={classes.post_content}>
        <div className={classes.blockImg}>
          <figure className={classes.alignLeft}>
          <img src={HeroImg} alt='hero' className={classes.heroImg}/>
          </figure>
        </div>
        <Typography variant='h6' className={classes.paragraph}>Learning web development is really fun, but it can also be incredibly frustrating.</Typography>
        <Typography varinat="body1" style={{lineHeight:'2'}} gutterBottom>If you’re in the process of learning how to code, you might be stressed about…<br/>
        … feeling like you’re not learning fast enough.<br/>
        … frantically looking up everything on Stack Overflow every single day.<br/>
        … battling impostor syndrome big time</Typography>
        <Typography variant="h6" className={classes.paragraph}>Let me tell ya something. I was there too.</Typography>
        <Typography gutterBottom variant="body1">Almost a years ago, I was actually in a bit of a rut, and feeling directionless in life. Most of my jobs had been temporary office jobs, and I couldn’t seem to find my way out. By chance, I ended up in a data entry job off of Craigslist, no less. Along with the data entry, they trained me in some programming.</Typography>
        <Typography gutterBottom variant="body1">I enjoyed the challenge, and even more, I enjoyed coding!</Typography>
        <Typography gutterBottom variant="body1">Two years later I got a full-time web developer job. I was still extremely green at that point, but luckily, I had a very supportive supervisor and coworkers. And yes, there was some frantic Googling and Stack Overflow-ing.</Typography>
        <Typography gutterBottom variant="body1">Today, almost seven years later, I can look back at my past self and see how far I’ve come. In that time, I’ve learned a lot about coding, and about learning how to code.</Typography>
        <Typography gutterBottom variant="body1">I’ve gotten over the hump of feeling incredibly inadequate and terrified of being found out, to feeling confident that I have the skills to learn anything new that I put my mind to.</Typography>
        <Typography gutterBottom variant="body1">And you can learn those skills too!</Typography>
        <Typography gutterBottom variant="body1">I’m not going to sugarcoat it– learning how to code proficiently is REALLY HARD, and it does take time. But you can learn how to code, and you can learn how to learn.</Typography>
        <Typography gutterBottom variant="body1">And that’s what I want to do for you!</Typography>
        <Typography gutterBottom variant="body1">I hope that my experiences and knowledge can help others on their coding journey</Typography>





~ Jessica
    </div>
      
    </section>
  )
}

export default HeroContent;
