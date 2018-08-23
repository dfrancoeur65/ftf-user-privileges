
import Form from './Form';
import { connect } from 'react-redux';
import Action from './Actions'



const mapDispatchToFormProps = (dispatch) =>(
  {
    onFormSubmit: (user) =>(
      dispatch(Action.addNewUser(user))
    ),
  }
);

const mapStateToFormProps = (state) =>(
  {
    users:state.users,
  }
);

const UserForm = connect(
  mapStateToFormProps,
  mapDispatchToFormProps,
)(Form)

export default UserForm;
