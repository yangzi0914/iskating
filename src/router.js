import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/Home';
// import Information from './routes/Information/information';
// import InforDetail from './routes/Information/inforDetail';
import Company from './routes/Company/company';
import Service from './routes/Service/service';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/information" exact component={Information} /> */}
        {/* <Route path="/inforDetail/:id" exact component={InforDetail} /> */}
        <Route path="/company" exact component={Company} />
        <Route path="/service" exact component={Service} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
