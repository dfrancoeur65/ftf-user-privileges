import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "./semantic-dist/semantic.min.css";
import UserList from './components/UserList';

class App extends Component {
  state = {
    activeRoleType: 'admin',
    roles: ['admin','reviewer','sales','underwriter'],
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
  render() {
    const users = this.state.users;

    return (
      <div className = 'ui container'>
        <h1>User Privileges</h1>
        <div className = 'ui grid'>
          <div className = 'three column row'>
            <div className = 'eight wide column'>
            <UserList
              users = {users}
              />
            </div>
            <div className = 'seven wide column'>
            <h2>Privilege Manager</h2>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
