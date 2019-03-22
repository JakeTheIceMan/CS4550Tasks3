defmodule Tasks3.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tasks" do
    field :completed, :boolean, default: false
    field :desc, :string
    field :duration, :integer
    field :name, :string
    belongs_to :worker, Tasks3.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:name, :desc, :duration, :completed, :worker_id])
    |> validate_required([:name, :desc, :duration, :completed])
  end
end
