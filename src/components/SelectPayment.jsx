import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends Component {
  render() {
    const { handleChange, method } = this.props;
    return (
      <label htmlFor="select-method">
        Método de pagamento
        <select
          onChange={ handleChange }
          value={ method }
          name="method"
          id="select-method"
        >
          <option>Dinheiro</option>
          <option>Cartão de Crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectPayment.propTypes = {
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectPayment;
