var options = require('./config');
var apps = [
  require('./apps/root')
, require('./apps/todo')
, require('./apps/table')
];

require('derby-example-server')(options, apps);