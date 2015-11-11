module.exports = function (appName) {

  var examples = {
    table: require('./examples/table.json'),
    todo: require('./examples/todo.json')
  };

  return {id: appName, doc: examples[appName]};
};