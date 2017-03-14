import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <div className="col-xs-6 col-xs-offset-3">
        <h1 className="text-center">Sign Up!</h1>
        <form>
          <fieldset className="form-group">
            <label>Email:</label>
            <input className="form-control" {...email} />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input className="form-control" type="password" {...password} />
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password:</label>
            <input className="form-control" type="password" {...passwordConfirm} />
          </fieldset>

          <button action="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
})(Signup);