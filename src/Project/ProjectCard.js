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
  }
}));

function ProjectCard({image, title, description, tools}) {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardActionArea>
           <CardMedia
            className={classes.media}
            image={image}
            title={title}
            />
          <CardContent>
          <Typography variant="body1" component="p" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p" align='center'>
              {tools}
            </Typography>
          </CardContent>
          </CardActionArea>
      </Card>
    </div>
  )
}

export default ProjectCard;
