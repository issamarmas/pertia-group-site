

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
    $(".smooth").click(function(b){
    b.preventDefault();
    var a=$($(this).attr("href")).offset().top;
    $("html,body").stop().animate({scrollTop:a-30},750)})});
  
        // Scrolling Effect
        $(window).on("scroll", function() {
              if($(window).scrollTop()) {
                    $('nav').removeClass('before-scroll');
                    $('.navbar').addClass('animated slideInDown')
              }
              else {
                    $('nav').addClass('before-scroll');
                    $('.navbar').addClass('animated fadeInDown');
                    $('.navbar').removeClass(' slideInDown')
              }
        });