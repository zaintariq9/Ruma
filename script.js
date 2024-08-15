$(document).ready(function() {
   $(".male-btn").click(function() {
   $(".guidance-section, .gender-sel-sec, .men").addClass("active");
  });

   $(".female-btn").click(function() {
   $(".guidance-section, .gender-sel-sec, .women").addClass("active");
  });

   $('.frnt-bck-toggler input').on('change', function() {
  if ($(this).is(':checked')) {
    $('.men-back').addClass('active');
    $('.men-front').addClass('active');
    $('.female-front').addClass('active');
    $('.female-back').addClass('active');
  } else {
    $('.men-back').removeClass('active');
    $('.men-front').removeClass('active');
    $('.female-front').removeClass('active');
    $('.female-back').removeClass('active');

  }
});


$(".thigh-front").hover(function() {
  $(".thigh-front").addClass("hover");
}, function() {
  $(".thigh-front").removeClass("hover");
});

$(".hand-front").hover(function() {
  $(".hand-front").addClass("hover");
}, function() {
  $(".hand-front").removeClass("hover");
});

$(".waist-front").hover(function() {
  $(".waist-front").addClass("hover");
}, function() {
  $(".waist-front").removeClass("hover");
});

$(".chest-front").hover(function() {
  $(".chest-front").addClass("hover");
}, function() {
  $(".chest-front").removeClass("hover");
});

$(".face-front").hover(function() {
  $(".face-front").addClass("hover");
}, function() {
  $(".face-front").removeClass("hover");
});

$(".leg-front").hover(function() {
  $(".leg-front").addClass("hover");
}, function() {
  $(".leg-front").removeClass("hover");
});

$(".waist-back").hover(function() {
  $(".waist-back").addClass("hover");
}, function() {
  $(".waist-back").removeClass("hover");
});

$(".hand-back").hover(function() {
  $(".hand-back").addClass("hover");
}, function() {
  $(".hand-back").removeClass("hover");
});

$(".thigh-back").hover(function() {
  $(".thigh-back").addClass("hover");
}, function() {
  $(".thigh-back").removeClass("hover");
});

$(".leg-back").hover(function() {
  $(".leg-back").addClass("hover");
}, function() {
  $(".leg-back").removeClass("hover");
});


});