import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-in.component.scss';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in' onSubmit={this.handleSubmit}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            type='email'
            name='email'
            label='email'
            value={email}
            required
            handleChange={this.handleChange}
          />
          <label>Email</label>
          <FormInput
            type='password'
            name='password'
            label='password'
            value={password}
            required
            handleChange={this.handleChange}
          />
          <label>Password</label>
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
