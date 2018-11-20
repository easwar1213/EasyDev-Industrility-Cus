import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../containers/_layout';
import MainWrapper from './MainWrapper';

import LogIn from '../containers/log_in';
import Assets from '../containers/assets';

import Devices from '../containers/devices';
import DefaultDashboard from '../containers/dashboards';

import ShowDeviceTab from '../containers/devices/components/ShowDeviceTab';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path='/' component={LogIn}/>
        <Route exact path='/log_in' component={LogIn}/>
        <Route path='/' component={wrappedRoutes}/>
      </Switch>
    </main>
  </MainWrapper>
);

const wrappedRoutes = () => (
  <div>
    <Layout/>
    <div className='container__wrap'>
      <Route path='/dashboard' component={DefaultDashboard}/>
      <Route path='/assets' component={Assets}/>
      <Route path='/devices' component={Devices}/>
      <Route path='/ShowDeviceTab' component={ShowDeviceTab}/>
    </div>
  </div>
);

export default Router;
