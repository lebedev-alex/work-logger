/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addWorker } from '../../actions/workerActions';

const AddWorkerModal = ({ addWorker }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      addWorker({
        firstName,
        lastName
      });

      M.toast({ html: `${firstName} ${lastName} was added as a worker` });

      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id="add-worker-modal" className="modal">
      <div className="modal-content">
        <h4>New Worker</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              First Name
            </label>
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

AddWorkerModal.propTypes = {
  addWorker: PropTypes.func.isRequired
};

export default connect(
  null,
  { addWorker }
)(AddWorkerModal);
