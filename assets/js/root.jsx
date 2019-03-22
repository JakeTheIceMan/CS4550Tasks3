import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';
import $ from 'jquery';
import { Provider } from 'react-redux';

import api from './api';

import Header from './header'
import TaskList from './tasks_list'
import UserList from './users_list'

export default function root_init(node, store) {
  let tasks = window.tasks;
  console.log(tasks);
  ReactDOM.render(
    <Provider store={store}>
      <Root tasks={tasks} />
    </Provider>, node);
}

class Root extends React.Component {
  constructor(props) {
    super(props);

    api.get_tasks();
    api.get_users();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <div className="row">
              <div className="col-8">
                <Route path="/" exact={true} render={() => 
                  <TaskList />
                } />
                <Route path="/users" exact={true} render={() =>
                  <UserList />
                } />
              </div>
            </div>
          </div>
        </Router>
      </div>);
  }
}
