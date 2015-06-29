var formattedName = HTMLheaderName.replace("%data%", "Rajesh SURANA");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer and Software Developer")
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var education = {
	"schools" : [
	{
		"name" : "Walchand College Of Engineering",
		"location" : "Sangli, India",
		"degree": "Bachelors",
		"majors" : ["IT"],
		"dates" : 2012,
		"url" : "http://www.walchandsangli.ac.in/"
	},
	{
		"name" : "Arizona State University",
		"location" : "Tempe, US",
		"degree": "Masters",
		"majors" : ["CS"],
		"dates" : 2016,
		"url" : "http://www.asu.edu"
	}
	],
    "onlineCourses": [
    {
        "title": "Android Developer Nanodegree",
        "school": "Google and Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/course/android-developer-nanodegree--nd801"
    },
    {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
        "title": "Full Stack Web Developer Nanodegree",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    },
    {
        "title": "Foundations of Computer Science XSeries",
        "school": "MIT and Coursera",
        "date": 2016,
        "url": "https://www.edx.org/xseries"
    },
    {
        "title": "Fundamentals of Computing",
        "school": "Rice University and Coursera",
        "date": 2016,
        "url": "https://www.coursera.org/specialization/fundamentalscomputing2/37?utm_medium=catalog"
    }  
    ],
    display : function(){
                var formattedschoolName = "";
                var formattedschoolDegree = "";
                var formattedschoolDates = "";
                var formattedschoolLocation = "";
                var formattedschoolMajor = "";
                for(school in education.schools){
                   $("#education").append(HTMLschoolStart);
                   formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
                   formattedschoolName = formattedschoolName.replace("#", education.schools[school].url);                
                   formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                   $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
                   formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                   $(".education-entry:last").append(formattedschoolDates);
                   formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                   $(".education-entry:last").append(formattedschoolLocation);
                   formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
                   $(".education-entry:last").append(formattedschoolMajor);
               } 
               
               var foramttedonlineTitle = "";
               var formattedonlineSchool = "";
               var formattedonlineDates = "";
               var formattedonlineURL = "";
               var blankSpace = "";
               $("#education").append(HTMLonlineClasses);
               
               for(onlineCourse in education.onlineCourses){
                   $("#education").append(HTMLschoolStart);
                   foramttedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
                   foramttedonlineTitle = foramttedonlineTitle.replace("#", education.onlineCourses[onlineCourse].url);
                   formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
                   $(".education-entry:last").append(foramttedonlineTitle + formattedonlineSchool);
                   formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
                   $(".education-entry:last").append(formattedonlineDates);
                   // formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
                   // $(".education-entry:last").append(formattedonlineURL);
                   blankSpace = "<div>&nbsp;</div>";
                   $(".education-entry:last").append(blankSpace);
               }
               
            }
};

education.display();

var work = {
	"jobs" : [
	{
		"employer" : "3DPLM Software Solution Ltd.",
		"title" : "Software Developer",
        "location": "Pune, MH, India",
		"dates" : "Aug 2012- Jul 2014",
		"description" : "Software development in C++/Java for CATIA – designing, coding, testing, documentation and maintenance. <br/> Improved performance of the product in terms of memory usage (in MBs) and response time (>5%). <br/>Provided quick fixes without regression for issues from clients like Boeing, Honda, Mercedes, NOKIA and Toyota. <br/>Analyzing the quality of the code written by 3 teams; Preparing the knowledge sharing documents to train freshers. <br/>Collecting and promoting best quality code of 3 teams to counterparts in France using SCM tool; developed automation scripts.",
        "url" : "http://www.3dplmsoftware.com/"
	},
    {
		"employer" : "Explosion SportsWear",
		"title" : "Web Developer",
        "location": "Phoenix, AZ, US",
		"dates" : "May 2015 - Aug 2015",
		"description" : "Developing complete E-commerce website from front-end to back-end for explosion sportswear in  MVC architecture. <br/>Designing database for storing sell and user information. <br/>Developing smooth and minimum interaction payment system. <br/>Fresh designs for showcasing products. <br/>Front-end and back-end validation for user input. Setting up server and email configurations. <br/>Using git for development process",
        "url" : "http://www.explosionsportswear.com/"
    }
	],
    display : function(){
                if(work.jobs.length > 0){
                    var formattedworkEmployer = "";
                    var formattedworkTitle = "";
                    var formattedworkDates = "";
                    var formattedworkLocation = "";
                    var formattedworkDescription = "";
                    
                    for(job in work.jobs){
                        $("#workExperience").append(HTMLworkStart);
                        formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                        formattedworkEmployer = formattedworkEmployer.replace("#", work.jobs[job].url);
                        formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                        $(".work-entry:last").append(formattedworkEmployer+formattedworkTitle);
                        formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                        $(".work-entry:last").append(formattedworkDates);
                        formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                        $(".work-entry:last").append(formattedworkLocation);
                        formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                        $(".work-entry:last").append(formattedworkDescription);
                    }
                }
            }
};

