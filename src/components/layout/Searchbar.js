import React from 'react';

export const Searchbar = () => (
  <nav style={{ marginBottom: '30px' }} className="#448aff blue accent-2">
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i>
            <input type="text" style={{ display: 'none' }} />
          </label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
);
