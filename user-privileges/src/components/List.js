import React, { Component } from 'react';

const List = (props)=> (
  <div>
  <h2>Our List</h2>
  <table id='userTable' className = 'ui celled table'>
  <thead>
  <tr>
  {
    props.columns.map((header) => (
      <th key={header}>
      {header}
      </th>
    ))
  }
  </tr>

  </thead>
  <tbody>
  {
    props.users.map((u, handleChange) => (
      <tr key={u.id}>
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
      <input type='checkbox' checked={u.admin ? true : false} onChange = { () => props.onUserUpdate(u.id,'admin')}/>
      </td>
      <td>
      <input type='checkbox' name='underwriter' checked={u.underwriter ? true : false} onChange = { () => props.onUserUpdate(u.id,'underwriter')}/>
      </td>
      <td>
      <input type='checkbox' checked={u.sales ? true : false} onChange = { () => props.onUserUpdate(u.id,'sales')}/>
      </td>
      <td>
      <input type='checkbox' checked={u.reviewer ? true : false} onChange = { () => props.onUserUpdate(u.id,'reviewer')}/>
      </td>
      </tr>
    ))
  }
  </tbody>
  </table>

  </div>
);

export default List;
