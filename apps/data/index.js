module.exports = function (appName) {

  var examples = {
    todo: require('./examples/todo.json')
  };

  return {id: appName, doc: examples[appName]};
};