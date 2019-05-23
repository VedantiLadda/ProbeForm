import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'sharedComponents/Modal';
import Navbar from 'sharedComponents/Navbar';
import * as allActions from './action';
import ProfileCard from './components/ProfileCard';
import CardsContainer from './components/CardsContainer';
import ModalViews from '../modalViews';
import 'main.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    props.getPermissions(props.login.type);
    props.getAllPermissions();
    props.getAllTypes();
  }

  componentDidMount() {
    window.addEventListener('click', this.setModal);
  }

  setModal = e => {
    const { setModal } = this.props;
    if (e.target.className === 'modal') {
      setModal('');
    }
  };

  render() {
    console.log(this.props);
    const { login, dashboard, handleLogout } = this.props;
    const permission = dashboard.modal;
    let modal = <></>;
    if (dashboard.modal) {
      modal = <Modal dashboard={dashboard}>{ModalViews[permission]}</Modal>;
    }
    return (
      <>
        <Navbar type={login.type} handleLogout={handleLogout} />
        <div id="bodyRow" className="row block">
          <ProfileCard {...this.props} />
          <CardsContainer {...this.props} />
        </div>
        {modal}
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    login: store.login,
    dashboard: store.dashboard
  };
}
function mapDispatchToProps(dispatcher) {
  return bindActionCreators(allActions, dispatcher);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
