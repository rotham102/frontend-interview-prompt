import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  chartSubHeader: {
    fontSize:'12px !important',
    marginLeft:'20px',
    display:'inline',
    color:'grey !important',
   },
}));

export default function Title(props) {
    const classes = useStyles();    
  return (
    <p className={classes.chartSubHeader}>
      {props.children}
    </p>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};