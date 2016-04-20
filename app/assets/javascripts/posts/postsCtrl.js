angular.module('railsEx')
  .controller('PostsCtrl', [
    '$scope',
    'post',
    'posts',
    function($scope, post, posts) {
      $scope.post = post;
      $scope.addComment = function() {
        if ($scope.body === '') { return; }
        posts.createComment(post.id, {
          body: $scope.body
        }).then(function(res) {
          $scope.post.comments.push({
            body: res.data.body,
            // author: $scope.author,
            votes: res.data.votes
          });
        });
        $scope.body = '';
        $scope.author = '';
      };
      $scope.incrementVotes = function(comment) {
        posts.upvoteComment(post, comment);
      };
      $scope.decrementVotes = function(comment) {
        posts.downvoteComment(post, comment);
      };
    }
  ]);