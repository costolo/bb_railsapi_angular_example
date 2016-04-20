angular.module('railsEx')
  .factory('posts', [
    '$http',
    function($http) {
      var o = {
        posts: []
      };
      o.getAll = function() {
        return $http.get('/posts.json').then(function(res) {
          angular.copy(res.data, o.posts);
        });
      };
      o.createPost = function(post) {
        return $http.post('/posts.json', post).then(function(res) {
          o.posts.push(res.data);
        });
      };
      o.getPost = function(id) {
        return $http.get('/posts/' + id + '.json').then(function(res) {
          return res.data;
        });
      };
      o.createComment = function(id, comment) {
        return $http.post('/posts/' + id + '/comments.json', comment);
      };
      o.upvoteComment = function(post, comment) {
        return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json').then(function() {
          comment.votes += 1;
        });
      };
      o.downvoteComment = function(post, comment) {
        return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/downvote.json').then(function() {
          comment.votes -= 1;
        });
      };

      return o;
    }
  ]);
