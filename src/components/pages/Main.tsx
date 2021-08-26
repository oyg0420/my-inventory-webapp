import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import SignIn from 'components/pages/SignIn';
import Landing from './Landing';
import SignUp from './SignUp';
import { useSelector } from 'react-redux';
import selectUser from 'modules/session/selector';

const Main: React.FC = () => {
  const isLoggedIn = useSelector(selectUser.isLoggedIn);
  return (
    <>
      <Switch>
        {isLoggedIn ? (
          <Route path="/">
            <Home />
          </Route>
        ) : (
          <>
            <Route exact path={['/', '/sign_in']}>
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
