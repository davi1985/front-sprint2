const http = require('http'),
  app = require('./config/express');

http.createServer(app).listen(3000, function () {
  console.log(`Server is listening on port ${this.address().port}`);
});
