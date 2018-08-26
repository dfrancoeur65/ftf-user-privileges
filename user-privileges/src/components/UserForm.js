
import Form from './Form';
import { connect } from 'react-redux';
import Action from './Actions'



const mapDispatchToFormProps = (dispatch, props) =>(
  {
    onFormSubmit: (user) =>(
      dispatch(Action.addNewUser(user))
    ),
    onFormSwitch: () => props.onFormSwitch(),
  }
);

const mapStateToFormProps = (state, props) =>(
  {
    formOpen:props.formOpen,
    users:state.users,
  }
);

const UserForm = connect(
  mapStateToFormProps,
  mapDispatchToFormProps,
)(Form)

export default UserForm;
