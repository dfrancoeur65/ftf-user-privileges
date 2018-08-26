import React from 'react';
import {Route, NavLink} from 'react-router-dom';


const TopBar = () => (
  <div
    className = 'ui huge top attached fluid secondary menu'
    >
    <div className='item'/>
    <Route exact path = '/' component={()=>(
      <div>

      <div className = 'item'>
        <h1
          className = 'ui blue header'
          style={ {marginTop:'10px'}}
        >Welcome to Fund That Flip
        </h1>
      </div>
      <div className='center menu'>
      <NavLink
        className = 'ui item'
        to='/admin-dashboard'
        >Admin Rights Dashboard
      </NavLink>
      </div>
      </div>
      )}
      />
      <Route
        path= '/admin-dashboard'
        component={()=>(
          <h1
          className = 'ui blue header'
          style={{ marginTop:'10px'}}
          >
          Admin Rights Dashboard
          </h1>
        )}
        />
    <div className='right menu'>
      <h2 className='ui item'>Fund That Flip</h2>
    </div>
  </div>
);

export default TopBar;
