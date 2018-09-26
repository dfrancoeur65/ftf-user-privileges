import React from 'react';
import {Route, NavLink} from 'react-router-dom';


const TopBar = () => (
  <div
    className = 'ui huge top attached fluid secondary menu'
    >
    <div className='ui item'/>
    <Route exact path = '/' component={()=>(
      <div>

      <div className = 'ui item'>
        <h1
          className = 'ui blue header'
          style={ {marginTop:'10px'}}
        >Welcome to Fund That Flip
        </h1>
      </div>
      <div className='ui secondary vertical menu'>
      <NavLink
        className = 'ui item'
        to='/admin-dashboard'
        >Admin Rights Dashboard
      </NavLink>
      <NavLink
        className = 'ui item'
        to='/open-deals'
        >Invest
      </NavLink>
      <NavLink
        className = 'ui item'
        to ='/investor-dashboard'
        >Investor Dashboard</NavLink>
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
        <Route
        path='/open-deals'
        component={()=>(
          <h1
          className = 'ui blue header'
          style={{ marginTop:'10px'}}
          >
          Offerings
          </h1>
        )}
        >

        </Route>
  </div>
);

export default TopBar;
