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
        $scope.posts.push({
          title: $scope.title,
          body: $scope.body,
          comments: []
        });
        $scope.title = '';
        $scope.body = '';
      };
    }
  ]);