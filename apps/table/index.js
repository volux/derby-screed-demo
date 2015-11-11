var derby = require('derby');
var app = module.exports = derby.createApp('table', __filename);

if (!derby.util.isProduction) {

  app.use(require('derby-debug'));
}
app.serverUse(module, 'derby-jade');
app.serverUse(module, 'derby-stylus');
app.use(require('derby-screed'));
//app.use(require('./components'));
app.loadViews(__dirname);
app.loadStyles(__dirname);

app.proto.initData = require('../data')(app.name);
app.proto.scheme = require('../data/schemes')(app.name);
app.proto.blank = require('../data/blanks')(app.name);

app.get('/table', function (page, model, params, next) {

  var data = model.at('screed.' + app.proto.initData.id);

  data.subscribe(function (err) {
    if (err) next(err);

    if (!data.get()) {

      model.add('screed', app.proto.initData);
    }

    var cursors = model.at('cursors.' + app.name);

    cursors.subscribe(function (err) {
      if (err) next(err);

      if (!cursors.get()) {

        model.add('cursors', {id: app.name, data: {}});
      }

      model.set('_page.scheme', app.proto.scheme);
      model.set('_page.blank', app.proto.blank);

      page.render();
    });

  });
});