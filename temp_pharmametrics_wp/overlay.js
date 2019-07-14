/* Overlay Button (Disclaimer) */

var disclaimerOverlay = document.querySelector('#disclaimer');
var hideOverlayButton = document.querySelector('#close-disclaimer');
var showDisclaimerButton = document.querySelector('#show-disclaimer');


function hideDisclaimer() {
  disclaimerOverlay.setAttribute("style", "display:none");
  hideOverlayButton.setAttribute("style", "display:none");
}

function showDisclaimer() {
  disclaimerOverlay.setAttribute("style", "display:block");
  hideOverlayButton.setAttribute("style", "display:block");
}

hideOverlayButton.addEventListener("click", hideDisclaimer);
showOverlayButton.addEventListener("click", showDisclaimer);
