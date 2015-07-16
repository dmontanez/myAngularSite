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
            descr: 'Provide key analysis necessary for demonstrating program success in the form of Operational Availability.' +
                    'Developed unique Provisioning algorithm for generating spares procurement recommendations.' +
                    'Generate recommendations to maximize return on investment of program assets.' +
                    'Developed and utilize database for management and analysis of program trouble tickets',
            images: [
                "images/ex_logo_csc.png"
            ]
        },
        {
            name: 'Occidental Petroleum',
            title: 'Assistant Regulatory Analyst',
            start: 1280646000000,
            end: 1306911600000,
            isCurrent: false,
            descr: 'Quality Assurance for new drill & existing well modification specifications.' +
                    'As part of a self driven initiative; created an Access database to track leased land plot, incident reports.  Used to nominate leases' +
                    ' for a Clean Lease award with the Department of Gas & Geothermal Resources.',
            images: [
                "images/ex_logo_oxy.png"
            ]
        }
    ];
    
    var technologies = [
        {
            level: 'Proficient',
            items: [
                {
                    name: 'VBA',
                    num: '-'
                },
                {
			     name: 'SQL',
                    num: 2
                },
                {
			     name: 'ADT',
                    num: 3
                },
                {
			     name: 'Eclipse',
                    num: 2
                }
		      ]
        },
        {
            level: 'Moderately Proficient',
            items: [
                {
                    name: 'Java',
                    num: 4
                },
                {
			        name: 'HTML',
                    num: '-'
                },
                {
			        name: 'CSS',
                    num: '-'
                },
                {
			        name: 'XML',
                    num: '-'
                }
            ]
        },
        {
            level: 'Prior Experience',
            items: [
                {
                    name: 'C++',
                    num: 2
                },
                {
			        name: 'C#',
                    num: '-'
                },
                {
			        name: 'PHP',
                    num: '-'
                },
                {
			        name: 'R',
                    num: '-'
                }
            ]
        },
        {
            level: 'Currently Learning',
            items: [
                {
                    name: 'Angular.JS',
                    num: '-'
                },
                {
			        name: 'Bootstrap',
                    num: 2
                } 
            ]
        },
        {
            level: 'Others',
            items: [
                {
                    name: 'Software Engineering',
                    num: 7
                },
                {
			        name: 'Software Development',
                    num: 6
                },
                {
			        name: 'Analysis',
                    num: 6
                },
                {
			        name: 'Program Management',
                    num: 3
                }
            ]
        }
    ];
    
    var activities = [
        {
            name: 'Website',
            link: "https://github.com/dmontanez/myAngularSite",
            images: [
                "images/profile.png"
            ],
            uses: [
                'HTML',
                'CSS',
                'JavaScript',
                'Angular.JS',
                'Twitter Bootstrap'
            ],
            descr: 'This is teh website you are currently viewing!  I developed this site using Angular.JS, and Twitter Bootstrap, to help organize some information about myself' +
                    ' and showcase what I am about.  You will find most (if not all) of this site is compiled of information that can be found on my resume and LinkedIn Profile.  ' +
                    'I will be working in available APIs periodically, such as the LinkedIn API to keep my Skills and associated merit badges up to date.  The Interests section ' +
                    'will provide some insight into me as an individual, and provides a better look at what isn\'t necissarily apparant from other sources.  Feel free to reach ' +
                    'out on social media or email if you\'d like to discuss anything referenced on the site, or just network a little bit!'
        },
        {
            name: 'Resume App',
            link: "https://github.com/dmontanez/MyResume",
            images: [
                "images/ic_resume_app.png"
            ],
            uses: [
                'Java',
                'XML',
                'ADT',
                'SQLite'
            ],
            descr: 'This App is my second attempt at building an Android Application.  I had a lot of fun working on the Budget Notebook App as part of a team while completing my ' +
                    'Masters Degree through Penn State, so I decided that another App would be fun too!  This App takes all the same information that is presented on my resume, and ' +
                    'presents it in a different medium.'
        },
        {
            name: 'Budget Notebook',
            link: "https://github.com/jzz128/BudgeNotes",
            images: [
                "images/ic_budget_notebook.png"
            ],
            uses: [
                'Java',
                'XML',
                'ADT',
                'SQLite'
            ],
            descr: 'My responsibilities included: Initial draft of System Requirements Specifications, Use Case Specifications, Database Model, UI Flow design, coding for major' +
                    ' functionality including future account balance prediction, transaction activity reporting, and recommendation generation.'
        },
        {
            name: 'Tournament Creator',
            link: "http://cs.csubak.edu/~dmontane/tournament/",
            images: [
                "images/ic_tourn_create.png"
            ],
            uses: [
                'HTML',
                'PHP'
            ],
            descr: 'I created this web app to assist in running the summer team wrestling camp tournament that is run each year at CSUB. The application takes a list of teams, ' +
                    'and generates a tournament schedule to be run "Round Robin" style.'
        },
        {
            name: 'Ideas - TODO',
            items: [
                
            ]
        }
    ];
    
    var others = [
        {
            name: 'Communication',
            descr: 'Monthly interaction with the PMO, and Foreign Customer, providing a summary of analysis that has been performed and subsequent recommendations for program improvement: ' +
                    'Skilled in professional presentation and delivery of information.'
        },
        {
            name: 'Leadership',
            descr: [
                'Implemented a Trouble Ticket Review Board which provides input for multiple facets of current program organization.',
                'Chair of Program Integrated Product Team, tasked with documenting Business Process Model Flowcharts for all program activities.'
            ],
        },
        {
            name: 'Activities',
            descr: [
                'Four year letter winner for CSUB’s Division I Wrestling Team (2006 – 2010)',
                'Assistant Wrestling Coach for Cathedral Catholic High School (2013 – Present)'
            ]
        }
    ];
     
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
    
    app.controller('ProjectsController', function() {
        this.projects = activities;
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
                            pageTitle = 'Resume'
                            break;
                        case 7:
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
                this.objects = [
                    "resources/resume.pdf"
                    
                ];
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