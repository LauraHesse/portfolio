var bio = {
    "name" : "Laura Hesse",
    "role" : "Becoming a Ninja",
    "contacts" : {
        "mobile" : "123-123-123",
        "email" : "test@test.de",
        "github" : "johndoe",
        "twitter" : "@jphndoe",
        "location" : "lietuva"
    },
    "welcomeMessage" : "Welome message here",
    "skills" : [
        "Pations", "Awareness", "motivation", "Being a nice person", "Somethign else"
    ],
    "biopic" : "images/fry.jpg",
};

var education = {
    "schools" : [
        {
            "name" : "CIT",
            "location" : "Cork, Ireland",
            "degree" : "BA",
            "majors" : ["skills", "skills2", "skills3"],
            "dates" : 2011,
            "url" : ["Englich", "test here"]
        },
        {
            "name" : "CIT",
            "location" : "Cork, Ireland",
            "degree" : "BA",
            "majors" : ["skills", "skills2", "skills3"],
            "dates" : 2011,
            "url" : ["Englich", "test here"]
        }
    ],
    "onlineCourses" : [
        {
            "title" : "tetet",
            "school" : "erere",
            "dates" : "dateshere",
            "url" : "url/here"
        },
        {
            "title" : "tetet",
            "school" : "erere",
            "dates" : "dateshere",
            "url" : "url/here"
        }
    ]
};


var work = {
    "jobs" : [
        {
            "employer" : "H+A Marketing&PR",
            "title" : "Web Designer",
            "location" : "Ballincollig, Ireland",
            "dates" : " 09.2010 - 01.2012",
            "description" : "Created designs for internet pages"
        },
        {
            "employer" : "Rocket",
            "title" : "Web Developer",
            "location" : "CORK, Ireland",
            "dates" : "03.2012 - 03.2014",
            "description" : "Front-End web development"
        },
        {
            "employer" : "T-Systems",
            "title" : "Interface Developer",
            "location" : "Dresden, Germany",
            "dates" : "01.11.2015 - current",
            "description" : "From creating viduals to coding web pages"
        }
    ]
};


var projects = {
    "projects" : [
        {
            "title" : "CIT",
            "dates" : "Cork, Ireland",
            "description" : "BA",
            "image" : "images/fry.jpg"
        },
        {
            "title" : "CIT",
            "dates" : "Cork, Ireland",
            "description" : "BA",
            "image" : "images/fry.jpg"
        }
    ]
};


// Header Name + Role
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


// Contact information
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

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


// Display My Projects
for ( var myProjects in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[myProjects].title);
    var projectDates = HTMLprojectDates.replace("%data%", projects.projects[myProjects].dates);
    var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[myProjects].description);
    var projectImage = HTMLprojectImage.replace("%data%", projects.projects[myProjects].image);

    var formattedEmployerTitle = projectTitle + projectDates + projectDescription + projectImage;

    $(".project-entry:last").append(formattedEmployerTitle); //returns final element in the list
}


$(document).click(function(loc) { //track click location
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});








//
//
//
// var formattedName = HTMLheaderName.replace("%data%", bio.bio[0]);
// $("#header").append(formattedName);
//
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role );
// $("#header").append(formattedRole);
//
// for ( var contact in bio.contacts) {
//     $("#topContacts").append(HTMLcontactGeneric);
//
//     var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
//     var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
//     var formattedContactDetails = formattedMobile + formattedEmail;
//
//     $(".work-entry:last").append(formattedContactDetails); //returns final element in the list
// }
//
// if (bio.skills.length > 0) {
//     $("#header").append(HTMLskillsStart);
//
//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//     $("#skills").append(formattedSkill);
//
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//     $("#skills").append(formattedSkill);
//
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//     $("#skills").append(formattedSkill);
//
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//     $("#skills").append(formattedSkill);
// }
//
