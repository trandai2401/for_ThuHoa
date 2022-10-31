import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import CardNotification from './CardNotification';
import './notification.css';
const Notification = ({ notifications }) => {
  return (
    <>
      <div className="wrapper-notification">
        {Object.values(notifications).map((noti) => (
          <CardNotification {...noti} />
        ))}
      </div>
    </>
  );
};
const mapStateToprops = (state) => {
  return { notifications: state.notifications };
};
export default connect(mapStateToprops, {})(Notification);
