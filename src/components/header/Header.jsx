import React from 'react';
import PropTypes from 'prop-types';

export default function Header({className, asset, alt}) {
  return <img className={className} src={asset} alt={alt} />;
}

Header.propTypes = {
  className: PropTypes.string,
  asset: PropTypes.any,
  alt: PropTypes.string
};
