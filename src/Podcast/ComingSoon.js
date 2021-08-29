import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import podcast  from './../assets/podcast.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundImage: `url(${podcast})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'center',
        backgroundPosition:" top center",

    },
    content:{
        height: '100%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontFamily: "'Audiowide', cursive",
        [theme.breakpoints.down('sm')]:{
          fontSize: '36px'
        }
        
    },
  }));


  function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" color="primary" thickness={5}>{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  

function ComingSoon() {
    const classes = useStyles();

    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 72 ? 0 : prevProgress + 8));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography variant="h2" className={classes.title}>Under</Typography>
                <Typography variant='h2' className={classes.title} gutterBottom>Construction</Typography>
                <CircularProgressWithLabel value={progress} color='secondary'/>
            </div> 
        </div>
    )
}

export default ComingSoon;
