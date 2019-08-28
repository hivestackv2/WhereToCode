import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Box, Button as GrommetButton, Grommet } from 'grommet';

import Navigation from './components/Navigation/index.jsx';
import Landing from './views/Landing';
import SignUpPage from './components/Auth/SignUp.jsx';
import SignInPage from './components/Auth/SignIn.jsx';
import Home from './views/Home';

import * as ROUTES from './Routes/routes';
import { withAuthentication } from './components/Session';

const theme = {
  global: {
    font: {
      family:'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
  tag='header'
  direction='row'
  align='center'
  justify='between'
  background='gold'
  pad={{ left: 'medium', right: 'small', vertical: 'small' }}
  elevation='medium'
  style={{ zIndex: '1' }}
  {...props}
  />
  );


const App = () => (
  <Grommet theme={theme}>
  <Router>
  <AppBar>
    <Navigation />
    </AppBar>
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.HOME} component={Home} />
  </Router>
  </Grommet>

);

export default withAuthentication(App);