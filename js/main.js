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
// ---------------------------Pretty-----------------
	    $(document).ready(function(){
				$("area[rel^='prettyPhoto']").prettyPhoto();
				
				$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
				$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		
				$("#custom_content a[rel^='prettyPhoto']:first").prettyPhoto({
					custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
					changepicturecallback: function(){ initialize(); }
				});

				$("#custom_content a[rel^='prettyPhoto']:last").prettyPhoto({
					custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
					changepicturecallback: function(){ _bsap.exec(); }
				});
			});
