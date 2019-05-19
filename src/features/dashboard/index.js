import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from './action';
import Navbar from '../../sharedComponents/Navbar';
import ProfileCard from './components/ProfileCard';
import CardsContainer from './components/CardsContainer';
import '../../main.css';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    props.getPermissions(props.login.type);
  }

  render() {
    const { login } = this.props;
    return (
      <>
        <Navbar type={login.type} />
        <div id="bodyRow" className="row block">
          <ProfileCard {...this.props} />
          <CardsContainer {...this.props} />
        </div>
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    login: store.login,
    dashboard: store.dashboard,
  };
}
function mapDispatchToProps(dispatcher) {
  return bindActionCreators(allActions, dispatcher);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
