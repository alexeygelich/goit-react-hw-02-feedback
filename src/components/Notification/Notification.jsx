import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Notification.styles';

const Notification = ({ message }) => (
  <p className="NotificationWrapper">{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
