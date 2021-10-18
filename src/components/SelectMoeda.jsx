import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectMoeda extends Component {
  render() {
    const { handleChange, moeda, currencies } = this.props;
    return (
      <label htmlFor="select-moeda">
        Moeda
        <select
          name="moeda"
          onChange={ handleChange }
          value={ moeda }
          id="select-moeda"
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
  moeda: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(SelectMoeda);
