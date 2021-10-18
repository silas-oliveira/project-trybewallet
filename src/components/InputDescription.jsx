import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDescription extends Component {
  render() {
    const { handleChange, descricao } = this.props;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          onChange={ handleChange }
          value={ descricao }
          id="descricao"
          type="text"
          name="descricao"
        />
      </label>
    );
  }
}

InputDescription.propTypes = {
  handleChange: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default InputDescription;
