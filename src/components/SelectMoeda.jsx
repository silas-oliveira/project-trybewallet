import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectMoeda extends Component {
  render() {
    const { handleChange, currency, currencies } = this.props;
    return (
      <label htmlFor="select-currency">
        Moeda
        <select
          name="currency"
          onChange={ handleChange }
          value={ currency }
          id="select-currency"
        >
          {currencies.map((element, index) => (
            <option key={ index } value={ element }>
              {element}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

SelectMoeda.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(SelectMoeda);
