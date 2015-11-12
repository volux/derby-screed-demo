var derby = require('derby');
var app = module.exports = derby.createApp('todo', __filename);

if (!derby.util.isProduction) {

  app.use(require('derby-debug'));
}
app.serverUse(module, 'derby-jade');
app.serverUse(module, 'derby-stylus');
app.use(require('derby-screed'));
app.use(require('./components'));
app.loadViews(__dirname);
app.loadStyles(__dirname);

require('../common')(app, '/');
