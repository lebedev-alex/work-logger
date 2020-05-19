/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const Searchbar = ({ searchLogs }) => {
  const text = useRef('');
  const [value, setValue] = useState('');

  function handleChange() {
    setValue(text.current.value);
    searchLogs(text.current.value);
  }
  function handleClear() {
    setValue('');
    searchLogs('');
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search logs"
              value={value}
              ref={text}
              onChange={handleChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
              <input type="text" style={{ display: 'none' }} />
            </label>
            <i className="material-icons" onClick={handleClear}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

Searchbar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchLogs }
)(Searchbar);
