import React from 'react';
import {makeStyles, Grid} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root:{
        marginBottom: '2rem'
    },
    triangle_container:{
        display: 'flex', 
        justifyContent: 'center',
        marginBottom: '2rem'
    },
    svg:{
        height: '300px',
        width: '720px',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            margin: '0 auto'
        }
    },
    triangle:{
        fill: "transparent",
        stroke: "#FFA500 ",
        strokeWidth: 24,
        transition: "all 0.8s ease-in-out",   
        " &:hover":{
            transform: "rotate(-180deg)", 
        },
          
          transformOrigin: "250px 250px"
        },
        quotoLove:{
            fontSize: '36px',
            letterSpacing: '1px',
            fontFamily: "'Audiowide', cursive",
            [theme.breakpoints.down('sm')]:{
                fontSize: '26px'
            }
        },
        quotoText:{
            fontSize: '36px',
            letterSpacing: '1px',
            fontFamily: "'Audiowide', cursive",
            [theme.breakpoints.down('sm')]:{
                fontSize: '26px',
                transform: 'translateX(120px)'
            }
        }
  }))

function SVG() {
    const classes = useStyle();
    return (
        <div className={classes.root}> 
            <Grid container>
                <Grid item sm={12} xs={12} className={classes.triangle_container} style={{}}>
                    <svg className={classes.svg} viewBox="0 0 490 490" style={{ marginLeft: '-0.5rem'}}>
                        <polygon points="250,60 100,400 400,400" className={classes.triangle}/>
                        <text x="195.2858" y="190.9107" className={classes.quotoLove}>“DO WHAT YOU LOVE</text>
                        <text x="-90.7142" y="340.7315" className={classes.quotoText}>LOVE WHAT YOU DO”</text>
                    </svg>
                </Grid>
            </Grid>
        </div>
    )
}

export default SVG
