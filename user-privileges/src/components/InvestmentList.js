import React from 'react';
import Humanize from 'humanize-plus';

class InvestmentList extends React.Component{
  state = {
    columns:['Investment ID','Offering','Amount','Investment Date'],
  }
  componentDidMount(){
    this.props.onMount();
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
          this.props.investments.map((investment) => (
            <tr
              key={investment.id}
            >
            <td>
            {investment.id}
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
            </tr>
          ))
        }
        </tbody>
        </table>

        </div>
      );
  }

}

export default InvestmentList;
