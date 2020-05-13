import React from 'react';
import PropTypes from 'prop-types';

const WorkerItem = ({ worker }) => (
  <li className="collection-item">
    <div>
      {worker.firstName} {worker.lastName}
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </div>
  </li>
);

WorkerItem.propTypes = {
  worker: PropTypes.object.isRequired
};

export default WorkerItem;
