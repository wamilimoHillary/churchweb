"use strict";

$(document).ready(function () {
  function adjustNav() {
    if ($(window).width() > 500) {
      $(".nav-links").show();
    } else {
      $(".nav-links").hide();
    }
  }

  $(".navbar-toggler").click(function () {
    $(".nav-links").slideToggle();
  }); // Adjust the navigation menu on window resize

  $(window).resize(adjustNav); // Initial adjustment

  adjustNav();
});
/*-- home type writter--*/

document.addEventListener("DOMContentLoaded", function () {
  var text = "Jesus The Breath Of Life"; // CHANGE THE TITLE HERE

  var index = 0;
  var animatedText = document.getElementById("animated-text");
  var delayBetweenLetters = 100; // Adjust the delay between letters here (in milliseconds)

  var displayDuration = 4000; // Duration to display the full text (in milliseconds)

  function animateText() {
    if (index < text.length) {
      animatedText.textContent += text[index];
      index++;
      setTimeout(animateText, delayBetweenLetters);
    } else {
      setTimeout(resetAnimation, displayDuration);
    }
  }

  function resetAnimation() {
    animatedText.textContent = "";
    index = 0;
    setTimeout(animateText, 0);
  }

  animateText();
});
//# sourceMappingURL=javascript.dev.js.map
