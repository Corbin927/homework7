//check to make sure script is linked to html
console.log("Hello World!");

//add event listener to the button
document.getElementById("resume").addEventListener("click", function() {
    if(hasDownloadedResume == false) {
    alert("Your resume is downloaded successfully!")
    hasDownloadedResume = true;
    }
});

//variables for name and resume download
let hasDownloadedResume = false;
const myName = "Corbin Comber";

//greeting function
function showGreeting(name){
    return "Hello, my name is " + name + "! Welcome to my Portfolio!";
}
//call greeting function
let greetingMessage = showGreeting(myName);

//place the greeting message in the intro section
document.getElementById("intro").innerHTML = greetingMessage;
//calculate days until deadline function

function daysUntilDeadline(submissionDate){
    //get todays date
    const today = new Date();
    //get the deadline date
    let deadline = new Date(submissionDate);
    //calculate the difference in time
    let timeDiff = deadline - today;
    //calculate the difference in days
    let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    //return the amount of days left
    return daysDiff;
}

//create a variable for submission date
const submissionDate = "2026-11-19";

//display the deadline in the ongoing project card
document.getElementById("ongoing").innerHTML = "Days until deadline: " + daysUntilDeadline(submissionDate);