work.display();

var projects = {
	"projects" : [
	{
		"title" : "Compiler Construction",
		"dates" : "Fall 2014",
		"description" : "Composed of four stacks – Lexer, Parser, Semantic Analyzer and Code Generator. Technologies used: State Table, Regular Expressions, DFA, BNF, EBNF, Syntax diagram and Binary-Search Tree",
		"images":[
		"https://github.com/rajeshsurana/Compiler/raw/master/Images/Lexer.jpg",
        "https://github.com/rajeshsurana/Compiler/raw/master/Images/Parser.jpg",
        "https://github.com/rajeshsurana/Compiler/raw/master/Images/SemanticAnalyzer.jpg",
        "https://github.com/rajeshsurana/Compiler/raw/master/Images/CodeGenerator.jpg"
		],
        "url" : "http://rajeshsurana.github.io/Compiler-Construction"
	},
	{
		"title" : "Python Programming",
		"dates" : "Summer 2015",
		"description" : "This project contains various python projects that I did while completing online Python courses",
		"images":[
		"https://realpython.com/learn/python-first-steps/images/pythonlogo.jpg"
		],
        "url" : "http://rajeshsurana.github.io/PythonPortfolio/"
	},
	{
		"title" : "TeeSocial eCommerce website",
		"dates" : "Summer 2015",
		"description" : "I developed this website while working as a web developer at Explosion SportsWear. E-commerce website that allows you to crowdfund awesome custom apparel, with zero costs and zero hassle. Developing complete website - front-end and back-end as well as database. Technologies: PHP (Zend), JavaScript (JQuery), CSS (Bootstrap), HTML5, MySQL, git, photoshop",
		"images":[
		"https://realpython.com/learn/python-first-steps/images/pythonlogo.jpg"
		],
        "url": "http://www.teesocial.com/"
	}   
	],
    display : function(){
                var formattedprojectTitle = "";
                var formattedprojectDates = "";
                var formattedprojectDescription = "";
                var formattedprojectImage = "";
                for(project in projects.projects){
                    $("#projects").append(HTMLprojectStart);
                    formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                    formattedprojectTitle = formattedprojectTitle.replace("#", projects.projects[project].url);
                    $(".project-entry:last").append(formattedprojectTitle);
                    formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                    $(".project-entry:last").append(formattedprojectDates);
                    formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                    $(".project-entry:last").append(formattedprojectDescription);  
                    //formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
                    //$("#projects").append(formattedprojectImage);
                }
            }
};

projects.display();

var bio = {
	"name" : "Rajesh Surana",
	"role" : "Software Engineer",
	"welcomeMessage" : "Welcome to Rajesh Surana's Resume!",
	"contacts" : {
		"mobile" : "480-289-8922",
		"email" : "rajesh.surana@asu.edu",
		"github" : "rajeshsurana",
		"twitter" : "@rsurana",
		"location" : "Tempe, AZ"
	},
	"skills" : [
	"Python", "JAVA", "PHP", "C++" , "JavaScript", "MySQL", "git", "Android Apps", "Bootstrap", "JQuery", "CorelDraw", "Photoshop", "CATIA"  
	],
    "biopic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/093/26c/15d2688.jpg",
    display : function(){
                var formattedmobile = "";
                var formattedemail = "";
                var formattedtwitter = "";
                var formattedgithub = "";
                var formattedlocation = "";
                
                //$("#header").append(HTMLcontactGeneric);
                formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
                $("#topContacts").append(formattedmobile);
                formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
                $("#topContacts").append(formattedemail);
                formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
                $("#topContacts").append(formattedtwitter);
                formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
                $("#topContacts").append(formattedgithub);
                formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
                $("#topContacts").append(formattedlocation);
                
                var formattedbioPic = "";
                var formattedwelcomeMsg = "";
                
                formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
                $("#header").append(formattedbioPic);
                formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
                $("#header").append(formattedwelcomeMsg);
            
                if(bio.skills.length > 0){
                    $("#header").append(HTMLskillsStart);
                      
                    var formattedSkills = "";
                    for (var i = 0; i < bio.skills.length; i++){
                        formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                        $("#skills").append(formattedSkills);        
                    }
                }
    }
};

bio.display();

//$("#main").append(internationalizeButton);

var inName = function (name){
    name = name.trim().split(" ");
    var formattedfName = "";
    var formattedlName = "";
    formattedlName = name[1].toUpperCase();
    formattedfName = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return formattedlName + " " + formattedfName;
}

$("#mapDiv").append(googleMap);

function displayFooterContacts(){
                    formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
                $("#footerContacts").append(formattedmobile);
                formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
                $("#footerContacts").append(formattedemail);
                formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
                $("#footerContacts").append(formattedtwitter);
                formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
                $("#footerContacts").append(formattedgithub);
                formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
                $("#footerContacts").append(formattedlocation);
}

displayFooterContacts();