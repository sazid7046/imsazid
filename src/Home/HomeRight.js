import React, {useRef} from 'react';
import {makeStyles} from '@material-ui/core';
import Hero from './../assets/HeroImg.png';
import {TimelineLite ,TweenMax, Power3} from 'gsap';

const useStyle = makeStyles(theme => ({
  root:{
    margin: '1rem auto',
  },
  homePhoto:{
    backgroundImage: `url(${Hero})`,
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '380px',
    height: "380px",
    borderRadius: "100%",
    border: '22px solid #444',
    boxShadow: '0 0 18px 0 rgb(0 0 0 / 80%)',
    [theme.breakpoints.down('xs')]:{
      width: '300px',
      height: '300px'
    }
  }
}))

function HomeRight() {
  const classes = useStyle();
  let app = useRef(null)
  let images = useRef(null)
  let tl = new TimelineLite({ delay: .8});



  React.useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild;

    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

     //Images Animation
     tl.from(girlImage, 1.2, {y: 40, ease: Power3.easeOut},'Start')
     .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
  
  }, [tl])

  return (
    <div className={classes.root}>
      <div ref={el => app = el} className='hero'>
        <div ref={el => images = el} >
          <div className={classes.homePhoto}> </div>
        </div>
      </div>
    </div>
    
   
  )
}

export default HomeRight;
