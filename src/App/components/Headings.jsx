// import React from 'react';
import PropTypes from 'prop-types';

export const Headings = ({ icon, title }) => {
  return (
    <div className="d-flex align-item-center gap-2">
      {icon}
      <h2>{title}</h2>
    </div>
  );
};

Headings.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default Headings;