import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => (
  <li className="collection-item">
    <div>
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${
          log.attention === 'true' ? 'pink-text text-lighten-3' : ''
        }`}
      >
        {log.message}
      </a>
      <br />
      <span className="grey-text">
        <span className="light-blue-text text-lighten-5">id #{log.id}</span>
        {''} last updated by {''}
        <span className="light-blue-text text-lighten-5">{log.worker}</span>
        {''} on <Moment format="MMMM do YYYY, h:mm:ss a">{log.date}</Moment>
      </span>
      <a href="#!" className="secondary-content">
        <i className="material-icons light-blue-text text-lighten-5">delete</i>
      </a>
    </div>
  </li>
);

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default LogItem;
