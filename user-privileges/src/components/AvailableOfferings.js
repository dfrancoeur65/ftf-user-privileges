import {connect} from 'react-redux';
import Action from './Actions';
import Client from './Client';
import OfferingCards from './OfferingCards';

const mapDispatchToOfferingCardsProps = (dispatch, props) =>(
  {
  onMount:()=>Client.getOfferings(
    (offerings)=>(
      dispatch(
        Action.setAvailableOfferings(offerings)
      )
    )
  ),
  onInvestmentFormSubmit: (investment) =>(
    dispatch(Action.addNewInvestment(investment))
  )
}
);

const mapStateToOfferingCardsProps = (state)=>(
  {
      availableOfferings:state.availableOfferings,
  }
)

const AvailableOfferings = connect(
  mapStateToOfferingCardsProps,
  mapDispatchToOfferingCardsProps,
)(OfferingCards);

export default AvailableOfferings;
