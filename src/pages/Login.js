import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      button: true,
      password: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

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

  render() {
    const { button, password, email } = this.state;
    return (
      <form>
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
          type="button"
          onClick={ this.handleChange }
          disabled={ button }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;

// const validEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// https://www.w3resource.com/javascript/form/email-validation.php
