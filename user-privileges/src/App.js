import React, { Component } from 'react';
import { Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import './App.css';
import "./semantic-dist/semantic.min.css";
import UserList from './components/UserList';
import Client from './components/Client';
import UserForm from './components/UserForm';

const reducer = combineReducers(
  {
    columns: columnsReducer,
    users: usersReducer,
  }
)

function columnsReducer(
  state = ['Id','First Name','Last Name', 'Admin','Underwriter','Sales','Reviewer','Dev'],
  action){
    switch(action.type){
      default: return state;
    }
  }

function usersReducer(
  state = [],
  action
){

  let newUsers;
  switch(action.type){
      case 'UPDATE_USER':{
        let updatedUser;
        const userIndex = state.findIndex(
          (u) => u.id === action.id
        );
        const oldUser = state[userIndex];
        const role = action.role;
        updatedUser = oldUser;
        updatedUser[role] = (oldUser[role] = !oldUser[role])
        Client.updateUser(updatedUser.id,updatedUser);
        newUsers = [
              ...state.slice(0,userIndex),
              updatedUser,
              ...state.slice(userIndex+1,state.length),
            ];
      }; break;
      case 'SET_INITIAL_STATE':newUsers = action.users; break;
      case 'ADD_NEW_USER':{
          const newUser = action.user;
          Client.addUser(action.user);
          newUsers = [...state,newUser]
      }; break;
      default: return state;
    }
    return newUsers;
  }



const store = createStore(reducer);


class App extends Component {

  render() {
    return (
      <div className = 'ui container'>
        <h1>User</h1>
        <div className = 'ui grid'>
          <div className = 'eight wide column'>
            <UserList/>
          </div>

          <div className = 'eight wide column'>
            <div className = 'ui three column grid'>
              <div className = 'twelve wide centered column'>
              <UserForm />
              </div>
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
