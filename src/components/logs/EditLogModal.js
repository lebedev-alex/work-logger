/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [worker, setWorker] = useState('');

  const onSubmit = () => {
    if (message === '' || worker === '') {
      M.toast({ html: 'Please enter a message and worker' });
    } else {
      console.log(message, worker, attention);
      setMessage('');
      setWorker('');
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Enter System Log</h4>
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
                onBlur={e => setWorker(e.target.value)}
              >
                <option value="" disabled>
                  Select Worker
                </option>
                <option value="Joseph Greenwald">Joseph Greenwald</option>
                <option value="Bill Montana">Bill Montana</option>
                <option value="Thomas Seguero">Thomas Seguero</option>
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
                  onBlur={() => setAttention(!attention)}
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

export default EditLogModal;
