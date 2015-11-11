module.exports = function (appName) {

  var blanks = {
    table: require('./table.json'),
    todo: require('./todo.json')
  };

  return blanks[appName];
};