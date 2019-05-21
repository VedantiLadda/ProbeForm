import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from 'actions';
import Root from 'router';

function mapStateToProps(store) {
  return {
    login: store.login
  };
}
function mapDispatchToProps(dispatcher) {
  return bindActionCreators(allActions, dispatcher);
}

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

export default Main;
