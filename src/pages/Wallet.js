import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field">{ `${0}` }</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="name-id">
            Valor
            <input id="name-id" type="text" name="name" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" type="text" name="name" />
          </label>
          <label htmlFor="select-moeda">
            Moeda
            <select id="select-moeda">
              <option>{ ' ' }</option>
            </select>
          </label>
          <label htmlFor="select-payment">
            Método de pagamento
            <select id="select-payment">
              <option>Dinheiro</option>
              <option>Cartão de Crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="select-tag">
            Tag
            <select id="select-tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
