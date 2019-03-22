defmodule Tasks3Web.PageController do
  use Tasks3Web, :controller

  def index(conn, _params) do
    users = Tasks3.Users.list_users()
    |> Enum.map(fn u ->
      Tasks3Web.UserView.render("user.json", %{user: u})
    end)

    tasks = Tasks3.Tasks.list_tasks()
    |> Enum.map(fn t ->
      Tasks3Web.TaskView.render("task.json", %{task: t})
    end)
    render conn, "index.html", users: users, tasks: tasks
  end
end
