import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import SignIn from 'components/pages/SignIn';

const Main: React.FC = () => {
  const isLoggedIn = false;
  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <Home />
        ) : (
          <Route exact path={['/', '/sign_in']}>
            <SignIn />
          </Route>
        )}
      </Switch>
    </>
  );
};

export default Main;
