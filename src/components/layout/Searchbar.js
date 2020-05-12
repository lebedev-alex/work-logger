import React from 'react';

export const Searchbar = () => (
  <nav>
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
