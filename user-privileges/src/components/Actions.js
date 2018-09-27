const SET_INITIAL_STATE = 'SET_INITIAL_STATE'
function setInitialUsers(users){
  return {
    type:SET_INITIAL_STATE,
    users: users,
  }
}

const SET_AVAILABLE_OFFERINGS= 'SET_AVAILABLE_OFFERINGS';
function setAvailableOfferings(offerings){
  return {
    type: SET_AVAILABLE_OFFERINGS,
    availableOfferings: offerings,
  }
}

const ADD_NEW_INVESTMENT = 'ADD_NEW_INVESTMENT';
function addNewInvestment(investment){
  return {
    type:ADD_NEW_INVESTMENT,
    investment:investment,
  }
}

const SET_INVESTMENTS = 'SET_INVESTMENTS';
function setInvestments(investments){
  return{
    type:SET_INVESTMENTS,
    investments:investments,
  };
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
  setAvailableOfferings,
  addNewInvestment,
  setInvestments,
}

export default Action;
