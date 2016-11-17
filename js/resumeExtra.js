/*
This is empty on purpose! Your code to build the resume will go here.
*/
// var name = "Laura Hesse";
// var role = "Web Developer";
// var awesomeThoughts = "I'm Laura and I'm awesome";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("awesome", "FUN");
// $("#main").append(funThoughts);
//


var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);

var name = 'Laura';
var role = 'Web';

$('#header').prepend(formattedName);
$('#header').append(formattedRole);


s = s[1].toUpperCase() + s.slice(2);
return s;

//In this quiz you are given an array of numbers. Can you increase the value of the last number in the array by one?
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);


    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

//Quiz: String Manipulation Quiz 2
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" "); //splits into 2 arrays "AlbERt" "EINstEiN"
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");

    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
