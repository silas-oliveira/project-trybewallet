import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpenseThank } from '../actions';
import Input from '../components/Input';
import InputDescription from '../components/InputDescription';
import SelectMoeda from '../components/SelectMoeda';
import SelectPayment from '../components/SelectPayment';
import SelectTag from '../components/SelectTag';
import Header from '../components/Header';

let IDCOTACOES = 0;

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      total: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateExpenses = this.calculateExpenses.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;

    if (expenses !== prevProps.expenses) {
      this.calculateExpenses();
    }
  }

  calculateExpenses() {
    const { expenses } = this.props;

    const calc = expenses.reduce((acc, current) => {
      acc += current.value * current.exchangeRates[current.currency].ask;
      return acc;
    }, 0);
    this.setState({
      total: Math.round(calc * 100) / 100,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSelect({ target }) {
    const { value } = target;

    this.setState({
      currency: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { getExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;

    const id = IDCOTACOES;

    getExpense({
      id,
      value,
      description,
      currency,
      method,
      tag,
    });

    IDCOTACOES += 1;
  }

  render() {
    const { userEmail } = this.props;
    const { value, description, currency, tag, method, total } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <Header total={ total } userEmail={ userEmail } />
        <Input handleChange={ this.handleChange } value={ value } />
        <InputDescription
          handleChange={ this.handleChange }
          description={ description }
        />
        <SelectMoeda handleChange={ this.handleSelect } currency={ currency } />
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
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
