import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';


import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/HomePage/HomePage';
import Login from './components/views/Login/Login';
import Table from './components/views/Table/Table';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Order from './components/views/Order/Order';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App () {
  return(
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/table'} component={Table} />
                <Route exact path={process.env.PUBLIC_URL + '/table/booking/:id'} component={Booking} />
                <Route exact path={process.env.PUBLIC_URL + '/table/event/:id'} component={Event} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
