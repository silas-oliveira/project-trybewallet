import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  render() {
    const { handleChange, valor } = this.props;
    return (
      <label htmlFor="name-id">
        Valor
        <input
          onChange={ handleChange }
          value={ valor }
          id="name-id"
          type="number"
          name="valor"
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  handleChange: PropTypes.func.isRequired,
  valor: PropTypes.number.isRequired,
};

export default InputNumber;
