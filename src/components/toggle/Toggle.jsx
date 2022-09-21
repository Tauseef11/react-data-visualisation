import React from 'react';
import PropTypes from 'prop-types';
import './toggle.css';

export default function Toggle({ toggle, setToggle }) {
  const buttonLabel = toggle ? 'Show Bar Chart' : 'Show Line Graph';

  const handleOnClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className='toggle'>
      <button onClick={handleOnClick}>{buttonLabel}</button>
    </div>
  );
}

Toggle.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
};
