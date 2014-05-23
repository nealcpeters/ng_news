'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://sweltering-fire-4384.firebaseio.com/posts/:id.json');
});