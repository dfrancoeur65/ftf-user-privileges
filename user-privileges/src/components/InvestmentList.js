import React from 'react';
import Humanize from 'humanize-plus';
import {Dropdown} from 'semantic-ui-react';



class InvestmentList extends React.Component{
  state = {
    columns:['Investment','Offering','Amount','Investment Date','Investment Status','Actions'],
    investmentsOpenForEditing: [],
    statuses:[
      {text:"Received"},
      {text:"Invested"},
      {text:"Not Received"},
    ],
  }
  componentDidMount(){
    this.props.onMount();
  }

handleCancelledInvestment = (investment) =>{
  investment.status = 'cancelled';
  this.props.editInvestment(investment);
}


  toDollar = (dollar) =>{
    let d = new Number(dollar)
    return(
      d.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    )
  };


  prettyDates = (date) =>{
    let d = new Date(date);

    return(
        d.toLocaleDateString()
    )

  };

  render(){
    return  (
        <div>
        <h2>My Investments</h2>
        <table id='investmentTable' className = 'ui celled table'>
        <thead>
        <tr>
        {
          this.state.columns.map((header, index) => (
            <th key={index}>
            {header}
            </th>
          ))
        }
        </tr>

        </thead>
        <tbody>
        {
            this.props.investments.map((investment,index) =>
                (
                  <tr
                  key={index+1}
                  >
                  <td>
                  {index+1}
                  </td>
                  <td>
                  {investment.offering.title}
                  </td>
                  <td>
                  {this.toDollar(investment.amount)}
                  </td>
                  <td>
                  {this.prettyDates(investment.created_at)}
                  </td>
                  <td style={{color:investment.status === 'cancelled' ? "red":"green"}}>
                  {investment.status}
                  </td>
                  <td>
                  <div className='ui button' onClick = {()=>this.handleCancelledInvestment(investment)}>Cancel</div>
                  </td>
                  </tr>
                )
                )
        }
        </tbody>
        </table>

        </div>
      );
  }

}

export default InvestmentList;
