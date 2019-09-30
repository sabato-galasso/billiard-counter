import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { withTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { compose } from '../util/functional-util';
import history from '../util/history-util';
import 'bootstrap-css-only';

const useNavStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appBar: {
    position: 'sticky',
    backgroundColor: '#fff !important',
    width: '100%',
    zIndex: 2
  },
  navIcon: {
    color: '#3c3599'
  },
  settingsButton: {
    marginRight: -18
  },
  title: {
    fontSize: '1.125rem',
    color: '#3c3599',
    fontWeight: 800,
    flexGrow: 1
  }
});

const NavBar = () => {
  const classes = useNavStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <div onClick={() => history.push('/')} className={classes.title}>
            Billiards Counter
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default compose(
  withTheme(),
  withRouter
)(NavBar);
