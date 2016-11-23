var bio = {
    "name" : "Meet Arual",
    "role" : "'The human being is a creativity machine'",
    "contacts" : {
        "mobile" : "+4915732350379",
        "email" : "laura.hesse@hesses.de",
        "github" : "arualh",
        "location" : "Dresden, Germany"
    },
    "welcomeMessage" : "Hallo, my name is Laura (a←r←u←a←L). I have years of graphic & web design experience. And I recently finished master program in DA in CS and online course for web development. I've worked in beijing for 5 years and US for 2 years",
    "skills" : [
        "Front-End Web Designer", "Interaction Developer", "Photographer", "A dreamer"
    ],
    "biopic" : "images/girl.jpg"
};

var education = {
    "schools" : [
        {
            "name" : "CIT12",
            "location" : "Kretinga, Lithuania",
            "degree" : "BA",
            "majors" : ["skills", "skills2", "skills3"],
            "dates" : 2011
        },
        {
            "name" : "CIT345",
            "location" : "Cork, Ireland",
            "degree" : "BA",
            "majors" : ["skills", "skills2", "skills3"],
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
            "title" : "Céannacht - Irish Identity",
            "dates" : "September 2010",
            "description" : "Céannacht explores non-Irish nationals perception of Irish people. The project has been designed for non-Irish nationals to create an image of Irish. The purpose of the project is to make an Irish audience aware of the manner in which non-Irishnationals perceive them. This project focuses on Irish stereotypes and how quickly our perception of others is created.",
            "images" : ["images/proj1.jpg", "images/proj1_1.jpg", "images/proj1_2.jpg"]
        },
        {
            "title" : "Pure slang of Cork",
            "dates" : "June 2009",
            "description" : "Identifying The Peoples Republic of Cork, verbal appearance.",
            "images" : ["images/proj2.jpg", "images/proj2_1.jpg", "images/proj2_2.jpg"]
        },
        {
            "title" : "In one's salad days",
            "dates" : "July 2008",
            "description" : "An exploration within.",
            "images" : ["images/proj3.jpg", "images/proj3_3.jpg", "images/proj3_2.jpg"]
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
$("#footerContacts").prepend(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").prepend(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").prepend(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").prepend(formattedLocation);
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
work.display = function () {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedworkDates + formattedworkLocation + formattedworkDescription;
    $(".work-entry:last").append(formattedEmployerTitle);

 });
};
work.display();

projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);

    for (var x = 0; x < project.images.length; x++ ) {
       var formattedprojectimage = HTMLprojectImage.replace("%data%", project.images[x]);
       $(".project-entry:last").append(formattedprojectimage);
    }

    var formattedproject = formattedprojectTitle + formattedprojectDates + formattedprojectDescription ;
    $(".project-entry:last").append(formattedproject);

  });
};
projects.display();

education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
    var formatteduniinfo = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
    $(".education-entry:last").append(formatteduniinfo);
  });

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);

education.onlineCourses.forEach(function(course) {
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url);
    var formattedonlineinfo = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
    $(".education-entry:last").append(formattedonlineinfo);
  });
};
education.display();

$("#mapDiv").append(googleMap);
