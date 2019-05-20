import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './features/login/components/LoginCard';
import Dashboard from './features/dashboard';

// const Router = () => {
//     return (
//         <BrowserRouter>
//             <Route exact path='/' component={Login}/>
//             <Route exact path='/dashboard' component={Dashboard}/>
//         </BrowserRouter>
//     )
// }
// export default Router;

export default class Router extends React.Component {
  componentDidMount() {}

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
