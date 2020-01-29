import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
  let { title, description } = props;
  
  return (
    <div>
      <span>{title}</span>
      <p>{description}</p>
    </div>
  );

}

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Stats;
