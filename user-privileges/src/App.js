import React, { Component } from 'react';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import {Route} from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import './App.css';
import "./semantic-dist/semantic.min.css";
import TopBar from './components/TopBar'
import Board from './components/Board';
import AvailableOfferings from './components/AvailableOfferings';
import Reducer from './reducers/Reducer';
import InvestorDashboard from './components/InvestorDashboard';





const userStore = createStore(Reducer);

class App extends Component {

  render() {
    return (
      <div className = 'ui container'>
        <div className = 'ui grid'>
           <TopBar />
          <div className='spacer row'/>
          <div className='row'>
            <Route path='/admin-dashboard' component={AdminDashboard}/>
            <Route path = '/test' component = {Board}/>
            <Route path='/open-deals' component={AvailableOfferings}/>
            <Route path='/investor-dashboard' component={InvestorDashboard}/>
          </div>
        </div>
      </div>

    );
  }
}


const WrappedApp = () => (
  <Provider store = {userStore}>
    <App />
  </Provider>
);

export default WrappedApp;
