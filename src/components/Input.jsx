import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="name-id">
        Valor
        <input
          onChange={ handleChange }
          value={ value }
          id="name-id"
          type="number"
          name="value"
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default InputNumber;
