import Client from '../../components/Client';

const InvestmentsReducer = (
  state=[],
  action
) =>{
  switch(action.type){
    case 'ADD_NEW_INVESTMENT':{
      const newInvestment = action.investment;
      Client.createInvestment(newInvestment);
      return [...state,newInvestment];
    }; break;
    case 'SET_INVESTMENTS':{
      return action.investments;
    }; break;
    case 'UPDATE_INVESTMENT':{
      let updatedInvestment = action.investment;
      const investmentIndex = state.findIndex(
        (i) => i.id === updatedInvestment.id
      );
      Client.updateInvestment(updatedInvestment);
      return [
        ...state.slice(0,investmentIndex),
        updatedInvestment,
        ...state.slice(investmentIndex+1,state.length),
      ];
    }; break;
    default: return state;
  }
}

const UPDATE_INVESTMENT = 'UPDATE_INVESTMENT';
export function updateInvestment(investment){
  return{
    type:UPDATE_INVESTMENT,
    investment:investment,
  }
}
const ADD_NEW_INVESTMENT = 'ADD_NEW_INVESTMENT';
export function addNewInvestment(investment){
  return {
    type:ADD_NEW_INVESTMENT,
    investment:investment,
  }
}
const SET_INVESTMENTS = 'SET_INVESTMENTS';
export function setInvestments(investments){
  return{
    type:SET_INVESTMENTS,
    investments:investments,
  };
}


export default InvestmentsReducer;
