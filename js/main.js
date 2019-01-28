// -----------------COUNTER------------------------------------

var timeLeftForCoffee=0;
var timeLeftForGirls=10;
var timeLeftForProjects=1500;
var timeLeftForHours=5454;

var cupsOfCoffee=document.getElementById("coffee");
var girls=document.getElementById("girls");
var projects=document.getElementById("projects");
var hoursCoding=document.getElementById("coding");

var timer=setInterval(function(){
    cupsOfCoffee.innerHTML=timeLeftForCoffee;
    girls.innerHTML=timeLeftForGirls;
    projects.innerHTML=timeLeftForProjects;
    hoursCoding.innerHTML=timeLeftForHours;

    if (timeLeftForCoffee===3000){
        clearInterval(timer);
        cupsOfCoffee.innerHTML="4850+";
        girls.innerHTML="780+";
        projects.innerHTML="3120+";
        hoursCoding.innerHTML="8765+";
    }
    timeLeftForCoffee+=10;
    timeLeftForGirls++;
    timeLeftForHours++;
    timeLeftForProjects++;
},1);
