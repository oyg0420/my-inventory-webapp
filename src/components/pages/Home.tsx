import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Keywords from 'components/pages/Keywords';
import Layout from 'components/modules/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Keywords />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Home;
