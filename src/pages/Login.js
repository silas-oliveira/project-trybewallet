import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userEmail } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      button: true,
      password: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/ referência Regex;

  handleChange({ target }) {
    const minCaracterButton = 4;
    const texEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    const { password, email } = this.state;
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    if (password.length > minCaracterButton && texEmail(email) === true) {
      this.setState({
        button: false,
      });
    } else if (password.length < minCaracterButton && texEmail(email) === false) {
      this.setState({
        button: true,
      });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { setEmail, history } = this.props;
    const { email } = this.state;

    setEmail(email);

    console.log('cliquei');

    return history.push('/carteira');
  }

  render() {
    const { button, password, email } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <h2>Realize seu login</h2>
        <label htmlFor="email">
          E-mail:
          <input
            name="email"
            type="text"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          name="button"
          type="submit"
          disabled={ button }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(userEmail(email)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Object).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// const validEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// https://www.w3resource.com/javascript/form/email-validation.php
