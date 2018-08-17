import React, { Component } from 'react';

class UserList extends Component {

  handleChange = (id,role) =>{
    this.props.onCheckBoxChange(id,role)
    
  }


  render(){

    const headers = this.props.headers.map((header) => (
      <th key={header}>
        {header}
      </th>
    ));

    const data = this.props.users.map((u, handleChange)=>(
      <tr className = 'header' key={u.id}>
      <td>
    {u.id}
      </td>
        <td>
        {u.first_name}
        </td>
        <td>
        {u.last_name}
        </td>
        <td>
        <input type='checkbox' checked={u.admin ? true : false} onChange = { (e) => this.handleChange(u.id,'admin')}/>
        </td>
        <td>
        <input type='checkbox' checked={u.underwriter ? true : false} onChange = { (e) => this.handleChange(u.id,'underwriter')}/>

        </td>
        <td>
        <input type='checkbox' checked={u.sales ? true : false} onChange = { (e) => this.handleChange(u.id,'sales')}/>
        </td>
        <td>
        <input type='checkbox' checked={u.reviewer ? true : false} onChange = { (e) => this.handleChange(u.id,'reviewer')}/>
        </td>
      </tr>
    ));
    return(
        <table className = 'ui celled table'>
        <thead>
        <tr>
        {headers}
        </tr>

        </thead>
          <tbody>
          {data}
          </tbody>
        </table>
    );
  }
}


export default UserList;
