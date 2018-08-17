import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {createStore, combineReducers } from 'redux';
import './App.css';
import "./semantic-dist/semantic.min.css";
import UserList from './components/UserList';

class App extends Component {
  state = {
    activeRoleType: 'admin',
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
}

handleCheckboxChange = (id, role) =>{
  const userIndex = this.state.users.findIndex(
    (u)=>u.id === id
  );
  const oldUser = this.state.users[userIndex];
  let newUser;
  switch(role){
    case 'admin': newUser = Object.assign({admin: oldUser.admin = !oldUser.admin},oldUser);break;
    case 'underwriter': newUser = Object.assign({admin: oldUser.underwriter = !oldUser.underwriter},oldUser); break;
    case 'sales': newUser = Object.assign({admin: oldUser.sales = !oldUser.sales},oldUser); break;
    case 'reviewer':newUser = Object.assign({admin: oldUser.reviewer = !oldUser.reviewer},oldUser) ; break;
    default: console.log("not written yet")
  }
  this.setStateForUserChange(newUser,userIndex);
}


setStateForUserChange = (user, index) =>{
  this.setState({
    ...this.state,
    users:[
      ...this.state.users.slice(0,index),
      user,
      ...this.state.users.slice(index+1,this.state.users.length),
    ],
  }
  );
}


  render() {
    const users = this.state.users;
    const columns = this.state.columns;
    return (
      <div className = 'ui container'>
        <h1>User Privileges</h1>
        <div className = 'ui grid'>
          <div className = 'three column row'>
            <div className = 'eight wide column'>
            <UserList
              users = {users}
              onCheckBoxChange = {this.handleCheckboxChange}
              headers = {columns}
              />
            </div>
            <div className = 'seven wide column'>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
