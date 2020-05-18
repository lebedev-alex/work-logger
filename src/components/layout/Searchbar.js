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
          <i
            className="material-icons"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            close
          </i>
        </div>
      </form>
    </div>
  </nav>
);
