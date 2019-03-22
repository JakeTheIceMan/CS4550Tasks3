For this assignment, I was tasked with making a task tracker website which enabled users to create accounts,
create tasks, and manage and assign themselves to said tasks. As such, two databases were created: users, tasks

the users database contained a name, an email, admin value, and password which is encrypted.
the email is used for login purposes and the name is displayed
as the current user and is displayed to indicate which user is assigned to a given task.

the tasks database contains a name and description, a reference to the user which is
assigned to it, an integer duration which is restricted to 15 minute intervals and
a completed field which is a boolean.

The website contains a top menu with a Manage Users and Manage Tasks field as well as a
login/logout area.

The Manage Tasks page lists all tasks as well as their titles, time spent, and status.
When viewing individually, description and worker are also visible. The list screen offers functionality to
delete and create new tasks.

The Manage Users page allows the creation and removal of user accounts. User Names and Emails are listed on the
list page and functionalty is avaiable from this page to create users. There is a restriction on emails preventing
duplicates. Passwords are stored and encrypted (though login does not work)
