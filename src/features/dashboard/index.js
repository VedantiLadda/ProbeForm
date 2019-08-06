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
import { sendRoleInfo } from '../modalViews/createRole';
import { sendQuestionInfo } from '../modalViews/addQuestion';
import { sendUserInfo } from '../modalViews/addUsers';

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

  clickHandler = permission => {
    switch (permission) {
      case 'create_role':
        this.onCreateRole();
        break;
      case 'add_questions':
        this.onAddQuestion();
        break;
      case 'add_users':
      case 'add_interviewer':
      case 'add_hr':
        this.onAddUser();
        break;
      default:
        console.log(permission);
    }
  };

  onAddQuestion = () => {
    const question = sendQuestionInfo();
    // console.log(question);
    const { options } = question;
    const questionData = {
      text: question.questionText,
      op1: options.op1,
      op2: options.op2,
      op3: options.op3,
      op4: options.op4,
      op5: options.op5,
      answer: question.answer,
      careerStage: options.careerStage,
      technology: options.technology,
      difficulty: options.difficulty
    };
    console.log(questionData);
    this.props.addQuestion(questionData);
  };

  onAddUser = () => {
    const user = sendUserInfo();
    console.log(user);
    this.props.addUser(user);
  };

  onCreateRole = () => {
    const permissions = this.props.dashboard.allPermissions;
    const data = sendRoleInfo(permissions);
    this.props.createRole(data);
  };

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
      modal = (
        <Modal handleClick={this.clickHandler.bind(this, permission)} dashboard={dashboard}>
          {ModalViews(permission, this.props)}
        </Modal>
      );
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
