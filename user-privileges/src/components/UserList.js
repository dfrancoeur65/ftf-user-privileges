import React, { Component } from 'react';

class UserList extends Component {
  render(){
    const keys = Object.keys(this.props.users[0]);
    const headers = keys.map((key) => (
      <th id={key}>
        {key}
      </th>
    ));



    const data = this.props.users.map((user, checkbox)=>(
      <tr className = 'header' key={user.id}>
        {Object.values(user).map((column)=>(
          (typeof column === "boolean") ?  <td><div className='ui checked checkbox'><input type='checkbox' />  </div></td> : <td>{column} </td>
        ))}
      </tr>
    ));
    return(
        <table className = 'ui celled table'>
          <tr>
          {headers}
          </tr>
          <tbody>
          {data}
          </tbody>
        </table>
    );
  }
}


export default UserList;
