import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

function tasks(state = [], action) {
  switch (action.type) {
    case 'TASK_LIST':
    return action.data;
    case  'TASK_DELETE':
    return _.filter(state, (task) => task.id != action.task_id)
    default:
    return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
    case 'USER_LIST':
    return action.data;
    default:
    return state;
  }
}

function session(state = null, action) {
  switch (action.type) {
    case 'NEW_SESSION':
    return action.data;
    default:
    return state;
  }
}

let task_form0 = {name: "", desc: "", completed: false, duration: 0, worker_id: 0};
function make_task_form(state = task_form0, action) {
  switch (action.type) {
    case 'UPDATE_NEW_TASK_FORM':
    return Object.assign({}, state, action.data);
    default:
    return state;
  }
}

let login_form0 = {email: "", name: "", password: ""};
function login_form(state = login_form0, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
    return Object.assign({}, state, action.data);
    default:
    return state;
  }
}

let reg_form0 = {email: "", name: "", password_hash: "", admin: false};
function registration_form(state = reg_form0, action) {
  switch (action.type) {
    case 'UPDATE_REG_FORM':
    return Object.assign({}, state, action.data);
    default:
    return state;
  }
}

function root_reducer(state0, action) {
  console.log("reducer", state0, action);

  let reducer = combineReducers({tasks, make_task_form, users, session, registration_form, login_form});
  let state1 = reducer(state0, action);

  console.log("reducer1", state1);

  return deepFreeze(state1);
}


let store = createStore(root_reducer);
export default store;
