import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const muiStyles = theme => ({
  panel: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    verticalAlign: 'center',
  },
  loadingCircle: {
    opacity: 0.8,
  },
});
const LoadingCircle = ({ classes, size }) => {
  return (
    <div className={classes.panel}>
      <CircularProgress size={size} className={classes.loadingCircle} />
    </div>
  );
};

export default withStyles(muiStyles)(LoadingCircle);
