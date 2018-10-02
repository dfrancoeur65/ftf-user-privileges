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
        case 'SET_INITIAL_STATE':newUsers = action.users; break;
        case 'ADD_NEW_USER':{
            const newUser = action.user;
            Client.addUser(newUser);
            newUsers = [...state,newUser]
        }; break;
        default: return state;
      }
      return newUsers;
    }

export default UsersReducer;
