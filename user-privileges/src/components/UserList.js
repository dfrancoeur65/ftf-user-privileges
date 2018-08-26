
import List from './List';
import {connect } from 'react-redux';
import Action from './Actions';
import Client from './Client';



const mapStateToListProps = (state) =>(
  {
    columns:state.columns,
    users:state.users,
  }
);

const mapDispatchToListProps = (dispatch, props) =>(
  {
    onUserUpdate: (id,role) => (
      dispatch(Action.updateUser(id,role))
    ),
    onMount:()=>Client.getUsers(
      (users)=>(
        dispatch(
          Action.setInitialUsers(users)
        )
      )
    ),
    onRowClick: (user) =>props.onRowClick(user),

    // onMount:(users)=>(
    //   dispatch(Action.setInitialUsers(users))
    // ),
    dispatch: dispatch,
  }
);


const UserList = connect(
  mapStateToListProps,
  mapDispatchToListProps,
  //merge
)(List)

export default UserList;
