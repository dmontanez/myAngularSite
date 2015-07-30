(function () {
    var app = angular.module('prog', []);

     app.directive('progBar', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/extras/progress-bar.html',
            controller: function($scope) {
                $scope.date = new Date();
            }
        };
    });
    
})();