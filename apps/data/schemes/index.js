module.exports = function (appName) {

  var schemes = {
    todo: require('./todo.json')
  };

  return schemes[appName].scheme;
};