const SET_INITIAL_STATE = 'SET_INITIAL_STATE'
function setInitialUsers(users){
  return {
    type:SET_INITIAL_STATE,
    users: users,
  }
}

const UPDATE_USER = 'UPDATE_USER';
function updateUser(id,role){
  return {
    type:UPDATE_USER,
    role:role,
    id: id,
  };
}

const ADD_NEW_USER = 'ADD_NEW_USER';
function addNewUser(newUser){
  return {
    type:ADD_NEW_USER,
    user: newUser,
  }
}

const Action = {
  setInitialUsers,
  updateUser,
  addNewUser,
}

export default Action;
