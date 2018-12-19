$(function () { // start document ready 
  
  AOS.init({
    // once: true,
    mirror: false,
  });


  $('button.send').on('click', function(){
    $('form')[0].reset();
  });
  

  // $(".name").hover(
  //   function () {
  //   $('.one').addClass('animated hinge');
  // }, 
  // function () {
  //   // $('.one').removeClass('animated hinge');
  // });
  
    
  // $(".name").on('click', function(){

  //   $('.one').addClass('animated hinge').one('animationend',
  //   function() {
  //     $('.one').removeClass('animated hinge');
  //   })

  // });

  // $(".six").on('click', function () {
  //   $('.three').addClass('animated hinge').one('animationend',
  //     function () {
  //       $(this).removeClass('animated hinge');
  //     })
  // });

  // $(".one").on('click', function () {
  //   $('.seven').addClass('animated hinge').one('animationend',
  //     function () {
  //       $(this).removeClass('animated hinge');
  //     })
  // });

  // $(".two").on('click', function () {
  //   $('.five').addClass('animated hinge').one('animationend',
  //     function () {
  //       $(this).removeClass('animated hinge');
  //     })
  // });

  // $(".five").on('click', function () {
  //   $('.four').addClass('animated hinge').one('animationend',
  //     function () {
  //       $(this).removeClass('animated hinge');
  //     })
  // });
  // $(".four").on('click', function () {
  //   $('.six').addClass('animated hinge').one('animationend',
  //     function () {
  //       $(this).removeClass('animated hinge');
  //     })
  // });

  // $(".three").on('click', function () {
  //   $('.one').addClass('animated hinge').one('animationend',
  //     function () {
  //       $(this).removeClass('animated hinge');
  //     })
  // });
  // $(".three").on('click', function () {
  //   $('.two').addClass('animated hinge').one('animationend',
  //     function () {
  //       $(this).removeClass('animated hinge');
  //     })
  // });


 
  

  // $(".name").hover(
  //   function () {
  //     $(this).css("opacity", "1")
  //   }

  // );

}); // end of document ready 

