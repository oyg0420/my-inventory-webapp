import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import SignIn from 'components/pages/SignIn';
import Landing from './Landing';
import SignUp from './SignUp';

const Main: React.FC = () => {
  const isLoggedIn = false;
  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <>
            <Home />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/sign_in">
              <SignIn />
            </Route>
            <Route exact path="/sign_up">
              <SignUp />
            </Route>
          </>
        )}
      </Switch>
    </>
  );
};

export default Main;
