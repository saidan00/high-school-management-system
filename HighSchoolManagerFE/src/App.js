import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import AuthRoute from './hoc/AuthRoute/AuthRoute';
import './App.css';

import Main from './containers/Main/Main';
import Login from './containers/Login/Login';
import AuthDemo from './containers/AuthDemo/AuthDemo';
import LoadScreenTest from './components/UI/LoadScreen/LoadScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Auth" component={AuthDemo} />
          <Route path="/LoadScreenTest" render={() => <LoadScreenTest style={{height: '100vh'}} />} />
          <Route path="/">
            <AuthRoute roles={["Admin", "Manager", "Teacher"]}>
              <Layout>
                <Main />
              </Layout>
            </AuthRoute>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
