angular.module('railsEx')
  .controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {
      $scope.posts = posts.posts;
      $scope.addPost = function() {
        if (!$scope.title || !$scope.body || $scope.title === '' || $scope.body === '') {
          return;
        }
        posts.createPost({
          title: $scope.title,
          body: $scope.body,
        });
        $scope.title = '';
        $scope.body = '';
      };
    }
  ]);