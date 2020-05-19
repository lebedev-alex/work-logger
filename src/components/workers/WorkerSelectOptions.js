import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkers } from '../../actions/workerActions';

const WorkerSelectOptions = ({ getWorkers, worker: { workers, loading } }) => {
  useEffect(() => {
    getWorkers();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    workers !== null &&
    workers.map(w => (
      <option key={w.id} value={`${w.firstName} ${w.lastName}`}>
        {w.firstName} {w.lastName}
      </option>
    ))
  );
};

WorkerSelectOptions.propTypes = {
  worker: PropTypes.object.isRequired,
  getWorkers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  worker: state.worker
});

export default connect(
  mapStateToProps,
  { getWorkers }
)(WorkerSelectOptions);
