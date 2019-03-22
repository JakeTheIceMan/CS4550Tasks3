import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import api from './api';

function TaskList(props) {
  let todos = _.map(props.tasks, (t) => {
    return <Task key={t.id} task = {t} />
  });
  function update_new_task(ev) {
    let target = $(ev.target);
    let new_task = {};
    new_task[target.attr('name')] = target.val();
    let action = {
      type: 'UPDATE_NEW_TASK_FORM',
      data: new_task
    };
    props.dispatch(action);
  }
  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <td><button className="btn btn-primary m-1" onClick={() => api.make_task()}>Add Task</button></td>
              <td><textarea className="form-control m1" placeholder="Name" name="name" onChange={update_new_task} /></td>
              <td><textarea className="form-control m1" placeholder="Description" name="desc" onChange={update_new_task} /></td>
              <td><input type="number" className="form-control m1" placeholder="Worker" name="worker_id" onChange={update_new_task} /></td>
              <td><input type="number" step="15" className="form-control m1" placeholder="Time Spent" name="duration" onChange={update_new_task} /></td>
            </tr>
            <tr>
              <th>Task Name</th>
              <th>Description</th>
              <th>Worker</th>
              <th>Duration</th>
              <th>Completed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Task(props) {
  let {task, minutes, dispatch} = props;
  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.desc}</td>
      <td>{task.worker ? task.worker.name : "Unassigned"}</td>
      <td>{task.duration}</td>
      <td>{task.completed ? "Yes" : "No"}</td>
      <td><button className="btn btn-danger m-1" onClick={() => api.delete_task(task.id)}>Delete</button></td>
    </tr>
  );
}

function state2props(state) {
  console.log("rendering", state);
  return {
    tasks: state.tasks,
  };
}

export default connect(state2props)(TaskList);
