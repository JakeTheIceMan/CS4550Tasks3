defmodule Tasks3.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :admin, :boolean, default: false
    field :email, :string
    field :name, :string
    field :password_hash, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    
    encrypted = Argon2.hash_pwd_salt(Map.get(attrs, "password_hash"))
    attrs = Map.replace(attrs, "password_hash", encrypted)

    user
    |> cast(attrs, [:email, :name, :password_hash, :admin])
    |> validate_required([:email, :name, :password_hash, :admin])
    |> unique_constraint(:email)
  end
end
