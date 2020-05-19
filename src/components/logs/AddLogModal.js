/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logActions';
import WorkerSelectOptions from '../workers/WorkerSelectOptions';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [worker, setWorker] = useState('');

  const onSubmit = () => {
    if (message === '' || worker === '') {
      M.toast({ html: 'Please enter a message and worker' });
    } else {
      const newLog = {
        message,
        attention,
        worker,
        date: new Date()
      };

      addLog(newLog);
      M.toast({ html: `Log added by ${worker}` });

      setMessage('');
      setWorker('');
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal">
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
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
          <div className="row">
            <div className="input-field">
              <select
                name="worker"
                value={worker}
                className="browser-default"
                onChange={e => setWorker(e.target.value)}
                onBlur={e => setWorker(e.target.value)}
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(
  null,
  { addLog }
)(AddLogModal);
