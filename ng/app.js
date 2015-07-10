(function () {
    var app = angular.module('myApp', []);

    app.controller('NavigationController', function($scope,NavData) {
            
        $scope.$watch('page', function (newValue, oldValue) {
            if (newValue !== oldValue) NavData.setPage(newValue);
        });
        
        this.selectPage = function(value) {
            $scope.page = value;
        };
        
    });
    
    app.controller('ContentController', function($scope,NavData) {
        $scope.page = NavData.getPage();
        
        $scope.$watch(function () { return NavData.getPage(); }, function (newValue, oldValue) {
            if (newValue !== oldValue) $scope.page = newValue;
        });
        
        this.sub_page = 1;
        
        this.selectSub = function(setSub) {
            this.sub_page = setSub;
        };
        
        this.isSelected = function(checkSub) {
            return this.sub_page === checkSub;  
        };
    });
    
    app.controller('HomeController', function() {
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
    
    var institutions = [
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
            images: []
        },
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
            images: []
        }
    ];
    
    var companies = [
        {
            name: 'Occidental Petroleum',
            title: 'Assistant Regulatory Analyst',
            start: 1280646000000,
            end: 1306911600000,
            isCurrent: false,
            descr: '',
            images: []
        },
        {
            name: 'Computer Sciences Corporation',
            title: 'Logistics Engineer, Professional',
            start: 1306911600000,
            end: 1306911600000,
            isCurrent: true,
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
            page: 1
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
    
})();