/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions';
import WorkerSelectOptions from '../workers/WorkerSelectOptions';

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [worker, setWorker] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setWorker(current.worker);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || worker === '') {
      M.toast({ html: 'Please enter a message and worker' });
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        worker,
        date: new Date()
      };

      updateLog(updLog);
      M.toast({ html: `Log updated by ${worker}` });

      setMessage('');
      setWorker('');
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Enter Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="input-field">
              <select
                name="worker"
                value={worker}
                className="browser-default"
                onChange={e => setWorker(e.target.value)}
              >
                <option value="" disabled>
                  Select Worker
                </option>
                <WorkerSelectOptions />
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-green btn "
        >
          Enter
        </a>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(
  mapStateToProps,
  { updateLog }
)(EditLogModal);
