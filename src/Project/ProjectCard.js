import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  media:{
    height: 380,
    backgroundImage: 'cover'
  }
}));

function ProjectCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardActionArea>
           <CardMedia
            className={classes.media}
            image={props.img}
            title={props.title}
              />
          <CardContent>
          <Typography variant="body1" component="p" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              {props.description}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p" align='center'>
              {props.tool}
            </Typography>
          </CardContent>
          </CardActionArea>
      </Card>
    </div>
  )
}

export default ProjectCard;
