import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const CustomPagination = ({total, showPerPage, onPaginationChange}) => {
    const [counter, setCounter] = useState(2);

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
      }, [counter]);
      const onButtonClick = (type) => {
      if (type === "prev") {
        if (counter === 1) {
          setCounter(1);
        } else {
          setCounter(counter - 1);
        }
      } else if (type === "next") {
        if (Math.ceil(total/showPerPage) === counter) {
          setCounter(counter);
        } else {
          setCounter(counter + 1);
        }
      }
    };

    return (
        <React.Fragment>
              <Grid item container sm={12} justify='space-between'>
            <Grid item sm={6}>
              <Button  onClick={() => onButtonClick("prev")}  variant="outlined" color="secondary" size='large'  startIcon={<ArrowLeftIcon>Newer</ArrowLeftIcon>}>Newer</Button>
            </Grid>
            <Grid item sm={6} style={{textAlign: 'right'}}>
              <Button onClick={() => onButtonClick("next")} variant="contained" color="secondary" size='large' endIcon={<ArrowRightIcon>Older</ArrowRightIcon>}>Older</Button>
            </Grid>
        </Grid>
        </React.Fragment>
      
    );
};

export default CustomPagination;

