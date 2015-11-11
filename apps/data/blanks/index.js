module.exports = function (appName) {

  var blanks = {
    todo: require('./todo.json')
  };

  return blanks[appName];
};