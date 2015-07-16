(function () {
    var app = angular.module('nav', []);
    
    app.factory('NavData', function() {
        var data = {
            page: 0
        };
        
        return  {
            getPage: function() {
                return data.page;
            },
            setPage: function(value) {
                data.page = value;
            }
        };
    });
    
    app.directive('myNavBar', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/nav/myNavBar.html',
            controller: function($scope,NavData) {
                $scope.$watch('page', function (newValue, oldValue) {
                    if (newValue !== oldValue) NavData.setPage(newValue);
                });
                this.selectPage = function(value) {
                    $scope.page = value;
                };
            },
            controllerAs: 'nav'
        };
    });
    
})();