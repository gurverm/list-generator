// Header, TaskList, and TaskListItem imported
const Header = require('./header.js');
const TaskList = require('./taskList.js');
const TaskListItem = require('./taskListItem.js');

function createDocument(title, tasks = []) {
  // Create a new Header
  const header = new Header().render();
  // Create new TaskListItems from the provided tasks
  const taskListItems = task.map(
    (t) => new TaskListItem([t.text], t.priority)
  );
  // Add TaskListItems to a new TaskList
  const taskList = new TaskList(taskListItems).render();

  // template below to includes title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        ${header}
        ${taskList}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
