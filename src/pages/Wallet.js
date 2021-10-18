import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
import Input from '../components/Input';
import InputDescription from '../components/InputDescription';
import SelectMoeda from '../components/SelectMoeda';
import SelectPayment from '../components/SelectPayment';
import SelectTag from '../components/SelectTag';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { userEmail } = this.props;
    const { valor, descricao, moeda, tag, pagamento } = this.state;
    return (
      <form>
        <p data-testid="email-field">{userEmail}</p>
        <p data-testid="total-field">{`${0}`}</p>
        <p data-testid="header-currency-field">BRL</p>
        <Input handleChange={ this.handleChange } valor={ valor } />
        <InputDescription
          handleChange={ this.handleChange }
          descricao={ descricao }
        />
        <SelectMoeda handleChange={ this.handleChange } moeda={ moeda } />
        <SelectPayment handleChange={ this.handleChange } pagamento={ pagamento } />
        <SelectTag handleChange={ this.handleChange } tag={ tag } />
      </form>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
