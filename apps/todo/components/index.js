module.exports = function (app) {

  // custom d-screed components:
  app.component(require('./d-screed-check'));
  app.component(require('./d-screed-todo-task'));
  app.component(require('./d-screed-todo-task-title'));
};