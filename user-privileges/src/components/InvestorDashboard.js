import React from 'react';


class InvestmentDashboard extends React.Component{
  state = {
    columns:['Investment ID','Offering','Amount','Investment Date'],
    investments:[{
      id: 2,
      offering_id:5,
      offering:{
        title:'300 Westmont',
        state:'Connecticut',
      },
      amount:25000,
      created_at: new Date(2018,9,23),
    },
  ]}
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
          this.state.investments.map((investment) => (
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
            {investment.amount}
            </td>
            <td>
            {investment.created_at.toLocaleDateString()}
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

export default InvestmentDashboard;
