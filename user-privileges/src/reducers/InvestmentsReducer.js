import Client from '../components/Client';

const InvestmentsReducer = (
  state=[],
  action
) =>{
  let investments;
  switch(action.type){
    case 'ADD_NEW_INVESTMENT':{
      const newInvestment = action.investment;
      Client.createInvestment(newInvestment);
      investments =[...state,newInvestment];
    }; break;
    case 'SET_INVESTMENTS':
    default: return state;
  }
  return investments;
}

export default InvestmentsReducer;
