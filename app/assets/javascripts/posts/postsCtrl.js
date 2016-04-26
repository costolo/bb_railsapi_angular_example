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
          author: $scope.user.name
        }).then(function(res) {
          $scope.post.comments.push({
            body: res.data.body,
            author: $scope.user.name,
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