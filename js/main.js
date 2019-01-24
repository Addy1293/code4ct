// --------------------SMOOTH SCROLL
// jQuery(document).ready(function() {
//     var offset = 220;
//     var duration = 500;
//     jQuery(window).scroll(function() {
//         if (jQuery(this).scrollTop() > offset) {
//             jQuery('.crunchify-top').fadeIn(duration);
//         } else {
//             jQuery('.crunchify-top').fadeOut(duration);
//         }
//     });

//     jQuery('.crunchify-top').click(function(event) {
//         event.preventDefault();
//         jQuery('html, body').animate({scrollTop: 0}, duration);
//         return false;
//     })
// });




// -----------------COUNTER------------------------------------

var timeLeftForProjects=1500;
var timeLeftForHours=5454;
var timeLeftForCoffee=0;
var timeLeftForGirls=10;
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
    timeLeftForHours++;
    timeLeftForProjects++;
    timeLeftForCoffee+=5;
    timeLeftForGirls++;
},);
