import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from './action';
import LoginCard from './components/LoginCard';

const Login = props => <LoginCard {...props} />;

function mapStateToProps(store) {
  return {
    login: store.login
  };
}
function mapDispatchToProps(dispatcher) {
  return bindActionCreators(allActions, dispatcher);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
