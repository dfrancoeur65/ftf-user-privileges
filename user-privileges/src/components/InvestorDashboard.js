import {connect} from 'react-redux';
import Action from './Actions';
import Client from './Client';
import InvestmentList from './InvestmentList';


const mapDispatchToInvestmentListProps = (dispatch,props)=>(
  {
    onMount:() =>Client.getInvestments(
      (investments)=>(
        dispatch(
          Action.setInvestments(investments)
        )
      )
    ),
    editInvestment:(investment) => dispatch(
      Action.updateInvestment(investment)
    ),

  }
);

const mapStateToInvestmentListProps = (state)=>(
  {
    investments:state.investments,
  }
);

const InvestorDashboard = connect(
  mapStateToInvestmentListProps,
  mapDispatchToInvestmentListProps,
)(InvestmentList);



export default InvestorDashboard;
