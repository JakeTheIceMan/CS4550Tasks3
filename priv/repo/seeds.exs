# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Tasks3.Repo.insert!(%Tasks3.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Tasks3.Repo
alias Tasks3.Users.User

jacob = Repo.insert!(%User{email: "jacob@example.com", name: "Jacob", admin: true, password_hash: "Broken"})
kyle = Repo.insert!(%User{email: "kyle@example.com", name: "Kyle", admin: false, password_hash: "Broken"})
chris = Repo.insert!(%User{email: "chris@example.com", name: "Chris", admin: false, password_hash: "Broken"})

alias Tasks3.Tasks.Task

Repo.insert!(%Task{name: "Do Web Homework", desc: "Program a SPA website", worker: jacob, duration: 360, completed: false})
Repo.insert!(%Task{name: "Buy Jacob a Microphone", desc: "It's a very late christmas gift", worker: kyle, duration: 0, completed: false})
Repo.insert!(%Task{name: "Reach Spring Break", desc: "Finish all the things", worker: chris, duration: 600, completed: true})
