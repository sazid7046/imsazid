import React, {useRef} from 'react';
import {Button, makeStyles, Typography} from '@material-ui/core';
import {TimelineLite ,TweenMax, Power3} from 'gsap';

const useStyle = makeStyles(theme => ({
caption:{
  textTransform: 'uppercase',
  letterSpacing: '4px',
  fontWeight: 600,
  color: '#dadada',
},
title:{
  fontFamily: "'Audiowide'",
},
description:{
  marginBottom: '1.5rem'
},
button:{
 display: 'flex',
 gap: '5%',
 [theme.breakpoints.down('sm')]:{
   justifyContent: 'center'
 }
}
}))

function HomeLeft() {
  const classes = useStyle();
  let app = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});



  React.useEffect(() => {
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .7
    }, .12, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.2)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)

  }, [tl])

  return (
    <div>
      <div className="hero" ref={el => app = el}>
        <div ref={el => content = el}>
          <h1>
            <div>
              <div><Typography variant='subtitle1' color='textSecondary' className={classes.caption}>Full-Stack Developer</Typography></div>
            </div>
            <div>
              <div><Typography variant="h3" gutterBottom className={classes.title}>Sazid Khan</Typography></div>  
            </div>
          </h1>
           <Typography variant='subtitle1' color='textSecondary' className={classes.description}>
              Full-Stack Developer with a flair for creating elegant solutions
              in the least amount of time. Looking for growth opportunities to try new
              technologies and grow my technical skillset in a team-based atmosphere.</Typography>
              <div className={classes.button}>
                <Button variant='outlined' size='large'>Download CV</Button>
                <Button variant='outlined' size='large' color='secondary'>Contact</Button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default HomeLeft;

















    {/* <Typography variant='subtitle1' color='textSecondary' className={classes.caption}>Full-Stack Developer</Typography>
      <Typography variant="h3" gutterBottom className={classes.title}>Sazid Khan</Typography>
      <Typography variant='subtitle1' color='textSecondary' className={classes.description}>
      Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium
      </Typography>
      <div className={classes.button}>
        <Button variant='outlined' size='large'>Download CV</Button>
        <Button variant='outlined' size='large' color='secondary'>Contact</Button>
      </div>
      */}