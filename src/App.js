import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/HomePage/HomePage';
import Login from './components/views/Login/Login';
import Table from './components/views/Table/Table';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';


function App () {
  return(
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/table'} component={Table} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
