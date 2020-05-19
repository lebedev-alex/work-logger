import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WorkerItem from './WorkerItem';
import { getWorkers } from '../../actions/workerActions';

const WorkerListModal = ({ getWorkers, worker: { workers, loading } }) => {
  useEffect(() => {
    getWorkers();
    // eslint-disable-next-line
  }, [])

  return (
    <div id="worker-list-modal" className="modal">
      <div className="modal-content">
        <h4>Worker List</h4>
        <ul className="collection">
          {!loading &&
            workers !== null &&
            workers.map(worker => (
              <WorkerItem worker={worker} key={worker.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  worker: state.worker
});

WorkerListModal.propTypes = {
  worker: PropTypes.object.isRequired,
  getWorkers: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getWorkers }
)(WorkerListModal);
