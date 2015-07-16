(function () {
    var app = angular.module('footer', []);
    
     app.directive('myFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/footer/myFooter.html',
            controller: function($scope) {
                $scope.date = new Date();
            }
        };
    });
    
})();