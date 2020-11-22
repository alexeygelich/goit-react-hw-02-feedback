import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options }) => (
  <>
    <button className={styles.button} type="button" onClick={options}>
      Good
    </button>
    <button className={styles.button} type="button" onClick={options}>
      Neutral
    </button>
    <button className={styles.button} type="button" onClick={options}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired,
};

export default FeedbackOptions;
