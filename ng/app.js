(function() {
  var app = angular.module('myApp', []);

    app.controller('HomeController', function(){
    
    });
    
    app.controller('EducationController', function(){
        this.schools = institutions;
    });
    
    app.controller('ExperienceController', function(){
        this.positions = companies;
    });
    
    app.controller('SkillsController', function(){
        
    });
    
    app.controller('InterestsController', function(){
        
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
            images: [],
        },
        {
            name: 'Pennsylvania State University',
            degree: 'Masters',
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
            images: [],
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

})();