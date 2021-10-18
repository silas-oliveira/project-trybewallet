import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectTag extends Component {
  render() {
    const { handleChange, tag } = this.props;
    return (
      <label htmlFor="select-tag">
        Tag
        <select
          onChange={ handleChange }
          name="tag"
          value={ tag }
          id="select-tag"
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tag: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectTag;
