let navbtn = document.querySelector("#navbtn")
let nav = document.querySelector(".nav_ban")

navbtn.addEventListener("click",function () {
    nav.classList.toggle("bgwhite")
})
$(function(){
    $('.slick_slider').slick({
        autoplay:false,
        slidesToShow:1,
        arrows:true,
        prevArrow:'<i class="fa-solid fa-angle-left angleicon angle_left"></i>',
        nextArrow:'<i class="fa-solid fa-angle-right angleicon angle_right"></i>',
      });


      let menuTop =$('.nav_ban').offset().top;

    //   scroll effect
    $(window).on('scroll',function(){

  let scrollToTop =$(window).scrollTop();

    //menu js
    if(scrollToTop > 200){
        $('.nav_ban').addClass('menufix');
    }else{
        $('.nav_ban').removeClass('menufix');
    }


    // backtop
    if(scrollToTop >400){
        $('.backtop').fadeIn(1000);
    }else{
        $('.backtop').fadeOut(1000);
    }
    });



    
      
});