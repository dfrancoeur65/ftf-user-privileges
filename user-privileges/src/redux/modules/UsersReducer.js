import Client from '../../components/Client';

const UsersReducer = (
  state=[],
  action
) => {
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
        case 'SET_INITIAL_USERS':newUsers = action.users; break;
        case 'ADD_NEW_USER':{
            const newUser = action.user;
            Client.addUser(newUser);
            newUsers = [...state,newUser]
        }; break;
        default: return state;
      }
      return newUsers;
    }

    const SET_INITIAL_USERS = 'SET_INITIAL_USERS'
    export function setInitialUsers(users){
      return {
        type:SET_INITIAL_USERS,
        users: users,
      }
    }
    const UPDATE_USER = 'UPDATE_USER';
    export function updateUser(id,role){
      return {
        type:UPDATE_USER,
        role:role,
        id: id,
      };
    }

    const ADD_NEW_USER = 'ADD_NEW_USER';
    export function addNewUser(newUser){
      return {
        type:ADD_NEW_USER,
        user: newUser,
      }
    }

export default UsersReducer;
