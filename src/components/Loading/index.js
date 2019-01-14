import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const Loading = ({ classes }) => {
  return (
    <div className={classes.background}>
      <div className={classes.spinner}>
        <div className={classes.doubleBounce1} />
        <div className={classes.doubleBounce2} />
      </div>
    </div>
  );
};

Loading.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(Loading);
