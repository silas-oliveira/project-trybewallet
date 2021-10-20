import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpenseThank } from '../actions';
import Input from '../components/Input';
import InputDescription from '../components/InputDescription';
import SelectMoeda from '../components/SelectMoeda';
import SelectPayment from '../components/SelectPayment';
import SelectTag from '../components/SelectTag';

let IDCOTACOES = 0;

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { getExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;

    IDCOTACOES += 1;
    const id = IDCOTACOES;

    getExpense({
      id,
      value,
      description,
      currency,
      method,
      tag,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { value, description, currency, tag, method } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <p data-testid="email-field">{userEmail}</p>
        <p data-testid="total-field">{`${0}`}</p>
        <p data-testid="header-currency-field">BRL</p>
        <Input handleChange={ this.handleChange } value={ value } />
        <InputDescription
          handleChange={ this.handleChange }
          description={ description }
        />
        <SelectMoeda handleChange={ this.handleChange } currency={ currency } />
        <SelectPayment handleChange={ this.handleChange } method={ method } />
        <SelectTag handleChange={ this.handleChange } tag={ tag } />
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  getExpense: (expense) => dispatch(addExpenseThank(expense)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  getExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
