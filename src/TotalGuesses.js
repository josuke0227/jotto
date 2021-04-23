import React from "react";
import PropTypes from "prop-types";

const TotalGuesses = ({ guessCount }) => {
  return <h4 data-test="component-total-guess">{guessCount}</h4>;
};

TotalGuesses.propTypes = {
  guessCount: PropTypes.number.isRequired,
};

export default TotalGuesses;
