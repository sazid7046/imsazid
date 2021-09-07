import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CodeIcon from '@material-ui/icons/Code';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CardList from './CardList';

const useStyles = makeStyles((theme) => ({
  root:{
    marginBottom: '2rem',
    width: '95%',
    margin: '0 auto'
  }
}));

export default function CardItem() {
  const classes = useStyles();
  const card = [
    { id: 'web development',
      image: <CodeIcon/>,
      title: 'Web Development',
      description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown, It also shows about containment zones.',
    },
    
    { id: 'web Design',
    image: <TrackChangesIcon/>,
    title: 'UI Design',
    description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown, It also shows about containment zones.',
  },
  { id: 'Android Development',
    image: <PhoneIphoneIcon/>,
    title: 'App Development',
    description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown, It also shows about containment zones.',
  },
  ];
  return (
    <div className={classes.root}>
      <Grid container style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Grid item sm={3} xs={12}>
          <CardList {...card[0]}/>
        </Grid>
        <Grid item sm={3} xs={12}>
          <CardList {...card[1]}/>
        </Grid>
        <Grid item sm={3} xs={12}>
          <CardList {...card[2]}/>
        </Grid>
      </Grid>
    </div>
  );
}
