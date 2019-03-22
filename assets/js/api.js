import store from './store';

class OurServer {
  get_path(path, callback) {
    $.ajax(path, {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: callback
    });
  }

  get_tasks() {
    this.get_path("/api/tasks",
    (resp) => {
      store.dispatch({
        type: 'TASK_LIST',
        data: resp.data
      });
      console.log(resp.data);
    });
  }

  make_user() {
    let state = store.getState();
    let data  = state.registration_form;
    this.make_post("/api/users", {user: data},
    (resp) => {
      this.get_users();
    });
  }

  get_users() {
    this.get_path("/api/users",
    (resp) => {
      store.dispatch({
        type: 'USER_LIST',
        data: resp.data
      });
    });
  }

  make_post(path, data, callback) {
    $.ajax(path, {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: callback
    });
  }

  start_session(email, password) {
    this.make_post("/api/auth", {email, password},
    (resp) => {
      store.dispatch({
        type: 'NEW_SESSION',
        data: resp.data
      });
    });
  }

  make_task() {
    let state = store.getState();
    let data = state.make_task_form;
    console.log("creating new task", state);
    this.make_post("/api/tasks", {task: data},
    (resp) => {
      this.get_tasks();
    });
  }

  delete_task(id) {
    $.ajax("/api/tasks/" + id, {
      method: "delete",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: (resp) => {
        store.dispatch({
          type: 'TASK_DELETE',
          task_id: id
        });
      }
    });
  }
}

export default new OurServer();
