const ghpages = require('gh-pages');

ghpages.publish('out', function (err) {
  if (err) {
    throw err;
  }
});
