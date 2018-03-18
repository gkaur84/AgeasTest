import React, { Component } from 'react';

import { Router, browserHistory, Route, IndexRoute, withRouter } from 'react-router'
import List from './containers/list';
import NotFoundPage from './components/NotFoundPage'
import CreateNote from './containers/CreateNote';
import EditNote from './containers/EditNote';


export default class App extends Component {
  
  render() {
    return (              
        
      <Router history={browserHistory}>
        <Route path="/" component={List}>
            <IndexRoute to="/notes"/>
        </Route>
        <Route path="/notes" component={List}/>
        <Route path="/notes/create" component={withRouter(CreateNote)}/>
        <Route path="/notes/edit/:id" component={withRouter(EditNote)}/>
        <Route path="*" component={NotFoundPage}/>
      </Router>
      
    );
  }  
}
