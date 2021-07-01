import React from 'react';
import PropTypes from 'prop-types';

const Prompt = ({plainText, highlighter = ``}) => {
  return <div className="prompt">?
    <div className="prompt__text">
      <span className="prompt__highlighter">{highlighter}</span>
      <span>{plainText}</span>
    </div>
  </div>;
};

Prompt.propTypes = {
  plainText: PropTypes.string.isRequired,
  highlighter: PropTypes.string
};

export default Prompt;
