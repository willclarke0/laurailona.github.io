$(document).ready(function(){
   var profilePicture = document.getElementById("profile-picture");
   var speechBubble = document.getElementById("bubble");

   function moveProfilePicture() {
     profilePicture.setAttribute("style", "bottom: -2vw");
   }

   function fadeInBubble() {
     speechBubble.setAttribute("style", "visibility: visible; opacity: 1")
   }

   setTimeout(moveProfilePicture, 1000);
   setTimeout(fadeInBubble, 2000);

   function customTypeWriter() {
     typeWriterEffect(["Hello there. I'm Laura and I'm a frontend web developer with backend knowledge. I'm passionate about JavaScript, clean code and creative UI."], "twe-typed-text", false);
   }
   setTimeout(customTypeWriter, 2500);

//Show-Hide top navigation
  var showMenuButton = document.getElementById("show-menu-button");
  var topNav = document.getElementById("top-nav");
  var menuVisible = false;

  function showMenu() {
    if (menuVisible) {
      topNav.classList.remove("menu-visible");
      menuVisible = false;
    }
    else {
      topNav.classList.add("menu-visible");
      menuVisible = true;
    }
  }

  showMenuButton.addEventListener("click", showMenu);

//jQuery smooth scrolling
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

});
