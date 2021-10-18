import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectPayment extends Component {
  render() {
    const { handleChange, pagamento } = this.props;
    return (
      <label htmlFor="select-payment">
        Método de pagamento
        <select
          onChange={ handleChange }
          value={ pagamento }
          name="pagamento"
          id="select-payment"
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
  pagamento: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectPayment;
