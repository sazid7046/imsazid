import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    justifyContent: 'center'
  }
}));

function ProjectList() {
  const classes = useStyles();
  return (
    <div>
      <div >
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
        </Grid> 
      </div>
      
      
    </div>
  )
}

export default ProjectList;
