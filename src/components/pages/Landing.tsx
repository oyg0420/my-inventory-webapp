import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from 'components/modules/Layout';
import { v4 } from 'uuid';

const Landing: React.FC = () => {
  return (
    <Layout links={[{ path: '/sign_in', label: '로그인', key: v4() }]}>
      <Switch>
        <Route exact path="/">
          렌딩페이지
        </Route>
      </Switch>
    </Layout>
  );
};

export default Landing;
