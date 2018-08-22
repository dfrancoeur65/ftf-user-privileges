import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {createStore, combineReducers } from 'redux';
import './App.css';
import "./semantic-dist/semantic.min.css";
import UserList from './components/UserList';


function reducer(state = {
  columns: ['Id','First Name','Last Name', 'Admin','Underwriter','Sales','Reviewer'],
  users:[
    {
      id: 1234,
      first_name: 'Daniel',
      last_name: 'Francoeur',
      admin: true,
      underwriter:false,
      sales: false,
      reviewer:true,
    },
    {
      id: 2234,
      first_name: 'Matt',
      last_name: 'Rodak',
      admin:true,
      underwriter:false,
      sales:true,
      reviewer:false,
    },
  ],
} , action
){
  const userIndex = state.users.findIndex(
    (u)=>u.id === action.id
  );
  const oldUser = state.users[userIndex];
  let updatedUser;
  switch(action.type){
      case 'admin': updatedUser = Object.assign({admin: oldUser.admin = !oldUser.admin},oldUser);break;
      case 'underwriter': updatedUser = Object.assign({admin: oldUser.underwriter = !oldUser.underwriter},oldUser); break;
      case 'sales': updatedUser = Object.assign({admin: oldUser.sales = !oldUser.sales},oldUser); break;
      case 'reviewer':updatedUser = Object.assign({admin: oldUser.reviewer = !oldUser.reviewer},oldUser) ; break;
      case 'GET_INITIAL_STATE':{
        const newUsers = action.users;
        return ({
          columns:state.columns,
          users:[...newUsers],
        })
      };
      default: return state;
    }
    return ({
      columns:state.columns,
      users: [
        ...state.users.slice(0,userIndex),
        updatedUser,
        ...state.users.slice(userIndex+1,state.users.length),
      ]
    });
  }



const store = createStore(reducer);







class App extends Component {

  render() {
    return (
      <div className = 'ui container'>
        <h1>User</h1>
        <div className = 'ui grid'>
          <div className = 'three column row'>
            <div className = 'eight wide column'>
            <UserList/>
            </div>
            <div className = 'seven wide column'>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

const WrappedApp = () => (
  <Provider store = {store}>
    <App />
  </Provider>
);

export default WrappedApp;
