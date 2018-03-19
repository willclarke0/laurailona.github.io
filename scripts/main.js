profilePicture = document.getElementById("profile-picture");
speechBubble = document.getElementById("bubble");

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
