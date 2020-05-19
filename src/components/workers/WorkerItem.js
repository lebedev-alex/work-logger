import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteWorker } from '../../actions/workerActions';

const WorkerItem = ({ worker: { firstName, lastName, id }, deleteWorker }) => {
  const handleDelete = () => {
    deleteWorker(id);
    M.toast({ html: 'Worker deleted' });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={handleDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

WorkerItem.propTypes = {
  worker: PropTypes.object.isRequired,
  deleteWorker: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteWorker }
)(WorkerItem);
