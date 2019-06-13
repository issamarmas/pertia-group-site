
////// loader function
$(window).on('load',function(){
    $('*').css("transition", "all 0.3s ease-out 0s");
    $('.lds-roller').fadeOut("slow");
    $('body').css("overflow-y", "scroll")
});
////////// 
$(".mov1").hover(function () {
    //stuff to do on mouse enter

    $('.ic1').css("-webkit-transform", "rotate(270deg)")
}, 
function () {
    $('.ic1').css("-webkit-transform", "rotate(90deg)")
});
/////////////////////////////////////////////
$(".mov2").hover(function () {
    //stuff to do on mouse enter

    $('.ic2').css("-webkit-transform", "rotate(270deg)")
}, 
function () {
    $('.ic2').css("-webkit-transform", "rotate(90deg)")
});


///////////////////////////////////////////////////

$(".mov3").hover(function () {
    //stuff to do on mouse enter

    $('.ic3').css("-webkit-transform", "rotate(270deg)")
}, 
function () {
    $('.ic3').css("-webkit-transform", "rotate(90deg)")
});
///////////////////////////////////////////////
$(".mov4").hover(function () {
    //stuff to do on mouse enter

    $('.ic4').css("-webkit-transform", "rotate(270deg)")
}, 
function () {
    $('.ic4').css("-webkit-transform", "rotate(90deg)")
});





/////////////////  after scroll and scroll smooth ///////////////////////////////



$(function(){
    $("a.smooth").click(function(b){
    b.preventDefault();
    var a=$($(this).attr("href")).offset().top;
    $("html,body").stop().animate({scrollTop:a-30},750)})});
  
        // Scrolling Effect
        $(window).on("scroll", function() {
              if($(window).scrollTop() >= 500 ) {
                    $('nav').removeClass('before-scroll');
                    $('.navbar , .mobile-navbar').addClass('animated slideInDown');
                    $('nav.navbar a, .mobile-navbar a').css('color', 'black');
                    $('i.fas.fa-angle-right , .mobile-navbar .menu-icon').css('color', '#000');
                    $('.social-items .fab , .mobile-navbar').css('color', '#000');
                    $('.lang .lang-items , ul.sub-menu1').css('border-color', '#000');
                    $('.top-btn').fadeIn()
              }
              else {
                    $('nav').addClass('before-scroll');
                    $('.navbar , .mobile-navbar').addClass('animated fadeInDown');
                    $('.navbar , .mobile-navbar').removeClass(' slideInDown')
                    $('nav.navbar a , .mobile-navbar a').css('color', 'white');
                    $('nav.navbar ul li ul a , .mobile-navbar ul li').css('color', 'black');
                    $('i.fas.fa-angle-right').css('color', '#fff');
                    $('.social-items .fab , .mobile-navbar .menu-icon').css('color', '#fff');
                    $('.lang .lang-items , ul.sub-menu1').css('border-color', '#7e9fff')
                    $('.top-btn').hide()
              }
        });
///////////////////// !::::::::: writer function :::::::::///////////////////

const instance = new TypeIt('#simpleUsage', {
  //-- Other options...
  strings: ["Welcome to our website.", "Take a look at it.","We're excited to know about us"],
  speed: 100,
  breakLines: false,
  waitUntilVisible: true,
  loop:true,
  nextStringDelay:1900,
    
}).go();

////// swiper //////////
