import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AlbumIcon from '@material-ui/icons/Album';

import Contact__bg2 from '../../assets/contact_bg2.jpg';

const useStyles = makeStyles(theme =>({
    root:{
        background: "rgba(0,0,0,0.9)",
        color: "#F0EDEB",
        backgroundImage: `url(${Contact__bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    footer:{
        width: '95%',
        margin: '3rem auto',
    },
    logo:{
        fontFamily: "'Audiowide', cursive",
        color: "#EA5A00",
        letterSpacing: '1px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.75em'
        }
    },
    icon:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1.25rem 0 2rem',
        [theme.breakpoints.down('sm')]:{
            justifyContent: 'space-around'
        }
    },
    form:{
        marginTop: "1rem",
        padding: "1.2rem 1rem",
        border: "1px solid #242323",
        boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.6);"
    },
    form_input: {
        width: "100%",
        padding: "8px 0",
        paddingLeft: "6px",
        fontSize: "14px",
        "&:hover":{
            border: "2px solid #EA5A00",
            outline: "none"
        },
        "&:focus":{
            ouline: "none"
        },
        "&:active":{
            outline: "none"
        }
    }
}))

function Footer(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.root}>
                <Grid container >
                <Grid item sm={10} className={classes.footer}>
                    <Grid container spacing={4} style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Grid item sm={6}>
                            <Typography gutterBottom variant="h4">iam<span className={classes.logo}>Sazid</span></Typography>
                            <Grid container>
                                <Grid item sm={5} xs={12} className={classes.icon}>
                                    <GitHubIcon/>
                                    <FacebookIcon/>
                                    <InstagramIcon/>
                                    <AlbumIcon/>
                                </Grid>
                            </Grid>
                            <Typography variant='subtitle1'>&#169; 2021 by iamSazid, Proudly created by one &#38; only Sazid.</Typography>
                        </Grid>
    
                        <Grid item sm={5} xs={12}>
                            <Typography variant="h4" gutterBottom>&#10168;iam<span className={classes.logo}>Sazid Newsletter</span></Typography>
                            <div className={classes.form}>
                                <label>
                                    <Typography gutterBottom variant='h6' color='primary'>Email <span className={classes.logo}>*</span></Typography>
                                    <input className={classes.form_input}/>
                                </label>
                            </div>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        </React.Fragment>
    );
}
export default Footer;