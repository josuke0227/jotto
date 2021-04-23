import React from "react";

import PropTypes from "prop-types";

const NewWrodButton = ({ display, resetAction }) => {
  if (display) {
    return (
      <button
        className="btn btn-primary"
        data-test="component-new-word-button"
        onClick={() => resetAction()}
      >
        New Word
      </button>
    );
  } else {
    return <div data-test="component-new-word-button" />;
  }
};

NewWrodButton.propTypes = {
  display: PropTypes.bool.isRequired,
  resetAction: PropTypes.func,
};

export default NewWrodButton;
