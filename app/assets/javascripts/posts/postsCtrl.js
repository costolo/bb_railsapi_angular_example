angular.module('railsEx')
  .controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts) {
      $scope.post = posts.posts[$stateParams.id];
      $scope.addComment = function() {
        if ($scope.body === '') {
          return;
        }
        $scope.post.comments.push({
          body: $scope.body,
          author: $scope.author
        });
        $scope.body = '';
        $scope.author = '';
      };
    }
  ]);