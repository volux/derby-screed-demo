module.exports = function (app, url) {

  var initData = require('../data')(app.name);
  var scheme = require('../data/schemes')(app.name);
  var blank = require('../data/blanks')(app.name);

  app.on('model', function (model) {

    var data = model.query('screed', {_id: app.name});
    var cursors = model.query('cursors', {_id: app.name});

    model.fetch(data, cursors, function (err) {
      if (err) next(err);

      if (!data.get().length) {

        model.add('screed', initData);
      }
      if (!cursors.get().length) {

        model.add('cursors', {id: app.name, data: {}});
      }
    });

  });

  app.get(url, function (page, model, params, next) {

    var data = model.at('screed.' + app.name);
    var cursors = model.at('cursors.' + app.name);

    model.subscribe(data, cursors, function (err) {
      if (err) next(err);

      model.set('_page.scheme', scheme);
      model.set('_page.blank', blank);

      page.render();
    });
  });
};