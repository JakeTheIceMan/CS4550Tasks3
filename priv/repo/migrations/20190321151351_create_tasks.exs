defmodule Tasks3.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :name, :string
      add :desc, :text
      add :duration, :integer
      add :completed, :boolean, default: false, null: false
      add :worker_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:tasks, [:worker_id])
  end
end
