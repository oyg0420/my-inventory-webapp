import Layout from 'components/modules/Layout';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 } from 'uuid';

const Landing: React.FC = () => {
  return (
    <Layout links={[{ path: '/sign_in', label: '로그인', key: v4() }]}>
      <Switch>
        <Route exact path="/">
          랜딩 컨텐츠
        </Route>
        <Route path="/sign_in">로그인</Route>
      </Switch>
    </Layout>
  );
};

export default Landing;
