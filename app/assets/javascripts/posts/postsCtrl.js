angular.module('railsEx')
  .controller('PostsCtrl', [
    '$scope',
    'post',
    'posts',
    'Auth',
    function($scope, post, posts, Auth) {
      $scope.signedIn = Auth.isAuthenticated;
      Auth.currentUser().then(function(user) {
        $scope.user = user;
      });
      $scope.post = post;
      $scope.addComment = function() {
        if ($scope.body === '') { return; }
        posts.createComment(post.id, {
          body: $scope.body,
          author: $scope.user.username
        }).then(function(res) {
          $scope.post.comments.push({
            body: res.data.body,
            author: $scope.user.username,
            votes: res.data.votes
          });
        });
        $scope.body = '';
      };
      $scope.incrementVotes = function(comment) {
        posts.upvoteComment(post, comment);
      };
      $scope.decrementVotes = function(comment) {
        posts.downvoteComment(post, comment);
      };
    }
  ]);