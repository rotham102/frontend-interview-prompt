import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    backgroundColor: '#31b4e0',
    color:'white',
    fontWeight:'100',
    paddingLeft:'15px'
  },
  paper: {
    
  },
  fake: {
    backgroundColor: grey[200],
    height: theme.spacing(1),
    margin: theme.spacing(2),
    // Selects every two elements among any group of siblings.
    '&:nth-child(2n)': {
      marginRight: theme.spacing(3),
    },
  },
}));

export default function ClickAway(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const fake = <div className={classes.fake} />;

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button className={classes.dropdown}  onClick={handleClick}>
          {props.children}
          <div style={{color:'white', marginBottom:'-5px' }}><KeyboardArrowDownIcon /></div>
        </Button>
          {open ? (
            <div className={classes.paper}>
              {fake}
              {fake}
              {fake}
              {fake}
              {fake}
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}