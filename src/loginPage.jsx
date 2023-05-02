import React, { Component } from 'react';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginSuccessful: false,
      username: '',
      password: '',
      loginError: '',
      loginSuccess: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <div>
          <p>Login Page</p>
        </div>
        <div>
          {this.state.isLoginSuccessful === false ? (
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                <input></input>
                <input></input>
              </div>
              <div>
                <button></button>
              </div>
              <div>error</div>
            </form>
          ) : (
            <div>
              <p>{this.state.loginSuccess}</p>{' '}
            </div>
          )}
        </div>
      </div>
    );
  }
}
