import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'center',
        marginBottom: '1rem'
    },
    card:{
        borderRadius: '5%',
        boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #dadada"
    },
    cardMedia:{
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    media:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "50%",
        backgroundColor: "#444",
        boxShadow: "0px 10px 60px 0px rgb(0 0 0 / 7%)",
        width: "80px",
        height: "80px",
    }
}));




export default function CardItem({logo}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Card elevation={2} className={classes.card}>
            <CardActionArea>
                <div className={classes.cardMedia}>
                    <CardMedia  className={classes.media}>
                        <div style={{color: '#ffA500', transform: 'scale(1.75)'}}>{logo}</div>
                    </CardMedia>
                </div>
                <CardContent>
                <Typography gutterBottom variant="h5">
                   Web Development
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Full-Stack Developer with a flair for creating elegant solutions in the least amount of time. Looking for growth opportunities to try new technologies and grow my technical skillset in a team-based atmosphere.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
}
