(function () {
    var app = angular.module('header', []);
    
    app.filter('tel', function() {
        return function(number) {
            number = String(number);
            var area = number.substring(0,3);
            var front = number.substring(3, 6);
            var end = number.substring(6, 10);
            
            formattedNumber = ("(" + area + ") " + front + "-" + end);
            
            return formattedNumber;
        };
    });
    
    app.directive('myHeader', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/header/myHeader.html',
            controller: function() {
                this.name = 'Daniel J. Montanez';
                this.title = 'ME, Software Engineering';
                this.contact = {
                    phone: 6618694325,
                    email: 'dmontanez@psualum.com'
                };
                this.address = {
                    street: '7636 Palmilla Drive',
                    unit_apt: 'Unit 110',
                    city: 'San Diego',
                    state: 'CA',
                    zip: 92122
                };
            },
            controllerAs: 'head'
        };
    });
    
    app.directive('myTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/header/myTitle.html'
        };
    });
    
    app.directive('myAddress', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/header/myAddress.html'
        };
    });
    
    app.directive('myContact', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/header/myContact.html'
        };
    });
    
})();