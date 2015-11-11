module.exports = function (appName) {

  var schemes = {
    table: require('./table.json'),
    todo: require('./todo.json')
  };

  return schemes[appName].scheme;
};