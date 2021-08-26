import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import SignIn from 'components/pages/SignIn';
import SignUp from './SignUp';
import useSession from 'hooks/useSession';

const Main: React.FC = () => {
  const { isLoggedIn } = useSession();
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
