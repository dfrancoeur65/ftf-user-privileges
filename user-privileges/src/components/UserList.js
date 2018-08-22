import React, { Component } from 'react';
import List from './List';
import { Provider, connect } from 'react-redux';



const mapStateToListProps = (state) =>(
  {
    columns:state.columns,
    users:state.users,
  }
);

const mapDispatchToListProps = (dispatch) =>(
  {
    onUserUpdate: (id,role) => (
      dispatch(updateUser(id,role))
    ),
    onMount:(users)=>(
      dispatch(getInitialUsers(users))
    ),
    dispatch: dispatch,
  }
);
function updateUser(id,role){
  return {
    type:role,
    id: id,
  };
}

const GET_INITIAL_STATE = 'GET_INITIAL_STATE'
function getInitialUsers(users){
  return {
    type:GET_INITIAL_STATE,
    users: users,
  }
}


const UserList = connect(
  mapStateToListProps,
  mapDispatchToListProps,
  //merge
)(List)

export default UserList;
