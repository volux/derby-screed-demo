var derby = require('derby');
var app = module.exports = derby.createApp('root', __filename);

if (!derby.util.isProduction) {

  app.use(require('derby-debug'));
}
app.serverUse(module, 'derby-jade');
app.serverUse(module, 'derby-stylus');
app.use(require('derby-screed'));
//app.use(require('./components'));
app.loadViews(__dirname);
app.loadStyles(__dirname);

app.get('/', function (page, model, params, next) {

  //var data = model.at('screed.' + app.name);
  //var cursors = model.at('cursors.' + app.name);
  //
  //model.subscribe(data, cursors, function (err) {
  //  if (err) next(err);
  //
  //  model.set('_page.appName', app.name);
  //  model.start('_page.cursorsCount', 'cursors.' + app.name + '.data', 'cursorsCount');
  //  model.set('_page.scheme', scheme);
  //  model.set('_page.blank', blank);

    page.render();
  //});
});
