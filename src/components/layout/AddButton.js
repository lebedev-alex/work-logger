import React from 'react';

export const AddButton = () => (
  <div className="fixed-action-btn">
    <a
      href="#add-log-modal"
      className="btn-floating btn-large blue darken-2 modal-trigger "
    >
      <i className="large material-icons">add</i>
    </a>
    <ul>
      <li>
        <a
          href="#worker-list-modal"
          className="btn-floating green modal-trigger"
        >
          <i className="material-icons">person</i>
        </a>
      </li>
      <li>
        <a href="#add-worker-modal" className="btn-floating red modal-trigger">
          <i className="material-icons">person_add</i>
        </a>
      </li>
    </ul>
  </div>
);
