import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { userEmail, currencies } = this.props;
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
              { currencies.map((element, index) => (
                <option key={ index } value={ element }>{element}</option>
              )) }
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
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
