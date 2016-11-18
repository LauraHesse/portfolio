var bio = {
    "name" : "Meet Arual",
    "role" : "'The human being is a creativity machine'",
    "contacts" : {
        "mobile" : "123-123-123",
        "email" : "test@test.de",
        "github" : "johndoe",
        "twitter" : "@jphndoe",
        "location" : "Edmonton, Alberta, Canada"
    },
    "welcomeMessage" : "Hallo, my name is Laura (a←r←u←a←L). I have years of graphic & web design experience. And I recently finished master program in DA in CS and online course for web development. I've worked in beijing for 5 years and US for 2 years",
    "skills" : [
        "Front-End Web Designer", "Interaction Developer", "Photographer", "A dreamer"
    ],
    "biopic" : "http://demo.currl.com/alto/wp-content/uploads/sites/12/2016/04/alto-girl-A.jpg",
};

var education = {
    "schools" : [
        {
            "name" : "CIT12",
            "location" : "Chicago, IL",
            "degree" : "BA",
            "major" : ["skills", "skills2", "skills3"],
            "dates" : 2011
        },
        {
            "name" : "CIT345",
            "location" : "Phoenix, AZ",
            "degree" : "BA",
            "major" : ["skills", "skills2", "skills3"],
            "dates" : 2011
                }
    ],
    "onlineCourses" : [
        {
		"title" : "Front End Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "March 2015 - January 2016",
		"url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd"
	}      ,
    {
    "title" : "Front End Developer Nanodegree",
    "school" : "Udacity",
    "dates" : "March 2015 - January 2016",
    "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd"
}
    ]
};


var work = {
    "jobs" : [

        {
            "employer" : "T-Systems MMS",
            "title" : "Interface Developer",
            "location" : "Dresden, Germany",
            "dates" : "November 2015 - currently working",
            "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            "employer" : "Rocket",
            "title" : "Front-End Web Designer",
            "location" : "Cork, Ireland",
            "dates" : "March 2012 - March 2014",
            "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            "employer" : "H+A Marketing&PR",
            "title" : "Front-End Web Designer",
            "location" : "Ballincollig, Ireland",
            "dates" : " September 2010 - January 2012",
            "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            "employer" : "Dublin Frash compalany",
            "title" : "Flash Designer/Developer",
            "location" : "Dublin, Ireland",
            "dates" : " June 2009 - September 2009",
            "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
    ]
};


var projects = {
    "projects" : [
        {
            "title" : "Global Mobile Internet Conference Stage Design",
            "dates" : "October 2013",
            "description" : "GMIC is Silicon Valley's largest annual mobile conference and expo. October 21 2013, GMIC was held at the Moscone Center in San Francisco. It attracted 10,000+ mobile industry participants, including top executives, entrepreneurs, developers, and investors from over 60 countries",
            "image" : "images/fry.jpg"
        },
        {
            "title" : "Global Mobile Internet Conference Stage",
            "dates" : "October 2013",
            "description" : "GMIC is Silicon Valley's largest annual mobile conference and expo. October 21 2013, GMIC was held at the Moscone Center in San Francisco. It attracted 10,000+ mobile industry participants, including top executives, entrepreneurs, developers, and investors from over 60 countries",
            "image" : "images/fry.jpg"
        }
    ]
};


// Header Name + Role
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
$("#header").append(HTMLheaderButton);

// Contact information
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").prepend(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").prepend(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").prepend(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedPic);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);


//write for loop here
if ( bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

// Display My Work
function displayWork() {
    for ( var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

        $(".work-entry:last").append(formattedEmployerTitle); //returns final element in the list
    }
}
displayWork();


// Display My Projects
function displayProjects() {
    for ( var myProjects in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[myProjects].title);
        var projectDates = HTMLprojectDates.replace("%data%", projects.projects[myProjects].dates);
        var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[myProjects].description);
        var projectImage = HTMLprojectImage.replace("%data%", projects.projects[myProjects].image);

        var formattedEmployerTitle = projectTitle + projectDates + projectDescription + projectImage;

        $(".project-entry:last").append(formattedEmployerTitle); //returns final element in the list
    }
}
displayProjects();

// Display My Education
function displayEducation() {
	for(var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
		}
}
displayEducation();



// Display My Online Courses
function displayOnlineClasses() {
	$("#education").append(HTMLonlineClasses);
	for(var course in education.onlineCourses) {
		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        var onlineClasses = onlineTitle + onlineSchool + onlineDates + onlineURL;

        $(".education-entry:last").append(onlineClasses); //returns final element in the list
	}
}
displayOnlineClasses();


$(document).click(function(loc) { //track click location
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#mapDiv").append(googleMap);
