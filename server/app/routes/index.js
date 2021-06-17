const api = require('../api');

module.exports = function (app) {
  app.route('/products').get(api.list);
};
