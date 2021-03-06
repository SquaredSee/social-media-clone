import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import PostListContainer from '../containers/PostListContainer';

const App = () => (
  <div id="app" style={{ borderStyle: 'solid' }}>
    <p>This is the App component</p>
    <Header />
    <div id="pagewrapper">
      <Switch>
        <Route exact path="/" render={() => <div>home</div>} />
        <Route exact path="/post" component={PostListContainer} />
        <Route path="/post/:id" render={({ match }) => <div>{`Post ID: ${match.params.id}`}</div>} />
        <Route path="*" render={() => <div>404</div>} />
      </Switch>
    </div>
  </div>
);

export default App;
