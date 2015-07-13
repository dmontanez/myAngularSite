(function () {
    var app = angular.module('myApp', []);
    
    var institutions = [
        {
            name: 'Pennsylvania State University',
            degree: 'M.E.',
            major: 'Software Engineering',
            minor: '',
            start: 1346482800000,
            end: 1408086000000,
            courses: [
                'Requirements Engineering',
                'Software System Design (UML)',
                'Pattern Oriented Design',
                'Database Design',
                'Software System Architecture',
                'Enterprise Integration',
                'Applied Human Computer Interaction',
                'Program Understanding',
                'Web Security and Privacy',
                'Software Project Management',
                'Software Testing',
                'Advanced Software Engineering Studio'
            ],
            images: [
                "images/ed_psu_logo.png",
                "images/lgo_psu.png",
                "images/sl_psu.png"
            ]
        },
        {
            name: 'California State University Bakersfield',
            degree: 'B.S.',
            major: 'Computer Science',
            minor: 'Philosophy',
            start: 1126594800000,
            end: 1308121200000,
            courses: [
                'Web Design',
                'Advanced Computer Networks',
                'Database Systems',
                'Software Engineering',
                'Beginning Artificial Intelligence',
                'Advanced Artificial Intelligence',
                'Programming Languages',
                'Advanced Computer Srchitecture',
                'Methods in Applied Statistics',
                'Data Analysis'
            ],
            images: [
                "images/ed_csub_logo.png",
                "images/lgo_csub.png",
                "images/sl_csub.png"
            ]
        }
    ];
    
    var companies = [
        {
            name: 'Computer Sciences Corporation',
            title: 'Logistics Engineer, Professional',
            start: 1306911600000,
            end: 1306911600000,
            isCurrent: true,
            descr: '',
            images: []
        },
        {
            name: 'Occidental Petroleum',
            title: 'Assistant Regulatory Analyst',
            start: 1280646000000,
            end: 1306911600000,
            isCurrent: false,
            descr: '',
            images: []
        }
    ];
    
    var technologies = [
	   {
            proficient: [
			 'VBA',
			 'SQL',
			 'ADT',
			 'Eclipse'
		  ],
            moderate: [
                'Java',
                'HTML',
                'CSS',
                'XML'
            ],
            prior: [
                'C++',
                'C#',
                'PHP',
                'R'
            ]
        }
    ];
    
    var others = {
            communication: "Monthly interaction with the PMO, and Foreign Customer, providing a summary of analysis that has been performed and subsequent recommendations for program improvement: Skilled in professional presentation and delivery of information.",
            leadership: [
                "Implemented a Trouble Ticket Review Board which provides input for multiple facets of current program organization.",
                "Chair of Program Integrated Product Team, tasked with documenting Business Process Model Flowcharts for all program activities."
            ],
            activities: [
                "Four year letter winner for CSUB’s Division I Wrestling Team (2006 – 2010)",
                "Assistant Wrestling Coach for Cathedral Catholic High School (2013 – Present)"
            ]
        };
     
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
     
    app.controller('EducationController', function() {
        this.schools = institutions;
    });
    
    app.controller('ExperienceController', function() {
        this.positions = companies;
    });
    
    app.controller('SkillsController', function() {
        this.skills = technologies;
    });
    
    app.controller('AddinfoController', function() {
        this.additonals = others;
    });
    
    app.directive('myHeader', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/myHeader.html',
            controller: function() {
                this.name = 'Daniel J. Montanez';
                this.title = 'Master, Software Engineering';
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
            templateUrl: 'partials/myTitle.html'
        };
    });
    
    app.directive('myAddress', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/myAddress.html'
        };
    });
    
    app.directive('myContact', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/myContact.html'
        };
    });
    
    app.directive('myNavBar', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/myNavBar.html',
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
    
    app.directive('contentHeader', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/contentHeader.html',
            controller: function($scope, NavData) {
                $scope.page = NavData.getPage();
                $scope.$watch(function () { return NavData.getPage(); }, function (newValue, oldValue) {
                    if (newValue !== oldValue) $scope.page = newValue;
                });
                this.getTitle = function(val) {
                    switch(val) {
                        case 0:
                            pageTitle = 'Home'
                            break;
                        case 1:
                            pageTitle = 'Education'
                            break;
                        case 2:
                            pageTitle = 'Experience'
                            break;
                        case 3:
                            pageTitle = 'Skills'
                            break;
                        case 4:
                            pageTitle = 'Projects'
                            break;
                        case 5:
                            pageTitle = 'Interests'
                            break;
                        case 6:
                            pageTitle = 'Contact'
                            break;
                    }
                        
                    return pageTitle;
                };
                this.getPage = function(val) {
                    return this.page === val;
                };
            },
            controllerAs: 'contHead'
        };
    });
    
    app.directive('contentText', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/contentText.html',
            controller: function($scope, NavData) {
                $scope.page = NavData.getPage();
                $scope.$watch(function () { return NavData.getPage(); }, function (newValue, oldValue) {
                    if (newValue !== oldValue) $scope.page = newValue;
                });
                this.getPage = function(val) {
                    return $scope.page === val;
                };
            },
            controllerAs: 'contText'
        };
    });
    
    app.directive('contentPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/contentPanels.html',
            controller: function($scope, NavData) {
                $scope.sub_page = 0;
                $scope.page = NavData.getPage();
                
                $scope.$watch(function () { return NavData.getPage(); }, function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        $scope.page = newValue;
                        $scope.sub_page = 0;
                    };
                });
                                
                this.getPage = function(val) {
                    return $scope.page === val;
                };
                this.selectSub = function(setSub) {
                    $scope.sub_page = setSub;
                };
                this.isSelected = function(checkSub) {
                    return $scope.sub_page === checkSub;  
                };
            },
            controllerAs: 'cont'
        };
    });
    
    app.directive('myFooter', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/myFooter.html',
            controller: function($scope) {
                $scope.date = new Date();
            }
        };
    });
    
})();