import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescription extends Component {
  render() {
    const { handleChange, description } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input
          onChange={ handleChange }
          value={ description }
          id="description"
          type="text"
          name="description"
        />
      </label>
    );
  }
}

InputDescription.propTypes = {
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default InputDescription;
