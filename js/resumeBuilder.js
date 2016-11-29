var bio = {
    "name" : "Meet Arual",
    "role" : "'The human being is a creativity machine'",
    "contacts" : {
        "mobile" : "+4915712345678",
        "email" : "laura.hesse@hesses.de",
        "github" : "arualh",
        "location" : "Dresden, Germany"
    },
    "welcomeMessage" : "Hallo, my name is Laura (a←r←u←a←L). I'm Lithuanian, born and raised. Since I was 18, I moved to Ireland,where I completed my Multimedia studies and gained 4 years of work experience as a Web Designer. Since 2013, I've relocated to Dresden, Germany. Here I work as a Interface Developer at T-Systems MMS.",
    "skills" : [
        "Front-End Web Designer", "Interaction Developer", "Photographer", "A dreamer"
    ],
    "procent" : [
        "89%", "76%", "56%", "100%"
    ],
    "biopic" : "images/girl.jpg"
};

var education = {
    "schools" : [
        {
            "name" : "Kretingos Jurgio Pabrėžos universitetinė gimnazija",
            "location" : "Kretinga, Lithuania",
            "degree" : "Atestatinis Pazymejimas",
            "majors" : ["Read", " Write", " Question", " Be resourceful", " Think critically", " Be happy"],
            "dates" : "1994 - 2004",
            "url" : "http://www.kjpg.lt/index.php?page=naujienos"

        },
        {
            "name" : "Cork Institute of Technology",
            "location" : "Cork, Ireland",
            "degree" : "Bachelor (Honours) in Multimedia (Level 8)",
            "majors" : ["Graphics", " Applied Programming", " Photography", " Interactive art", " Journalism", " Media Culture"],
            "dates" : "2006 - 2010",
            "url" : "http://www.cit.ie/index.cfm"

                }
    ],
    "onlineCourses" : [
        {
		"title" : "Front End Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "September 2016 - currently",
		"url" : "https://www.udacity.com/"
	}      ,
    {
    "title" : "Front End Development Certification",
    "school" : "FreeCodeCamp",
    "dates" : "March 2016 - July 2016",
    "url" : "https://www.freecodecamp.com/"
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
            "description" : "Participate in technical planning & requirements gathering phases including design, code, test, troubleshoot, and document business software applications. Develop Web and mobile applications in front-end technologies including HTML5, CSS, JavaScript. Demonstrate the ability to adapt and work with team members of various experience level.",
            "url" : "https://www.t-systems-mms.com/"

        },
        {
            "employer" : "Rocket",
            "title" : "Front-End Web Designer",
            "location" : "Cork, Ireland",
            "dates" : "March 2012 - March 2014",
            "description" : "Use markup languages like HTML to create user-friendly web pages. Maintain and improve websites. Design mobile-based features. Stay up-to-date on emerging technologies.",
            "url" : "https://www.behance.net/rocketmedia"
        },
        {
            "employer" : "H+A Marketing + PR",
            "title" : "Front-End Web Designer",
            "location" : "Ballincollig, Cork, Ireland",
            "dates" : " September 2010 - January 2012",
            "description" : "Project managed a small team to reach creatively structured tasks in order to meet targets. We have created a Flash based tutorial for online home users. Perfect time management skills. Team-motivated with a desire to succeed.",
            "url" : "http://www.hamarketingpr.ie/"
        },
        {
            "employer" : "Third Force",
            "title" : "Flash Designer/Developer",
            "location" : "Blackrock, Co. Dublin, Ireland",
            "dates" : " May 2009 - July 2009",
            "description" : "Built and implemented e-Learning program for web-based system using elearning development tool - Flash. Met weekly targets; delivered the final product on time. Strong communication skills with colleagues. Project driven, worked in professional business environment.",
            "url" : "http://www.worky.com/company/thirdforce-"
        }
    ]
};


var projects = {
    "projects" : [
        {
            "title" : "Céannacht - Irish Identity",
            "dates" : "September 2010",
            "description" : "Céannacht explores non-Irish nationals perception of Irish people. The project has been designed for non-Irish nationals to create an image of Irish. The purpose of the project is to make an Irish audience aware of the manner in which non-Irishnationals perceive them. This project focuses on Irish stereotypes and how quickly our perception of others is created.",
            "images" : ["images/proj1.jpg", "images/proj1_1.jpg", "images/proj1_2.jpg"],
            "url" : "https://www.behance.net/gallery/712931/Cannacht-Irish-Identity"

        },
        {
            "title" : "Pure slang of Cork",
            "dates" : "June 2009",
            "description" : "Identifying The Peoples Republic of Cork, verbal appearance.",
            "images" : ["images/proj2.jpg", "images/proj2_1.jpg", "images/proj2_2.jpg"],
            "url" : "https://www.behance.net/gallery/704170/Unadulterated-Slang"

        },
        {
            "title" : "In one's salad days",
            "dates" : "July 2008",
            "description" : "An exploration within.",
            "images" : ["images/proj3.jpg", "images/proj3_1.jpg", "images/proj3_2.jpg"],
            "url" : "https://www.behance.net/gallery/703681/In-ones-salad-days"

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
// var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
// $("#header").append(formattedPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);


//write for loop here
if ( bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]).replace("#", bio.procent[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]).replace("#", bio.procent[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]).replace("#", bio.procent[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]).replace("#", bio.procent[3]);
    $("#skills").append(formattedSkill);
}

// Display My Work
work.display = function () {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
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
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);


    for (var x = 0; x < project.images.length; x++ ) {
       var formattedprojectimage = HTMLprojectImage.replace("%data%", project.images[x]);
       $(".project-entry:last").append(formattedprojectimage);
    }
    var formattedproject = formattedprojectTitle + formattedprojectDates + formattedprojectDescription ;
    $(".project-entry:last").prepend(formattedproject);


  });
};
projects.display();

education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedschoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
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
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
    var formattedonlineinfo = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
    $(".education-entry:last").append(formattedonlineinfo);
  });
};
education.display();

$("#mapDiv").append(googleMap);


jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },4000);
    });
});
