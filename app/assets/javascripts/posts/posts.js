angular.module('railsEx')
  .factory('posts', [function() {
    var o = {
      posts: []
    };
    return o;
  }]);
