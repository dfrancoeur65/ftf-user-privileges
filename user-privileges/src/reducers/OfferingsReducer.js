
const OfferingsReducer = (
  state = [],
  action
)=>{
  let allOfferings;
  switch(action.type){
      case 'SET_AVAILABLE_OFFERINGS':allOfferings = action.availableOfferings; break;
      default: return state;
    }
    return allOfferings;
  }


export default OfferingsReducer;
