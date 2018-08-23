
import List from './List';
import {connect } from 'react-redux';
import Action from './Actions';



const mapStateToListProps = (state) =>(
  {
    columns:state.columns,
    users:state.users,
  }
);

const mapDispatchToListProps = (dispatch) =>(
  {
    onUserUpdate: (id,role) => (
      dispatch(Action.updateUser(id,role))
    ),
    onMount:(users)=>(
      dispatch(Action.setInitialUsers(users))
    ),
    dispatch: dispatch,
  }
);



const UserList = connect(
  mapStateToListProps,
  mapDispatchToListProps,
)(List)

export default UserList;
