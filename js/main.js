
// SLICK CODE

$(document).ready(function(){
  $('.portfolio-slider').slick({
    autoplay: true,
  });
});


// Smooth scrolling to each of the main sections
$("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-section").offset().top
    }, 1200);
});
$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills-section").offset().top
    }, 1000);
});
$("#button3").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects-section").offset().top
    }, 800);
});
$("#button4").click(function() {
    $('html, body').animate({
        scrollTop: $("#social-links").offset().top
    }, 600);
});

var timeOut;
function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
        window.scrollBy(0,-50);
        timeOut=setTimeout('scrollToTop()',10);
    }
    else clearTimeout(timeOut);
}

