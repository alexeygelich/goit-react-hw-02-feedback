import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button className={styles.button} type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button className={styles.button} type="button" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button className={styles.button} type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
