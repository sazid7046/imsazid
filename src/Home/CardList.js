import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
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
        width: "80px",
        height: "80px",
    }
}));




export default function CardItem({image, title, description}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Card elevation={2} className={classes.card}>
            <CardActionArea>
                <div className={classes.cardMedia}>
                    <div className={classes.media}>
                        <div style={{color: '#FFA500',transform: 'scale(1.75)'}}>{image}</div>
                    </div>
                </div>
                <CardContent>
                <Typography gutterBottom variant="h5">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  );
}
