$(window).on("load", function() {
  // Nascondi l'overlay di caricamento e l'animazione
  $('.overlay, .loader').fadeOut(1000, function() {
    // Mostra la pagina
    $('body').css('visibility', 'visible');
  });
});

$(document).ready(function(){

  
  // Nascondi la pagina all'inizio
  $('body').css('visibility', 'hidden');
  
  // Mostra l'overlay di caricamento e l'animazione
  $('.overlay').fadeIn();
  $('.overlay').after('<div class="loader"></div>');


  $('.text-1').animate({opacity: 1}, 3000, function() {
    $('.text-2').fadeIn(3000, function() {
      $('.text-2').animate({opacity: 1}, 2000, function() {
        $('.text-3').fadeIn(2000, function() {
          $('.text-3').animate({opacity: 1}, 1000, function() {
            // $('.overlay').fadeOut(1000); 
            $('.text-2, .text-1, .text-3').fadeOut(3000); 
            $("nav").css("z-index", "104");
            $(".sound-btn").css("z-index", "105");
          
            $("nav, .sound-btn, .hamburger").css("opacity", "1");
          });
        });
      });
    });
  });

  $('.text-1').animate({opacity: 1}, 3000, function() {
    
    $('.text-2').fadeIn(3000, function() {
      $('.text-2').animate({opacity: 1}, 2000, function() {
        $('.text-3').fadeIn(2000, function() {
          $('.text-3').animate({opacity: 1}, 1000, function() {
            // $('.overlay').fadeOut(1000); 
            $('.text-2, .text-1, .text-3').fadeOut(3000); 
            $("nav").css("z-index", "104");
            $(".sound-btn").css("z-index", "105");
          
            $("nav, .sound-btn, .hamburger").css("opacity", "1");
          });
        });
      });
    });
  });



  // menu
  $(".close-toggle").click(function() {
    $("nav").animate({
      right: parseInt($("nav").css("right"), 10) == 0 ? -$("nav").outerWidth() : 0
    }, 500);
  });

  $(".hamburger").click(function() {
    $(this).toggleClass("hamburger--active");
    $(".menu").toggleClass("menu--active");

    $(".hamburger").animate({
      right: parseInt($("nav").css("right"), 10) == 0 ? -$("nav").outerWidth() : 0
    }, 500);
  });



  // Sound
  var audio = $("#background-audio")[0];
  var toggleButton = $(".sound-btn");

  toggleButton.on("click", function() {
    if (audio.paused) {
      audio.play();
      $(this).css("background-image", "url('./images/sound-on.png')");
      $("#background-audio").attr("src", "./music/" + bgDate + ".mp3");
    } else {
      audio.pause();
      $(this).css("background-image", "url('./images/sound-off.png')");
    }
  });

  // // Text
  // $('.text-1').animate({opacity: 1}, 3000, function() {
  //   $('.text-2').fadeIn(3000, function() {
  //     $('.text-2').animate({opacity: 1}, 1000, function() {
  //       $('.text-3').fadeIn(2000, function() {
  //         $('.text-3').animate({opacity: 1}, 7000);
  //       });
  //     });
  //   });
  // });

  // BG video and colors
  var bgDate = "";
  var isAudioPlaying = false;

  $(".ambient").click(function() {
    bgDate = $(this).data("ambient");

    // Check if audio is playing
    isAudioPlaying = !audio.paused;

    // Change the color
    if (bgDate == "green") {
      $(":root").css("--primary-color", "#7cca28");
      $(":root").css("--circle-1", "#8cd5589e");
      $(":root").css("--circle-2", "#6e8f1199");
      $(":root").css("--circle-3", "#98be2cad");
      $(":root").css("--circle-4", "#536423ad");
      $(".overlay").css("background", "none");
    } else if (bgDate == "pink") {
      $(":root").css("--primary-color", "#d68a61");
      $(":root").css("--circle-1", "#e4ded4ad");
      $(":root").css("--circle-2", "#b2afa6a6");
      $(":root").css("--circle-3", "#b69e8f8a");
      $(":root").css("--circle-4", "#a1a8a6ab");
      $(".overlay").css("background", "rgba(165, 97, 76, 0.07");
    } else if (bgDate == "blue") {
      $(":root").css("--primary-color", "#263772");
      $(":root").css("--circle-1", "#60655a");
      $(":root").css("--circle-2", "#7d868b");
      $(":root").css("--circle-3", "#7e6442");
      $(":root").css("--circle-4", "#225250ad");
      $(".overlay").css("background", "none");
    
    } else if (bgDate == "light-blue") {
      $(":root").css("--primary-color", "#63cee7");
      $(":root").css("--circle-1", "#277392");
      $(":root").css("--circle-2", "#8897a5");
      $(":root").css("--circle-3", "#83c7c79c");
      $(":root").css("--circle-4", "#326b83");
      $(".overlay").css("background", "rgba(55, 74, 110, 0.07)");
    }

    // Change the music only if audio is playing
    if (isAudioPlaying) {
      $("#background-audio").attr("src", "./music/" + bgDate + ".mp3");
    }

    // Change the video
    // $("#background-video").fadeOut(function() {
    //   $(this).attr("src", "./images/" + bgDate + ".mp4");
    //   $(this).on("canplaythrough", function() {
    //     $(this).fadeIn();
    //     $(this).off("canplaythrough");
    //   });
    // });

    $("#background-video").fadeOut(function() {
      $(".loader").fadeIn(); // Mostra l'animazione di caricamento
      $(this).attr("src", "./images/" + bgDate + ".mp4");
      $(this).on("canplaythrough", function() {
        $(this).fadeIn();
        $(this).off("canplaythrough");
        $(".loader").fadeOut(); // Nascondi l'animazione di caricamento una volta che il video è pronto
      });
    });
  });

  // Set default music to green.mp3
  if (!bgDate) {
    bgDate = "blue";
    $("#background-audio").attr("src", "./music/" + bgDate + ".mp3");
  }

  // Timer
  var timeDate = "";

  $(".time").click(function() {
    timeDate = $(this).data("time");
    if (timeDate > 0) {
      $(".btn-start").fadeIn();
    }

    $(".time").css("border", "none");
    $(".time").css("background", "none");
    $(".time").css("padding", "0");
    $(this).css("border", "1px solid var(--primary-color)");
    $(this).css("background", "var(--primary-color)");
    $(this).css("border-radius", "50%");
    if ($(window).width() >= 991) {  
      $(this).css("padding", "2px");
}      
   
  });

  $(".time").click(function() {
    $(".btn-reset").hide();
    $(".instruction").hide();
    $(".circle").removeClass("breathe");
  });


  // click on BTN START
  $(".btn-start").click(function() {
    if (timeDate > 0) {
      $(".btn-start").hide();
      $(".btn-reset").show();

      var count = 4;
      var timer = setInterval(function() {
        count--;
        if (count >= 0) {
          $(".timer-container").text(count);
        } else {
          $(".timer-container").text("");
          $(".instruction").fadeIn();
          clearInterval(timer);
          // Timer completato, eseguire azioni aggiuntive qui
        }
      }, 1000);

      $(".btn-start").css("pointer-events", "auto");
      $(".circle").fadeIn(2000);
      $(".circle").addClass("breathe");
      $(".breathe").css("animation-iteration-count", timeDate);

      $(".circle").one("animationend", function() {
        $(".circle").removeClass("breathe");
      });

      $(".btn-reset").click(function() {
        location.reload();
      });
    }


   

  });

  $(".circle").one("animationend", function() {
    $(".circle").removeClass("breathe");
    $(".instruction").fadeOut(2000);
  });
});







