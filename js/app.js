
////// loader function
$(window).on('load',function(){
    $('*').css("transition", "all ease-out .3s");
    $('.loader-wrapper').fadeOut("slow");
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

        ///////////////////// !::::::::: writer function :::::::::///////////////////

        class TypeWriter {
            constructor(txtElement, words, wait = 4000) {
              this.txtElement = txtElement;
              this.words = words;
              this.txt = '';
              this.wordIndex = 0;
              this.wait = parseInt(wait, 10);
              this.type();
              this.isDeleting = false;
            }
          
            type() {
              // Current index of word
              const current = this.wordIndex % this.words.length;
              // Get full text of current word
              const fullTxt = this.words[current];
          
              // Check if deleting
              if(this.isDeleting) {
                // Remove char
                this.txt = fullTxt.substring(0, this.txt.length - 1);
              } else {
                // Add char
                this.txt = fullTxt.substring(0, this.txt.length + 1);
              }
          
              // Insert txt into element
              this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
          
              // Initial Type Speed
              let typeSpeed = 200;
          
              if(this.isDeleting) {
                typeSpeed /= 2;
              }
          
              // If word is complete
              if(!this.isDeleting && this.txt === fullTxt) {
                // Make pause at end
                typeSpeed = this.wait;
                // Set delete to true
                this.isDeleting = true;
              } else if(this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                // Move to next word
                this.wordIndex++;
                // Pause before start typing
                typeSpeed = 500;
              }
          
              setTimeout(() => this.type(), typeSpeed);
            }
          }
          
          
          // Init On DOM Load
          document.addEventListener('DOMContentLoaded', init);
          
          // Init App
          function init() {
            const txtElement = document.querySelector('.txt-type');
            const words = JSON.parse(txtElement.getAttribute('data-words'));
            const wait = txtElement.getAttribute('data-wait');
            // Init TypeWriter
            new TypeWriter(txtElement, words, wait);
          }

//////// writer function //////////////