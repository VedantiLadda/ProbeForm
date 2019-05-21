import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './features/login';
import Dashboard from './features/dashboard';

export default class Router extends React.Component {
  componentDidMount() {
    const { handleLogin } = this.props;
    const session = JSON.parse(sessionStorage.getItem('user'));
    if (session) handleLogin(session.email, session.password);
  }

  render() {
    const { login } = this.props;
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={() => {
            if (!login.email) {
              return <Login {...this.props} />;
            }
            return <Redirect to={{ pathname: '/dashboard' }} />;
          }}
        />
        <Route
          exact
          path="/dashboard"
          render={() => {
            if (login.email) {
              return <Dashboard {...this.props} />;
            }
            return <Redirect to={{ pathname: '/' }} />;
          }}
        />
      </BrowserRouter>
    );
  }
}
