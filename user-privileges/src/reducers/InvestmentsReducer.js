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
    case 'SET_INVESTMENTS':{
      investments=action.investments;break;
    }
    case 'UPDATE_INVESTMENT':{
      let updatedInvestment = action.investment;
      const investmentIndex = state.findIndex(
        (i) => i.id === action.investment.id
      );
      Client.updateInvestment(updatedInvestment);
      investments = [
        ...state.slice(0,investmentIndex),
        updatedInvestment,
        ...state.slice(investmentIndex+1,state.length),
      ];
    }; break;
    default: return state;
  }
  return investments;
}

export default InvestmentsReducer;
