import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import WebIcon from '@material-ui/icons/Web';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
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
      image: <WebIcon/>,
      title: 'Covid-19-Tracker',
      description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown, It also shows about containment zones.',
      tools: 'Reactjs + Chart.js + Material UI'
    },
    
    { id: 'web Design',
    image: <SmartphoneIcon/>,
    title: 'Covid-19-Tracker',
    description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown, It also shows about containment zones.',
    tools: 'Reactjs + Chart.js + Material UI'
  },
  { id: 'Android Development',
    image: <ImportContactsIcon/>,
    title: 'Covid-19-Tracker',
    description: 'Developed a website on which live report of corona affected patients i.e, number of confirmed cases, number of recovered cases, and number of death cases in the Country as well as in the cities are shown, It also shows about containment zones.',
    tools: 'Reactjs + Chart.js + Material UI'
  },
  ];
  return (
    <div className={classes.root}>
      <Grid container style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Grid item sm={3} xs={12}>
          <CardList logo={card[0].image}/>
        </Grid>
        <Grid item sm={3} xs={12}>
          <CardList logo={card[1].image}/>
        </Grid>
        <Grid item sm={3} xs={12}>
          <CardList logo={card[2].image}/>
        </Grid>
      </Grid>
    </div>
  );
}
