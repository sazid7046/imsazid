import React from 'react';
import {makeStyles} from '@material-ui/core';
const useStyle = makeStyles(theme => ({
    root:{
        [theme.breakpoints.down('sm')]:{
            marginTop: '2.5rem'
        }
    },
    triangle_container:{
        textAlign:"center",
        marginBottom: '2rem'
    },
    svg:{
        height: '280px',
        width: '720px',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            overflow: 'hidden'
        }
    },
    triangle:{
        paddingBottom: '1rem',
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
                fontSize: '28px'
            }
        },
        quotoText:{
            fontSize: '36px',
            letterSpacing: '1px',
            fontFamily: "'Audiowide', cursive",
            [theme.breakpoints.down('sm')]:{
                fontSize: '28px',
                transform: 'translateX(100px)'
            }
        }
  }))

function SVG() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.triangle_container}>
                <svg className={classes.svg} viewBox="0 0 470 470">
                    <polygon points="250,60 100,380 380,380" className={classes.triangle}/>
                    <text x="195.2858" y="190.9107"  className={classes.quotoLove}>“DO WHAT YOU LOVE</text>
                    <text x="-90.7142" y="340.7315" className={classes.quotoText} class='quoteText'>LOVE WHAT YOU DO”</text>
                </svg>
            </div>
        </div>
    )
}

export default SVG
